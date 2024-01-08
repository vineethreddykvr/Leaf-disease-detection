import React, { useState } from "react";
import './submit.css'
import EmptyPopup from "./result";
const Submit = ({ onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showEmptyPopup, setShowEmptyPopup] = useState(false);
  const [ans, setAns] = useState("");
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      fetch("http://127.0.0.1:5000/upload", {
        method: "POST",
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          // Handle the response from the server

          const classLabel = data.class_label;
          setAns(classLabel);
          setShowEmptyPopup(true);
          // Update your state or perform any other necessary actions with the response data
        })
        .catch(error => {
          // Handle any errors
          console.error(error);
        });
    }
  };

  if (showEmptyPopup) {
    return <EmptyPopup onClose={onClose} res={ans} />;
  }


    return (
      <div className="popup-overlay popup-overla">
        <div className="popup-content popup-conten">
          <div className="popup-header popup-heade">
            <h3>Popup Heading</h3>
          </div>
          <div className="popup-body popup-bod">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="bg-primary text-white p-4">
                <h3>Crop Disease Prediction: Enhancing Agricultural</h3>
                <p>
                  Crop diseases pose significant threats to agricultural
                  productivity, leading to substantial economic losses and food
                  insecurity. However, advancements in technology and data
                  analytics have opened up new avenues for proactive disease
                  management through crop disease prediction. By harnessing the
                  power of machine learning, remote sensing, and agricultural
                  data, researchers and farmers can now anticipate and mitigate
                  crop diseases more effectively, enhancing agricultural
                  resilience.
                </p>
                <p>
                  Machine learning algorithms use historical data to establish
                  relationships between environmental factors, crop
                  characteristics, and disease outbreaks. By considering
                  variables like temperature, humidity, precipitation, soil
                  composition, and plant phenology, these models can accurately
                  predict the likelihood and severity of crop diseases. Early
                  warning systems can be developed to alert farmers about
                  potential disease outbreaks, enabling timely intervention and
                  preventive measures.
                </p>
                <p>
                  <br />
                  <h4>Submit your Image here:</h4>
                  <br />
                  <input type="file" onChange={handleFileChange} />
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="bg-secondary text-white p-4">
                <h3>Processing of Your image by the model :</h3>
                <img
                  className="imag-model"
                  src="https://www.researchgate.net/publication/338410651/figure/fig1/AS:941670443016243@1601523137714/Transfer-learning-flow-chart-First-there-are-a-large-number-of-available-labeled-images.png"
                  alt="model working process"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="popup-footer popup-foote ">
          <button className="btn btn-primary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-success" onClick={handleSubmit} >
            Submit
          </button>
        </div>
      </div>
    </div>
    );
  };
  
  export default Submit;