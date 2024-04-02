import React, { useRef } from "react";
import Slider from "react-slick";
import './Experience.css';
import { EXPERIENCE } from "../../Data/data";
import ExperienceCard from "./ExperienceCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  }

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  }
  
  return (
    <section id="experience" className="experience-container">
      <h5>Work Experience</h5>

      <div className="experience-content">
        <div className="arrow-right" onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>

        <div className="arrow-left" onClick={prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        
        <Slider ref={sliderRef} {...settings}>
          {EXPERIENCE.map((item) => (
            <ExperienceCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Experience;
