import React, { useEffect } from "react";

const Trans = () => {
  useEffect(() => {
    // Define googleTranslateElementInit function outside useEffect
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: "en",
        autoDisplay: false,
      }, "google_translate_element");
    };

    // Check if google.translate object exists before adding the script
    if (!window.google || !window.google.translate) {
      const addScript = document.createElement("script");
      addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      addScript.async = true;
      document.body.appendChild(addScript);
    } else {
      googleTranslateElementInit(); // Call the function if google.translate is already available
    }

    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <>
      <div id="google_translate_element"></div>
      <h4>Processing....</h4>
    </>
  );
};

export default Trans;
