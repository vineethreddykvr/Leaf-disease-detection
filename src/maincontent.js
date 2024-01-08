import React from "react";
import { useState } from "react";
import './maincontent.css';
import Submit from "./submit";

function Mainc() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="Home-bodycontent">
            <div className="typewriter">
              <h2>Welcome to<br />
                <span>Leaf Disease Prediction System</span>
              </h2>
            </div>
            <p className="hometext">Predict Your crop disease through a Deep learning model and increase your crop Growth.</p>
            <button className="btn btn-danger btn-get-started animate__animated animate__fadeInUp scrollto" onClick={openPopup}>
              Let's get Predicted
            </button>
          </div>
        </div>
      </div>

      {isPopupOpen && <Submit onClose={closePopup} />}
    </div>
  );
}

export default Mainc;
