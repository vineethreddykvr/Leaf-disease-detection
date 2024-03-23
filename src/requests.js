// EmptyPopup.js
import React, { useState } from "react";
import './submit.css';
import Submit from "./submit";
import UserProfile from "./userprofile"

const Requests = ({ onClose,res}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  console.log(res)

  return (
    <div className="popup-overlay popup-overla conne" style={{ color: 'white' }}>
      <div className="popup-content popup-conten">
        <UserProfile />
        <div className="popup-footer popup-foote ">
          <button className="btn btn-primary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
      {isPopupOpen && <Submit onClose={closePopup} />}
    </div>
  );
};

export default Requests;
