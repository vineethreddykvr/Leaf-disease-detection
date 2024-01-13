import React from "react";

import { useState } from "react";
import './blogsdata.css'
function IMGR(props) {
  const [isLiked, setIsLiked] = useState(false);

  const heartStyle = {
    color: isLiked ? "red" : "gray",
    cursor: "pointer",
  };

  const handleClick = () => {
    setIsLiked(!isLiked);
  };
  return (
   
    <section className="dark">
      <div className="container py-4">

        <article className="postcard dark blue">
          <a className="postcard__img_link" href="#">
            <img className="postcard__img" src={props.src} alt="Image Title" />
          </a>
          <div className="postcard__text">
            <h1 className="postcard__title blue"><a href="#">{props.title}</a></h1>
            <div className="postcard__subtitle small">
              <time dateTime="2020-05-25 12:00:00">
                <i className="fa fa-calendar -alt mr-2">&nbsp;</i>Mon, May 25th 2020
              </time>
            </div>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">{props.news}</div>
            <ul className="postcard__tagbox">
              <li className="tag__item"><i className="fa fa-tag mr-2">&nbsp;</i>Podcast</li>
              <li className="tag__item"><i className="fa fa-clock mr-2">&nbsp;</i>{props.no*2} mins ago</li>
              <li className="tag__item play blue">
                <a href="#"><i className="fa fa-play mr-2"> &nbsp;</i>Play Video</a>
              </li>
            </ul>
          </div>
        </article>        
      </div>
    </section>

      
  );
}

export default IMGR;
