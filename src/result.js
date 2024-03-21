// EmptyPopup.js
import React, { useState } from "react";
import './submit.css';
import Submit from "./submit";

const EmptyPopup = ({ onClose, res,img }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const predictions = res.predictions || {};
  const predictedClasses = res.predicted_classes || [];

  const highestConfidenceClass =  res.top;
  const highestConfidence =  res.confidence
  ;

  return (
    <div className="popup-overlay popup-overla " style={{ color: 'white' }}>
      <div className="popup-content popup-conten">
        <div className="popup-header popup-heade">
          <h1>PREDICTION </h1>
        </div>
        <div className="popup-body popup-bod">
          <div style={{ color: "#5da4f0", fontSize: "x-large" }}>
            <h2>Disease Prediction Results:</h2>
            <p>
              Predicted Disease: <span style={{ color: 'white' }}>{highestConfidenceClass}</span>
            </p>
            <p>
              Confidence Level: <span style={{ color: 'white' }}>{(highestConfidence * 100).toFixed(2)}%</span>
            </p>
            <img src={`data:image/png;base64, ${img}`} alt="Predicted Image" style={{ maxWidth: '25%', height: 'auto', marginTop: 20,borderRadius:"10px" }} />
          </div>
        </div>
        <div className="popup-footer popup-foote ">
          <button className="btn btn-danger btn-get-started animate__animated animate__fadeInUp scrollto" onClick={openPopup}>
            Re Upload
          </button>
          <button className="btn btn-primary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
      {isPopupOpen && <Submit onClose={closePopup} />}
    </div>
  );
};

export default EmptyPopup;
