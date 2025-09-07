import React, { useState, useRef } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const HardwareSlider = () => {


    const sliderRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    // const [imgSize, setImgSize] = useState({ width: 300, height: 300 });

    const hardware = [
        "Printer",
        "Weighing Scale",
        "Scanners",
        "Cash Drawer",
    ];

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
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (_, next) => setCurrentIndex(next),
    };

    const handleTabClick = (index) => {
        sliderRef.current.slickGoTo(index);
        setCurrentIndex(index);
    };



    return (
        <>
           









            <div className="mb_70">

             
                <div className='hardwareTab'>
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
                          
                            <video width="100%" height="auto" autoPlay loop muted playsInline >
                                <source src={src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>


                        </div>
                    ))}
                </Slider>
            </div>




        </>
    )
}

export default HardwareSlider
