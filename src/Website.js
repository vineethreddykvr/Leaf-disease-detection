import React, { useState, useEffect } from "react";
import "./nav.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Blogs from "./blogs";
import { ToastContainer, toast } from "react-toastify";
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
      response.then((data)=> {
        setUserData(data.data.userDetails)
      })
    }
  }, []);

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

  return (
    <nav className={`navbar ${showMobileMenu ? "mobile-menu" : ""}`}>
      <a href="/" className="logo">Team-14</a>
      <div className="nav-links">
        <ul className="nav-menu">
          <li>
            <NavLink to="/" activeClassName="activeLink">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blogs" activeClassName="activeLink">Blogs <i className="fab fa-blogger-b"></i></NavLink>
          </li>
          {isLoggedIn && (
            <>
              <li>
                <NavLink to="/devteam" activeClassName="activeLink">
                  <img className="profilepic" src={userData?.picture} alt="" />
                  My profile
                </NavLink>
              </li>
              <li>
                <button onClick={logout} style={{ borderRadius: "10px", borderColor: "rgba(0, 0, 0, 0.5)" }}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </div>
      <i className="menu-hamburger fa fa-bars" onClick={handleHamburgerClick}></i>
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
          <Route exact path="/devteam" element={<About />} />
          <Route exact path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
