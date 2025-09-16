"use client";

import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HardwareSlider = () => {
  const sliderRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [imgSize, setImgSize] = useState({ width: 300, height: 300 });

  const hardware = ["Printer", "Weighing Scale", "Scanners", "Cash Drawer"];

  const videos = [
    "/assets/images/videoOne.mp4",
    "/assets/images/videoTwo.mp4",
    "/assets/images/videoThree.mp4",
    "/assets/images/videoFour.mp4",
  ];

  const hardwareSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: "150px",
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: false,
    afterChange: (next) => setCurrentIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          // slidesToShow: Math.min(2, blogCount),
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          // slidesToShow: Math.min(2, blogCount),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
          centerMode: false,
        },
      },
    ],
  };
  useEffect(() => {
    const videosEls = document.querySelectorAll(".item video");
    videosEls.forEach((video, i) => {
      if (i === currentIndex) {
        video.play().catch(() => {});
      }
    });
  }, [currentIndex]);

  const handleTabClick = (index) => {
    sliderRef.current.slickGoTo(index);
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="mb_70 hardwareSlider">
        <div className="hardwareTab">
          <ul>
            {hardware.map((item, index) => (
              <li key={index}>
                <button
                  className={currentIndex === index ? "active" : ""}
                  onClick={() => handleTabClick(index)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <Slider ref={sliderRef} {...hardwareSlider}>
          {videos.map((src, index) => (
            <div className="item" key={index}>
              <video
                width="100%"
                height="auto"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default HardwareSlider;
