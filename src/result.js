// import React from "react";
// import './submit.css';

// const EmptyPopup = ({ onClose, res }) => {
//   let imageSource1,cause,prevention,precaution,text;

//   if (res === "Apple___healthy" || res === "Blueberry___healthy" || res === "Cherry_(including_sour)___healthy" || res === "Grape___healthy" || res === "Peach___healthy" || res === "Pepper,_bell___healthy" || res === "Potato___healthy" || res === "Raspberry___healthy" || res === "Soybean___healthy" || res === "Squash___Powdery_mildew" || res === "Strawberry___healthy" || res === "Tomato___healthy") {
//     imageSource1 = "https://upload.wikimedia.org/wikipedia/commons/c/c6/Apple_tree_leaf_J1.jpg";
//     text = "It is a healthy leaf!";
//   }
//   else 
//   {
//   if (res === "Apple___Apple_scab") {
//     imageSource1 = "https://www.apsnet.org/edcenter/disandpath/fungalasco/pdlessons/Article%20Images/AppleScab03.jpg";
//     cause = "Apple scab is caused by the fungal pathogen Venturia inaequalis, which spreads through infected plant material";
//     prevention = "To prevent apple scab, practice good orchard sanitation, promote air circulation, avoid excessive moisture";
//     precaution = "Practicing appropriate pruning techniques, promoting air circulation, and avoiding prolonged leaf and fruit wetness, to prevent apple scab.";
//   }
//   else if (res === "Apple___Black_rot") {
//     imageSource1 = "https://gardenerspath.com/wp-content/uploads/2019/08/Frogeye-spots-Botryosphaeria-obtusa-on-apple-leaf-FB.jpg";
//     cause = "Apple black rot is caused by the fungal pathogen Botryosphaeria obtusa, which infects apple trees through wounds or natural openings, and spreads through rainwater.";
//     prevention = "Maintain good orchard sanitation by removing and destroying infected plant debris, practicing proper pruning techniques to minimize wounds.";
//     precaution = "Implement an integrated pest management (IPM) program that includes regular monitoring, timely application of fungicides if necessary.";
//   }
//   else if (res === "Apple___Cedar_apple_rust") {
//     imageSource1 = "https://www.starkbros.com/images/dynamic/wp-content/uploads/2021/06/CAR_LG.jpg";
//     cause = "Cedar apple rust is caused by the fungal pathogen Gymnosporangium juniperi-virginianae, which requires both cedar or juniper trees.";
//     prevention = "Remove nearby cedar or juniper trees if possible, as they serve as a source of spores.";
//     precaution = "Monitoring and removing galls or infected plant material, selecting resistant apple cultivars, practicing proper orchard hygiene, and maintaining a healthy environment with good air circulation.";
//   }
//   // else if (res === "Apple___healthy") {
//   //   imageSource1 = "https://upload.wikimedia.org/wikipedia/commons/c/c6/Apple_tree_leaf_J1.jpg";
//   //   text = "It is a healthy apple!";
//   // }
//   // else if (res === "Blueberry___healthy") {
//   //   imageSource1 = "https://img.freepik.com/premium-photo/blueberry-leaves-isolated-white-background-leaves-clipping-path_299651-427.jpg";
//   //   cause = "";
//   //   prevention = "";
//   //   precaution = "";
//   //}
//   // else if (res === "Cherry_(including_sour)___healthy") {
//   //   imageSource1 = "https://www.healthbenefitstimes.com/9/gallery/wild-cherry/Leaves-of-Wild-cherry.jpg";
//   //   cause = "";
//   //   prevention = "";
//   //   precaution = "";
//  // }
//   else if (res === "Cherry_(including_sour)___Powdery_mildew") {
//     imageSource1 = "https://www.healthbenefitstimes.com/9/gallery/wild-cherry/Leaves-of-Wild-cherry.jpg";
//     cause = "";
//     prevention = "";
//     precaution = "";
//   }
//   else if (res === "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot") {
//     imageSource1 = "https://bugwoodcloud.org/images/768x512/5465606.jpg";
//     cause = "";
//     prevention = "";
//     precaution = "";
//   }
//   else if (res === "Corn_(maize)___Common_rust_") {
//     imageSource1 = "https://plantwiseplusknowledgebank.org/cms/asset/87c63a95-123c-483e-b8f7-36a2a2d9da9b/common-rust-of-maize-global-1.jpg";
//     cause = "";
//     prevention = "";
//     precaution = "";
//   }
//   // else if (res === "Corn_(maize)___healthy") {
//   //   imageSource1 = "https://www.researchgate.net/publication/354688452/figure/fig1/AS:1069723160686592@1632053284465/Example-of-healthya-and-infectedb-corn-leaves-for-classification-and-disease.jpg";
//   //   cause = "";
//   //   prevention = "";
//   //   precaution = "";
//   // }
//   else if (res === "Corn_(maize)___Northern_Leaf_Blight") {
//     imageSource1 = "https://www.researchgate.net/publication/336013997/figure/fig1/AS:822781528768512@1573177811530/Representative-image-of-northern-leaf-blight-NLB-symptoms.jpg";
//     cause = "";
//     prevention = "";
//     precaution = "";
//   }
//   else if (res === "Grape___Black_rot") {
//     imageSource1 = "https://extension.okstate.edu/programs/digital-diagnostics/plant-diseases/site-files/black-rot-of-grapes/blackrot.jpg";
//     cause = "";
//     prevention = "";
//     precaution = "";
//   }
//   else if (res === "Grape___Esca_(Black_Measles)") {
//     imageSource1 = "https://www.researchgate.net/profile/Laura-Mugnai/publication/43161073/figure/fig1/AS:340404659605512@1458170203496/Symptoms-associated-with-esca-of-grapevine-chlorosis-and-necrosis-on-the-leaves-showing_Q320.jpg";
//     cause = "";
//     prevention = "";
//     precaution = "";
//   }
//   // else if (res === "Grape___healthy") {
//   //   imageSource1 = "https://images.versus.io/objects/grape-leaves.front.master.1590479606183.jpg";
//   //   cause = "";
//   //   prevention = "";
//   //   precaution = "";
//   // }
//   else if (res === "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)") {
//     imageSource1 = "https://sources.roboflow.com/dMjGrME8SnaLLAZzZe5d/F7wyMr3IMbfv0Rjk9hY6/thumb.jpg";
//     cause = "";
//     prevention = "";
//     precaution = "";
//   }
//   else if (res === "Orange___Haunglongbing_(Citrus_greening)") {
//     imageSource1 = "https://www.isaaa.org/kc/cropbiotechupdate/files/images/29202110245PM.jpg";
//     cause = "";
//     prevention = "";
//     precaution = "";
//   }
//   else if (res === "Peach___Bacterial_spot") {
//     imageSource1 = "https://bugwoodcloud.org/images/1536x1024/0162025.jpg";
//     cause = "";


