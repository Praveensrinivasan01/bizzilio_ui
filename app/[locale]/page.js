"use client"
// import Image from "next/image";
// import Flipkart from "../../assets/images/flipkart.png";
// import Amazon from "../../assets/images/amazon.png";
// import Whatsapp from "../../assets/images/whatsapp.png";
// import Mainlogo from "../../assets/images/main_logo.png";
// import Poslogo from "../../assets/images/pos_logo.png";
// import Ecom from "../../assets/images/ecom.png";
import Marquee from "react-fast-marquee";
import BlogSlider from "../../components/BlogSlider";
import Testimonials from '../../components/Testimonials';
import ClientTabs from '../../components/ClientTabs';
import ClientTab from '../../components/ClientTab';
import { fetchBlogs } from "../../lib/api";

import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CaseStudySlider from "../../components/caseStudySlider";
import Link from "next/link";
import ScheduleDemo from "../../components/ScheduleDemo";
// import '../../components/card.css';

gsap.registerPlugin(ScrollTrigger)


export default function Home() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async (tag) => {
    const res = await fetchBlogs(tag);
    setResponse(res);
  };

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const mainAnimationRef = useRef(null);
  const rightContent = rightRef.current;
  const wrapper = wrapperRef.current;
  useGSAP(() => {
    const width = window.innerWidth;
    
    // Only run animation on desktop/tablet
    if (width <= 768 || !mainAnimationRef.current) return;
    
    const cards = mainAnimationRef.current.querySelectorAll(".businessOperationItem");
    if (!cards || cards.length === 0) return;
    
    let xValues, yValues;
    
    // Set position values based on screen width
    if (width >= 1600) {
      // Large desktops (1600px and above)
      xValues = ["320%", "120%", "-60%"];
      yValues = ["-120%", "-140%", "-140%"];
    } else if (width >= 1366) {
      // Medium desktops/laptops
      xValues = ["250%", "100%", "-50%"];
      yValues = ["-100%", "-120%", "-120%"];
    } else if (width >= 1024) {
      // Small laptops/tablets landscape
      xValues = ["180%", "80%", "-40%"];
      yValues = ["-80%", "-100%", "-100%"];
    } else {
      // Between 768 and 1023 — smaller desktops/tablets
      xValues = ["150%", "70%", "-30%"];
      yValues = ["-70%", "-80%", "-80%"];
    }
    
    // Create a GSAP timeline for better control
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainAnimationRef.current,
        start: "top 90%",
        end: "bottom center",
        scrub: true,
        // markers: true, // uncomment for debugging
      }
    });
    
    // Animate each card with its unique starting position
    cards.forEach((card, index) => {
      if (index < xValues.length) {
        tl.from(card, {
          x: xValues[index],
          y: yValues[index],
          rotate: index === 0 ? 25 : index === 1 ? 20 : 0,
          scale: 1,
          opacity: 1,
          // ease: "power2.out",
          duration: 1
        }, 0); // Start all animations at the same time
      }
    });

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
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: () => `+=${rightContent.scrollHeight - 100}`,
          scrub: true,
          pin: leftRef.current,
          anticipatePin: 1,
          invalidateOnRefresh: true, // ensures correct values on refresh/resize
        },
      });
    }
    
    // Clean up on component unmount
    return () => {
      tl.kill();
    };
  }, [])

  // useEffect(() => {
  //   const width = window.innerWidth;
  //   // if (width > 768) {
  //   ScrollTrigger.getAll().forEach(trigger => trigger.kill());

  //   const cards = mainAnimationRef.current.querySelectorAll(".businessOperationItem");

  //   // Disable animation on mobile devices (width < 768)
  //   if (width < 768) {

  //     cards.forEach(card => gsap.set(card, { clearProps: "all" }));
  //     return;
  //   }

  //   // if (
  //   //   width > 768 &&
  //   //   rightRef.current &&
  //   //   wrapperRef.current &&
  //   //   leftRef.current
  //   // ) {
  //   const rightContent = rightRef.current;
  //   const wrapper = wrapperRef.current;

  //   //   // Create the animation
  //   // gsap.to(rightContent, {
  //   //   y: () => -(rightContent.scrollHeight - wrapper.scrollHeight + 150),
  //   //   ease: 'none',
  //   //   scrollTrigger: {
  //   //     trigger: wrapper,
  //   //     start: 'top top',
  //   //     end: () => `+=${rightContent.scrollHeight - 100}`,
  //   //     scrub: true,
  //   //     pin: leftRef.current,
  //   //     anticipatePin: 1,
  //   //     invalidateOnRefresh: true, // ensures correct values on refresh/resize
  //   //   },
  //   // });
  //   // }

  //   // // Define percentage values for different viewport widths
  //   let xValues, yValues;
  //   if (width > 768) {
  //     if (width >= 1600) {
  //       // Large desktops (1600px and above)
  //       xValues = ["320%", "120%", "-60%"];
  //       yValues = ["-120%", "-140%", "-140%"];
  //     } else if (width >= 1366) {
  //       // Medium desktops/laptops
  //       xValues = ["250%", "100%", "-50%"];
  //       yValues = ["-100%", "-120%", "-120%"];
  //     } else if (width >= 1024) {
  //       // Small laptops/tablets landscape
  //       xValues = ["180%", "80%", "-40%"];
  //       yValues = ["-80%", "-100%", "-100%"];
  //     } else {
  //       // Between 768 and 1023 — smaller desktops/tablets
  //       xValues = ["150%", "70%", "-30%"];
  //       yValues = ["-70%", "-80%", "-80%"];
  //     }

  //     cards?.forEach((card, index) => {
  //       gsap?.from(card, {
  //         x: xValues[index],
  //         y: yValues[index],
  //         scrollTrigger: {
  //           trigger: card,
  //           start: "top top",
  //           scrub: 1,
  //           // markers: true, // uncomment for debugging
  //         },
  //         rotate: index === 0 ? 25 : index === 1 ? 20 : 0,
  //         scale: 1,
  //         opacity: 1,
  //         ease: "power2.out"
  //       });
  //     });

  //     gsap.from(".businessOperationItem", {
  //       scrollTrigger: {
  //         trigger: ".businessOperationItem",
  //         start: "top center",
  //         end: "bottom center",
  //         scrub: true
  //       },
  //       top: 0,
  //       left: 0,
  //       xPercent: 0,
  //       yPercent: 0,
  //       position: "relative",
  //       rotate: 0,
  //       scale: 1,
  //       opacity: 1,
  //       stagger: 0.2,
  //       ease: "power2.out"
  //     });
  //   }
  //   // }
  // }, []);


  // const leftRef = useRef(null);
  // const rightRef = useRef(null);
  // const wrapperRef = useRef(null);


  //   useEffect(() => {
  //   // Clean up previous triggers before creating new ones

  //   const width = window.innerWidth;
  //   if (
  //     width > 768 &&
  //     rightRef.current &&
  //     wrapperRef.current &&
  //     leftRef.current
  //   ) {
  //     const rightContent = rightRef.current;
  //     const wrapper = wrapperRef.current;

  //     // Create the animation
  //     gsap.to(rightContent, {
  //       y: () => -(rightContent.scrollHeight - wrapper.scrollHeight + 150),
  //       ease: 'none',
  //       scrollTrigger: {
  //         trigger: wrapper,
  //         start: 'top top',
  //         end: () => `+=${rightContent.scrollHeight - 100}`,
  //         scrub: true,
  //         pin: leftRef.current,
  //         anticipatePin: 1,
  //         invalidateOnRefresh: true, // ensures correct values on refresh/resize
  //       },
  //     });
  //   }

  //   // Clean up on unmount
  //   return () => {
  //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  //   };
  // }, [rightRef, wrapperRef, leftRef]);

  // useEffect(() => {
  //   const width = window.innerWidth;
  //   if (width > 768) {
  //     const rightContent = rightRef.current;
  //     const wrapper = wrapperRef.current;

  //     gsap.to(rightContent, {
  //       y: () => -(rightContent.scrollHeight - wrapper.scrollHeight + 150),
  //       ease: 'none',
  //       scrollTrigger: {
  //         trigger: wrapper,
  //         start: 'top top',
  //         end: () => `+=${rightContent.scrollHeight - 100}`,
  //         scrub: true,
  //         pin: leftRef.current,
  //         anticipatePin: 1,
  //       },
  //     });

  //     // return () => {
  //     //   ScrollTrigger.kill();
  //     // };
  //   }
  // }, []);



  const [show, setShow] = useState(false);


  return (
    <>
      {/* <CalEmbed
        calLink="bizzilo-product-demo"
        style={{ width: "100%", height: "100%", border: "0" }}
      />
      <iframe src="https://calendar.bizzilo.com/embed/team/bizzilo-product-demo/bizzilo-product-demo" height={600} width={600} />
  */}
      <section className="hero_bnr">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="hero_content mobspaceMb_34">
                <h1>E-Commerce & Mini ERP</h1>
                <h2>Unified in one Platform</h2>

                <div className="displayFlex alignItem_center gap24">
                  <div>
                    <button className="mainbutton ruinedSmoresbtn btnBoxShadow">
                      Get Started Now
                    </button>
                  </div>
                  <div>
                    <button className="mainbutton whitebtn btnBoxShadow" onClick={() => setShow(true)}>
                      Schedule a Demo
                    </button>


                    <ScheduleDemo show={show} handleClose={() => setShow(false)} />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                <div className="businessOperationItem">
                  <div className="bizOp_header">
                    <img
                      src="/assets/images/eCommerce.png"
                      alt="E-commerce"
                    />
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
                <div className='businessOperationItem'>
                  <div className='bizOp_header'>
                    <img src="/assets/images/pos.png" alt='Pos' />
                  </div>
                  <div className='bizOp_footer'>
                    <h5>POS</h5>

                    <button className='explorebtn'>
                      <span>Explore</span>
                      <img src="/assets/images/linkArrow_icon.svg" alt='LinkarrowIcon' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="clientLogo">
        <div className="textalign_center">
          <img
            src="/assets/images/clientLogo_collection.png"
            alt="ClientLogos"
          />
        </div>
      </section>
      <section className="modulesOverview_sec" ref={wrapperRef}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5" ref={leftRef}>
              <div className="mobspaceMb_24">
                <h2 className="fontSize36 fontWeight600 sootytext_clr mb_24">
                  Modules Overview
                </h2>
                <p className="fontSize18 fontWeight400 caviarText_clr">
                  Transform every transaction into an opportunity with our
                  intelligence layer that drives engagement, loyalty, and
                  revenue.
                </p>
              </div>
            </div>
            <div className="col-lg-7" ref={rightRef}>
              <div className="modulesOverview_detail">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="modulesOverview_item mb_34">
                      <div className="modulesOverview_imgFrame">
                        <img
                          src="/assets/images/productCatalogue_Management.png"
                          alt="Product Catalogue Management"
                        />
                      </div>

                      <h5>Product Catalogue Management</h5>
                      <p>
                        Simplify catalog management with Bizzilo – from SKUs,
                        combos, and variants to categories and custom
                        collections.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="modulesOverview_item mb_34">
                      <div className="modulesOverview_imgFrame">
                        <img
                          src="/assets/images/warehouseInventory.png"
                          alt="Warehouse and Inventory"
                        />
                      </div>

                      <h5>Warehouse and Inventory</h5>
                      <p>
                        Track, manage, and optimize inventory across warehouses
                        with Bizzilo – real-time stock updates, low-stock
                        alerts, and smart transfers made simple
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="modulesOverview_item mobspaceMb_24">
                      <div className="modulesOverview_imgFrame">
                        <img
                          src="/assets/images/procurementSales.png"
                          alt="Procurement & Sales"
                        />
                      </div>

                      <h5>Procurement & Sales</h5>
                      <p>
                        Streamline procurement and boost sales with Bizzilo —
                        manage customers, vendors, purchase and sales channels
                        in one powerful platform.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="modulesOverview_item">
                      <div className="modulesOverview_imgFrame">
                        <img
                          src="/assets/images/accounting.png"
                          alt="Accounting"
                        />
                      </div>

                      <h5>Accounting</h5>
                      <p>
                        Simplify accounting with Bizzilo — track invoices,
                        payments, taxes, and reports with real-time financial
                        clarity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="yourCoreBenefits_sec">
        <div className="container">
          <div className="sectionheader">
            <h2 className="textalign_center">
              Your Core <span>Benefits</span>
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="coreBenefits_item mobspaceMb_24">
                <div className="coreBenefits_img">
                  <img
                    src="/assets/images/fastOptimized.svg"
                    alt="Fast and Optimized"
                  />
                </div>
                <div>
                  <h5>Fast and Optimized</h5>
                  <p>
                    Efficiently optimized for lightning -fast operations,
                    ensuring unparalleled speed.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="coreBenefits_item mobspaceMb_24">
                <div className="coreBenefits_img">
                  <img
                    src="/assets/images/reliableSecure.svg"
                    alt="Reliable and Secure"
                  />
                </div>
                <div>
                  <h5>Reliable and Secure</h5>
                  <p>
                    Robust security, ensuring unwavering reliability in every
                    transaction and operation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="coreBenefits_item mobspaceMb_24">
                <div className="coreBenefits_img">
                  <img
                    src="/assets/images/cuttingEdgeTech.svg"
                    alt="Cutting Edge Technology"
                  />
                </div>
                <div>
                  <h5>Cutting Edge Technology</h5>
                  <p>
                    Unleashing innovation with state-of-the-art technology for
                    advancement.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="coreBenefits_item">
                <div className="coreBenefits_img">
                  <img
                    src="/assets/images/simplifiedue.svg"
                    alt="Simplified User Experience"
                  />
                </div>
                <div>
                  <h5>Simplified User Experience</h5>
                  <p>
                    Intuitive, Streamlined interface for effortless navigation
                    and seamless interaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              {/* <div className="orbit-wrapper">

                <div className="orbitFrame">
                  <div className="center-icon">
                    <img src="/assets/images/main_logo.png" alt="Center Logo" />
                  </div>
                  <div className="semiCircleimg">
                    <img src="/assets/images/semiCircle.svg" alt="semiCircle" />
                  </div>

                </div>


                <div className="orbit-item pos" style={{ top: '50px', left: '190px' }}>
                  <img src="/assets/images/pos_logo.png" alt="POS" />
                </div>
                <div className="orbit-item ecom" style={{ top: '120px', left: '220px' }}>
                  <img src="/assets/images/ecom.png" alt="Ecom" />
                </div>
                <div className="orbit-item flipkart" style={{ top: '180px', left: '240px' }}>
                  <img src="/assets/images/flipkart.png" alt="Flipkart" />
                </div>
                <div className="orbit-item amazon" style={{ top: '260px', left: '210px' }}>
                  <img src="/assets/images/amazon.png" alt="Amazon" />
                </div>
                <div className="orbit-item whatsapp" style={{ top: '320px', left: '150px' }}>
                  <img src="/assets/images/whatsapp.png" alt="WhatsApp" />
                </div>
              </div> */}

              <div className="textalign_center">
                <img
                  src="/assets/images/goOmnichannel.png"
                  alt="Goomnichannel"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bizziloCycle_sec">
        <div className="container">
          {/* <div className="sectionheader">
            <h2 className="textalign_center">
              Bizzilo<span> Cycle</span>
            </h2>
          </div> */}

          {/* <div className="textalign_center">
            <ClientTabs
              defaultActiveKey="procurement"
              id="resources-tabs"
              className="bizziloTab"
            >
              <ClientTab eventKey="procurement" title="Procurement">
                <div className="cycleStepperFrame">
                  <div className="stepperwavebg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1044"
                      height="599"
                      viewBox="0 0 1044 599"
                      fill="none"
                    >
                      <g filter="url(#filter0_i_262_483)">
                        <path
                          d="M1033.9 279.229V459.905C1033.9 629.633 785.104 633.132 785.104 459.905V139.229C785.104 -6.86688 540.409 -24.2947 540.409 139.229V459.905C540.409 619.132 286.52 619.723 286.52 459.905C286.52 300.087 286.52 179.53 286.52 139.229C286.52 -20.8676 10 -44.8676 10 139.229C10 339.552 10 261.632 10 312.632"
                          stroke="#F7F7F7"
                          strokeWidth="20"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_i_262_483"
                          x="0"
                          y="0.000488281"
                          width="1043.9"
                          height="599.516"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="1" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite
                            in2="hardAlpha"
                            operator="arithmetic"
                            k2="-1"
                            k3="1"
                          />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect1_innerShadow_262_483"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <div className="cycleStepper">
                    <div>
                      <div className="procurementItem">
                        <div className="procurementImgframe">
                          <img
                            src="/assets/images/approvalWorkflow.png"
                            alt="Approvalworkflow"
                          />
                        </div>
                        <div>
                          <h5>
                            Approval <br className="brHideOnMobile" /> Workflow
                          </h5>
                        </div>
                      </div>
                      <div className="procurementItem">
                        <div className="procurementImgframe">
                          <img
                            src="/assets/images/purchaseRequisition.png"
                            alt="PurchaseRequisition"
                          />
                        </div>
                        <div>
                          <h5>
                            Purchase <br className="brHideOnMobile" />{" "}
                            Requisition
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="procurementItem">
                        <div className="procurementImgframe">
                          <img
                            src="/assets/images/poCreate.png"
                            alt="PoCreate"
                          />
                        </div>
                        <div>
                          <h5>PO Create</h5>
                        </div>
                      </div>
                      <div className="procurementItem">
                        <div className="procurementImgframe">
                          <img
                            src="/assets/images/vendorSelection.png"
                            alt="Vendorselection"
                          />
                        </div>
                        <div>
                          <h5>
                            Vendor <br className="brHideOnMobile" /> Selection
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="procurementItem">
                        <div className="procurementImgframe">
                          <img
                            src="/assets/images/goodsReceivedNote.png"
                            alt="GoodsReceivednote"
                          />
                        </div>
                        <div>
                          <h5>
                            Goods <br className="brHideOnMobile" /> Received
                            Note
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="procurementItem">
                        <div className="procurementImgframe">
                          <img
                            src="/assets/images/paymentProcessing.png"
                            alt="Paymentprocessing"
                          />
                        </div>
                        <div>
                          <h5>
                            Payment <br className="brHideOnMobile" /> Processing
                          </h5>
                        </div>
                      </div>
                      <div className="procurementItem">
                        <div className="procurementImgframe">
                          <img
                            src="/assets/images/invoiceMatching.png"
                            alt="InvoiceMatching"
                          />
                        </div>
                        <div>
                          <h5>
                            Invoice <br className="brHideOnMobile" /> Matching
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="procurementItem">
                        <div className="procurementImgframe">
                          <img
                            src="/assets/images/accountingReporting.png"
                            alt="AccountingReporting"
                          />
                        </div>
                        <div>
                          <h5>
                            Accounting &<br className="brHideOnMobile" />{" "}
                            Reporting
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ClientTab>
              <ClientTab eventKey="sales" title="Sales">
                Two
              </ClientTab>
            </ClientTabs>
          </div> */}




          <div className="">


            <div className="bizziloCycleFrame">
              <div>
                <span>Bizzilo Cycle</span>
                <h2>Procurement</h2>
                <p className="fontSize16 fontWeight400 ruinedSmoresText_clr">Your success-driven ally, offering tailored solutions, expertise, <br className="brHideOnMobile" />
                  and cutting-edge tech for efficient, secure, and innovative outcomes.</p>
              </div>
              <div className="cycleStepperFrame">
                <div className="procurementWorkflow">

                  <div className="bizziloCycleItem">
                    <img src="/assets/images/procurement/purchase_Requisition.png"
                      alt="purchase_Requisition"
                    />
                  </div>

                  <div className="bizziloCycleItem">

                    <img
                      src="/assets/images/procurement/approvalWorkflow.png"
                      alt="approvalWorkflow"
                    />
                  </div>
                  <div className="bizziloCycleItem">

                    <img
                      src="/assets/images/procurement/purchaseOrder_creation.png"
                      alt="purchaseOrder_creation"
                    />
                  </div>

                  <div className="bizziloCycleItem">

                    <img
                      src="/assets/images/procurement/vendorSelection.png"
                      alt="vendorSelection"
                    />
                  </div>
                  <div className="bizziloCycleItem">

                    <img
                      src="/assets/images/procurement/goodsReceivedNote.png"
                      alt="goodsReceivedNote"
                    />
                  </div>




                  <div className="bizziloCycleItem">

                    <img
                      src="/assets/images/procurement/payment_Processing.png"
                      alt="payment_Processing"
                    />
                  </div>





                  <div className="bizziloCycleItem">

                    <img
                      src="/assets/images/procurement/invoiceMatching.png"
                      alt="invoiceMatching"
                    />
                  </div>
                  <div className="bizziloCycleItem moved">

                    <img
                      src="/assets/images/procurement/accountingReporting.png"
                      alt="accountingReporting"
                    />
                  </div>

                  {/* 
                  <svg className="connections" xmlns="http://www.w3.org/2000/svg"  fill="none">
                  <path d="M101 0V45C101 56.0457 92.0457 65 81 65H0" stroke="#F2F2F2" stroke-width="1" />

                  <path d="M147 72L21 72C9.9543 72 0.999997 63.0457 0.999998 52L1 -6.38186e-06" stroke="#F2F2F2" stroke-width="1" />
                  <path d="M93.7275 0.93211L93.9186 121.477C93.9361 132.523 84.996 141.492 73.9504 141.509L0.618327 141.625" stroke="#F2F2F2" stroke-width="1" />
                  <path d="M1.2221 0.932131L1.05466 61.4558C1.02408 72.5099 9.96688 81.4925 21.0211 81.5111L89.3313 81.6255" stroke="#F2F2F2" stroke-width="1" />
                  <path d="M141.332 -7.79758e-05L141.475 107.095C141.49 118.139 132.55 127.104 121.507 127.122L0.2718 127.314" stroke="#F2F2F2" stroke-width="1" />
                  <path d="M177 0.999995L21 1C9.9543 1 0.999993 9.95431 0.999993 21L0.999995 65" stroke="#F2F2F2" stroke-width="1" />
                  <path d="M177 64L21 64C9.9543 64 0.999993 55.0457 0.999993 44L0.999995 -7.6932e-06" stroke="#F2F2F2" stroke-width="1" />
                </svg> */}

                </div>






              </div>
            </div>




            <div className="bizziloCycleFrame">
              <div>
                <span>Bizzilo Cycle</span>
                <h2>Sales</h2>
                <p className="fontSize16 fontWeight400 ruinedSmoresText_clr">Your success-driven ally, offering tailored solutions, expertise, <br className="brHideOnMobile" />
                  and cutting-edge tech for efficient, secure, and innovative outcomes.</p>
              </div>
              <div className="cycleStepperFrame">
                <div className="salesWorkflow">
                  <div className="salesItem">

                    <img
                      src="/assets/images/sales/posBlack.svg"
                      alt="pos"
                    />
                  </div>
                  <div className="salesItem">

                    <img
                      src="/assets/images/sales/online.svg"
                      alt="online"
                    />
                  </div>
                  <div className="salesItem">

                    <img
                      src="/assets/images/sales/marketplaces.svg"
                      alt="marketplaces"
                    />
                  </div>
                  <div className="salesItem">

                    <img
                      src="/assets/images/sales/received_SalesOrder.svg"
                      alt="received sales order"
                    />
                  </div>

                  <div className="salesItem">

                    <img
                      src="/assets/images/sales/createShipment.svg"
                      alt="Create Shipment"
                    />
                  </div>

                  <div className="salesItem">

                    <img
                      src="/assets/images/sales/pick.svg"
                      alt="Pick"
                    />
                  </div>
                  <div className="salesItem">

                    <img
                      src="/assets/images/sales/pack.svg"
                      alt="pack"
                    />
                  </div>
                  <div className="salesItem">
                    <img
                      src="/assets/images/sales/shipping_black.svg"
                      alt="Shipping"
                    />
                  </div>

                  <div className="salesItem">
                    <img
                      src="/assets/images/sales/delivered_black.svg"
                      alt="Delivered"
                    />
                  </div>

                  <div className="salesItem">

                    <img
                      src="/assets/images/sales/sendInvoice.svg"
                      alt="sendInvoice"
                    />
                  </div>
                </div>
              </div>
            </div>


            <div className="bizziloCycleFrame">
              <div>
                <span>Bizzilo Cycle</span>
                <h2>B2B Sales</h2>
                <p className="fontSize16 fontWeight400 ruinedSmoresText_clr">Your success-driven ally, offering tailored solutions, expertise, <br className="brHideOnMobile" />
                  and cutting-edge tech for efficient, secure, and innovative outcomes.</p>
              </div>
              <div className="cycleStepperFrame">
                <div className="b2bSalesWorkflow">
                  <div className="b2bSalesItem">
                    <h5>B2B Order</h5>
                    <img
                      src="/assets/images/b2bSales/b2bOrder.svg"
                      alt="B2B Order"
                    />
                  </div>

                  <div className="b2bSalesItem">
                    <h5>Order Estimation</h5>
                    <img
                      src="/assets/images/b2bSales/orderEstimation.svg"
                      alt="Order Estimation"
                    />
                  </div>

                  <div className="b2bSalesItem">
                    <h5>Order Request</h5>
                    <img
                      src="/assets/images/b2bSales/orderRequest.svg"
                      alt="Order Request"
                    />
                  </div>

                  <div className="b2bSalesItem">
                    <h5>Product Delivered</h5>
                    <img
                      src="/assets/images/b2bSales/productDelivered.svg"
                      alt="Product Delivered"
                    />
                  </div>


                  <div className="b2bSalesItem">
                    <h5>Send Eway Bill</h5>
                    <img
                      src="/assets/images/b2bSales/sendEwayBill.svg"
                      alt="Send Eway Bill"
                    />
                  </div>


                  <div className="b2bSalesItem">
                    <h5>Send Invoice</h5>
                    <img
                      src="/assets/images/b2bSales/sendEwayBill.svg"
                      alt="Send Invoice"
                    />
                  </div>


                  <div className="b2bSalesItem">
                    <h5>Warehouse</h5>
                    <img
                      src="/assets/images/b2bSales/warehouse.svg"
                      alt="Warehouse"
                    />
                  </div>


                  <div className="b2bSalesItem">
                    <h5>Tax</h5>
                    <img
                      src="/assets/images/b2bSales/tax.svg"
                      alt="Tax"
                    />
                  </div>




                </div>
              </div>
            </div>

          </div>





        </div>
      </section>
      <section className="integrations_sec">
        <div className="container-fluid">
          <h2>Integrations</h2>
          <div className="integrationsframe">
            {/* <div className="integrations_img">
              <img
                src="/assets/images/integrationsCenter_logo.png"
                alt="integrationsCenter_logo"
              />

                
            </div> */}


            <div className="outerDottedCircle">
              <div>
                <img
                  src="/assets/images/logoShort.png"
                  alt="logoShort"
                />

              </div>
            </div>
            <Marquee speed={50} direction="left" gradient={false} minWidth={0}>
              <div className="integrationsParent" >
                <div className="integrationsIconframe">
                  <img src="/assets/images/phonepe.png" alt="Phonepe" />
                </div>
                <div className="integrationsIconframe">
                  <img src="/assets/images/razorpay.svg" alt="Razorpay" />
                </div>
                <div className="integrationsIconframe">
                  <img src="/assets/images/hotjar.png" alt="Hotjar" />
                </div>
                <div className="integrationsIconframe">
                  <img src="/assets/images/meta.png" alt="Meta" />
                </div>
                <div className="integrationsIconframe">
                  <img src="/assets/images/shiprocket.png" alt="Shiprocket" />
                </div>
              </div>
            </Marquee>
            <Marquee speed={50} direction="right" gradient={false}>
              <div className="integrationschild" >
                <div className="integrationsIconframe">
                  <img
                    src="/assets/images/googleAnalytics.png"
                    alt="GoogleAnalytics"
                  />
                </div>
                <div className="integrationsIconframe">
                  <img
                    src="/assets/images/googleTagmanager.png"
                    alt="GoogleTagmanager"
                  />
                </div>

                <div className="integrationsIconframe">
                  <img src="/assets/images/mail.png" alt="Mail" />
                </div>
                <div className="integrationsIconframe">
                  <img src="/assets/images/message.png" alt="Message" />
                </div>
                <div className="integrationsIconframe">
                  <img src="/assets/images/shiprocket.png" alt="Shiprocket" />
                </div>
              </div>
            </Marquee>
          </div>
        </div>
      </section>

      <section className="marketingTools_sec">
        <div className="container">
          <div className="sectionheader">
            <h2 className="textalign_center">Marketing Tools</h2>
          </div>

          <div className="marketingToolsGrid">
            <div className="marketingToolsItem">
              <h5>Advertisements</h5>
              <p>
                Run high-converting Google & Meta ads with Bizzilo — auto-sync
                your catalog and track performance in real time.
              </p>

              <div className="marketingToolsImgbg">
                <img
                  src="/assets/images/advertisements.png"
                  alt="Advertisements"
                />
              </div>
            </div>
            <div className="marketingToolsItem">
              <h5>Campaigns</h5>
              <p>
                Convert every shopper into a buyer with smart notifications and
                targeted campaigns that drive them to complete checkout.
              </p>

              <div className="marketingToolsImgbg">
                <img src="/assets/images/campaigns.png" alt="Campaigns" />
              </div>
            </div>
            <div className="marketingToolsItem">
              <h5>Content Management</h5>
              <p>
                Share insights, stories, and success with built-in blogs and
                case studies — boost SEO and build customer trust with Bizzilo.
              </p>

              <div className="marketingToolsImgbg">
                <img
                  src="/assets/images/contentManagement.png"
                  alt="contentManagement"
                />
              </div>
            </div>
            <div className="marketingToolsItem">
              <h5>WhatsApp Automations</h5>
              <p>
                Automate reminders, workflows, and customer journeys with
                Bizzilo — from abandoned cart nudges to post-purchase
                follow-ups.
              </p>

              <div className="marketingToolsImgbg">
                <img
                  src="/assets/images/whatsAppAutomations.png"
                  alt="Whatsapp Automations"
                />
              </div>
            </div>
            <div className="marketingToolsItem">
              <h5>Search Engine Optimisation</h5>
              <p>
                Boost your store’s visibility with built-in SEO tools — optimize
                pages, products, and blogs to rank higher and reach more
                customers.
              </p>

              <div className="marketingToolsImgbg">
                <img
                  src="/assets/images/seo.png"
                  alt="Search Engine Optimisation"
                />
              </div>
            </div>
            <div className="marketingToolsItem"></div>
          </div>
        </div>
      </section>
      <section className="yourAIPowerhouse_sec">
        <div className="container-fluid">
          <div className="yourAIPowerhouse_header">
            <h2 className="textalign_center">
              Your AI Powerhouse - Sell, Serve & Scale
            </h2>
            <p>
              From real-time chat commerce to frictionless operations, Bizzilo’s
              AI suite <br className="brHideOnMobile" /> supercharge every step
              of your customer journey
            </p>
          </div>
          <div className="yourAIPowerhouseGrid">
            <div className="yourAIPowerhouseitem">
              <button>Chat & Voice Commerce</button>
              <h3>Talk. Tap.Transact</h3>

              <div className="yourAIPowerhouseHover">
                <img
                  src="/assets/images/hovergradiant.png"
                  alt="Hovergradiant"
                />
              </div>
            </div>
            <div className="yourAIPowerhouseitem">
              <button>Dynamic Pricing Engine</button>
              <h3>Maximize Margins in Real Time</h3>
              <p>
                AI analyzes demand, competitor prices & inventory to suggest
                optimal prices—always stay competitive.
              </p>
            </div>
            <div className="yourAIPowerhouseitem">
              <button>Hyper-Personalized</button>
              <h3>Your Best Seller Is Just One Click Away</h3>
              <p>
                Location-, behavior- and season-based product picks that turn
                browsers into buyers.
              </p>
            </div>
            <div className="yourAIPowerhouseitem">
              <button>Hyper-Personalized</button>
              <h3>Demand Forecasting</h3>
            </div>
            <div className="yourAIPowerhouseitem">
              <button>Sentiment IQ</button>
              <h3>Happy Customers, Always</h3>
              <p>
                Multilingual, emotion-aware chat support that deflects ticket
                volume by{" "}
              </p>

              <h4>up to </h4>
              <h2>70%</h2>
            </div>
            <div className="yourAIPowerhouseitem">
              <button>Content Generator</button>
              <h3>Descriptions That Sell Themselves</h3>
            </div>
            <div className="yourAIPowerhouseitem">
              <button>Smart Fraud & Anomaly Alert</button>
              <h3>Sleep Easy, We’ve Got You Covered</h3>
              <p>
                Real-time fraud detection on payments, returns, and unusual
                order patterns.
              </p>
            </div>
            <div className="yourAIPowerhouseitem">
              <button>Conversational BI & Insights</button>
              <h3>Ask, Don’t Search Which SKUs are trending this week?</h3>
              <p>Get visual answers in charts or human-friendly bullets</p>
            </div>
            <div className="yourAIPowerhouseitem">
              <button>AI Video & GIF Maker</button>
              <h3>Bring Your Products to Life</h3>
              <p>
                Auto-generate short demo videos or product GIFs for social &
                ads-no video team needed.
              </p>
            </div>
            <div className="yourAIPowerhouseitem">
              <button>Voice-Activated Dashboard</button>
              <h3>Data at the Speed of Sound</h3>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />

      <section className="resources_sec">
        <div className="container">
          <div className="sectionheader">
            <h2 className="textalign_center">Resources</h2>
          </div>
          <div className='textalign_center'>
            <ClientTabs
              defaultActiveKey="blog"
              id="resources-tabs"
              className="bizziloTab"
            >
              <ClientTab eventKey="blog" title="Blog">
                <BlogSlider blogs={response?.results} />
              </ClientTab>
              <ClientTab eventKey="caseStudy" title="Case Study" >
                {/* <CaseStudySlider blogs={response?.results} /> */}
                <BlogSlider blogs={response?.results?.filter((ele) => {
                  return ele.categories.includes("Case Study");
                })} />
              </ClientTab>
            </ClientTabs>
          </div>

          {/* <div className='textalign_center'>
            <Tabs
              defaultActiveKey="blog"
              id="uncontrolled-tab-example"
              className="bizziloTab"
            >
              <Tab eventKey="blog" title="Blog">


                <BlogSlider />


              </Tab>
              <Tab eventKey="caseStudy" title="Case Study">
                Case Study
              </Tab>

            </Tabs>
          </div> */}
        </div>
      </section>
      

      {/* 
      
     
      */}

        {/* <main>
    <ul id="cards">
      <li className="card" id="card-1">
        <div className="card-content">
          <div>
            <h2>Card One</h2>
            <p>This is the content of card one. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <figure>
            <img src="https://assets.codepen.io/210284/flower-9.jpg" alt="card-one"/>
          </figure>
        </div>
      </li>

      <li className="card" id="card-2">
        <div className="card-content">
          <div>
            <h2>Card Two</h2>
            <p>This is the content of card two. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <figure>
            <img src="https://assets.codepen.io/210284/flower-8.jpg" alt="card two"/>
          </figure>
        </div>
      </li>

      <li className="card" id="card-3">
        <div className="card-content">
          <div>
            <h2>Card Three</h2>
            <p>This is the content of card three. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <figure>
            <img src="https://assets.codepen.io/210284/flower-7.jpg" alt="card three"/>
          </figure>
        </div>
      </li>

      <li className="card" id="card-4">
        <div className="card-content">
          <div>
            <h2>Card Four</h2>
            <p>This is the content of card four. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <figure>
            <img src="https://assets.codepen.io/210284/flower-6.jpg" alt="card four"/>
          </figure>
        </div>
      </li>
    </ul>
  </main> */}
      <section className="startYourfreetrial_sec">
        <div className="container">
          <div className="startYourfreetrialFrame">
            <h2>Start your free trial for 30 days</h2>
            <h4>
              Take your business online with bizzilo,{" "}
              <br className="brHideOnMobile" /> start your free trial now
            </h4>
            <Link target="_blank" className="bigSizeWhitebtn" href="https://www.go-omnic.com/app/auth/sign-up" >Get Started</Link>
          </div>
        </div>
      </section>
    </>
  );
}

