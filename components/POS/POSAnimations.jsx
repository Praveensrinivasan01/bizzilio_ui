"use client";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const POSAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {      const checked = document.querySelector(".posBnrBg");
      if (!!checked) {
        gsap.from(checked, {
          y: 100,
          ease: "power1.out",
          scrollTrigger: {
            trigger: checked,
            start: "top 70%",
            end: "top 50%",
            scrub: 2,
          },
          skewY: 5,
        });
      }

      const inventoryItem = document.querySelectorAll(".inventoryItem");
      inventoryItem.forEach((item, index) => {
        gsap.from(item, {
          y: 100,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "top 70%",
            scrub: 2,
          },
          skewY: 5,
        });
      });

      const safeSupported_item = document.querySelectorAll(
        ".safeSupported_item"
      );
      safeSupported_item.forEach((item, index) => {
        gsap.from(item, {
          y: 100,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "top 70%",
            scrub: 2,
          },
          skewY: 5,
        });
      });

      const productCatalogueItem = document.querySelectorAll(
        ".productCatalogueItem"
      );
      productCatalogueItem.forEach((item, index) => {
        gsap.from(item, {
          y: 100,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "top 70%",
            scrub: 2,
          },
          skewY: 5,
        });
      });

      const posApplications_item = document.querySelectorAll(
        ".posApplications_item"
      );
      posApplications_item.forEach((item, index) => {
        gsap.from(item, {
          y: 100,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "top 70%",
            scrub: 2,
          },
          skewY: 5,
        });
      });
    })
  });

  return null; // This component doesn't render anything
};

export default POSAnimations;
