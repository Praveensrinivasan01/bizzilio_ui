"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OnePOSEveryIndustry = () => {
  const onePoseveryIndustrySlider = {
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: "200px",
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
          centerMode: false,
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

  return (
    <section className="onePos_everyIndustry">
      <div className="container">
        <div className="row mb_70">
          <div className="col-lg-9">
            <h2 className="fontSize44 fontWeight700 sootytext_clr mb_16s">
              One POS, Every Industry
            </h2>
            <p className="fontSize24 fontWeight400 caviarText_clr">
              Whether you run a fashion boutique, a grocery store, a café, or a
              pharmacy, Bizzilo POS adapts to your business. A single platform
              designed to simplify sales, billing, and operations—no matter your
              industry.
            </p>
          </div>
        </div>
      </div>

      <Slider
        className="onePosEveryIndustrySlider"
        {...onePoseveryIndustrySlider}
      >
        <div className="onePosEveryIndustryItem">
          <img src="/assets/images/healthPharmacy.png" />
          <div className="onePosEveryInd_Content">
            <h3> Health & Pharmacy</h3>
          </div>
        </div>
        <div className="onePosEveryIndustryItem">
          <img src="/assets/images/superMarket.png" />
          <div className="onePosEveryInd_Content">
            <h3>Super Market</h3>
          </div>
        </div>
        <div className="onePosEveryIndustryItem">
          <img src="/assets/images/apparel.png" />
          <div className="onePosEveryInd_Content">
            <h3>Apparel</h3>
          </div>
        </div>
        <div className="onePosEveryIndustryItem">
          <img src="/assets/images/grocery.png" />
          <div className="onePosEveryInd_Content">
            <h3>Grocery</h3>
          </div>
        </div>
        <div className="onePosEveryIndustryItem">
          <img src="/assets/images/electronics.png" />
          <div className="onePosEveryInd_Content">
            <h3>Electronics</h3>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default OnePOSEveryIndustry;
