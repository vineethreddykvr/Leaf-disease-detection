import React, { useState, useEffect } from "react";
import "./nav.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./home";
import About from "./about";
import { ToastContainer, toast } from "react-toastify";

import LoadingAnimation from "./loadinganimation";
import { useLocation } from "react-router-dom";
import Blogs from "./blogs";
import "react-toastify/dist/ReactToastify.css";
import { jwtDecode } from 'jwt-decode';

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();
  const shouldShrink = location.pathname !== "/";

  function handleHamburgerClick() {
    setShowMobileMenu(!showMobileMenu);
  }

  useEffect(() => {
    function handleScroll() {
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.add("shrink");
        } else {
          navbar.classList.remove("shrink");
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showToastMessage = () => {
    toast.success("Thankyou Visit Again!", {
      position: toast.POSITION.TOP_RIGHT,
    });}

  const logout = () => {
    localStorage.removeItem('jwt');
    
    showToastMessage();
    setTimeout(() => {
      window.location.reload();
    }, 4000); 
  };
  const decode = localStorage.getItem('jwt')
  const data = jwtDecode(decode)

  return (
    <nav className={`navbar ${shouldShrink ? "shrink" : ""}`}>
      <a href="#" className="logo">
        Team-14
      </a>
      <div className={`nav-links ${showMobileMenu ? "mobile-menu" : ""}`}>
        <ul className="nav-menu">
          <li className="active">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "greenyellow" : "white",
              })}
            >
              Home
            </NavLink>
          </li>
          
          <li>
            <NavLink
              to="/blogs"
              style={({ isActive }) => ({
                color: isActive ? "greenyellow" : "white",
              })}
            >
              Blogs <i className="fab fa-blogger-b"></i>{" "}
            </NavLink>
          </li>         
          <li><img className="profilepic" src={data.picture} alt="" />
            <NavLink
              to="/devteam"
               style={({ isActive }) => ({
                color: isActive ? "greenyellow" : "white",
              })}
            >
              {" "}
              My profile
            </NavLink>
          </li>
          <button onClick={logout} style={{borderRadius:"10px",borderColor:"rgba(0, 0, 0, 0.5)"}}> logout</button>
        
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // simulate a 2-second loading time
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <BrowserRouter>
          <Navbar />
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/devteam" element={<About />} />
            <Route exact path="/blogs" element={<Blogs />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}
