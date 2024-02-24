import React, { useState } from "react";
import "./popup.css";
import Trans from "./translator";

function Popup() {
    const [isExpanded, setIsExpanded] = useState(false);
  
    function handlePopupClick() {
      setIsExpanded(true);
    }
  
    function handleCloseClick() {
      setIsExpanded(false);
    }
  
    return (
      <div className={`popup vin ${isExpanded ? "expanded" : ""}`}>
        {!isExpanded && (
          <div className="popup-trigger vint"  onClick={handlePopupClick}>
            Change Language 
          </div>
        )}
        {isExpanded && (
          <div className="popup-content vinc">
            <div className="popup-text vinte"><Trans /></div>
            <button className="popup-close vincl" onClick={handleCloseClick}>
              Close
            </button>
          </div>
        )}
      </div>
    );
  }

export default Popup;
