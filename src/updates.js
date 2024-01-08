import React, { useState } from 'react';
import Marquee from "react-fast-marquee";
import './updates.css'
import Popup from './popup';
import Footer from "./footer";


const Updates = () => {
  return  (
    <>
    <Popup />
    <br /> <br /> <br /> <br /> <div>
      <p></p>
    </div>
    <Marquee className='posmar'>
<p className='abs'>
Welcome to the Updates page, where we showcase the latest innovations and provide opportunities for you to contribute and make these inventions even better. We believe in the power of collaboration and welcome your involvement in shaping the future of technology.
</p>  
</Marquee>

    <div className="custom-container row">
      <div className="custom-card col-lg-4 col-md-6 col-sm-12">
        <div className="custom-face custom-face1">
          <div className="custom-content">
            <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" alt="Design" />
            <h3>Design Blogs</h3>
          </div>
        </div>
        <div className="custom-face custom-face2">
          <div className="custom-content">
            <p>You are the creators, Launching the new feature so explore the news to the world.</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <div className="custom-card col-lg-4 col-md-6 col-sm-12">
        <div className="custom-face custom-face1">
          <div className="custom-content">
            <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" alt="Code" />
            <h3>feed up</h3>
          </div>
        </div>
        <div className="custom-face custom-face2">
          <div className="custom-content">
            <p>Explore the content and make the error free website by helping us.</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <div className="custom-card  col-lg-4 col-md-6 col-sm-12">
        <div className="custom-face custom-face1">
          <div className="custom-content">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true" alt="Launch" />
            <h3>Launch VM(virtual meet)</h3>
          </div>
        </div>
        <div className="custom-face custom-face2">
          <div className="custom-content">
            <p>Connect Your self, updating new feature that  can connect you with the experts through online</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
   
      <div className="custom-card vv col-lg-4 col-md-6 col-sm-12">
        <div className="custom-face custom-face1">
          <div className="custom-content">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFj1Go4NhIuFzpPTP0F8lwgposJsBAi2h1lxDWFn6X6Aq-YUO8TV0jqfsLxoK9zj0taBo&usqp=CAU" alt="Design" />
            <h3>News Live</h3>
          </div>
        </div>
        <div className="custom-face custom-face2">
          <div className="custom-content">
            <p>Watch the latest news , from the corners of the world stay connected and get notified</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <div className="custom-card vv col-lg-4 col-md-6 col-sm-12">
        <div className="custom-face custom-face1">
          <div className="custom-content">
            
            <h3>Comming soon....</h3>
          </div>
        </div>
        <div className="custom-face custom-face2">
          <div className="custom-content">
            <p>We are the team trying to make the website better and we will process the new updtes in future .</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <div className="custom-card vv col-lg-4 col-md-6 col-sm-12">
        <div className="custom-face custom-face1">
          <div className="custom-content">
            <h3>Comming soon....</h3>
          </div>
        </div>
        <div className="custom-face custom-face2">
          <div className="custom-content">
            <p>We are the team trying to make the website better and we will process the new updtes in future .</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
  
     <Footer />
    </>

  );
};


export default Updates;