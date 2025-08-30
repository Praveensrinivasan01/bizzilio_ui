"use client";

import { useRef, useState } from 'react'
import Slider from 'react-slick'

const IndustryTabsSlider = () => {
  const sliderRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  
  const industries = [
    "Jewelry & Accessories",
    "Food & Beverages",
    "Electronics",
    "Toys & Games",
    "Fashion",
  ];

  const images = [
    "/assets/images/mobScreen_1.jpg",
    "/assets/images/mobScreen_2.jpg",
    "/assets/images/mobScreen_3.jpg",
    "/assets/images/mobScreen_4.jpg",
    "/assets/images/mobScreen_5.jpg",
  ];

  const industriesSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_, next) => setActiveIndex(next),
  };

  const handleTabClick = (index) => {
    sliderRef.current.slickGoTo(index);
    setActiveIndex(index);
  };

  return (
    <>
      <ul className="coveringIndustriesTabs">
        {industries.map((item, index) => (
          <li key={index}>
            <button 
              className={activeIndex === index ? "active" : ""} 
              onClick={() => handleTabClick(index)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

      <Slider ref={sliderRef} {...industriesSlider} className="mobileScreenSlider">
        {images.map((src, index) => (
          <div className="item" key={index}>
            <img src={src} alt={`Industry ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </>
  )
}

export default IndustryTabsSlider