import React from "react";
import './submit.css';

const EmptyPopup = ({ onClose, res }) => {
  let imageSource1, cause, prevention, precaution, text;

  // ... existing code ...

  // Check if it is a healthy fruit, and set the text accordingly
  if (res === "Apple___healthy" || res === "Blueberry___healthy" || res === "Cherry_(including_sour)___healthy" || res === "Grape___healthy" || res === "Peach___healthy" || res === "Pepper,_bell___healthy" || res === "Potato___healthy" || res === "Raspberry___healthy" || res === "Soybean___healthy" || res === "Strawberry___healthy" || res === "Tomato___healthy") {
    imageSource1 = "https://upload.wikimedia.org/wikipedia/commons/c/c6/Apple_tree_leaf_J1.jpg";
    text = "It is a healthy leaf!";
  } else {
    // It is a diseased fruit, display cause, prevention, and precaution
    switch (res) {
      case "Apple___Apple_scab":
        imageSource1="https://www.apsnet.org/edcenter/disandpath/fungalasco/pdlessons/Article%20Images/AppleScab03.jpg";
        cause = "Apple scab is caused by the fungal pathogen Venturia inaequalis, which spreads through infected plant material";
        prevention = "To prevent apple scab, practice good orchard sanitation, promote air circulation, avoid excessive moisture";
        precaution = "Practicing appropriate pruning techniques, promoting air circulation, and avoiding prolonged leaf and fruit wetness, to prevent apple scab.";
        break;
      case "Apple___Black_rot":
        imageSource1="https://gardenerspath.com/wp-content/uploads/2019/08/Frogeye-spots-Botryosphaeria-obtusa-on-apple-leaf-FB.jpg";
        cause = "Apple black rot is caused by the fungal pathogen Botryosphaeria obtusa, which infects apple trees through wounds or natural openings, and spreads through rainwater.";
        prevention = "Maintain good orchard sanitation by removing and destroying infected plant debris, practicing proper pruning techniques to minimize wounds.";
        precaution = "Implement an integrated pest management (IPM) program that includes regular monitoring, timely application of fungicides if necessary.";
        break;
      case "Apple___Cedar_apple_rust":
        imageSource1="https://www.starkbros.com/images/dynamic/wp-content/uploads/2021/06/CAR_LG.jpg";
        cause = "Cedar apple rust is caused by the fungal pathogen Gymnosporangium juniperi-virginianae, which requires both cedar or juniper trees.";
        prevention = "Remove nearby cedar or juniper trees if possible, as they serve as a source of spores.";
        precaution = "Monitoring and removing galls or infected plant material, selecting resistant apple cultivars, practicing proper orchard hygiene, and maintaining a healthy environment with good air circulation.";
        break;
      case "Cherry_(including_sour)___Powdery_mildew":
        imageSource1="https://www.healthbenefitstimes.com/9/gallery/wild-cherry/Leaves-of-Wild-cherry.jpg";
        cause = " Cherry powdery mildew is caused by the fungal pathogen Podosphaera clandestina, which spreads through airborne spores.";
        prevention = "Practice good orchard sanitation by removing and destroying infected plant debris.";
        precaution = "Implement an integrated pest management (IPM) program that includes regular monitoring, selecting resistant cherry cultivars, practicing proper pruning to promote air movement.";
        break;
      case "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot":
        imageSource1="https://bugwoodcloud.org/images/768x512/5465606.jpg";
        cause = "Corn (maize) Cercospora leaf spot is caused by the fungal pathogen Cercospora zeae-maydis, which primarily spreads through infected plant debris, wind and rain.";
        prevention = "Practice crop rotation, remove and destroy infected crop residues.";
        precaution = "Monitoring for symptoms, selecting resistant maize varieties, practicing proper field hygiene, managing irrigation to avoid leaf wetness.";
        break;
      case "Corn_(maize)___Common_rust_":
        imageSource1="https://plantwiseplusknowledgebank.org/cms/asset/87c63a95-123c-483e-b8f7-36a2a2d9da9b/common-rust-of-maize-global-1.jpg";
        cause = "Corn (maize) common rust is caused by the fungal pathogen Puccinia sorghi, which spreads through windborne spores.";
        prevention = "Practice crop rotation, remove and destroy infected plant debris.";
        precaution = "Practicing proper field hygiene, managing irrigation to avoid leaf wetness, and applying preventive fungicides during critical periods.";
        break;
      case "Corn_(maize)___Northern_Leaf_Blight":
        imageSource1="https://www.researchgate.net/publication/336013997/figure/fig1/AS:822781528768512@1573177811530/Representative-image-of-northern-leaf-blight-NLB-symptoms.jpg";
        cause = "Corn (maize) northern blight is caused by the fungal pathogen Exserohilum turcicum, which can overwinter in infected crop debris and spread through wind and rain.";
        prevention = "Practice crop rotation, remove and destroy infected crop residues, select resistant maize varieties, provide proper plant spacing for good air circulation.";
        precaution = "Practicing proper field hygiene, managing irrigation to avoid leaf wetness.";
        break;
      case "Grape___Black_rot":
        imageSource1="https://extension.okstate.edu/programs/digital-diagnostics/plant-diseases/site-files/black-rot-of-grapes/blackrot.jpg";
        cause = "Causes of grape black rot include high humidity or moisture, susceptible grape varieties, presence of infected fruit mummies, and the lack of proper vineyard management practices.";
        prevention = "To prevent grape black rot, practice good vineyard sanitation by removing and destroying infected plant debris, ensure proper air circulation within the vine canopy.";
        precaution = "Selecting resistant grape varieties, practicing proper pruning and trellising techniques, managing irrigation to avoid prolonged leaf wetness.";
        break;
      case "Grape___Esca_(Black_Measles)":
        imageSource1="https://www.researchgate.net/profile/Laura-Mugnai/publication/43161073/figure/fig1/AS:340404659605512@1458170203496/Symptoms-associated-with-esca-of-grapevine-chlorosis-and-necrosis-on-the-leaves-showing_Q320.jpg";
        cause = "Grape Esca is a complex disease caused by multiple fungal pathogens which can enter the vine through pruning wounds or natural openings.";
        prevention = "To prevent grape Esca, practice good vineyard sanitation by removing and destroying infected wood.";
        precaution = "Regular monitoring for symptoms and manage vine stress, and apply preventive fungicides when necessary.";
        break;
      case "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)":
        imageSource1="https://sources.roboflow.com/dMjGrME8SnaLLAZzZe5d/F7wyMr3IMbfv0Rjk9hY6/thumb.jpg";
        cause = "Grape leaf blight is caused by various fungal pathogens, including species of the genera Phomopsis which can infect grape leaves through wounds.";
        prevention = "To prevent grape leaf blight, practice good vineyard sanitation by removing and destroying infected plant debris.";
        precaution = "Managing irrigation to avoid prolonged leaf wetness, and applying preventive fungicides during susceptible periods.";
        break;
      case "Orange___Haunglongbing_(Citrus_greening)":
        imageSource1="https://www.isaaa.org/kc/cropbiotechupdate/files/images/29202110245PM.jpg";
        cause = "Huanglongbing is caused by the bacterial pathogen Candidatus Liberibacter spp., which is primarily spread by insect vectors, such as the Asian citrus psyllid.";
        prevention = "To prevent orange HLB, practice strict insect control measures, regularly monitor and remove infected trees, use disease-free planting material.";
        precaution = "Removing and destroying infected trees, utilizing resistant citrus varieties, and utilizing biological control agents to control psyllid populations.";
        break;
      case "Peach___Bacterial_spot":
        imageSource1="https://bugwoodcloud.org/images/1536x1024/0162025.jpg";
        cause = "Peach bacterial spot is caused by the bacterium Xanthomonas arboricola pv. pruni, which can infect peach trees through natural openings or wounds and can be spread by wind and rain.";
        prevention = "To prevent peach bacterial spot, practice good orchard sanitation by removing and destroying infected plant material.";
        precaution = "Practicing proper pruning to minimize wounds, managing irrigation to avoid prolonged leaf wetness, and applying preventive treatments during susceptible periods.";
        break;
      case "Pepper,_bell___Bacterial_spot":
        imageSource1="https://blogs.cornell.edu/livegpath/files/2018/01/bls5x2400-10hrvsi.jpg";
        cause = "Bell pepper bacterial spot is caused by the bacterium Xanthomonas campestris pv. vesicatoria, which can infect bell pepper plants through natural openings.";
        prevention = "Practice good garden hygiene by removing and destroying infected plant debris, avoid overhead irrigation.";
        precaution = "Practicing proper sanitation and pruning techniques, managing irrigation to avoid prolonged leaf wetness, and applying copper-based or antibiotic-based bactericides if necessary.";
        break;
      case "Potato___Early_blight":
        imageSource1="https://www.planetnatural.com/wp-content/uploads/2012/12/potato-blight.jpg";
        cause = "Potato early blight is caused by the fungal pathogen  which can infect potato plants through spores in the soil.";
        prevention = "Practice crop rotation, remove and destroy infected plant debris, provide proper spacing between plants for air circulation.";
        precaution = "Practicing proper field hygiene, managing irrigation to avoid leaf wetness, and applying preventive fungicides during critical periods.";
        break;
      case "Potato___Late_blight":
        imageSource1="https://www.apsnet.org/edcenter/disandpath/oomycete/pdlessons/PublishingImages/LateBlightFig3new.jpg";
        cause = "Potato late blight is caused by the fungal pathogen Phytophthora infestans, which spreads through windborne spores.";
        prevention = "Practice crop rotation, remove and destroy infected plant debris, provide proper spacing between plants for air circulation, monitor for symptoms, and apply fungicides if necessary.";
        precaution = "Practicing proper field hygiene, managing irrigation to avoid prolonged leaf wetness, and applying preventive fungicides during critical periods.";
        break;
      case "Squash___Powdery_mildew":
        imageSource1="https://pinchofseeds.com/wp-content/uploads/2021/06/Powdery-mildew-on-plant.jpg";
        cause = " Squash powdery mildew is caused by the fungal pathogen Podosphaera xanthii, which thrives in warm and dry conditions, and can spread through windborne spores.";
        prevention = "Practice proper spacing between plants for good air circulation, avoid overhead irrigation, monitor for early symptoms.";
        precaution = "Implement an integrated pest management (IPM) program that includes regular monitoring, selecting resistant squash varieties, practicing proper field hygiene.";
        break;
      case "Strawberry___Leaf_scorch":
        imageSource1="https://www.gardeningknowhow.com/wp-content/uploads/2018/09/strawberry-scorch.jpg";
        cause = "Strawberry leaf scorch is caused by the fungal pathogen Diplocarpon earliana, which infects strawberry plants through wounds or natural openings, and spreads through water splashes or contaminated plant material.";
        prevention = "Practice good field sanitation by removing and destroying infected plant debris, avoid overhead irrigation, provide proper spacing between plants for air circulation, and apply fungicides if necessary.";
        precaution = "Implement an integrated pest management (IPM) program that includes regular monitoring, selecting resistant strawberry varieties, practicing proper field hygiene.";
        break;
      case "Tomato___Bacterial_spot":
        imageSource1="https://content.peat-cloud.com/w400/bacterial-spot-and-speck-of-tomato-tomato-1584010249.jpg";
        cause = "Tomato bacterial spot is caused by the bacterium Xanthomonas vesicatoria, which can infect tomato plants through natural openings.";
        prevention = "Practice good garden hygiene by removing and destroying infected plant debris, avoid overhead irrigation, provide proper plant spacing for air circulation, and practice crop rotation.";
        precaution = "Practicing proper sanitation and pruning techniques, managing irrigation to avoid prolonged leaf wetness, and applying copper-based or antibiotic-based bactericides if necessary.";
        break;
      case "Tomato___Early_blight":
        imageSource1="https://apps.lucidcentral.org/pppw_v10/images/entities/tomato_early_blight_211/alternariasol1.jpg";
        cause = "Tomato early blight is caused by the fungal pathogen Alternaria solani, which can infect tomato plants through spores in the soil.";
        prevention = "Practice good garden hygiene by removing and destroying infected plant debris, provide proper plant spacing for air circulation, avoid overhead irrigation, and apply fungicides if necessary.";
        precaution = "Implement an integrated pest management (IPM) program that includes regular monitoring, selecting disease-resistant tomato varieties.";
        break;
      case "Tomato___Late_blight":
        imageSource1="https://content.peat-cloud.com/w400/tomato-late-blight-tomato-1556463954.jpg";
        cause = "Tomato late blight is caused by the fungal-like pathogen Phytophthora infestans, which can infect tomato plants through windborne spores and thrives in cool and humid conditions.";
        prevention = "Practice good garden hygiene by removing and destroying infected plant debris, provide proper plant spacing for air circulation.";
        precaution = "Practicing proper sanitation and pruning techniques, managing irrigation to avoid prolonged leaf wetness.";
        break;
      case "Tomato___Leaf_Mold":
        imageSource1="https://www.gardeningknowhow.com/wp-content/uploads/2018/04/tomato-leaf-mold.jpg";
        cause = "Tomato leaf mold is caused by the fungal pathogen Passalora fulva (previously known as Cladosporium fulvum), which spreads through windborne spores.";
        prevention = "Practice good garden hygiene by removing and destroying infected plant debris.";
        precaution = "Managing irrigation to avoid prolonged leaf wetness, and applying preventive fungicides during susceptible periods.";
        break;
      case "Tomato___Septoria_leaf_spot":
        imageSource1="https://www.gardeningknowhow.com/wp-content/uploads/2011/07/septoria-leaf-spot2.jpg";
        cause = "Tomato Septoria leaf spot is caused by the fungal pathogen Septoria lycopersici, which spreads through water splashes, wind, or contaminated plant material.";
        prevention = "Practice good garden hygiene by removing and destroying infected plant debris."
        precaution = "Managing irrigation to avoid prolonged leaf wetness, and applying preventive fungicides during susceptible periods.";
        break;
      case "Tomato___Spider_mites Two-spotted_spider_mite":
        imageSource1="https://media.sciencephoto.com/c0/37/31/71/c0373171-800px-wm.jpg";
        cause = "Spider mites, such as the two-spotted spider mite (Tetranychus urticae), are tiny arachnids that feed on plant sap and can cause damage to the leaves, leading to discoloration, stippling, and wilting.";
        prevention = "Practice good garden hygiene by removing weeds and plant debris, avoid over-fertilization with nitrogen-rich fertilizers.";
        precaution = "Regular monitoring for spider mite activity, encouraging beneficial predators like ladybugs and predatory mites.";
        break;
      case "Tomato___Target_Spot":
        imageSource1="https://www.missouribotanicalgarden.org/Portals/0/Gardening/Gardening%20Help/images/Pests/Septoria_Leaf_Spot_of_Tomato186.jpg";
        cause = "It is a fungal disease caused by the pathogen Corynespora cassiicola. It affects tomato plants and can cause circular lesions with a target-like appearance on the leaves.";
        prevention = "Practice good garden hygiene by removing and destroying infected plant debris, provide proper plant spacing for air circulation, avoid overhead irrigation.";
        precaution = "Selecting disease-resistant tomato varieties, practicing proper sanitation and pruning techniques, managing irrigation to avoid prolonged leaf wetness.";
        break;
      case "Tomato___Tomato_mosaic_virus":
        imageSource1="https://www.missouribotanicalgarden.org/Portals/0/Gardening/Gardening%20Help/images/Pests/Septoria_Leaf_Spot_of_Tomato186.jpg";
        cause = "It is a viral disease that affects tomato plants and belongs to the Tobamovirus group. It can cause mosaic patterns on the leaves, stunted growth, and reduced fruit quality in infected plants.";
        prevention = "Practice good garden hygiene by removing and destroying infected plant debris, avoid handling plants when wet.";
        precaution = "Purchasing certified disease-free seeds or transplants, managing insect vectors like aphids or whiteflies, and preventing contact between tomato plants.";
        break;
      case "Tomato___Tomato_Yellow_Leaf_Curl_Virus":
        imageSource1="https://www.greenlife.co.ke/wp-content/uploads/2022/04/Tomato-Leaf-Curl.jpg";
        cause = "It is caused by a group of single-stranded DNA viruses from the genus Begomovirus, typically transmitted by the whitefly Bemisia tabaci.";
        prevention = "Implement strict vector control measures, such as insecticide applications and using reflective mulches, to manage the whitefly population and reduce virus transmission.";
        precaution = "Plant resistant tomato varieties and maintain good weed control to minimize the reservoir of the virus and prevent its spread.";
        break;
      default:
        // Default case, when the disease is not found, or it's a new disease not handled yet
        imageSource1 = "default_image.jpg";
        break;
    }
  }

  return (
    <div className="popup-overlay popup-overla " style={{color:'white'}}>
      <div className="popup-content popup-conten">
        <div className="popup-header popup-heade">
          <h1>PREDICTION</h1>
        </div>
        <div className="popup-body popup-bod">
          <div style={{color:"#5da4f0", fontSize:"x-large"}}>
            <div className="container" style={{display: 'flex' }}>
              <div className="left-half" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 style={{ marginLeft: 20 }}>Disease Name: <span style={{ color: 'white' }}>{res}</span></h2>
                <img src={imageSource1} alt="Result Image" style={{ maxWidth: '100%', height: 350, marginTop: 20, width: 500}} />
              </div>
              {cause || prevention || precaution ? (
                <div className="right-half" style={{ flex: 1, marginTop: 80}}>
                  {cause && <h4 style={{ marginBottom: '15px' }}>Cause: <span style={{ color: 'white' }}>{cause}</span></h4>}
                  {prevention && <h4 style={{ marginBottom: '15px' }}>Prevention: <span style={{ color: 'white' }}>{prevention}</span></h4>}
                  {precaution && <h4 style={{ marginBottom: '10px' }}>Precaution: <span style={{ color: 'white' }}>{precaution}</span></h4>}
                </div>
              ) : (
                <div className="right-half" style={{ flex: 1, marginTop: 80}}>
                  <h2><span style={{ color: 'white' }}>{text}</span></h2>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="popup-footer popup-foote ">
          <button className="btn btn-primary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmptyPopup;
