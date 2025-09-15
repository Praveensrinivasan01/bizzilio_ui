"use client";
import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GoOmnichannelSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  let positionArr = [
    {
    x:-100,
    y:240
  },
    {
    x:-215,
    y:130
  },
    {
    x:-250,
    y:-15
  },
    {
    x:-240,
    y:-130
  },
    {
    x:-95,
    y:-240
  },
  
]

  useGSAP(() => {
    const width = window.innerWidth;
    const logoAnimationElements = document.querySelectorAll(".goOmniLogoList ul li");
    gsap.from(logoAnimationElements, {
      y: (i) => positionArr[i]?.y || 100,
      x: (i) => positionArr[i]?.x || -100,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".goOmniLogoList",
        start: "top 80%",
        end: "top 60%",
        scrub: 2,
      },
      // ease: "none",
    });
  });

  return (
    <section className="goOmnichannel_sec">
      <div className="container height100per">
        <div className="row alignItem_center height100per">
          <div className="col-lg-6">
            <div className="mobspaceMb_34">
              <h2>Go Omnichannel</h2>
              <h3>Sell Anywhere</h3>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="textalign_center">
              {/* <img
              src="/assets/images/goOmnichannel.png"
              alt="Goomnichannel"
            /> */}

              <div className="goOmnichannelFrame">
                <div className="mainLogo">
                  <img src="/assets/images/logoShort.png" alt="logoShort" />
                </div>
                <div>
                  <img
                    src="/assets/images/goOmnichannel_path.svg"
                    alt="goOmnichannel_path"
                  />
                </div>
                <div className="goOmniLogoList">
                  <ul>
                    <li className="goOmniLogoAnm">
                      <img src="/assets/images/cry_one.webp" alt="goOmniLogo" />
                    </li>
                    <li className="goOmniLogoAnm">
                      <img src="/assets/images/cry_one.webp" alt="goOmniLogo" />
                    </li >
                    <li className="goOmniLogoAnm">
                      <img src="/assets/images/cry_one.webp" alt="goOmniLogo" />
                    </li>
                    <li className="goOmniLogoAnm">
                      <img src="/assets/images/cry_one.webp" alt="goOmniLogo" />
                    </li>
                    <li className="goOmniLogoAnm">
                      <img src="/assets/images/cry_one.webp" alt="goOmniLogo" />
                    </li>
                    {/* <li>
                    <img
                      src="/assets/images/omniChannel/13.svg"
                      alt="goOmniLogo"
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/images/omniChannel/14.svg"
                      alt="goOmniLogo"
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/images/omniChannel/15.svg"
                      alt="goOmniLogo"
                    />
                  </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoOmnichannelSection;
