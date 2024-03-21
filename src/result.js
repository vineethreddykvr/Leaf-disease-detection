
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

  console.log(res)
  const predictions = res.predictions || {};
  const predictedClasses = res.predicted_classes || [];

  const highestConfidenceClass =  res.top;
  const highestConfidence =  res.confidence;

    
  // let highestConfidenceClass;
  
  // if (predictedClasses.length > 0) {
  //   highestConfidenceClass = predictedClasses[0];
  // } else {
  //   // If predicted_classes is empty, find the label with the highest confidence
  //   const labels = Object.keys(predictions);
  //   if (labels.length > 0) {
  //     highestConfidenceClass = labels.reduce((a, b) =>
  //       predictions[a].confidence > predictions[b].confidence ? a : b
  //     );
  //   } else {
  //     highestConfidenceClass = "Unknown";
  //   }
  // }
  
  // const highestConfidence = predictions[highestConfidenceClass]?.confidence || 0;
  
  // Function to display causes and preventions based on predicted disease
    let predictedDisease = highestConfidenceClass;
    let causes = "";
    let preventions = "";

    if (predictedDisease === "leaf_blast") {
      causes = "- Fungal infection by Pyricularia oryzae.\n";
      causes += "- Favorable environmental conditions such as high humidity and temperature.\n";
      preventions = "- Plant resistant varieties.\n";
      preventions += "- Proper field sanitation to remove infected plant debris.\n";
      preventions += "- Application of fungicides preventively during susceptible stages of crop growth.\n";
    } else if (predictedDisease === "Brown_spot") {
      causes = "- Fungal infection by Bipolaris oryzae.\n";
      causes += "- Favorable environmental conditions such as high humidity and temperature. Overcrowded planting, excessive nitrogen fertilizer, and poor drainage can also contribute to its spread.\n";
      preventions = "- Using disease-resistant rice varieties and practicing crop rotation\n";
      preventions += "- Maintaining proper spacing between plants to improve air circulation, avoiding overhead irrigation, and ensuring proper drainage.\n";
      preventions += "- Practice good crop management techniques.\n"
    } else if (predictedDisease === "Hispa") {
      causes = "1. Hispa beetle infestation\n2. Warm and humid conditions favoring the growth of the beetle.\n3. Lack of natural predators for the Hispa beetle.\n";
      preventions = "1. Use of insecticides such as neem oil, pyrethrum, or synthetic chemicals.\n2. Regular monitoring and early detection of Hispa beetle infestation.\n3. Implementing crop rotation and maintaining field hygiene to reduce beetle populations.\n";
    }
    else if (predictedDisease === "bacterial_leaf_blight") {
      causes = "1. Bacterial infection by Xanthomonas oryzae.\n2. Favorable environmental conditions such as high humidity and standing water.\n3. Presence of infected plant debris or contaminated seeds.\n";
      preventions = "1. Planting disease-resistant rice varieties.\n2. Practicing proper water management to avoid waterlogging.\n3. Crop rotation and maintaining field hygiene to reduce pathogen buildup.\n4. Seed treatment with appropriate disinfectants.\n";

    }


  return (
    <div className="popup-overlay popup-overla " style={{ color: 'white' }}>
      <div className="popup-content popup-conten">
        <div className="popup-header popup-heade">
          <h1>PREDICTION </h1>
        </div>
        <div className="popup-body popup-bod">
          <div style={{ color: "#5da4f0", fontSize: "x-large" }}>
            <p>
              Predicted Disease: <span style={{ color: 'white' }}>{highestConfidenceClass}</span>
            </p>
            <p>
              Confidence Level: <span style={{ color: 'white' }}>{(highestConfidence * 100).toFixed(2)}%</span>
            </p>
            <div style={{ color: 'white' }}>
          <p style={{ color: "#5da4f0", marginBottom: "10px" }}>Causes:</p>
          <p style={{ margin: "0" }}>{causes.split('\n').map((line, index) => <span key={index}>{line}<br /></span>)}</p>
        </div>
        <div style={{ color: 'white', marginTop: "0px" }}>
          <p style={{ color: "#5da4f0", marginBottom: "10px" }}>Preventions:</p>
          <p style={{ margin: "0" }}>{preventions.split('\n').map((line, index) => <span key={index}>{line}<br /></span>)}</p>
        </div>
        <img src={`data:image/png;base64, ${img}`} alt="Predicted Image" style={{ maxWidth: '25%', height: 'auto', marginTop: 10, borderRadius: "10px" }} />
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
