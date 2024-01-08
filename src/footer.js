import React from 'react';
import './blogsdata.css'
import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
   
  return (
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#929fba' }}>
        {/* Grid container */}
        <div className=" p-4 pb-0">
          {/* Section: Links */}
          <section>
            {/* Grid row */}
            <div className="row">
              {/* Grid column */}
              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                disclaimer
                </h6>
                <p style={{color: 'red',fontWeight:'bold' }} >
                "Predictions provided are based on analysis and algorithms but may not always be accurate. Consult experts for advice and make decisions based on multiple factors. Use predictions as an additional tool, not sole basis for critical agricultural decisions."
                </p>
              </div>
              {/* Grid column */}

              <hr className="w-100 clearfix d-md-none" />

              {/* Grid column */}
              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-4">
                <h6 className="text-uppercase mb-4 font-weight-bold">More Info:</h6>
                <p>
                <div className="d-flex align-items-center">
      <input
        type="email"
        className="form-control me-2"
        placeholder="Enter your email"
      />
      <button className="btn btn-primary">Subscribe</button>
    </div>
                </p>
                <p>
                <div className="d-flex align-items-center">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Search "
      />
      <button className="btn btn-primary">Search&nbsp;</button>
    </div>                </p>
                <p>
                  <a className="text-white">Join with us < > <input style={{borderRadius:'10px'}} type="text" /></></a>
                </p>
                
              </div>
              {/* Grid column */}

              <hr className="w-100 clearfix d-md-none" />

              {/* Grid column */}
             
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>

                {/* Facebook */}
                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#3b5998' }} href="#!" role="button">
                  <i className="fa fa-facebook"></i>
                </a>

                

                {/* Google */}
                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#dd4b39' }} href="#!" role="button">
                  <i className="fa fa-google"></i>
                </a>

                {/* Instagram */}
                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#ac2bac' }} href="#!" role="button">
                  <i className="fa fa-instagram"></i>
                </a>

                {/* Linkedin */}
                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#0082ca' }} href="#!" role="button">
                  <i className="fa fa-linkedin"></i>
                </a>

                {/* Github */}
                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: 'rgba(0,0,0,2)' }} href="#!" role="button">
                  <i className="fa fa-github"></i>
                </a>
                <p>
           
              </p>
              </div>
             
            </div>
            {/* Grid row */}
          </section>
          {/* Section: Links */}
        </div>
        {/* Grid container */}

        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2023 Copyright:
          <a className="text-white" href="/"> @ ALL RIGHTS RECIVED</a>
        </div>
        {/* Copyright */}
      </footer>
  );
};

export default Footer;
