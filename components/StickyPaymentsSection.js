import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const StickyPaymentsSection = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const wrapperRef = useRef(null);
  useGSAP(() => {
    const width = window.innerWidth;
    gsap.set(".sticky_left", { y: 100 });

// //     const width = window.innerWidth;
    if (
      width > 768 &&
      rightRef.current &&
      wrapperRef.current &&
      leftRef.current
    ) {
      const rightContent = rightRef.current;
      const wrapper = wrapperRef.current;

      // Create the animation
      gsap.to(rightContent, {
        y: () => -(rightContent.scrollHeight - wrapper.scrollHeight + 150),
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: () => `+=${rightContent.scrollHeight - 350}`,
          scrub: true,
          pin: leftRef.current,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
      
    }

    // return () => {
    //   ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    // };
  }, []);



  return (
    <section className="payments_sec" ref={wrapperRef} id="payments">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 sticky_left" ref={leftRef}>
            <div className="mobspaceMb_24">
              <h2 className="fontSize44 fontWeight700 sootytext_clr mb_24">
                Offer customers more ways to pay
              </h2>
              <p className="fontSize18 fontWeight400 caviarText_clr">
                Accept payments through cards, UPI, wallets, net banking, or
                cash — all in one system. Give your customers the freedom to
                choose their preferred payment method and never miss a sale.
              </p>
            </div>
          </div>
          <div className="col-lg-8" ref={rightRef}>
            <div className="OfferCustomers_detail">
              <div className="row">
                <div className="col-lg-6">
                  <div className="offerCustomers_pay mb_34">
                    <h5>Accept payments through any mode</h5>
                    <p>
                      Enable customers to pay via UPI, cards, wallets, net
                      banking, or cash. Seamless checkout with all payment
                      options
                    </p>
                    <img
                      src="/assets/images/acceptpayments_throughanyMode.png"
                      alt="Accept payments through any mode"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="offerCustomers_pay mb_34">
                    <h5>Split payments across modes</h5>
                    <p>
                      Let customers pay using two or more methods like part cash
                      and part card, or UPI plus wallet.
                    </p>
                    <img
                      src="/assets/images/multiple_modes.png"
                      alt="Split payments across multiple modes"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="offerCustomers_pay mobspaceMb_24">
                    <h5>Extend credit with complete control</h5>
                    <p>
                      Allow trusted customers to buy now and pay later. Track
                      outstanding balances, set due dates, and ensure timely
                      collections.
                    </p>
                    <img
                      src="/assets/images/completecontrol.png"
                      alt="Extend credit with complete control"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="offerCustomers_pay">
                    <h5>Accept instant UPI payments</h5>
                    <p>
                      Let customers pay quickly by scanning a QR code or using
                      their UPI ID. Enjoy faster checkouts.
                    </p>
                    <img
                      src="/assets/images/payQuickly.png"
                      alt="Accept instant UPI payments"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyPaymentsSection;
