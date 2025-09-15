"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { formatDate } from "../utils";

const BlogSlider = ({ blogs }) => {
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
    arrows: blogs?.length > 1,
    infinite: blogs?.length > 1,
    autoplay: blogs?.length > 1,
    autoplaySpeed: 3000,
    initialSlide: 1,
    slidesToShow: Math.min(blogs?.length || 1, 3),
    slidesToScroll: blogs?.length > 1 ? 2 : 1,
    arrows: true,
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
      <Slider {...blogSlider} className="blogSlider">
        {blogs?.map((item, index) => (
          <Link
            href={`blogs/${item?.meta?.slug}`}
            prefetch
            className="text-decoration-none"
          >
            <div className="blogitem" key={index}>
              <div className="blogImg">
                <img
                  src={
                    item?.images?.thumbnail
                      ? item?.images?.thumbnail
                      : "/assets/images/fallBack.jpeg"
                  }
                  alt="AiForlastmile"
                />
              </div>
              <div className="blogContent">
                <h5>{item?.tags[0]}</h5>
                <h2>{item?.title}</h2>
                <p>
                  {formatDate(item?.date)} - {item?.estimated_read_time}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default BlogSlider;
