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
    <div className="container mt-4 bddy">
    <div className="card p-3">
      <div className="row">
        <div className="col-md-4">
          <div className="position-relative snipimage">
            <img src={props.src} className="rounded img-fluid w-100 img-responsive" />
            <span className="position-absolute user-timing">{props.no*24 +3} min</span>
          </div>
        </div>
        <div className="col-md-8">
          <div className="mt-2">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-1">{props.title}</h5>
              <span
        className={`heart-icon ${isLiked ? "liked" : ""}`}
        style={heartStyle}
        onClick={handleClick}
      >
       &hearts;
      </span>
            </div>
            <div className="d-flex justify-content-md-start justify-content-between views-content mt-2">
              <div className="d-flex flex-row align-items-center">
                <i className="fa fa-eye"></i>
                <span className="ms-1 views">{props.no*9  +4}</span>
              </div>
              <div className="d-flex flex-row align-items-center ms-2">
                <i className="fa fa-heart"></i>
                <span className="ms-1 views">{props.no*3 +3}</span>
              </div>
            </div>
            <div className="d-flex flex-row mt-3">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpp9kgX4OL8tNNBQv_B71JphJNaXeGUgZkzg&usqp=CAU" width="50" className="rounded-circle" />
              <div className="ms-2 d-flex flex-column">
                <div className="d-flex flex-row align-items-center">
                  <h6>{props.news}</h6>
                  <span className="dots"></span>
                </div>
                <span className="days-ago">{props.no} days ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      
  );
}

export default IMGR;
