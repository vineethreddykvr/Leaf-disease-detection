import React, { useState } from "react";
import './submit.css'
import { ToastContainer, toast } from 'react-toastify';
import EmptyPopup from "./result";
import axios from "axios";
const Submit = ({ onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState(null);
  const [showEmptyPopup, setShowEmptyPopup] = useState(false);
  const [ans, setAns] = useState("");
  var file = undefined;
  const handleFileChange = (e) => {
    file = e.target.files[0];
    console.log(file)
    if (file) {
      const reader = new FileReader();
      setSelectedFile(file);
      reader.onloadend = () => {
        const base64String = reader.result.split(",")[1];
        setImage(base64String);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = () => {
    if (image) {
      const classifyPromise = new Promise((resolve, reject) => {
        axios({
          method: "POST",
          url: "https://classify.roboflow.com/rice-plant-leaf-disease-classification/1",
          params: {
            api_key: "oo5I6zVakuJi0CSqLPq7"
          },
          data: image,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
          .then(response => {
            resolve(response.data);
          })
          .catch(error => {
            alert("Error IN SENDING THE IMAGE FOR VERIFICATION")
            reject(error);
          });
      });
  
      const uploadPromise = selectedFile ? new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append('file', selectedFile);
  
        axios.post("http://127.0.0.1:5000/upload", formData)
          .then(response => {
            resolve(response.data.class_label);
          })
          .catch(error => {
            reject(error);
          });
      }) : Promise.resolve(); // If selectedFile is not present, resolve immediately
  
      Promise.all([classifyPromise, uploadPromise])
        .then(([classifyResponse, uploadResponse]) => {
          setAns(classifyResponse);
          setShowEmptyPopup(true);
          if (uploadResponse) {
            console.log(uploadResponse);
            localStorage.setItem("predicted", uploadResponse);
          }
        })
        .catch(errors => {
          console.error(errors);
          // Handle errors
          if (errors[0]) {
            toast.error("Error IN SENDING THE IMAGE FOR VERIFICATION", {
              position: toast.POSITION.BOTTOM_LEFT,
            });
            
          }
        });
    } else  {
      toast.error("Error IN SENDING THE IMAGE FOR VERIFICATION", {
        position: toast.POSITION.BOTTOM_LEFT,
      })
    }
  };

  if (showEmptyPopup) {
    return <EmptyPopup onClose={onClose} res={ans} img={image} />;
  }
    return (
      <div className="popup-overlay popup-overla">
        <div className="popup-content popup-conten">
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