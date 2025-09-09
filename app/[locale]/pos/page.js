"use client"
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import Marquee from "react-fast-marquee";
import HardwareSlider from '../../../components/HardwareSlider';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const page = () => {

    const procurementSales = {
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        initialSlide: 1,
        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    const onePoseveryIndustrySlider = {
        dots: false,
        arrows: false,
        infinite: true,
        centerMode: true,
        centerPadding: "200px",
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: false,
     
    };
    return (
        <>
            <section className='posBnr'>
                <div className='container textalign_center'>
                    {/* <div className='posBnrHeader'>
                        <div>
                            <img src="/assets/images/bizziloPos_logo.svg" alt='Pos_logo' />
                        </div>
                        <div>
                            <h5 className='nightSkyText_clr fontSize16 fontWeight600'>Features</h5>
                        </div>
                    </div> */}

                    <h1>Drive Growth Using Bizzilo’s Future-Ready <br className='brHideOnMobile' /> Retail Point Of Sale</h1>

                    <div className='displayInlineFlex alignItem_center gap24'>
                        <div>
                            <button className='mainbutton brightNavyBluebtn btnBoxShadow'>
                                <Link href={`${process.env.NEXT_PUBLIC_SIGN_UP}`}>Get Started Now</Link>
                            </button>
                        </div>
                        <div>
                            <button className='mainbutton brightNavyBlueOutlinebtn btnBoxShadow'>
                                Schedule a Demo
                            </button>
                        </div>
                    </div>

                    <div className='posBnrBg'>
                        <img src="/assets/images/posbnr.png" className='posBnrimg' alt='posbnr' />

                        <div className='posBnrVideo'>



                            <video width="100%" height="auto" autoPlay loop muted playsInline preload="auto">
                                <source src="/assets/images/posbnr_vi.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                </div>
            </section>
            <section className='onePos_everyIndustry'>
                <div className='container'>
                        <div className='row mb_70'>
                            <div className='col-lg-9'>
                            <h2 className='fontSize44 fontWeight700 sootytext_clr mb_16s'>One POS, Every Industry</h2>
                            <p className='fontSize24 fontWeight400 caviarText_clr'>Whether you run a fashion boutique, a grocery store, a café, or a pharmacy, Bizzilo POS adapts to your business. A single platform designed to simplify sales, billing, and operations—no matter your industry.</p>
                            </div>
                        </div>

                </div>

                <Slider className='onePosEveryIndustrySlider'  {...onePoseveryIndustrySlider}>
               
                    <div className="onePosEveryIndustryItem">
                            <img src="/assets/images/healthPharmacy.png"   />

                        <div className="onePosEveryInd_Content">
                            <h3> Health & Pharmacy</h3>
                            </div>
                            </div>
                    <div className="onePosEveryIndustryItem">
                            <img src="/assets/images/superMarket.png" />
                        <div className="onePosEveryInd_Content">
                            <h3>Super Market</h3>
                        </div>
                        </div>
                    <div className="onePosEveryIndustryItem">
                            <img src="/assets/images/apparel.png" />
                        <div className="onePosEveryInd_Content">
                            <h3>Apparel</h3>
                        </div>
                        </div>
                    <div className="onePosEveryIndustryItem">
                            <img src="/assets/images/grocery.png" />
                        <div className="onePosEveryInd_Content">
                            <h3>Grocery</h3>
                        </div>
                        </div>
                    <div className="onePosEveryIndustryItem">
                            <img src="/assets/images/electronics.png" />
                        <div className="onePosEveryInd_Content">
                            <h3>Electronics</h3>
                        </div>
                        </div>
                            
                    </Slider>


               
            </section>

            <div className='posFeaturesListTab'>

                {/* <select className='posFeaturesSelect'>
                    <option>Catalogue</option>
                    <option>Billing</option>
                    <option>Inventory</option>
                    <option>Payments</option>
                    <option>Hardware</option>
                    <option>E-Commerce</option>
                    <option>Procurement & Sales</option>
                    <option>Applications</option>
                    <option>Reports</option>
                    <option>Support</option>
                </select>  */}



                <ul>
                    <li><button className='active'>Catalogue</button></li>
                    <li><button>Billing</button></li>
                    <li><button>Inventory</button></li>
                    <li><button>Payments</button></li>
                    <li><button>Hardware</button></li>
                    <li><button>E-Commerce</button></li>
                    <li><button>Procurement & Sales</button></li>
                    <li><button>Applications</button></li>
                    <li><button>Reports</button></li>
                    <li><button>Support</button></li>
                </ul>
            </div>


            <section className='productCatalogue_sec'>

                <div className='container'>

                    <div className='sectionheader'>
                        <h2 className='textalign_center whiteText_Clr' style={{ color: "#fff" }}>Product Catalogue</h2>
                    </div>



                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='productCatalogueItem  mobspaceMb_24'>


                                <h5>Sell smarter with product variations</h5>
                                <p>Offer your customers multiple choices of size, color, or style under one product listing. Manage them easily without duplicating items, and keep inventory accurate across every variation in real time.</p>

                                <img src="/assets/images/productVariations.png" alt='productVariations' />
                            </div>

                        </div>

                        <div className='col-lg-6'>

                            <div className='productCatalogueItem'>


                                <h5>Boost sales with smart Product Bundles</h5>
                                <p>Group items into attractive bundles and combo offers that delight your customers. Increase average order value, move inventory faster, and keep stock counts updated automatically across every sale.</p>

                                <img src="/assets/images/productBundles.png" alt='productBundles' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='billing_sec'>
                <div className='container'>
                    <div className='sectionheader'>
                        <h2 className='textalign_center'>Turn Queues into Profits with Swift Billing</h2>
                    </div>



                    <div className='row mb_16'>
                        <div className='col-lg-6'>
                            <div className='billingItem  mobspaceMb_24 billingfirstrowEqHeight'>
                                <h3>Bill Customers Offline <br className='brHideOnMobile' />
                                    (Without Internet)</h3>


                                <p>Continue selling without interruptions by generating invoices offline. All transactions sync automatically once you’re back online</p>

                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='billingItem billingfirstrowEqHeight'>
                                <h3>Stay on top of every cash
                                    transaction</h3>


                                <p>Record, monitor, and reconcile all cash payments with ease. Maintain clear visibility of daily collections and reduce errors.</p>

                            </div>
                        </div>
                    </div>

                    <div className='billingItem mb_16'>
                        <div className='row'>
                            <div className='col-lg-8 mobspaceMb_24'>

                                <h3>Scan to add items to cart</h3>
                                <p>Use barcode or QR code scanning to add items instantly to the cart or billing screen. Speed up checkout, reduce errors, and give customers a smooth shopping experience.</p>


                            </div>
                            <div className='col-lg-4'>
                                <img className='width100per' src="/assets/images/scanAdditems_cart.png" alt='scanToAddItems' />
                            </div>
                        </div>
                    </div>


                    <div className='billingItem mb_16'>
                        <div className='row'>
                            <div className='col-lg-8 mobspaceMb_24'>

                                <h3>Bill Customers in Local Languages</h3>
                                <p>Generate invoices and receipts in regional languages your customers understand best. Build trust, improve transparency, and create a more personalized buying experience at checkout.</p>


                            </div>
                            <div className='col-lg-4'>
                                <img className='width100per' src="/assets/images/localLanguages.png" alt='localLanguages' />
                            </div>
                        </div>
                    </div>



                    <div className='row mb_16'>
                        <div className='col-lg-6'>
                            <div className='billingItem billinglastrowEqHeight  mobspaceMb_24'>
                                <h3>Hold and re-open cart</h3>


                                <p>Put a customer’s cart on hold and reopen it later without losing items. Manage multiple checkouts smoothly, speed up billing, and keep queues moving efficiently.</p>

                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='billingItem billinglastrowEqHeight'>
                                <h3>Customize bills with ready-made
                                    templates</h3>


                                <p>Choose from multiple billing formats and personalize them with your logo, business details, and tax information. Create professional invoices that reflect your brand while saving time on every transaction.</p>

                            </div>
                        </div>
                    </div>


                </div>
            </section>

            <section className='inventory_sec'>
                <div className='container'>
                    <div className='sectionheader'>
                        <h2 className='textalign_center' style={{ color: "#fff" }}>Smart Inventory Features</h2>
                    </div>



                    <div className='row mb_16'>
                        <div className='col-lg-4'>
                            <div className='inventoryItem  mobspaceMb_24'>
                                <h3>Manage all your inventory in one place</h3>
                                <p>Maintain a single repository of items across your online store, branches, and warehouses. Track stock in and out with real-time syncs.</p>

                                <img src="/assets/images/inventory_in_one_place.png" alt='inventory_in_one_place' />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='inventoryItem  mobspaceMb_24'>
                                <h3>Track every item with serials and batches</h3>
                                <p>Assign serial numbers or batch IDs to your products for complete traceability. Monitor expiry dates and returns with ease.</p>

                                <img src="/assets/images/serialsbatches.png" alt='serialsbatches' />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='inventoryItem  mobspaceMb_24'>
                                <h3>Never run out of stock again</h3>
                                <p>Set minimum stock levels and get instant alerts when inventory runs low. Reorder at the right time to avoid stockouts.</p>

                                <img src="/assets/images/stockAgain.png" alt='stockAgain' />
                            </div>
                        </div>
                    </div>


                    <div className='row mb_16'>
                        <div className='col-lg-6'>
                            <div className='inventoryItem inventoryEqualheight  mobspaceMb_24'>
                                <h3>Easily adjust and correct your stock</h3>
                                <p>Update inventory counts in real time to fix damages, losses, or mismatches. Keep your records accurate and ensure your stock always reflects what’s actually available for sale.</p>

                                <img src="/assets/images/easilyAdjust_correctyourstock.png" alt='easilyAdjust_correctyourstock' />
                            </div>
                        </div>
                        <div className='col-lg-6'>

                            <div className='inventoryItem inventoryEqualheight  mobspaceMb_24'>
                                <div className='mb_24'>
                                    <img src="/assets/images/multiplebranches_warehouses.png" alt='multiplebranches_warehouses' />
                                </div>
                                <h3>Seamlessly manage stock across multiple branches and warehouses</h3>
                                <p className='mbZero'>Move items between your warehouses, stores, or branches with complete visibility. Track every transfer in real time to keep inventory accurate and ensure products are always available where they’re needed.</p>

                            </div>
                        </div>
                    </div>


                    <div className='row mb_16'>
                        <div className='col-lg-4'>
                            <div className='inventoryItem  mobspaceMb_24'>
                                <h3>Smarter recommendations for stock refills</h3>
                                <p>Get AI-driven suggestions on what to reorder based on sales trends, past purchase patterns, and current stock levels at right time.</p>

                                <img src="/assets/images/smarterrecom_stockRefills.png" alt='smarterrecom_stockRefills' />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='inventoryItem  mobspaceMb_24'>
                                <h3>Generate SKUs effortlessly for every product</h3>
                                <p>Automatically generate unique SKU codes for your items to simplify cataloging and tracking. Keep your inventory organized.</p>

                                <img src="/assets/images/skus_effortlessly.png" alt='skus_effortlessly' />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='inventoryItem  mobspaceMb_24'>
                                <h3>Cut costs with smarter shipping choices</h3>
                                <p>Compare rates across multiple courier partners and choose the most cost-effective option for every order. </p>

                                <img src="/assets/images/smartershippingchoices.png" alt='smartershippingchoices' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section className="payments_sec" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 ">
                            <div className="mobspaceMb_24">
                                <h2 className="fontSize44 fontWeight700 sootytext_clr mb_24">
                                    Offer customers
                                    more ways to pay
                                </h2>
                                <p className="fontSize18 fontWeight400 caviarText_clr">
                                    Accept payments through cards, UPI, wallets, net banking, or cash — all in one system. Give your customers the freedom to choose their preferred payment method and never miss a sale.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="OfferCustomers_detail">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="offerCustomers_pay mb_34">

                                            <h5>Accept payments through any mode</h5>
                                            <p>Enable customers to pay via UPI, cards, wallets, net banking, or cash. Seamless checkout with all payment options</p>
                                            <img src="/assets/images/acceptpayments_throughanyMode.png"
                                                alt="Accept payments through any mode"
                                            />


                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="offerCustomers_pay mb_34">


                                            <h5>Split payments across multiple modes</h5>
                                            <p>Let customers pay using two or more methods  like part cash and part card, or UPI plus wallet. Offer convenience at checkout</p>

                                            <img
                                                src="/assets/images/multiple_modes.png"
                                                alt="Split payments across multiple modes"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="offerCustomers_pay mobspaceMb_24">


                                            <h5>Extend credit with complete
                                                control</h5>
                                            <p>Allow trusted customers to buy now and pay later. Track outstanding balances, set due dates, and ensure timely collections.</p>
                                            <img
                                                src="/assets/images/completecontrol.png"
                                                alt="Extend credit with complete
                                                control"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="offerCustomers_pay">


                                            <h5>Accept instant UPI payments</h5>
                                            <p>Let customers pay quickly by scanning a QR code or using their UPI ID. Enjoy faster checkouts.</p>

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
            <section className='hardwareSec'>
                <div className='container-fluid'>
                    <div className='sectionheader'>
                        <h2 className='textalign_center' style={{ color: "#fff" }}>Plug and play with almost any POS hardware.</h2>
                    </div>

                    <HardwareSlider />

                </div>
            </section>

            <section className='ecomOnlineStore_sec'>
                <div className='container'>
                    <div className='row alignItem_center'>
                        <div className='col-lg-5'>
                            <div className='mobspaceMb_24'>
                                <h2 className="fontSize44 fontWeight700 sootytext_clr mb_24">Back your business
                                    with the ultimate
                                    online store</h2>

                                <p className='fontSize18 fontWeight400 caviarText_clr mb_34'>With hundreds of themes designed for commerce and optimized for conversion, it’s no wonder the world’s best online stores are built on Shopify.</p>


                                <h5 className="fontSize24 fontWeight700 blackText_Clr ">Drag & Drop Store-front</h5>
                                <p className="fontSize18 fontWeight400 blackText_Clr mb_24">Create an online store to support your business with the drag-and-drop builder.</p>


                                <h5 className="fontSize24 fontWeight700 blackText_Clr ">24 x 7 Online Store</h5>
                                <p className="fontSize18 fontWeight400 blackText_Clr mb_60">With omnichannel selling, let your customers shop from your store anytime, anywhere, without leaving the comfort of their homes.</p>

                                <Link href="#" className='blackText_Clr fontWeight500 fontSize18'> Explore Bizzilo Commerce</Link>



                            </div>
                        </div>
                        <div className='col-lg-6 offset-lg-1'>
                            <img src="/assets/images/ultimateOnline_store.png" alt='ultimateOnline_store' />
                        </div>
                    </div>
                </div>
            </section>


            <section className='procurementSales_sec'>
                <div className='container'>
                    <div className='sectionheader'>
                        <h2 className='textalign_center' style={{ color: "#fff" }}>Procurement & Sales</h2>
                    </div>






                    <Tabs className='procurementSales_tab'
                        defaultActiveKey="procurement"
                        id="uncontrolled-tab-example"
                    >
                        <Tab eventKey="procurement" title="Procurement">
                            <Slider {...procurementSales} className='procurementSalesSlider'>
                                <div className='procurementSalesItem '>
                                    {/* <span className='procurementlabel'>Procurement</span> */}
                                    <div>
                                        <h4>Vendor Price List</h4>
                                        <p>Maintain a centralized vendor price database to negotiate better rates, track changes, and ensure cost-efficient procurement.</p>
                                    </div>
                                    <div>
                                        <img src="/assets/images/dummy.svg" alt='supplierPricing' />
                                        {/* <img src="/assets/images/supplierPricing.png" alt='supplierPricing' /> */}
                                    </div>
                                </div>

                                <div className='procurementSalesItem '>
                                    {/* <span className='procurementlabel'>Product Catalogue Management</span> */}
<div>
                                    <h4>Purchase Order</h4>
                                    <p>Generate and manage digital purchase orders seamlessly. Track status in real time and automate vendor communications.</p>
                                    </div>
                                    <div>
                                        <img src="/assets/images/dummy.svg" alt='supplierPricing' />
                                    {/* <img src="/assets/images/purchaseOrder.png" alt='purchaseOrder' /> */}
                                    </div>
                                </div>


                                <div className='procurementSalesItem '>
                                    {/* <span className='procurementlabel'>Product Catalogue Management</span> */}
                                    <div>
                                    <h4>Back Orders</h4>
                                    <p>Track pending vendor deliveries with backorder management. Ensure supply chain continuity and prevent stockouts.</p>
                                    </div>

                                    <div>
                                        <img src="/assets/images/dummy.svg" alt='supplierPricing' />
                                    {/* <img src="/assets/images/backOrders.png" alt='backOrders' /> */}
                                    </div>

                                </div>




                                <div className='procurementSalesItem '>
                                    {/* <span className='procurementlabel'>Procurement</span> */}
                                    <div>
                                    <h4>Vendor Payments</h4>
                                    <p>Manage vendor payments seamlessly with automated tracking, reminders, and integrated workflows.</p>
                                    </div>
                                    <div>
                                        <img src="/assets/images/dummy.svg" alt='supplierPricing' />
                                    {/* <img src="/assets/images/payments_sh.png" alt='payments_sh' /> */}
                                    </div>
                                </div>



                                <div className='procurementSalesItem '>
                                    {/* <span className='procurementlabel'>Product Catalogue Management</span> */}
                                    <div>
                                    <h4>Purchase Returns</h4>
                                    <p>Simplify return processes for defective or excess goods with real-time stock and vendor reconciliation.</p>
                                    </div>
                                    <div>
                                        <img src="/assets/images/dummy.svg" alt='supplierPricing' />
                                    {/* <img src="/assets/images/purchaseReturn.png" alt='purchaseReturn' /> */}
                                    </div>
                                </div>


                                <div className='procurementSalesItem '>
                                    {/* <span className='procurementlabel'>Product Catalogue Management</span> */}
                                    <div>
                                    <h4>Debit Notes</h4>
                                    <p>Issue automated debit notes for purchase returns or discrepancies, ensuring transparent vendor settlements.</p>
                                    </div>
                                    <div>
                                        <img src="/assets/images/dummy.svg" alt='supplierPricing' />
                                    {/* <img src="/assets/images/debitNotes.png" alt='debitNotes' /> */}
                                    </div>

                                </div>
                            </Slider>





                        </Tab>


                        <Tab eventKey="sales" title="Sales">

                            <div className='row'>
                                <div className='col-lg-4'>
                                    <div className='procurementSalesItem mb_24'>
                                        {/* <span className='saleslabel'>Sales</span> */}

                                        <h4>Sales Order Fulfilment</h4>
                                        <p>Manage the end-to-end sales process from order placement to delivery with real-time fulfilment tracking.</p>

                                        <img src="/assets/images/salesOrder_sh.png" alt='salesOrder_sh' />

                                    </div>
                                </div>

                                <div className='col-lg-4'>
                                    <div className='procurementSalesItem mb_24'>
                                        {/* <span className='saleslabel'>Sales</span> */}

                                        <h4>Invoicing</h4>
                                        <p>Generate professional invoices instantly. Automate tax calculations, discounts, and payment tracking.</p>

                                        <img src="/assets/images/invoiceSh.png" alt='invoiceSh' />

                                    </div>
                                </div>


                                <div className='col-lg-4'>
                                    <div className='procurementSalesItem mb_24'>
                                        {/* <span className='saleslabel'>Sales</span> */}

                                        <h4>Customer Collections</h4>
                                        <p>Streamline payment collection with multiple modes and automated reminders for faster cash flow.</p>

                                        <img src="/assets/images/collections_sh.png" alt='collections_sh' />

                                    </div>
                                </div>



                                <div className='col-lg-4'>
                                    <div className='procurementSalesItem mb_24'>
                                        {/* <span className='saleslabel'>Sales</span> */}

                                        <h4>Packing and Shipping</h4>
                                        <p>Optimize packing workflows and shipping logistics with integrated courier tracking and label generation.</p>

                                        <img src="/assets/images/packingShipping.png" alt='packingShipping' />

                                    </div>
                                </div>


                                <div className='col-lg-4'>
                                    <div className='procurementSalesItem mb_24'>
                                        {/* <span className='saleslabel'>Sales</span> */}

                                        <h4>Sales Returns</h4>
                                        <p>Simplify return requests and automate stock reconciliation for faster resolutions.</p>

                                        <img src="/assets/images/salesReturns.png" alt='salesReturns' />

                                    </div>
                                </div>


                                <div className='col-lg-4'>
                                    <div className='procurementSalesItem mb_24'>
                                        {/* <span className='saleslabel'>Sales</span> */}

                                        <h4>Credit Notes and Refunds</h4>
                                        <p>Generate credit notes and process refunds seamlessly, improving post-sale customer satisfaction.</p>

                                        <img src="/assets/images/creditNotes.png" alt='creditNotes' />

                                    </div>
                                </div>

                            </div>



                        </Tab>

                    </Tabs>
















                </div>
            </section>

            <section className='posApplications_sec'>
                <div className='container'>

                    <div className="sectionheader">

                        <h2 className='textalign_center'>POS Applications</h2>
                    </div>

                    <div className='row'>
                        <div className='col-lg-6 mobspaceMb_24'>
                            <div className='posApplications_item'>
                                <h5>Point of Sale Billing Application</h5>
                                <p>Bizzilo POS makes billing fast and seamless on Windows, iOS, and Android.
                                    Scan items, add customers, accept payments, and even bill offline.
                                    keeping queues moving effortlessly.</p>


                                <img src="/assets/images/posbillingApp.png" alt='Point of Sale Billing Application' />
                            </div>
                        </div>

                        <div className='col-lg-6'>


                            <div className='posApplications_item'>
                                <h5>Back Office Web Application</h5>
                                <p>Easily handle all back-office operations with the Bizzilo web app. Track inventory,
                                    sales, purchases, and customers, and access reports and dashboards to uncover
                                    insights and run your store more efficiently.</p>


                                <img src="/assets/images/backOfficeWebapp.png" alt='Back Office Web Application' />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="integrations_sec posIntegrations_sec">
                <div className="container-fluid">
                    <h2>Integrations</h2>
                    <div className="integrationsframe">



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

            <section className='safeSupported_sec'>
                <div className='container'>

                    <div className='sectionheader'>
                        <h2 className='textalign_center'>Your Business, Safe & Supported</h2>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4 mobspaceMb_24'>
                            <div className='safeSupported_item'>
                                <img src="/assets/images/gethelp.png" alt="Get help whenever you need it" />
                                /                                <h4>Get help whenever you need it</h4>
                                <p>Our support team is always ready to assist you with setup, troubleshooting, or day-to-day questions. Get quick, reliable guidance so you can focus on growing your business.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 mobspaceMb_24'>
                            <div className='safeSupported_item'>
                                <img src="/assets/images/adminPortal.png" alt="Do it Yourself Admin Portal" />

                                <h4>Do it Yourself Admin Portal</h4>
                                <p>Manage your store settings, products, users, and configurations without relying on support. Make quick changes anytime and run your business exactly the way you want.</p>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='safeSupported_item'>
                                <img src="/assets/images/datasafe.png" alt="data safe" />

                                <h4>Keep your data safe </h4>
                                <p>Protect sensitive data with enterprise-grade security and stay compliant with tax, invoicing, and regulatory requirements. Run your business confidently knowing Bizzilo safeguards both you and your customers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


                 

            <section className="startYourfreetrial_sec">
                <div className="container">
                    <div className='sectionheader'>
                        <h2 className='textalign_center'>Proudly Made In Chennai</h2>
                    </div>
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

    )
}

export default page
