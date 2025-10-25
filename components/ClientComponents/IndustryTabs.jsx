"use client";

import { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';

export default function IndustryTabs() {
  const sliderRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [imgSize, setImgSize] = useState({ width: 300, height: 300 });
  

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);


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

  // const handleTabClick = (index) => {
  //   sliderRef.current.slickGoTo(index);
  //   setActiveIndex(index);
  // };

  // ✅ Manual click handler
  const handleTabClick = (index) => {
    setActiveIndex(index);
    nav2?.slickGoTo(index); // sync image slider
  };
  // 👇 NEW: carousel for tab buttons
  const tabCarouselSettings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    focusOnSelect: true, // ✅ lets user click tabs
    centerMode: true, 
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    beforeChange: (_, next) => setActiveIndex(next),

  };
  return (
    <section className='onlineStoreBizzilo_sec'>
      <div className='container'>
        <h2 className='fontSize36 ruinedSmoresText_clr textalign_center fontWeight600 mb_24'>
          Covering 20+ Industries
        </h2>

        <div className='textalign_center mb_70'>
          {/* <ul className="coveringIndustriesTabs">
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
          </ul> */}

          {/* <Slider {...tabCarouselSettings} className="coveringIndustriesTabsSlider mb_40">
            {industries.map((item, index) => (
              <div key={index} className="tabSlideItem">
                <button
                  className={activeIndex === index ? "active" : ""}
                  onClick={() => handleTabClick(index)}
                >
                  {item}
                </button>
              </div>
            ))}
          </Slider> */}


          <Slider
            {...tabCarouselSettings}
            asNavFor={nav2}
            ref={(slider1) => setNav1(slider1)}
            className="coveringIndustriesTabsSlider mb_40"
          >
            {industries.map((item, index) => (
              <div key={index} className="tabSlideItem">
                <button
                  className={activeIndex === index ? "active" : ""}
                  onClick={() => handleTabClick(index)}
                >
                  {item}
                </button>
              </div>
            ))}
          </Slider>

          <Slider asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)} {...industriesSlider} className="mobileScreenSlider">
            {images.map((src, index) => (
              <div className="item" key={index}>
                <img 
                  src={src} 
                  alt={index} 
                  onLoad={e => {
                    setImgSize({
                      width: e.target.naturalWidth,
                      height: e.target.naturalHeight
                    });
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className='onlineStoreBizzilo_item'>
          <div className='row alignItem_center directionColumnReverse'>
            <div className='col-lg-6'>
              <div className='onlineStore_img'>
                <img src="/assets/images/createEcom_drag_drop.jpg" alt='Full Brand Cgustomizion' />
              </div>
            </div>
            <div className='col-lg-5 offset-lg-1'>
              <div className='onlineStore_Content mobspaceMb_34'>
                <h3>Create Ecom with Drag & Drop</h3>
                <p>Save time and costs on coding and confidently run your store on zero code. Pick a domain, list your products, and start selling - it is as easy as it sounds.</p>
                {/* <Link href="#" className='brightNavyBlueText_btn'>
                  <span>More Details</span>  
                  <img src="/assets/images/leftarrow.svg" alt='leftarrow' />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
