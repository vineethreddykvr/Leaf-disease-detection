import React from "react";
import './maincard.css';


function Maincard(){
    return(
        < >
        
        
        <div className="box-wrapper">
      <figure className="shape-box shape-box_half">
        <img src="https://c4.wallpaperflare.com/wallpaper/764/431/702/river-trees-forest-clouds-wallpaper-preview.jpg" alt="" />
        <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
        <figcaption>
          <div className="show-cont">
            <h3 className="card-no">01</h3>
            <h4 className="card-main-title">Design</h4>
          </div>
          <p className="card-content">The team focuses on defining the system's scope, user interface, and overall architecture. We identify the specific requirements and features the system should possess, ensuring an intuitive design.</p>
          <a href="#" className="read-more-btn">Read More</a>
        </figcaption>
        <span className="after"></span>
      </figure>
      <figure className="shape-box shape-box_half">
        <img src="https://c4.wallpaperflare.com/wallpaper/816/62/518/digital-art-nature-trees-mountains-wallpaper-preview.jpg" alt="" />
        <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
        <figcaption>
          <div className="show-cont">
            <h3 className="card-no">02</h3>
            <h4 className="card-main-title">DEVELOP</h4>
          </div>
          <p className="card-content"> Rigorous testing and debugging is involved to ensure the system functions accurately and efficiently. We adhere to best practices in software development and utilizing version control systems.</p>
          <a href="#" className="read-more-btn">Read More</a>
        </figcaption>
        <span className="after"></span>
      </figure>
      <figure className="shape-box shape-box_half">
        <img src="https://c4.wallpaperflare.com/wallpaper/506/46/546/walter-white-breaking-bad-desert-amc-wallpaper-preview.jpg" alt="" />
        <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
        <figcaption>
          <div className="show-cont">
            <h3 className="card-no">03</h3>
            <h4 className="card-main-title">RESEARCH</h4>
          </div>
          <p className="card-content"> The team experiments with different machine learning algorithms, fine-tuning parameters, and validating the accuracy and reliability of the predictive models used in the system which inturn enhances the system's effectiveness in detecting leaf diseases.</p>
          <a href="#" className="read-more-btn">Read More</a>
        </figcaption>
        <span className="after"></span>
      </figure>
      <figure className="shape-box shape-box_half">
        <img src="https://c4.wallpaperflare.com/wallpaper/772/543/720/close-up-photo-of-spiral-form-smoke-wallpaper-preview.jpg" alt="" />
        <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
        <figcaption>
          <div className="show-cont">
            <h3 className="card-no">04</h3>
            <h4 className="card-main-title">PROMOTION</h4>
          </div>
          <p className="card-content">Raise awareness through marketing and outreach efforts, showcasing the system's benefits and encouraging adoption among the target audience.</p>
          <a href="#" className="read-more-btn">Read More</a>
        </figcaption>
        <span className="after"></span>
      </figure>
    </div>
        </>
    );
}

export default Maincard;