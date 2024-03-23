import React, { useState, useEffect } from "react";
import "./nav.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Requests from "./requests";
import Blogs from "./blogs";
import { ToastContainer, toast } from "react-toastify";
import Contact from "./contact";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    var userid = localStorage.getItem('userid');
    if (userid) {
      setIsLoggedIn(true);
      var response = axios.get('http://localhost:5000/api/userprofile', {
        params: {
          userid: userid,
        }
      });
      response.then((data) => {
        setUserData(data.data.userDetails)
      })
    }
  }, []);

  var userEmail = localStorage.getItem("email")
  const [userpending, setuserpending] = useState([])
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/getMYrequests', {
                params: {
                    email: userEmail,
                }
            });

            setuserpending(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();

}, [0]);

  const handleHamburgerClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const logout = () => {
    localStorage.removeItem('userid');
    setIsLoggedIn(false);
    showToastMessage("Logout successful!");
  };

  const showToastMessage = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <nav className={`navbar ${showMobileMenu ? "mobile-menu" : ""}`}>
      <a href="/" className="logo">Team-14</a>
      <div className="nav-links">
        <ul className="nav-menu">
          <li>
            <NavLink to="/" activeClassName="activeLink">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                </svg>
              </span>
              Home</NavLink>
          </li>

          <li>
            <NavLink to="/blogs" activeClassName="activeLink">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
              </span>
              &nbsp;Blogs </NavLink>
          </li>
          <li>
            <NavLink to="/postblog" activeClassName="activeLink">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                  <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                </svg>
              </span>
              &nbsp; Post blog</NavLink>
          </li>
          <li>
            <NavLink to="/devteam" activeClassName="activeLink">
              <img className="profilepic" src={userData?.picture} alt="" />
              My profile
            </NavLink>
          </li>
          
          <li>
         <button className="button-notify">
         <i className="fa fa-bell" onClick={openPopup} >
              <span className="badge">{userpending?.length || 0}</span>
          </i>
         </button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={logout} style={{ borderRadius: "10px", borderColor: "rgba(0, 0, 0, 0.5)" }} className="buttonlog">Logout</button>
          </li>

        </ul>
      </div>
      <i className="menu-hamburger fa fa-bars" onClick={handleHamburgerClick}></i>
      {isPopupOpen && <Requests onClose={closePopup}  res={userpending}/>}

    </nav>
    
  );
}

function Header() {
  return <header className="header"></header>;
}

export default function Website() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/postblog" element={<Contact />} />
          <Route exact path="/devteam" element={<About />} />
          <Route exact path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
