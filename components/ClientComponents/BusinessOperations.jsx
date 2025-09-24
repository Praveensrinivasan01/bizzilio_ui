"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BusinessOperations() {
  const mainAnimationRef = useRef(null);

  useGSAP(() => {
    const width = window.innerWidth;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      // Only run animation on desktop/tablet

      const cards = mainAnimationRef.current.querySelectorAll(
        ".businessOperationItem"
      );
      if (!cards || cards.length === 0) return;

      // gsap.set(cards, { y:-500 });

      let xValues, yValues;

      // Set position values based on screen width
      if (width >= 1600) {
        xValues = ["320%", "120%", "-60%"];
        yValues = ["-160%", "-180%", "-180%"];
      } else if (width >= 1366) {
        xValues = ["250%", "100%", "-50%"];
        yValues = ["-140%", "-160%", "-160%"];
      } else if (width >= 1024) {
        xValues = ["180%", "80%", "-40%"];
        yValues = ["-120%", "-140%", "-140%"];
      } else {
        xValues = ["150%", "70%", "-30%"];
        yValues = ["-100%", "-120%", "-120%"];
      }

      // Create a GSAP timeline for better control
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainAnimationRef.current,
          start: "top 90%",
          end: "bottom center",
          scrub: true,
        },
      });

      // Animate each card with its unique starting position
      cards.forEach((card, index) => {
        if (index < xValues.length) {
          tl.from(
            card,
            {
              x: xValues[index],
              y: yValues[index],
              rotate: index === 0 ? 25 : index === 1 ? 20 : 0,
              scale: 1,
              opacity: 1,
              duration: 1,
            },
            0
          ); // Start all animations at the same time
        }
      });

      // Clean up on component unmount
      // return () => {
      //   tl.kill();
      // };
    })
  }, []);

  return (
    <section className="brnImgAnimation">
      <div className="container">
        <div ref={mainAnimationRef}>
          <div className="row" style={{ justifyContent: "space-around" }}>
            <div className="col-lg-3">
              <div className="businessOperationItem mobspaceMb_24">
                <div className="bizOp_header">
                  <img
                    src="/assets/images/inventoryManagement.png"
                    alt="InventoryManagement"
                  />
                </div>
                <div className="bizOp_footer">
                  <h5>Inventory</h5>
                  <button className="explorebtn">
                    <span>Explore</span>
                    <img
                      src="/assets/images/linkArrow_icon.svg"
                      alt="LinkarrowIcon"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="businessOperationItem mobspaceMb_24">
                <div className="bizOp_header">
                  <img src="/assets/images/eCommerce.png" alt="E-commerce" />
                </div>
                <div className="bizOp_footer">
                  <h5>E-commerce</h5>
                  <button className="explorebtn">
                    <span>Explore</span>
                    <img
                      src="/assets/images/linkArrow_icon.svg"
                      alt="LinkarrowIcon"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="businessOperationItem">
                <div className="bizOp_header">
                  <img src="/assets/images/pos.png" alt="Pos" />
                </div>
                <div className="bizOp_footer">
                  <h5>POS</h5>
                  <button className="explorebtn">
                    <span>Explore</span>
                    <img
                      src="/assets/images/linkArrow_icon.svg"
                      alt="LinkarrowIcon"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

