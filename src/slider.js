import React, { useRef, useEffect } from 'react';
import { TweenMax, Cubic } from 'gsap';
import './slider.css'

const Slider = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;
    startAnim(cards);
  }, []);

  const startAnim = (array) => {
    if (array.length >= 4) {
      TweenMax.fromTo(
        array[0],
        0.5,
        { x: 0, y: 0, opacity: 0.75 },
        {
          x: 0,
          y: -120,
          opacity: 0,
          zIndex: 0,
          delay: 0.03,
          ease: Cubic.easeInOut,
          onComplete: () => sortArray(array)
        }
      );

      TweenMax.fromTo(
        array[1],
        0.5,
        { x: 79, y: 125, opacity: 1, zIndex: 1 },
        {
          x: 0,
          y: 0,
          opacity: 0.75,
          zIndex: 0,
          boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)',
          ease: Cubic.easeInOut
        }
      );

      TweenMax.to(array[2], 0.5, {
        bezier: [
          { x: 0, y: 250 },
          { x: 65, y: 200 },
          { x: 79, y: 125 }
        ],
        boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)',
        zIndex: 1,
        opacity: 1,
        ease: Cubic.easeInOut
      });

      TweenMax.fromTo(
        array[3],
        0.5,
        { x: 0, y: 400, opacity: 0, zIndex: 0 },
        { x: 0, y: 250, opacity: 0.75, zIndex: 0, ease: Cubic.easeInOut }
      );
    } else {
      document.getElementById('card-slider').innerHTML =
        '<p>Sorry, carousel should contain more than 3 slides</p>';
    }
  };

  const sortArray = (array) => {
    clearTimeout(delay);
    const delay = setTimeout(() => {
      const firstElem = array.shift();
      array.push(firstElem);
      startAnim(array);
    }, 3000);
  };

  return (
    <div className="slider-wrap">
      <div id="card-slider" className="slider">
        <div ref={(ref) => (cardsRef.current[0] = ref)} className="slider-item">
          {/* Content for first slider item */}
        </div>
        <div ref={(ref) => (cardsRef.current[1] = ref)} className="slider-item">
          {/* Content for second slider item */}
        </div>
        {/* Repeat for other slider items */}
      </div>
    </div>
  );
};

export default Slider;
