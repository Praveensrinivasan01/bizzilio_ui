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

                    <svg className="firstprocurement" xmlns="http://www.w3.org/2000/svg" width="102" height="66" viewBox="0 0 102 66" fill="none">
                      <path d="M101 0V45C101 56.0457 92.0457 65 81 65H0" stroke="#F2F2F2" stroke-width="2" />
                    </svg>
                    <img src="/assets/images/procurement/purchase_Requisition.png"
                      alt="purchase_Requisition"
                    />
                  </div>

                  <div className="bizziloCycleItem">
                    <svg className="secondprocurement" xmlns="http://www.w3.org/2000/svg" width="147" height="73" viewBox="0 0 147 73" fill="none">
                      <path d="M147 72L21 72C9.95431 72 0.999998 63.0457 0.999999 52L1 -6.38186e-06" stroke="#F2F2F2" stroke-width="2" />
                    </svg>
                    <img
                      src="/assets/images/procurement/approvalWorkflow.png"
                      alt="approvalWorkflow"
                    />
                  </div>
                  <div className="bizziloCycleItem">
                    <svg className="thirdprocurement" xmlns="http://www.w3.org/2000/svg" width="95" height="143" viewBox="0 0 95 143" fill="none">
                      <path d="M93.7275 0.93211L93.9186 121.477C93.9361 132.523 84.996 141.492 73.9504 141.509L0.618327 141.625" stroke="#F2F2F2" stroke-width="2" />
                    </svg>
                    <img
                      src="/assets/images/procurement/purchaseOrder_creation.png"
                      alt="purchaseOrder_creation"
                    />
                  </div>

                  <div className="bizziloCycleItem">

                    <svg className="fourthprocurement" xmlns="http://www.w3.org/2000/svg" width="174" height="82" viewBox="0 0 174 82" fill="none">
                      <path d="M1.24272 0.000302809L1.00717 60.5004C0.964099 71.5637 9.91104 80.5602 20.9744 80.5782L173.551 80.8272" stroke="#F2F2F2" stroke-width="2" />
                    </svg>

                    <img
                      src="/assets/images/procurement/vendorSelection.png"
                      alt="vendorSelection"
                    />
                  </div>
                  <div className="bizziloCycleItem">
                    <svg className="fiveprocurement" xmlns="http://www.w3.org/2000/svg" width="205" height="129" viewBox="0 0 205 129" fill="none">
                      <path d="M203.11 0.595472L203.241 107.693C203.255 118.736 194.316 127.7 183.273 127.717L0.201488 128.008" stroke="#F2F2F2" stroke-width="2" />
                    </svg>

                    <img
                      src="/assets/images/procurement/goodsReceivedNote.png"
                      alt="goodsReceivedNote"
                    />
                  </div>




                  <div className="bizziloCycleItem">

                    <svg className="sixthprocurement" xmlns="http://www.w3.org/2000/svg" width="177" height="65" viewBox="0 0 177 65" fill="none">
                      <path d="M177 0.999995L21 1C9.9543 1 0.999993 9.95431 0.999993 21L0.999995 65" stroke="#F2F2F2" stroke-width="2" />
                    </svg>

                    <img
                      src="/assets/images/procurement/payment_Processing.png"
                      alt="payment_Processing"
                    />
                  </div>





                  <div className="bizziloCycleItem">

                    <svg className="seventhprocurement" xmlns="http://www.w3.org/2000/svg" width="177" height="65" viewBox="0 0 177 65" fill="none">
                      <path d="M177 64L21 64C9.9543 64 0.999993 55.0457 0.999993 44L0.999995 -7.6932e-06" stroke="#F2F2F2" stroke-width="2" />
                    </svg>

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
                  
                    <svg className="firstSales" xmlns="http://www.w3.org/2000/svg" width="2" height="130" viewBox="0 0 2 130" fill="none">
                      <path d="M1 0V130" stroke="#F2F2F2" stroke-width="2" />
                    </svg>
                    <img
                      src="/assets/images/sales/posBlack.svg"
                      alt="pos"
                    />
                    <h5>POS</h5>
                  </div>
                  <div className="salesItem">
                   
                    <svg className="secondSales" xmlns="http://www.w3.org/2000/svg" width="143" height="73" viewBox="0 0 143 73" fill="none">
                      <path d="M3.14722e-06 0.999992L122 0.999998C133.046 0.999998 142 9.9543 142 21L142 73" stroke="#F2F2F2" stroke-width="2" />
                    </svg>
                    <img
                      src="/assets/images/sales/online.svg"
                      alt="online"
                    />
                    <h5>Online</h5>
                  </div>
                  <div className="salesItem">
                  
                    <svg className="thirdsales" xmlns="http://www.w3.org/2000/svg" width="96" height="2" viewBox="0 0 96 2" fill="none">
                      <path d="M0 1L96 1" stroke="#F2F2F2" stroke-width="2" />
                    </svg>
                    <img
                      src="/assets/images/sales/marketplaces.svg"
                      alt="marketplaces"
                    />
                    <h5>Marketplaces</h5>
                  </div>
                  <div className="salesItem">
                  
                    <svg className="fourthsales" xmlns="http://www.w3.org/2000/svg" width="95" height="143" viewBox="0 0 95 143" fill="none">
                      <path d="M93.7275 0.93211L93.9186 121.477C93.9361 132.523 84.996 141.492 73.9504 141.509L0.618327 141.625" stroke="#F2F2F2" stroke-width="2" />
                    </svg>
                    <img
                      src="/assets/images/sales/received_SalesOrder.svg"
                      alt="received sales order"
                    />
                    <h5>Received Sales Order</h5>
                  </div>

                  <div className="salesItem">
                   

                    <svg className="fifthsales" xmlns="http://www.w3.org/2000/svg" width="160" height="78" viewBox="0 0 160 78" fill="none">
                      <path d="M158.722 77.2697L158.936 21.3035C158.979 10.2407 150.032 1.24486 138.969 1.2268L0.120518 1.00013" stroke="#F2F2F2" stroke-width="2" />
                    </svg>
                    <img
                      src="/assets/images/sales/createShipment.svg"
                      alt="Create Shipment"
                    />
                    <h5>Create Shipment</h5>
                  </div>

                  <div className="salesItem">
                  
                    <svg className="sixthsales" xmlns="http://www.w3.org/2000/svg" width="63" height="129" viewBox="0 0 63 129" fill="none">
                      <path d="M61.3321 -0.000448584L61.4904 107.092C61.5067 118.137 52.567 127.104 41.5221 127.121L0.885082 127.186" stroke="#F2F2F2" stroke-width="2" />
                    </svg>
                    <img
                      src="/assets/images/sales/pick.svg"
                      alt="Pick"
                    />
                    <h5>Pick</h5>
                  </div>
                  <div className="salesItem">
                
                    <svg className="seventhsales" xmlns="http://www.w3.org/2000/svg" width="406" height="65" viewBox="0 0 406 65" fill="none">
                      <path d="M406 0.999983L21 1C9.9543 1 1 9.95431 1 21L1 65" stroke="#F2F2F2" stroke-width="2" />
                    </svg>
                    <img
                      src="/assets/images/sales/pack.svg"
                      alt="pack"
                    />
                    <h5>Pack</h5>
                  </div>
                  <div className="salesItem">
                 
                    <svg className="eightsales" xmlns="http://www.w3.org/2000/svg" width="98" height="2" viewBox="0 0 98 2" fill="none">
                      <path d="M98 1L-4.38094e-06 1" stroke="#F2F2F2" stroke-width="2" />
                    </svg>
                    <img
                      src="/assets/images/sales/shipping_black.svg"
                      alt="Shipping"
                    />
                    <h5>Shipping</h5>
                  </div>

                  <div className="salesItem">
                 
                    <svg className="ninthsales" xmlns="http://www.w3.org/2000/svg" width="227" height="51" viewBox="0 0 227 51" fill="none">
                      <path d="M225.639 50.1096L225.862 22.2271C225.951 11.1318 216.991 2.08491 205.895 2.06695L0.764604 1.73492" stroke="#F2F2F2" stroke-width="2" />
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
                <p className="fontSize16 fontWeight400 ruinedSmoresText_clr">Your success-driven ally, offering tailored solutions, expertise, <br className="brHideOnMobile" />
                  and cutting-edge tech for efficient, secure, and innovative outcomes.</p>
              </div>
              <div className="cycleStepperFrame">
                <div className="b2bSalesWorkflow">
                  <div className="b2bSalesItem">
                    <svg className="b2bSalesone" xmlns="http://www.w3.org/2000/svg" width="152" height="73" viewBox="0 0 152 73" fill="none">
                      <path d="M3.14722e-06 72L131 72C142.046 72 151 63.0457 151 52L151 -6.60042e-06" stroke="#F2F2F2" stroke-width="2" />
                    </svg>
                    <img
                      src="/assets/images/b2bSales/b2bOrder.svg"
                      alt="B2B Order"
                    />
                    <h5>B2B Order</h5>
                  </div>

                  <div className="b2bSalesItem">
                    <svg className="b2bSalesTwo" xmlns="http://www.w3.org/2000/svg" width="299" height="78" viewBox="0 0 299 78" fill="none">
                      <path d="M296.964 77.4889L297.288 21.5625C297.353 10.4843 288.399 1.46443 277.321 1.44659L0.120518 1.00013" stroke="#F2F2F2" stroke-width="2" />
                    </svg>
                   
                    <img
                      src="/assets/images/b2bSales/orderEstimation.svg"
                      alt="Order Estimation"
                    />
                    <h5>Order Estimation</h5>
                  </div>

                  <div className="b2bSalesItem">
                    <svg className="b2bSalesThird" xmlns="http://www.w3.org/2000/svg" width="232" height="99" viewBox="0 0 232 99" fill="none">
                      <path d="M230.649 -0.000794498L230.73 77.0327C230.741 88.0742 221.803 97.0362 210.761 97.0537L0.850597 97.3865" stroke="#F2F2F2" stroke-width="2" />
                    </svg>
                    <img
                      src="/assets/images/b2bSales/orderRequest.svg"
                      alt="Order Request"
                    />
                    <h5>Order Request</h5>
                  </div>

                  <div className="b2bSalesItem">
         
                  <svg className="b2bSalesfourth" xmlns="http://www.w3.org/2000/svg" width="206" height="2" viewBox="0 0 206 2" fill="none">
                      <path d="M205.5 1L0 0.99986" stroke="#F2F2F2" stroke-width="2" />
                    </svg>
                    <img
                      src="/assets/images/b2bSales/productDelivered.svg"
                      alt="Product Delivered"
                    />
                    <h5>Product Delivered</h5>
                  </div>


                  <div className="b2bSalesItem">
                    <svg className="b2bSalesfifth" xmlns="http://www.w3.org/2000/svg" width="107" height="117" viewBox="0 0 107 117" fill="none">
                      <path d="M1.15414 -8.60781e-05L0.996641 95.1834C0.978364 106.23 9.91868 115.199 20.9649 115.216L106.666 115.352" stroke="#F2F2F2" stroke-width="2" />
                    </svg>
                    <img
                      src="/assets/images/b2bSales/sendEwayBill.svg"
                      alt="Send Eway Bill"
                    />
                    <h5>Send Eway Bill</h5>
                  </div>


                  <div className="b2bSalesItem">
                   <svg className="b2bSalessixth" xmlns="http://www.w3.org/2000/svg" width="323" height="2" viewBox="0 0 323 2" fill="none">
                      <path d="M322.5 0.999257L-0.000183106 0.997388" stroke="#F2F2F2" stroke-width="2" />
                    </svg>
                    <img
                      src="/assets/images/b2bSales/sendEwayBill.svg"
                      alt="Send Invoice"
                    />
                    <h5>Send Invoice</h5>
                  </div>


                  <div className="b2bSalesItem">
                    <svg className="b2bSalesSeventh" xmlns="http://www.w3.org/2000/svg" width="103" height="100" viewBox="0 0 103 100" fill="none">
                      <path d="M101.649 0.000217102L101.751 78.0327C101.766 89.0746 92.829 98.039 81.7871 98.0588L0.305828 98.2045" stroke="#F2F2F2" stroke-width="2" />
                    </svg>
                    <img
                      src="/assets/images/b2bSales/warehouse.svg"
                      alt="Warehouse"
                    />
                    <h5>Warehouse</h5>
                  </div>


                  <div className="b2bSalesItem">
                   
                    <img
                      src="/assets/images/b2bSales/tax.svg"
                      alt="Tax"
                    />
                    <h5>Tax</h5>
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
