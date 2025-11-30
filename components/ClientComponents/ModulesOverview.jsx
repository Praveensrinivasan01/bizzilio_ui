"use client"
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ModulesOverview() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const wrapperRef = useRef(null);
  
  useGSAP(() => {
    const width = window.innerWidth;
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
    if (
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
          invalidateOnRefresh: true,
        },
      });
    }
  });
    // return () => {
    //   ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    // };
  }, []);

  return (
    <section className="modulesOverview_sec" ref={wrapperRef}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5" ref={leftRef}>
            <div className="mobspaceMb_24">
              <h2 className="fontSize44 fontWeight600 sootytext_clr mb_24">
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
                      Streamline procurement and boost sales with Bizzilo -
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
                      Simplify accounting with Bizzilo - track invoices,
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
  );
}
