"use client";

import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";

export default function BizzilioCycle() {
  const gsapTimeLineBuild = () =>
    gsap.timeline({
      defaults: { ease: "none" },
      repeat: -1,
      repeatDelay: 1,
    });

  useGSAP(() => {
    const bizziloCycleItem = document.querySelectorAll(".bizziloCycleItem");

    gsap.registerPlugin(DrawSVGPlugin);
    let tl1 = gsapTimeLineBuild();
    let tl2 = gsapTimeLineBuild();
    let tl3 = gsapTimeLineBuild();
    tl1
      .fromTo(
        "#mask",
        { drawSVG: "100% 0%" },
        { drawSVG: "100% 100%", duration: 1 }
      )
      .fromTo(
        "#mask2",
        { drawSVG: "100% 100%" },
        { drawSVG: "0% 100%", duration: 1 }
      )
      .fromTo(
        "#mask3",
        { drawSVG: "100% 100%" },
        { drawSVG: "0% 100%", duration: 1 }
      )
      .fromTo(
        "#mask4",
        { drawSVG: "100% 0%" },
        { drawSVG: "100% 100%", duration: 1 }
      )
      .fromTo(
        "#mask5",
        { drawSVG: "100% 0%" },
        { drawSVG: "100% 100%", duration: 1 }
      )
      .fromTo(
        "#mask6",
        { drawSVG: "100% 0%" },
        { drawSVG: "100% 100%", duration: 1 }
      )
      .fromTo(
        "#mask7",
        { drawSVG: "100% 100%" },
        { drawSVG: "0% 100%", duration: 1 },
        ">"
      );

    tl2
      .fromTo(
        "#sales-mask-one",
        { drawSVG: "100% 100%" },
        { drawSVG: "0% 100%", duration: 1 },
        0
      )
      .fromTo(
        "#sales-mask-two",
        { drawSVG: "100% 100%" },
        { drawSVG: "0% 100%", duration: 1 },
        0
      )
      .fromTo(
        "#sales-mask-three",
        { drawSVG: "100% 100%" },
        { drawSVG: "0% 100%", duration: 1 },
        0
      )
      .fromTo(
        "#sales-mask-four",
        { drawSVG: "100% 100%" },
        { drawSVG: "0% 100%", duration: 1 },
        0
      )
      .fromTo(
        "#sales-mask-five",
        { drawSVG: "100% 100%" },
        { drawSVG: "0% 100%", duration: 1 }
      )
      .fromTo(
        "#sales-mask-six",
        { drawSVG: "100% 0%" },
        { drawSVG: "100% 100%", duration: 1 }
      )
      .fromTo(
        "#sales-mask-seven",
        { drawSVG: "100% 0%" },
        { drawSVG: "100% 100%", duration: 2 }
      )
      .fromTo(
        "#sales-mask-eight",
        { drawSVG: "100% 100%" },
        { drawSVG: "0% 100%", duration: 1 }
      )
      .fromTo(
        "#sales-mask-nine",
        { drawSVG: "100% 100%" },
        { drawSVG: "0% 100%", duration: 1 }
      );

    // tl3
    //   .fromTo(
    //     "#bsales-mask-one",
    //     { drawSVG: "100% 0%" },
    //     {
    //       drawSVG: "100% 100%",
    //       duration: 1,
    //       onComplete: () => {
    //         // Target the first item's img and fade in
    //         let img = gsap.timeline();
    //         img
    //           .to(".b2bSalesItem:nth-child(2) img", {
    //             opacity: 1,
    //             border: "1px solid #FFF",
    //             boxShadow: "0 0 12px 0 rgba(0, 0, 0, 0.14)",
    //             duration: 0.3,
    //           })
    //           .to(".b2bSalesItem:nth-child(2) img", {
    //             opacity: 0.3,
    //             border: "none",
    //             boxShadow: "none",
    //             duration: 0.3,
    //             delay: 0.5,
    //           });
    //       },
    //     }
    //   )
    //   .fromTo(
    //     "#bsales-mask-two",
    //     { drawSVG: "100% 100%" },
    //     { drawSVG: "0% 100%", duration: 1 }
    //   )
    //   .fromTo(
    //     "#bsales-mask-three",
    //     { drawSVG: "100% 0%" },
    //     { drawSVG: "100% 100%", duration: 1 }
    //   )
    //   .fromTo(
    //     "#bsales-mask-four",
    //     { drawSVG: "100% 0%" },
    //     { drawSVG: "100% 100%", duration: 1 }
    //   )
    //   .fromTo(
    //     "#bsales-mask-five",
    //     { drawSVG: "100% 0%" },
    //     { drawSVG: "100% 100%", duration: 1 }
    //   )
    //   .fromTo(
    //     "#bsales-mask-six",
    //     { drawSVG: "100% 100%" },
    //     { drawSVG: "0% 100%", duration: 1 }
    //   )
    //   .fromTo(
    //     "#bsales-mask-seven",
    //     { drawSVG: "100% 0%" },
    //     { drawSVG: "100% 100%", duration: 1 }
    //   );

    const maskIds = [
      "bsales-mask-one",
      "bsales-mask-two",
      "bsales-mask-three",
      "bsales-mask-four",
      "bsales-mask-five",
      "bsales-mask-six",
      "bsales-mask-seven",
      "bsales-mask-eight",
    ];

    const childIndexMap = [2, 3, 4, 5, 6, 7, 8, 9];

    // Step 0: make the first child always visible
    const firstItem = `.b2bSalesWorkflow > div:nth-child(1)`;
    gsap.set(firstItem, {
      opacity: 1,
      border: "1px solid #DDD",
      boxShadow: "0 0 12px 0 rgba(0,0,0,0.14)",
      position: "absolute",
      width: "94px",
      height: "94px",
      borderRadius: "12px",
      background: "#FFF",
      padding: "12px",
      textAlign: "center",
      zIndex: 1,
    });
    gsap.set(`${firstItem} h5`, { opacity: 1 });

    const otherItems = `.b2bSalesWorkflow > div:not(:nth-child(1))`;
    gsap.set(otherItems, {
      opacity: 0.3,
      border: "1px solid #DDD",
      boxShadow: "0 0 12px 0 rgba(0,0,0,0.14)",
      position: "absolute",
      width: "94px",
      height: "94px",
      borderRadius: "12px",
      background: "#FFF",
      padding: "12px",
      textAlign: "center",
      zIndex: 1,
    });
    gsap.set(`${otherItems} h5`, { opacity: 0 });

    maskIds.forEach((maskId, i) => {
      //   if (i === 0) return; // skip first child, already visible

      const isReverse =
        maskId === "bsales-mask-two" || maskId === "bsales-mask-six";
      const fromVal = isReverse ? "100% 100%" : "100% 0%";
      const toVal = isReverse ? "0% 100%" : "100% 100%";

      tl3.fromTo(
        `#${maskId}`,
        { drawSVG: fromVal },
        {
          drawSVG: toVal,
          duration: i == maskIds.length - 1 ? 0.3 : 1,
          onComplete: () => {
            const itemSelector = `.b2bSalesWorkflow > div:nth-child(${childIndexMap[i]})`;
            const h5Selector = `${itemSelector} h5`;

            // Fade in current div + h5
            gsap.to(itemSelector, {
              opacity: 1,
              border: "1px solid #FFF",
              boxShadow: "0 0 12px 0 rgba(0,0,0,0.14)",
              position: "absolute",
              width: "94px",
              height: "94px",
              borderRadius: "12px",
              background: "#FFF",
              padding: "12px",
              textAlign: "center",
              zIndex: 1,
              duration: 0.3,
            });
            gsap.to(h5Selector, { opacity: 1, duration: 0.3 });

            // If last child, fade out all others except first
            if (i === maskIds.length - 1) {
              setTimeout(() => {
                const otherItems = `.b2bSalesWorkflow > div:not(:nth-child(1))`;
                gsap.to(otherItems, {
                  opacity: 1,
                  border: "1px solid #DDD",
                  boxShadow: "none",
                  duration: 0.5,
                });
                const otherH5 = `.b2bSalesWorkflow > div:not(:nth-child(1)):not(:nth-child(${childIndexMap[i]})) h5`;
                gsap.to(otherH5, { opacity: 0, duration: 0.3 });
              }, 1000);
            }
          },
        }
      );
    });
  });

  return (
    <div className="">
      <div className="bizziloCycleFrame">
        <div>
          <span>Bizzilo Cycle</span>
          <h2>Procurement</h2>
          <p className="fontSize16 fontWeight400 ruinedSmoresText_clr">
            Your success-driven ally, offering tailored solutions, expertise,{" "}
            <br className="brHideOnMobile" />
            and cutting-edge tech for efficient, secure, and innovative
            outcomes.
          </p>
        </div>
        <div className="cycleStepperFrame">
          <div className="procurementWorkflow">
            <div className="bizziloCycleItem">
              <svg
                className="firstprocurement"
                xmlns="http://www.w3.org/2000/svg"
                width="102"
                height="66"
                viewBox="0 0 102 66"
                fill="none"
              >
                <path
                  className="firstprocurementPath"
                  d="M101 0V45C101 56.0457 92.0457 65 81 65H0"
                  stroke="#4791DB"
                  stroke-width="2"
                />
                <path
                  id="mask"
                  d="M101 0V45C101 56.0457 92.0457 65 81 65H0"
                  stroke="#F2F2F2"
                  stroke-width="2"
                />
              </svg>

              <img
                src="/assets/images/procurement/purchase_Requisition.png"
                alt="purchase_Requisition"
              />
              <h5>Purchase Requisition</h5>
            </div>

            <div className="bizziloCycleItem">
              <svg
                className="secondprocurement"
                xmlns="http://www.w3.org/2000/svg"
                width="147"
                height="73"
                viewBox="0 0 147 73"
                fill="none"
              >
                <path
                  d="M147 72L21 72C9.95431 72 0.999998 63.0457 0.999999 52L1 -6.38186e-06"
                  stroke="#F2F2F2"
                  stroke-width="2"
                />
                <path
                  id="mask2"
                  d="M147 72L21 72C9.95431 72 0.999998 63.0457 0.999999 52L1 -6.38186e-06"
                  stroke="#4791DB"
                  stroke-width="2"
                />
              </svg>
              <img
                src="/assets/images/procurement/approvalWorkflow.png"
                alt="approvalWorkflow"
              />
              <h5>Approval Workflow</h5>
            </div>
            <div className="bizziloCycleItem">
              <svg
                className="thirdprocurement"
                xmlns="http://www.w3.org/2000/svg"
                width="95"
                height="143"
                viewBox="0 0 95 143"
                fill="none"
              >
                <path
                  d="M93.7275 0.93211L93.9186 121.477C93.9361 132.523 84.996 141.492 73.9504 141.509L0.618327 141.625"
                  stroke="#F2F2F2"
                  stroke-width="2"
                />
                <path
                  id="mask3"
                  d="M93.7275 0.93211L93.9186 121.477C93.9361 132.523 84.996 141.492 73.9504 141.509L0.618327 141.625"
                  stroke="#4791DB"
                  stroke-width="2"
                />
              </svg>
              <img
                src="/assets/images/procurement/purchaseOrder_creation.png"
                alt="purchaseOrder_creation"
              />
            </div>

            <div className="bizziloCycleItem">
              <svg
                className="fourthprocurement"
                xmlns="http://www.w3.org/2000/svg"
                width="174"
                height="82"
                viewBox="0 0 174 82"
                fill="none"
              >
                <path
                  d="M1.24272 0.000302809L1.00717 60.5004C0.964099 71.5637 9.91104 80.5602 20.9744 80.5782L173.551 80.8272"
                  stroke="#4791DB"
                  stroke-width="2"
                />
                <path
                  id="mask4"
                  d="M1.24272 0.000302809L1.00717 60.5004C0.964099 71.5637 9.91104 80.5602 20.9744 80.5782L173.551 80.8272"
                  stroke="#F2F2F2"
                  stroke-width="2"
                />
              </svg>

              <img
                src="/assets/images/procurement/vendorSelection.png"
                alt="vendorSelection"
              />
            </div>
            <div className="bizziloCycleItem">
              <svg
                className="fiveprocurement"
                xmlns="http://www.w3.org/2000/svg"
                width="205"
                height="129"
                viewBox="0 0 205 129"
                fill="none"
              >
                <path
                  d="M203.11 0.595472L203.241 107.693C203.255 118.736 194.316 127.7 183.273 127.717L0.201488 128.008"
                  stroke="#4791DB"
                  stroke-width="2"
                />
                <path
                  id="mask5"
                  d="M203.11 0.595472L203.241 107.693C203.255 118.736 194.316 127.7 183.273 127.717L0.201488 128.008"
                  stroke="#F2F2F2"
                  stroke-width="2"
                />
              </svg>

              <img
                src="/assets/images/procurement/goodsReceivedNote.png"
                alt="goodsReceivedNote"
              />
            </div>

            <div className="bizziloCycleItem">
              <svg
                className="sixthprocurement"
                xmlns="http://www.w3.org/2000/svg"
                width="177"
                height="65"
                viewBox="0 0 177 65"
                fill="none"
              >
                <path
                  d="M177 0.999995L21 1C9.9543 1 0.999993 9.95431 0.999993 21L0.999995 65"
                  stroke="#4791DB"
                  stroke-width="2"
                />
                <path
                  id="mask6"
                  d="M177 0.999995L21 1C9.9543 1 0.999993 9.95431 0.999993 21L0.999995 65"
                  stroke="#F2F2F2"
                  stroke-width="2"
                />
              </svg>

              <img
                src="/assets/images/procurement/payment_Processing.png"
                alt="payment_Processing"
              />
            </div>

            <div className="bizziloCycleItem">
              <svg
                className="seventhprocurement"
                xmlns="http://www.w3.org/2000/svg"
                width="177"
                height="65"
                viewBox="0 0 177 65"
                fill="none"
              >
                <path
                  d="M177 64L21 64C9.9543 64 0.999993 55.0457 0.999993 44L0.999995 -7.6932e-06"
                  stroke="#F2F2F2"
                  stroke-width="2"
                />
                <path
                  id="mask7"
                  d="M177 64L21 64C9.9543 64 0.999993 55.0457 0.999993 44L0.999995 -7.6932e-06"
                  stroke="#4791DB"
                  stroke-width="2"
                />
              </svg>

              <img
                src="/assets/images/procurement/invoiceMatching.png"
                alt="invoiceMatching"
              />
            </div>
            <div className="bizziloCycleItem ">
              <img
                src="/assets/images/procurement/accountingReporting.png"
                alt="accountingReporting"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bizziloCycleFrame">
        <div>
          <span>Bizzilo Cycle</span>
          <h2>Sales</h2>
          <p className="fontSize16 fontWeight400 ruinedSmoresText_clr">
            Your success-driven ally, offering tailored solutions, expertise,{" "}
            <br className="brHideOnMobile" />
            and cutting-edge tech for efficient, secure, and innovative
            outcomes.
          </p>
        </div>
        <div className="cycleStepperFrame">
          <div className="salesWorkflow">
            <div className="salesItem">
              <svg
                className="firstSales"
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="130"
                viewBox="0 0 2 130"
                fill="none"
              >
                <path stroke="#F2F2F2" d="M1 0V130" stroke-width="2" />
                <path
                  id="sales-mask-one"
                  stroke="#F89E64"
                  d="M1 0V130"
                  stroke-width="2"
                />
              </svg>
              <img src="/assets/images/sales/posBlack.svg" alt="pos" />
              <h5>POS</h5>
            </div>
            <div className="salesItem">
              <svg
                className="secondSales"
                xmlns="http://www.w3.org/2000/svg"
                width="143"
                height="73"
                viewBox="0 0 143 73"
                fill="none"
              >
                <path
                  d="M3.14722e-06 0.999992L122 0.999998C133.046 0.999998 142 9.9543 142 21L142 73"
                  stroke="#F2F2F2"
                  stroke-width="2"
                />
                <path
                  id="sales-mask-two"
                  d="M3.14722e-06 0.999992L122 0.999998C133.046 0.999998 142 9.9543 142 21L142 73"
                  stroke="#F89E64"
                  stroke-width="2"
                />
              </svg>
              <img src="/assets/images/sales/online.svg" alt="online" />
              <h5>Online</h5>
            </div>
            <div className="salesItem">
              <svg
                className="thirdsales"
                xmlns="http://www.w3.org/2000/svg"
                width="96"
                height="2"
                viewBox="0 0 96 2"
                fill="none"
              >
                <path d="M0 1L96 1" stroke="#F2F2F2" stroke-width="2" />
                <path
                  id="sales-mask-three"
                  d="M0 1L96 1"
                  stroke="#F89E64"
                  stroke-width="2"
                />
              </svg>
              <img
                src="/assets/images/sales/marketplaces.svg"
                alt="marketplaces"
              />
              <h5>Marketplaces</h5>
            </div>
            <div className="salesItem">
              <svg
                className="fourthsales"
                xmlns="http://www.w3.org/2000/svg"
                width="95"
                height="143"
                viewBox="0 0 95 143"
                fill="none"
              >
                <path
                  d="M93.7275 0.93211L93.9186 121.477C93.9361 132.523 84.996 141.492 73.9504 141.509L0.618327 141.625"
                  stroke="#F2F2F2"
                  stroke-width="2"
                />
                <path
                  id="sales-mask-four"
                  d="M93.7275 0.93211L93.9186 121.477C93.9361 132.523 84.996 141.492 73.9504 141.509L0.618327 141.625"
                  stroke="#F89E64"
                  stroke-width="2"
                />
              </svg>
              <img
                src="/assets/images/sales/received_SalesOrder.svg"
                alt="received sales order"
              />
              <h5>Received Sales Order</h5>
            </div>

            <div className="salesItem">
              <svg
                className="fifthsales"
                xmlns="http://www.w3.org/2000/svg"
                width="160"
                height="78"
                viewBox="0 0 160 78"
                fill="none"
              >
                <path
                  d="M158.722 77.2697L158.936 21.3035C158.979 10.2407 150.032 1.24486 138.969 1.2268L0.120518 1.00013"
                  stroke="#F2F2F2"
                  stroke-width="2"
                />
                <path
                  id="sales-mask-five"
                  d="M158.722 77.2697L158.936 21.3035C158.979 10.2407 150.032 1.24486 138.969 1.2268L0.120518 1.00013"
                  stroke="#F89E64"
                  stroke-width="2"
                />
              </svg>
              <img
                src="/assets/images/sales/createShipment.svg"
                alt="Create Shipment"
              />
              <h5>Create Shipment</h5>
            </div>

            <div className="salesItem">
              <svg
                className="sixthsales"
                xmlns="http://www.w3.org/2000/svg"
                width="63"
                height="129"
                viewBox="0 0 63 129"
                fill="none"
              >
                <path
                  d="M61.3321 -0.000448584L61.4904 107.092C61.5067 118.137 52.567 127.104 41.5221 127.121L0.885082 127.186"
                  stroke="#F89E64"
                  stroke-width="2"
                />
                <path
                  id="sales-mask-six"
                  d="M61.3321 -0.000448584L61.4904 107.092C61.5067 118.137 52.567 127.104 41.5221 127.121L0.885082 127.186"
                  stroke="#F2F2F2"
                  stroke-width="2"
                />
              </svg>
              <img src="/assets/images/sales/pick.svg" alt="Pick" />
              <h5>Pick</h5>
            </div>
            <div className="salesItem">
              <svg
                className="seventhsales"
                xmlns="http://www.w3.org/2000/svg"
                width="406"
                height="65"
                viewBox="0 0 406 65"
                fill="none"
              >
                <path
                  d="M406 0.999983L21 1C9.9543 1 1 9.95431 1 21L1 65"
                  stroke="#F89E64"
                  stroke-width="2"
                />
                <path
                  id="sales-mask-seven"
                  d="M406 0.999983L21 1C9.9543 1 1 9.95431 1 21L1 65"
                  stroke="#F2F2F2"
                  stroke-width="2"
                />
              </svg>
              <img src="/assets/images/sales/pack.svg" alt="pack" />
              <h5>Pack</h5>
            </div>
            <div className="salesItem">
              <svg
                className="eightsales"
                xmlns="http://www.w3.org/2000/svg"
                width="98"
                height="2"
                viewBox="0 0 98 2"
                fill="none"
              >
                <path
                  d="M98 1L-4.38094e-06 1"
                  stroke="#F2F2F2"
                  stroke-width="2"
                />
                <path
                  id="sales-mask-eight"
                  d="M98 1L-4.38094e-06 1"
                  stroke="#F89E64"
                  stroke-width="2"
                />
              </svg>
              <img
                src="/assets/images/sales/shipping_black.svg"
                alt="Shipping"
              />
              <h5>Shipping</h5>
            </div>

            <div className="salesItem">
              <svg
                className="ninthsales"
                xmlns="http://www.w3.org/2000/svg"
                width="227"
                height="51"
                viewBox="0 0 227 51"
                fill="none"
              >
                <path
                  d="M225.639 50.1096L225.862 22.2271C225.951 11.1318 216.991 2.08491 205.895 2.06695L0.764604 1.73492"
                  stroke="#F2F2F2"
                  stroke-width="2"
                />
                <path
                  id="sales-mask-nine"
                  d="M225.639 50.1096L225.862 22.2271C225.951 11.1318 216.991 2.08491 205.895 2.06695L0.764604 1.73492"
                  stroke="#F89E64"
                  stroke-width="2"
                />
              </svg>
              <img
                src="/assets/images/sales/delivered_black.svg"
                alt="Delivered"
              />
              <h5>Delivered</h5>
            </div>

            <div className="salesItem">
              <img
                src="/assets/images/sales/sendInvoice.svg"
                alt="sendInvoice"
              />
              <h5>Send Invoice</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="bizziloCycleFrame">
        <div>
          <span>Bizzilo Cycle</span>
          <h2>B2B Sales</h2>
          <p className="fontSize16 fontWeight400 ruinedSmoresText_clr">
            Your success-driven ally, offering tailored solutions, expertise,{" "}
            <br className="brHideOnMobile" />
            and cutting-edge tech for efficient, secure, and innovative
            outcomes.
          </p>
        </div>
        <div className="cycleStepperFrame">
          <div className="b2bSalesWorkflow">
            <div className="b2bSalesItem">
              <svg
                className="b2bSalesone"
                xmlns="http://www.w3.org/2000/svg"
                width="152"
                height="73"
                viewBox="0 0 152 73"
                fill="none"
              >
                <path
                  d="M3.14722e-06 72L131 72C142.046 72 151 63.0457 151 52L151 -6.60042e-06"
                  stroke="#4E846C"
                  stroke-width="2"
                />
                <path
                  id="bsales-mask-one"
                  d="M3.14722e-06 72L131 72C142.046 72 151 63.0457 151 52L151 -6.60042e-06"
                  stroke="#F2F2F2"
                  stroke-width="2"
                />
              </svg>
              <img src="/assets/images/b2bSales/b2bOrder.svg" alt="B2B Order" />
              <h5>B2B Order</h5>
            </div>

            <div className="b2bSalesItem">
              <svg
                className="b2bSalesTwo"
                xmlns="http://www.w3.org/2000/svg"
                width="299"
                height="78"
                viewBox="0 0 299 78"
                fill="none"
              >
                <path
                  d="M296.964 77.4889L297.288 21.5625C297.353 10.4843 288.399 1.46443 277.321 1.44659L0.120518 1.00013"
                  stroke="#F2F2F2"
                  stroke-width="2"
                />
                <path
                  id="bsales-mask-two"
                  d="M296.964 77.4889L297.288 21.5625C297.353 10.4843 288.399 1.46443 277.321 1.44659L0.120518 1.00013"
                  stroke="#4E846C"
                  stroke-width="2"
                />
              </svg>

              <img
                src="/assets/images/b2bSales/orderEstimation.svg"
                alt="Order Estimation"
              />
              <h5>Order Estimation</h5>
            </div>

            <div className="b2bSalesItem">
              <svg
                className="b2bSalesThird"
                xmlns="http://www.w3.org/2000/svg"
                width="232"
                height="99"
                viewBox="0 0 232 99"
                fill="none"
              >
                <path
                  d="M230.649 -0.000794498L230.73 77.0327C230.741 88.0742 221.803 97.0362 210.761 97.0537L0.850597 97.3865"
                  stroke="#4E846C"
                  stroke-width="2"
                />
                <path
                  id="bsales-mask-three"
                  d="M230.649 -0.000794498L230.73 77.0327C230.741 88.0742 221.803 97.0362 210.761 97.0537L0.850597 97.3865"
                  stroke="#F2F2F2"
                  stroke-width="2"
                />
              </svg>
              <img
                src="/assets/images/b2bSales/orderRequest.svg"
                alt="Order Request"
              />
              <h5>Order Request</h5>
            </div>

            <div className="b2bSalesItem">
              <svg
                className="b2bSalesfourth"
                xmlns="http://www.w3.org/2000/svg"
                width="206"
                height="2"
                viewBox="0 0 206 2"
                fill="none"
              >
                <path
                  d="M205.5 1L0 0.99986"
                  stroke="#4E846C"
                  stroke-width="2"
                />
                <path
                  id="bsales-mask-four"
                  d="M205.5 1L0 0.99986"
                  stroke="#F2F2F2"
                  stroke-width="2"
                />
              </svg>
              <img
                src="/assets/images/b2bSales/productDelivered.svg"
                alt="Product Delivered"
              />
              <h5>Product Delivered</h5>
            </div>

            <div className="b2bSalesItem">
              <svg
                className="b2bSalesfifth"
                xmlns="http://www.w3.org/2000/svg"
                width="107"
                height="117"
                viewBox="0 0 107 117"
                fill="none"
              >
                <path
                  d="M1.15414 -8.60781e-05L0.996641 95.1834C0.978364 106.23 9.91868 115.199 20.9649 115.216L106.666 115.352"
                  stroke="#4E846C"
                  stroke-width="2"
                />
                <path
                  id="bsales-mask-five"
                  d="M1.15414 -8.60781e-05L0.996641 95.1834C0.978364 106.23 9.91868 115.199 20.9649 115.216L106.666 115.352"
                  stroke="#F2F2F2"
                  stroke-width="2"
                />
              </svg>
              <img
                src="/assets/images/b2bSales/sendEwayBill.svg"
                alt="Send Eway Bill"
              />
              <h5>Send Eway Bill</h5>
            </div>

            <div className="b2bSalesItem">
              <svg
                className="b2bSalessixth"
                xmlns="http://www.w3.org/2000/svg"
                width="323"
                height="2"
                viewBox="0 0 323 2"
                fill="none"
              >
                <path
                  d="M322.5 0.999257L-0.000183106 0.997388"
                  stroke="#F2F2F2"
                  stroke-width="2"
                />
                <path
                  id="bsales-mask-six"
                  d="M322.5 0.999257L-0.000183106 0.997388"
                  stroke="#4E846C"
                  stroke-width="2"
                />
              </svg>
              <img
                src="/assets/images/b2bSales/sendEwayBill.svg"
                alt="Send Invoice"
              />
              <h5>Send Invoice</h5>
            </div>

            <div className="b2bSalesItem">
              <svg
                className="b2bSalesSeventh"
                xmlns="http://www.w3.org/2000/svg"
                width="103"
                height="100"
                viewBox="0 0 103 100"
                fill="none"
              >
                <path
                  d="M101.649 0.000217102L101.751 78.0327C101.766 89.0746 92.829 98.039 81.7871 98.0588L0.305828 98.2045"
                  stroke="#4E846C"
                  stroke-width="2"
                />
                <path
                  id="bsales-mask-seven"
                  d="M101.649 0.000217102L101.751 78.0327C101.766 89.0746 92.829 98.039 81.7871 98.0588L0.305828 98.2045"
                  stroke="#F2F2F2"
                  stroke-width="2"
                />
              </svg>
              <img
                src="/assets/images/b2bSales/warehouse.svg"
                alt="Warehouse"
              />
              <h5>Warehouse</h5>
            </div>

            <div className="b2bSalesItem">
              <img src="/assets/images/b2bSales/tax.svg" alt="Tax" />
              <h5>Tax</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
