import React, { useEffect, useState } from "react";
import axios from "axios";
import { GoogleLogin, GoogleOAuthProvider, useGoogleOAuth } from '@react-oauth/google';
import "./app.css"
import Website from "./Website";
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from "react";

const App = () => {
  const [email, setEmail] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const log = localStorage.getItem('userid');
    let expire = localStorage.getItem("expire");
    if (expire) {
      var currentTime = Math.floor(Date.now() / 1000);
      if (expire > currentTime) {
        localStorage.removeItem('userid')
      } else if (log) {
        setLoggedIn(true);
      }
    } else {
      setLoggedIn(false);
    }
  }, [0]);

  const [userLocation, setUserLocation] = useState(null);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      (async function fetchData() {
        try {
          const response = await axios.post('https://gapi.oneindia.com/gapi');
          setUserLocation(response.data);

          if (response.data && response.data.state && response.data.city) {
            const { state, city, country, ip } = response.data;
            toast.success(`Location: ${city}, ${state}, ${country + 'DIA'}`, {
              position: toast.POSITION.TOP_LEFT,
            });


          } else {
            console.error('State or city information not available in the API response.');
          }
        } catch (error) {
          console.error('Error fetching user location:', error);
        }
      })();
    }
  }, []);


  async function userdata(e) {
    const userloc =  axios.post('http://localhost:5000/store/userlocation', {
      userLocation: userLocation,
      uid: e,
    });
    userloc.then(() => {
      console.log("posted user location")
    }).catch(() => {
      console.log("error in postiong location")

    })
  }

  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const jwt = credentialResponse.credential;
      const decoded = jwtDecode(credentialResponse.credential)
      setLoggedIn(true);
      const response = await axios.post('http://localhost:5000/store-jwt', { decoded, jwt }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response) {
        console.log('JWT stored successfully on the server');
        showToastMessage(response);
        await userdata(response?.data?.uid).then(()=>{
          console.log("userdata api call")
          setLoggedIn(true)
        }).catch((e)=>{
          console.log(e)
        })
        localStorage.setItem("userid",response?.data?.uid)
        localStorage.setItem("expire",response?.data?.expire)
        localStorage.setItem("email",response?.data?.email)


        setLoggedIn(true)
      } else {
        console.log('Failed to store JWT on the server');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };


  const GoogleAuthButton = () => {
    const { signIn, isSignedIn } = useGoogleOAuth();

    return (
      <div>

        <GoogleLogin
          onSuccess={(credentialResponse) => {
            handleGoogleLogin(credentialResponse)
          }
          }
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </div>
    );
  };
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };



  const alerthandler = () => {
    alert("sigin with google and reset your password")
  }

  const showToastMessage = (e) => {
    console.log(e)
    toast.success(e.data.message, {
      position: toast.POSITION.TOP_RIGHT,
    });
    toast.success(`Hello ${e.data.name}`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const [password, setPassword] = useState('');
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (password && email) {
      try {
        const response = await axios.post(
          'http://localhost:5000/login/user',
          {
            email: email,
            password: password,
          }
        );
        if (response.data.success) {
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          localStorage.setItem('userid', response.data.uid);
          localStorage.setItem('email', response.data.email);
          localStorage.setItem('expire', response.data.expire);
          toast.success(`Hello ${response.data.name}`, {
            position: toast.POSITION.TOP_RIGHT,
          });
          setTimeout(() => {
            window.location.reload();
          }, 3000);
          userdata(email)
        }
        else {
          toast.error(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    }
    else {
      toast.warning(`Enter credentials`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };


  return (

    <GoogleOAuthProvider clientId="746005843544-atk5tu7gc0svtpk01mmklttvnavcri75.apps.googleusercontent.com">

      {isLoggedIn ? (
        <>
          <Website />
        </>
      ) : (
        <>

          <section className="vh-100">
            <div className="container py-5 h-100">
              <div className="row d-flex align-items-center justify-content-center h-100">
                <div className="col-md-8 col-lg-7 col-xl-6">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    className="img-fluid"
                    alt="Phone image"
                  />
                </div>
                <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                  <form onSubmit={handleFormSubmit}>
                    {/* Email input */}
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form1Example13"
                        className="form-control form-control-lg"
                        value={email}
                        onChange={handleInputChange}
                      />
                      <label className="form-label" htmlFor="form1Example13">
                        Email address
                      </label>
                    </div>

                    {/* Password input */}
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form1Example23"
                        className="form-control form-control-lg"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      <label className="form-label" htmlFor="form1Example23">
                        password
                      </label>
                    </div>

                    <div className="d-flex justify-content-around align-items-center mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="form1Example3"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="form1Example3">
                          Remember me
                        </label>
                      </div>
                      <a href="" onClick={alerthandler}>Forgot password?</a>
                    </div>


                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Sign in
                    </button>


                    <div className="divider d-flex align-items-center my-4">
                      <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                    </div>

                    <a
                      className="btn btn-primary btn-lg btn-block"
                      style={{ backgroundColor: "#3b5998" }}
                      href="#!"
                      role="button"
                    >
                      <GoogleAuthButton />              </a>

                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

    </GoogleOAuthProvider>
  );
};

export default App;
