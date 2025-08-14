"use client";
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { fetchBlogs } from "../lib/api"; // import fetchBlogs

const CaseStudySlider = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetchBlogs();
            setBlogs(res?.results || []);
        };
        fetchData();
    }, []);

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

    const blogSlider = {
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        initialSlide: 1,
        slidesToShow: 3,
        slidesToScroll: 2,
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

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <div>
            <Slider {...blogSlider} className="caseStudySlider">
                {blogs?.map((item, index) => (
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
