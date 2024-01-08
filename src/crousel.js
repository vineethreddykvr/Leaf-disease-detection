import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import './crousel.css';

function Croul() {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://t4.ftcdn.net/jpg/03/57/54/77/360_F_357547735_aTZvm1ec8Uzgsd1aTukmFiOw4iXX2aKS.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Leaf disease prediction</h3>
          <p> "Empowering farmers with knowledge to protect their harvests and feilds."</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://apicms.thestar.com.my/uploads/images/2023/02/17/1944901.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>AgriPath-CropScan</h3>
          <p>"Harnessing data-driven insights to safeguard crops from diseases and boost agricultural productivity."</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://indiaclimatedialogue.net/wp-content/uploads/2019/01/Pic01.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>PlantProphet-AgriRisk</h3>
          <p>
          "The power of predictive analytics in agriculture: Identifying and combating crop diseases for sustainable farming."



</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Croul;
