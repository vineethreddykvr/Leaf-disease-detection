import React, { useEffect } from "react";

const Trans = () => {
  useEffect(() => {
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: "en",
        autoDisplay: false,
      }, "google_translate_element");
    };

    const addScript = document.createElement("script");
    addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.async = true;
    document.body.appendChild(addScript);

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
