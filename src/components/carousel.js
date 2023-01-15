import React, { useState } from "react";
import { SlideImage, StyledSlider } from "./SlideImage";

import {
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";

const Carousel = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };

  return (
    <StyledSlider>
      <FaChevronLeft
        className="left-arrow"
        onClick={prevSlide}
      />
    
      {slides.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
                <>
                <SlideImage src={slide.image} alt="" />
                <div className="title-container">
                    <h1>{slide.title}</h1>
                    <p>{slide.subTitle}</p>
                </div>
                </>
              
            )}
          </div>
        );
      })}
        <FaChevronRight
        className="right-arrow"
        onClick={nextSlide}
      />
    </StyledSlider>
  );
};

export default Carousel;
