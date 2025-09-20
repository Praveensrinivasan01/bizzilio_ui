// This is a server component that imports client components as needed

export async function generateMetadata() {
  const title =
    "Bizzilo | All-in-One E-Commerce, POS & Inventory Management Platform";
  const description =
    "Bizzilo helps you launch and grow your business with powerful tools for e-commerce, POS, and inventory management. Create online stores, manage sales, track stock, and scale across marketplaces—all in one seamless platform.";

  const metaData = MetaTags({ title, description });

  return metaData;
}

import { MetaTags } from "../../components/MetaTags";

export const dynamic = "force-static";
export const revalidate = 7200;
import Link from "next/link";
import Testimonials from "../../components/Testimonials";
import dynamicImport from "next/dynamic";
import Marquee from "react-fast-marquee";
// import GoOmnichannelSection from "../../components/GoOmnichannelSection";

// Dynamic imports for client components
const HeroBanner = dynamicImport(() =>
  import("../../components/ClientComponents/HomePageHero")
);
const BusinessOperations = dynamicImport(() =>
  import("../../components/ClientComponents/BusinessOperations")
);
const ModulesOverview = dynamicImport(() =>
  import("../../components/ClientComponents/ModulesOverview")
);
const IntegrationsMarquee = dynamicImport(() =>
  import("../../components/ClientComponents/IntegrationsMarquee")
);
const AIPowerhouse = dynamicImport(() =>
  import("../../components/ClientComponents/AIPowerhouse")
);
const ResourceTabs = dynamicImport(() =>
  import("../../components/ClientComponents/ResourceTabs")
);
const GoOmnichannelSection = dynamicImport(() =>
  import("../../components/GoOmnichannelSection")
);

export default function Home() {
  return (
    <>
      {/* Client component for the hero banner with interactive elements */}
      <HeroBanner />

      {/* Client component for business operations with animations */}
      <BusinessOperations />

      {/* Static server-rendered section */}
      <section
        className="clientLogo"
      // style={{ maxWidth: "86%", margin: "auto" }}
      >
        <Marquee speed={50} direction="right">
          <div className="clientLogoImage">
            <div className="clientLogoIconframe">
              <img

                src="/assets/images/client_logo_one.svg"
                alt="ClientLogos"
              />
            </div>
            <div className="clientLogoIconframe">
              <img
                src="/assets/images/client_logo_two.svg"
                alt="ClientLogos"
              />
            </div>
            <div className="clientLogoIconframe ">
              <img

                src="/assets/images/client_logo_three.svg"
                alt="ClientLogos"
              />
            </div>
            <div className="clientLogoIconframe ">
              {" "}
              <img
                src="/assets/images/client_logo_four.svg"
                alt="ClientLogos"
              />
            </div>
            <div className="clientLogoIconframe ">
              {" "}
              <img
                src="/assets/images/client_logo_five.svg"
                alt="ClientLogos"
              />
            </div>
            <div className="clientLogoIconframe">
              {" "}
              <img
                src="/assets/images/client_logo_six.svg"
                alt="ClientLogos"
              />
            </div>
            <div className="clientLogoIconframe">
              <img
                className=""
                src="/assets/images/client_logo_seven.svg"
                alt="ClientLogos"
              />
            </div>
            <div className="clientLogoIconframe">
              <img

                src="/assets/images/client_logo_one.svg"
                alt="ClientLogos"
              />
            </div>
            <div className="clientLogoIconframe">
              <img
                src="/assets/images/client_logo_two.svg"
                alt="ClientLogos"
              />
            </div>
            <div className="clientLogoIconframe ">
              <img

                src="/assets/images/client_logo_three.svg"
                alt="ClientLogos"
              />
            </div>
            <div className="clientLogoIconframe ">
              {" "}
              <img
                src="/assets/images/client_logo_four.svg"
                alt="ClientLogos"
              />
            </div>
            <div className="clientLogoIconframe ">
              {" "}
              <img
                src="/assets/images/client_logo_five.svg"
                alt="ClientLogos"
              />
            </div>
            <div className="clientLogoIconframe">
              {" "}
              <img
                src="/assets/images/client_logo_six.svg"
                alt="ClientLogos"
              />
            </div>
            <div className="clientLogoIconframe divide">
              <img
                className=""
                src="/assets/images/client_logo_seven.svg"
                alt="ClientLogos"
              />
            </div>
          </div>

          {/* Repeat for seamless loop */}
          {/* <img className="" src="/assets/images/client_logo_one.svg" alt="ClientLogos"/>
            <img className="" src="/assets/images/client_logo_two.svg" alt="ClientLogos"/>
            <img className="" src="/assets/images/client_logo_three.svg" alt="ClientLogos"/>
            <img className="" src="/assets/images/client_logo_four.svg" alt="ClientLogos"/>
            <img className="" src="/assets/images/client_logo_five.svg" alt="ClientLogos"/>
            <img className="" src="/assets/images/client_logo_six.svg" alt="ClientLogos"/>
          x className="" src="/assets/images/client_logo_seven.svg" alt="ClientLogos"/> */}
        </Marquee>
      </section>

      {/* Client component with scroll animations */}
      <ModulesOverview />

      {/* Static server-rendered section */}
      <GoOmnichannelSection />

      {/* Static server-rendered section */}
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

      {/* Static server-rendered section */}
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
            {/* <div className="bizziloCycleFrame">
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

                </div>






              </div>
            </div> */}




            {/* <div className="bizziloCycleFrame">
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
            </div> */}


            {/* <div className="bizziloCycleFrame">
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
            </div>  */}


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
                <img src="/assets/images/logoShort.png" alt="logoShort" />
              </div>
            </div>
            <Marquee speed={50} direction="left" gradient={false} minWidth={0}>
              <div className="integrationsParent">
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
              <div className="integrationschild">
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

      {/* Client component with interactive elements */}
      <AIPowerhouse />

      {/* Server component */}
      <Testimonials />

      {/* Client component with data fetching */}
      <ResourceTabs />

      {/* Static server-rendered section */}
      <section className="startYourfreetrial_sec">
        <div className="container">
          <div className="startYourfreetrialFrame">
            <h2>Start your free trial for 30 days</h2>
            <h4>
              Take your business online with bizzilo,{" "}
              <br className="brHideOnMobile" /> start your free trial now
            </h4>
            <Link
              target="_blank"
              className="bigSizeWhitebtn"
              href="https://www.go-omnic.com/app/auth/sign-up"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
