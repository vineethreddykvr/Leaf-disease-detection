import React, { useState, useEffect } from 'react';
import './LoadingAnimation.css'; // import CSS file with animation

function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // simulate a 2-second loading time
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loading-container">
      {isLoading && <div className="loading-animation"></div>}
      <p>{isLoading ? 'WELCOME TO PROJECT OF VMB' : 'Finished loading!'}</p>
    </div>
  );
}

export default LoadingAnimation;
