// Import necessary dependencies
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { GoogleLogin, GoogleOAuthProvider, useGoogleOAuth } from '@react-oauth/google';
import "./app.css"
import Website from "./Website";


// App component
const App = () => {
  
  const [isLoggedIn, setLoggedIn] = useState(false);
useEffect(()=>{
  const log=localStorage.getItem('jwt')
  if(log){
    setLoggedIn(true)
  }
  else{
    setLoggedIn(false)
  }
},[])
  const GoogleAuthButton = () => {
    const { signIn, isSignedIn } = useGoogleOAuth();
  
    return (
      <div>
        
  <GoogleLogin
    onSuccess={credentialResponse => {
      console.log(credentialResponse);
      setLoggedIn(true)
      localStorage.setItem("jwt",credentialResponse.credential
      )
    }}
    onError={() => {
      console.log('Login Failed');
    }}
  />    
      </div>
    );
  };
  
  return (
    
    <GoogleOAuthProvider clientId="746005843544-atk5tu7gc0svtpk01mmklttvnavcri75.apps.googleusercontent.com">
    
          {isLoggedIn ? (
            <>
            <Website />
              {/* <Button onClick={() => setLoggedIn(false)}>Logout</Button> */}
              
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
            <form>
              {/* Email input */}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example13"
                  className="form-control form-control-lg"
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
                />
                <label className="form-label" htmlFor="form1Example23">
                  OTP
                </label>
              </div>

              <div className="d-flex justify-content-around align-items-center mb-4">
                {/* Checkbox */}
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
                <a href="#!">Resend OTP?</a>
              </div>

              {/* Submit button */}
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
