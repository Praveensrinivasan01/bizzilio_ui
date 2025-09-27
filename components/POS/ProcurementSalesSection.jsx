"use client";
import { useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gsap from "gsap";

const ProcurementSalesSection = () => {
  const [progress, setProgress] = useState(0);
  const [key, setKey] = useState(false);

  const procurementSales = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: 1,
    slidesToShow: 3,
    slidesToScroll: 3,
    afterChange: (current) => {
      const totalSlides = 6;
      const visibleSlides = 3;
      const percentage = ((current + visibleSlides) / totalSlides) * 100;
      setProgress(percentage);
    },
    prevArrow: (
      <button>
        <img src="/assets/images/leftarrow.svg" alt="Leftarrow" />
      </button>
    ),
    nextArrow: (
      <button>
        <img src="/assets/images/leftarrow.svg" alt="Leftarrow" />
      </button>
    ),

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
          slidesToScroll: 1,
          centerPadding: "0px",
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
          centerMode: false,
        },
      },
    ],
  };

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const procurementSalesItem = document.querySelectorAll(
        ".procurementSalesItem"
      );
      procurementSalesItem.forEach((item, index) => {
        // GSAP animation would go here if needed
      });
    });
  }, [key]);

  return (
    <section className="procurementSales_sec " id="Procurement">
      <div className="container">
        <div className="sectionheader">
          <h2 className="textalign_center" style={{ color: "#fff" }}>
            Procurement & Sales
          </h2>
        </div>

        <Tabs
          className="procurementSales_tab"
          defaultActiveKey="procurement"
          id="uncontrolled-tab-example"
          style={{ "--progress": `${progress}%` }}
          onClick={() => setKey((prev) => !prev)}
        >
          <Tab eventKey="procurement" title="Procurement">
            <Slider {...procurementSales} className="procurementSalesSlider">
              <div className="procurementSalesItem ">
                <div>
                  <h4>Vendor Price List</h4>
                  <p>
                    Maintain a centralized vendor price database to negotiate
                    better rates, track changes, and ensure cost efficiency.
                  </p>
                </div>
                <div>
                  <img
                    src="/assets/images/bizzilo-supplier-pricing.jpg"
                    alt="supplierPricing"
                  />
                </div>
              </div>

              <div className="procurementSalesItem ">
                <div>
                  <h4>Purchase Order</h4>
                  <p>
                    Generate and manage digital purchase orders seamlessly.
                    Track status in real time and automate communications.
                  </p>
                </div>
                <div>
                  <img
                    src="/assets/images/bizzilo-purchase-orders.jpg"
                    alt="purchase order"
                  />
                </div>
              </div>

              <div className="procurementSalesItem ">
                <div>
                  <h4>Back Orders</h4>
                  <p>
                    Track pending vendor deliveries with backorder management.
                    Ensure supply chain continuity and prevent stockouts.
                  </p>
                </div>
                <div>
                  <img
                    src="/assets/images/bizzilo-back-orders.jpg"
                    alt="Back Orders"
                  />
                </div>
              </div>

              <div className="procurementSalesItem ">
                <div>
                  <h4>Vendor Payments</h4>
                  <p>
                    Manage vendor payments seamlessly with automated tracking,
                    reminders, and integrated workflows.
                  </p>
                </div>
                <div>
                  <img
                    src="/assets/images/bizzilo-payments.jpg"
                    alt="Vendor Payments"
                  />
                </div>
              </div>

              <div className="procurementSalesItem ">
                <div>
                  <h4>Purchase Returns</h4>
                  <p>
                    Simplify return processes for defective or excess goods with
                    real-time stock and vendor reconciliation.
                  </p>
                </div>
                <div>
                  <img
                    src="/assets/images/bizzilo-purchase-returns.jpg"
                    alt="purchase-returns"
                  />
                </div>
              </div>

              <div className="procurementSalesItem ">
                <div>
                  <h4>Debit Notes</h4>
                  <p>
                    Issue automated debit notes for purchase returns or
                    discrepancies, ensuring transparent vendor settlements.
                  </p>
                </div>
                <div>
                  <img
                    src="/assets/images/bizzilo-debit-note.jpg"
                    alt="Debit Notes"
                  />
                </div>
              </div>
            </Slider>
          </Tab>

          <Tab eventKey="sales" title="Sales">
            <Slider {...procurementSales} className="procurementSalesSlider">
              <div className="procurementSalesItem">
                <div>
                  <h4>Fulfilment</h4>
                  <p>
                    Manage the end-to-end sales process from order placement to
                    delivery with real-time fulfilment tracking.
                  </p>
                </div>
                <div>
                  <img
                    src="/assets/images/bizzilo-Sales-orders.jpg"
                    alt="Fulfilment"
                  />
                </div>
              </div>

              <div className="procurementSalesItem ">
                <div>
                  <h4>Invoicing</h4>
                  <p>
                    Generate professional invoices instantly. Automate tax
                    calculations, discounts, and payment tracking.
                  </p>
                </div>
                <div>
                  <img
                    src="/assets/images/bizzilo-sales-invoice.jpg"
                    alt="Invoicing"
                  />
                </div>
              </div>

              <div className="procurementSalesItem ">
                <div>
                  <h4>Collections</h4>
                  <p>
                    Streamline payment collection with multiple modes and
                    automated reminders for faster cash flow.
                  </p>
                </div>
                <div>
                  <img
                    src="/assets/images/bizzilo-collections.jpg"
                    alt="Collections"
                  />
                </div>
              </div>

              <div className="procurementSalesItem ">
                <div>
                  <h4>Shipping</h4>
                  <p>
                    Optimize packing workflows and shipping logistics with
                    integrated courier tracking and label generation.
                  </p>
                </div>
                <div>
                  <img
                    src="/assets/images/bizzilo-shipments.jpg"
                    alt="bizzilo-shipments."
                  />
                </div>
              </div>

              <div className="procurementSalesItem ">
                <div>
                  <h4>Sales Returns</h4>
                  <p>
                    Simplify return requests—track items, update inventory,
                    recon and process refunds or replacements with ease.
                  </p>
                </div>
                <div>
                  <img
                    src="/assets/images/bizzilo-Sales-returns.jpg"
                    alt="Sales Returns"
                  />
                </div>
              </div>

              <div className="procurementSalesItem ">
                <div>
                  <h4>Credit Notes</h4>
                  <p>
                    Generate credit notes and process refunds seamlessly,
                    improving post-sale customer satisfaction.
                  </p>
                </div>
                <div>
                  <img
                    src="/assets/images/bizzilo-credit-note.jpg"
                    alt="Credit Notes"
                  />
                </div>
              </div>
            </Slider>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default ProcurementSalesSection;
