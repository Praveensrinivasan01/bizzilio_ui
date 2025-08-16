"use client";
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { fetchBlogs } from "../lib/api"; // import fetchBlogs

const CaseStudySlider = ({ blogs = [] }) => {

    const filteredBlogs = blogs?.filter((ele)=>{
        return ele.categories.includes("Case Study");
    })

    // console.log(filteredBlogs,"filteredBlogs")


    const NextArrow = ({ onClick }) => (
        <div className="custom-arrow next" onClick={onClick}>
            ▶
        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div className="custom-arrow prev" onClick={onClick}>
            ◀
        </div>
    );


    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

      const caseStudySliderSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        initialSlide: 1,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <div>
            <Slider {...caseStudySliderSettings} className="caseStudySlider">
                {filteredBlogs?.map((item, index) => (
                    <div className="blogitem" key={index}>
                        <div className="blogImg">
                            <img src={item?.images?.thumbnail} alt="AiForlastmile" />
                        </div>
                        <div className="blogContent">
                            <h5>{item?.tags[0]}</h5>
                            <h2>{item?.title}</h2>
                            <p>{formatDate(item?.date)} - {item?.estimated_read_time}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CaseStudySlider;
