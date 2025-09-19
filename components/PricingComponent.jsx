"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Marquee from "react-fast-marquee";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ScheduleDemo from "./ScheduleDemo";

const PricingComponent = () => {


    const clientsSayaboutSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        centerMode: true,
        centerPadding: "100px",

        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "0px",
                    centerMode: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "0px",
                    centerMode: false,
                },
            },
        ],
    };

    // Open all indices by default
    const hugeiconsTickIcon = <img className="greenTickFilter" src="/assets/images/uis_check.svg" alt="Yes" />;
    const closeIcon = <img className='grayFilter' src="/assets/images/close_icon.svg" alt="Yes" />;



    const modulesData = [
        {
            module: "Basics",
            features: [
                { name: "Companies", plans: { Start: "1", Grow: "1", Accelerate: "1", Scale: "1" } },
                { name: "Warehouses", plans: { Start: "1", Grow: "5", Accelerate: "10", Scale: "200" } },
                { name: "Stores", plans: { Start: "1", Grow: "5", Accelerate: "10", Scale: "200" } },
                { name: "Users", plans: { Start: "5", Grow: "10", Accelerate: "40", Scale: "100" } },
                { name: "Multi Language", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Multi Currency", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } }
            ]
        },
        {
            module: "Product catalogue",
            features: [
                { name: "Products", plans: { Start: "UNLIMITED", Grow: "UNLIMITED", Accelerate: "UNLIMITED", Scale: "UNLIMITED" } },
                { name: "Categories", plans: { Start: "100", Grow: "UNLIMITED", Accelerate: "UNLIMITED", Scale: "UNLIMITED" } },
                { name: "Combos/Groups", plans: { Start: "100", Grow: "UNLIMITED", Accelerate: "UNLIMITED", Scale: "UNLIMITED" } },
                { name: "Collections", plans: { Start: hugeiconsTickIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Barcode", plans: { Start: hugeiconsTickIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "QR Code", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } }
            ]
        },
        {
            module: "Procurement",
            features: [
                { name: "Supplier/Vendor", plans: { Start: "50", Grow: "500", Accelerate: "1000", Scale: "UNLIMITED" } },
                { name: "Supplier price list", plans: { Start: "50", Grow: "500", Accelerate: "1000", Scale: "UNLIMITED" } },
                { name: "Request for Quotation (RFQ)", plans: { Start: closeIcon, Grow: closeIcon, Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Purchase Order(PO) & Bills", plans: { Start: "500/mo", Grow: "1000/mo", Accelerate: "5000/mo", Scale: "UNLIMITED" } },
                { name: "Purchase Approvals", plans: { Start: hugeiconsTickIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "GRN", plans: { Start: hugeiconsTickIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Quality and Quantity Check", plans: { Start: hugeiconsTickIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Purchase Return", plans: { Start: "100/mo", Grow: "100/mo", Accelerate: "1000/mo", Scale: "UNLIMITED" } },
                { name: "Expenses and Bills", plans: { Start: "1000/mo", Grow: "5000/mo", Accelerate: "10000/mo", Scale: "UNLIMITED" } },
                { name: "Recurring expenses", plans: { Start: closeIcon, Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Apply landed costs to purchases", plans: { Start: closeIcon, Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } }
            ]
        },
        {
            module: "Sales",
            features: [
                { name: "Customers", plans: { Start: "5000", Grow: "10000", Accelerate: "50000", Scale: "UNLIMITED" } },
                { name: "Price List", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Sales Estimate(Quotes)", plans: { Start: "100/mo", Grow: "1000/mo", Accelerate: "5000/mo", Scale: "UNLIMITED" } },
                { name: "Sales Order", plans: { Start: "100/mo", Grow: "1000/mo", Accelerate: "5000/mo", Scale: "UNLIMITED" } },
                { name: "Sales Approvals", plans: { Start: hugeiconsTickIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Sales Invoice", plans: { Start: "500/mo", Grow: "1000/mo", Accelerate: "5000/mo", Scale: "UNLIMITED" } },
                { name: "Sales Return", plans: { Start: "100/mo", Grow: "200/mo", Accelerate: "1000/mo", Scale: "UNLIMITED" } },
                { name: "Shipping labels", plans: { Start: hugeiconsTickIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Picklist", plans: { Start: hugeiconsTickIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Shipment Tracking", plans: { Start: hugeiconsTickIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "e-way Billing", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "e-Invoicing", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Shipping Restriction", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Shipping Rate Calculator", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Shipping API", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "E-Invoices", plans: { Start: closeIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "E-Waybills", plans: { Start: closeIcon, Grow: closeIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } }
            ]
        },
        {
            module: "Inventory",
            features: [
                { name: "Track Inventory", plans: { Start: hugeiconsTickIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Stock Enquiry", plans: { Start: hugeiconsTickIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Stock Transfer - Internal", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Stock Transfer - External", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Warehouse Rejection", plans: { Start: hugeiconsTickIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Batch Number Tracking", plans: { Start: closeIcon, Grow: closeIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Serial Number Tracking", plans: { Start: closeIcon, Grow: closeIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Warehouse Labels Generation", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "UOM Conversions", plans: { Start: hugeiconsTickIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Re-order points and Levels", plans: { Start: hugeiconsTickIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } }
            ]
        },
        {
            module: "Payables",
            features: [
                { name: "Supplier/Vendor Payments", plans: { Start: hugeiconsTickIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Debit Notes", plans: { Start: hugeiconsTickIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Debit Note Approvals", plans: { Start: hugeiconsTickIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Recurring Bills", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } }
            ]
        },
        {
            module: "Receivables",
            features: [
                { name: "Customer Payments", plans: { Start: hugeiconsTickIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Credit Notes", plans: { Start: hugeiconsTickIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Credit Note Approvals", plans: { Start: hugeiconsTickIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Recurring Invoices", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Online payments", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Generate payment links", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } }
            ]
        },
        {
            module: "Accounting",
            features: [
                { name: "Chart of Accounts", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Sub-accounts", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Manual Journal Entry", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Transaction locking", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Base currency adjustments", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Recurring journals", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Fixed asset management", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Reports", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } }
            ]
        },
        {
            module: "Customizations",
            features: [
                { name: "Invoice Customization", plans: { Start: hugeiconsTickIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Multi-lingual invoicing", plans: { Start: closeIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Multi-transaction number series", plans: { Start: closeIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Multi-currency invoicing", plans: { Start: closeIcon, Grow: closeIcon, Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Automatic exchange rates", plans: { Start: closeIcon, Grow: closeIcon, Accelerate: closeIcon, Scale: "Coming Soon" } }
            ]
        },
        {
            module: "Integrations",
            features: [
                { name: "Payment Gateways(Razorpay, PhonePe)", plans: { Start: closeIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "SMS Vendors (Gupshup, Kaleyra)", plans: { Start: closeIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "3rd Party Logistics", plans: { Start: closeIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "ONDC", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } }
            ]
        },
        {
            module: "Portal Access",
            features: [
                { name: "Supplier Portal", plans: { Start: closeIcon, Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Customer Portal", plans: { Start: closeIcon, Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } }
            ]
        },
        {
            module: "Transaction",
            features: [
                { name: "Transaction Charges", plans: { Start: "0.0%", Grow: "0.0%", Accelerate: "0.0%", Scale: "0.0%" } }
            ]
        },
        {
            module: "Support",
            features: [
                { name: "Basic Support", plans: { Start: hugeiconsTickIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Dedicated Support", plans: { Start: closeIcon, Grow: closeIcon, Accelerate: closeIcon, Scale: hugeiconsTickIcon } }
            ]
        },
        {
            module: "Marketplace Integration",
            features: [
                { name: "Amazon", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Flipkart", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } }
            ]
        },
        {
            module: "Reports",
            features: [
                { name: "Basic", plans: { Start: hugeiconsTickIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Advanced", plans: { Start: closeIcon, Grow: closeIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } }
            ]
        },
        {
            module: "E-commerce",
            features: [
                { name: "Online Store(Subdomain)", plans: { Start: hugeiconsTickIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Custom Domain", plans: { Start: hugeiconsTickIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "SSL Certificate", plans: { Start: closeIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Built-in SEO", plans: { Start: closeIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Blogs", plans: { Start: closeIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Recommendation Engine", plans: { Start: closeIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Google Analytics", plans: { Start: closeIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Google Tag Manager", plans: { Start: closeIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Google and Meta Ads", plans: { Start: closeIcon, Grow: closeIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Abandoned Cart Email", plans: { Start: closeIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
                { name: "Campaign Tools", plans: { Start: closeIcon, Grow: closeIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } }
            ]
        },
        {
            module: "Point of Sale",
            features: [
                { name: "Sales Registers", plans: { Start: "1", Grow: "3", Accelerate: "7", Scale: "20" } }
            ]
        },
        {
            module: "Add Ons",
            features: [
                { name: "SMS", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Autoscan Receipt", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "AI Commerce", plans: { Start: closeIcon, Grow: closeIcon, Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Whatsapp Automations", plans: { Start: closeIcon, Grow: closeIcon, Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Zyl - Conversational BI", plans: { Start: closeIcon, Grow: closeIcon, Accelerate: "Coming Soon", Scale: "Coming Soon" } }
            ]
        },
        {
            module: "Mobile Apps",
            features: [
                { name: "Ecommerce App", plans: { Start: "20000/year*", Grow: "20000/year*", Accelerate: "20000/year*", Scale: "20000/year*" } },
                { name: "Field Sales App", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Admin App", plans: { Start: hugeiconsTickIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } }
            ]
        }
    ];

    const [openIndices, setOpenIndices] = useState(
        Array.from({ length: modulesData.length }, (_, i) => i)
    );

    const toggle = (index) => {
        setOpenIndices((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };


    const [key, setKey] = useState("Start");
    const planNames = ["Start", "Grow", "Accelerate", "Scale"];

    const [expand, setExpand] = useState(true);

    const [show, setShow] = useState(false);
    return (
        <>
            <div className='blackHeader'>

                <div className='container'>
                    <h2>Pricing</h2>
                </div>
            </div>

            <section className='pricing_sec'>
                <div className='container'>

                    <div className='priciing-seq'>
                        <ul>
                            <li>
                                <img src="/assets/images/circleTick.svg" alt='circleTick' />
                                <span>No Credit Card Required</span>
                            </li>
                            <li>
                                <img src="/assets/images/circleTick.svg" alt='circleTick' />
                                <span>Zero Transaction fees</span>
                            </li>
                            <li>
                                <img src="/assets/images/circleTick.svg" alt='circleTick' />
                                <span>Dedicated Support</span>
                            </li>
                        </ul>
                    </div>


                    <div className='textalign_center'>
                        <Tabs
                            defaultActiveKey="Monthly"
                            id="uncontrolled-tab-example"
                            className="bizziloTab"
                        >
                            <Tab eventKey="Monthly" title="Monthly">
                                <div className='monthlyPricingFrame'>
                                    <div className='row justifyContent_center'>

                                        <div className='col-lg-3'>
                                            <div className='monthlyPricingItem mobspaceMb_24'>
                                                <div className="displayFlex alignItem_center gap16 mb_24">
                                                    <div className='monthlyPricingImg startplan'>
                                                        <img src="/assets/images/star_icon.svg" />
                                                    </div>
                                                    <div>
                                                        <h3>Start</h3>
                                                    </div>
                                                </div>
                                                <div className="displayFlex alignItem_center justifyContent_spacebetween  mb_10">
                                                    <div> <h4>₹1999<span>&nbsp; /month</span></h4></div>
                                                    <div>
                                                        <label className='percant-badge'>50% OFF</label>
                                                    </div>
                                                </div>
                                                <p class="mb_16">billed monthly</p>

                                                <h2>₹999<span>&nbsp;+&nbsp;gst</span></h2>
                                                <p class="mb_24">billed monthly</p>
                                                <Link href="https://www.go-omnic.com/app/auth/sign-up">Get Started</Link>
                                                <div class="border-div-custom"></div>
                                                <ul className='emptyList'>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>Unlimited Products</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>Custom Storefront</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>100 Categories</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>50 Vendors</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>500 Purchase Bills</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>5000 Customers</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> 500 Sales Invoices</span></li>







                                                </ul>


                                            </div>
                                        </div>
                                        <div className='col-lg-3 mobspaceMb_24'>
                                            <div className='monthlyPricingItem'>
                                                <div className="displayFlex alignItem_center gap16 mb_24">
                                                    <div className='monthlyPricingImg growplan'>
                                                        <img src="/assets/images/star_icon.svg" />
                                                    </div>
                                                    <div>
                                                        <h3>Grow</h3>
                                                    </div>
                                                </div>
                                                <div className="displayFlex alignItem_center justifyContent_spacebetween  mb_10">
                                                    <div> <h4>₹2999<span>&nbsp; /month</span></h4></div>
                                                    <div>
                                                        <label className='percant-badge'>50% OFF</label>
                                                    </div>
                                                </div>
                                                <p class="mb_16">billed monthly</p>

                                                <h2>₹1499<span>&nbsp;+&nbsp;gst</span></h2>
                                                <p class="mb_24">billed monthly</p>





                                                <Link href="https://www.go-omnic.com/app/auth/sign-up">Get Started</Link>
                                                <div class="border-div-custom"></div>
                                                <ul className='emptyList'>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>Unlimited Products</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>Custom Storefront</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>Unlimited Categories</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>500 Vendors</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>1000 Purchase Bills</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>10000 Customers</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> 1000 Sales Invoices</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Recurring Expenses</span></li>

                                                </ul>

                                            </div>
                                        </div>
                                        <div className='col-lg-3 mobspaceMb_24'>
                                            <div className='monthlyPricingItem recommendedFrame'>
                                                <label className='recommendedText'>Recommended</label>
                                                <div className="displayFlex alignItem_center gap16 mb_24">
                                                    <div className='monthlyPricingImg accelerateplan'>
                                                        <img src="/assets/images/star_icon.svg" />
                                                    </div>
                                                    <div>
                                                        <h3>Accelerate</h3>
                                                    </div>
                                                </div>

                                                <div className="displayFlex alignItem_center justifyContent_spacebetween  mb_10">
                                                    <div> <h4>₹7999<span>&nbsp; /month</span></h4></div>
                                                    <div>
                                                        <label className='percant-badge'>50% OFF</label>
                                                    </div>
                                                </div>
                                                <p class="mb_16">billed monthly</p>

                                                <h2>₹3999<span>&nbsp;+&nbsp;gst</span></h2>
                                                <p class="mb_24">billed monthly</p>

                                                <Link href="https://www.go-omnic.com/app/auth/sign-up">Get Started</Link>

                                                <div class="border-div-custom"></div>
                                                <ul className='emptyList'>

                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>Unlimited Products</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>Custom Storefront</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>Unlimited Categories</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>1000 Vendors</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>5000 Purchase Bills</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>50000 Customers</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> 5000 Sales Invoices</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Recurring Expenses</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Zyl AI Powerhouse</span></li>


                                                </ul>

                                            </div>
                                        </div>
                                        <div className='col-lg-3'>
                                            <div className='monthlyPricingItem'>
                                                <div className="displayFlex alignItem_center gap16 mb_24">
                                                    <div className='monthlyPricingImg scaleplan'>
                                                        <img src="/assets/images/star_icon.svg" />
                                                    </div>
                                                    <div>
                                                        <h3>Scale</h3>
                                                    </div>
                                                </div>

                                                <div className="displayFlex alignItem_center justifyContent_spacebetween  mb_10">
                                                    <div> <h4>₹99999<span>&nbsp; /month</span></h4></div>
                                                    <div>
                                                        <label className='percant-badge'>50% OFF</label>
                                                    </div>
                                                </div>
                                                <p class="mb_16">billed monthly</p>

                                                <h2>₹6999<span>&nbsp;+&nbsp;gst</span></h2>
                                                <p class="mb_24">billed monthly</p>


                                                <Link href="https://www.go-omnic.com/app/auth/sign-up">Get Started</Link>
                                                <div class="border-div-custom"></div>

                                                <ul className='emptyList'>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>Unlimited Products</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>Custom Storefront</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>Unlimited Categories</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>1000 Vendors</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>5000 Purchase Bills</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>50000 Customers</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> 5000 Sales Invoices</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Recurring Expenses</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Zyl AI Powerhouse</span></li>

                                                </ul>

                                            </div>
                                        </div>
                                        {/* <div className='col'>
                                            <div className='monthlyPricingItem'>
                                                <label>Recommended</label>
                                                <div className='monthlyPricingImg enterprisePlan'>
                                                    <img src="/assets/images/star_icon.svg" />
                                                </div>
                                                <h3>Enterprise Plan</h3>
                                                <h2>Custom</h2>
                                                <p>Product Catalog Management Product Catalog Management Product Catalog Management Product Catalog ManagementProduct Catalog Management Product Catalog Management</p>

                                                <Link href="https://www.go-omnic.com/app/auth/sign-up">Get Started</Link>

                                            </div>
                                        </div> */}
                                    </div>
                                </div>

                            </Tab>


                            <Tab eventKey="yearlyoff" title={<> Yearly <span className='flaxFlowerBlueText_clr'>25% off</span></>}>



                                <div className='monthlyPricingFrame'>
                                    <div className='row justifyContent_center'>

                                        <div className='col-lg-3'>
                                            <div className='monthlyPricingItem mobspaceMb_24'>
                                                <div className="displayFlex alignItem_center gap16 mb_24">
                                                    <div className='monthlyPricingImg startplan'>
                                                        <img src="/assets/images/star_icon.svg" />
                                                    </div>
                                                    <div>
                                                        <h3>Start</h3>
                                                    </div>
                                                </div>
                                                <div className="displayFlex alignItem_center justifyContent_spacebetween  mb_10">
                                                    <div> <h4>₹1999<span>&nbsp; /month</span></h4></div>
                                                    <div>
                                                        <label className='percant-badge'>63% OFF</label>
                                                    </div>
                                                </div>
                                                <p class="mb_16">billed once yearly</p>

                                                <h2>₹749<span>&nbsp;+&nbsp;gst</span></h2>
                                                <p class="mb_24">billed once yearly</p>
                                                <Link href="https://www.go-omnic.com/app/auth/sign-up">Get Started</Link>
                                                <div class="border-div-custom"></div>
                                                <ul className='emptyList'>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>Unlimited Products</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>Custom Storefront</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>100 Categories</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>50 Vendors</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>500 Purchase Bills</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>5000 Customers</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> 500 Sales Invoices</span></li>







                                                </ul>


                                            </div>
                                        </div>
                                        <div className='col-lg-3 mobspaceMb_24'>
                                            <div className='monthlyPricingItem'>
                                                <div className="displayFlex alignItem_center gap16 mb_24">
                                                    <div className='monthlyPricingImg growplan'>
                                                        <img src="/assets/images/star_icon.svg" />
                                                    </div>
                                                    <div>
                                                        <h3>Grow</h3>
                                                    </div>
                                                </div>
                                                <div className="displayFlex alignItem_center justifyContent_spacebetween  mb_10">
                                                    <div> <h4>₹2999<span>&nbsp; /month</span></h4></div>
                                                    <div>
                                                        <label className='percant-badge'>63 % OFF</label>
                                                    </div>
                                                </div>
                                                <p class="mb_16">billed once yearly</p>

                                                <h2>₹1124<span>&nbsp;+&nbsp;gst</span></h2>
                                                <p class="mb_24">billed once yearly</p>





                                                <Link href="https://www.go-omnic.com/app/auth/sign-up">Get Started</Link>
                                                <div class="border-div-custom"></div>
                                                <ul className='emptyList'>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>Unlimited Products</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>Custom Storefront</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>Unlimited Categories</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>500 Vendors</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>1000 Purchase Bills</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>10000 Customers</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> 1000 Sales Invoices</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Recurring Expenses</span></li>

                                                </ul>

                                            </div>
                                        </div>
                                        <div className='col-lg-3 mobspaceMb_24'>
                                            <div className='monthlyPricingItem recommendedFrame'>
                                                <label className='recommendedText'>Recommended</label>
                                                <div className="displayFlex alignItem_center gap16 mb_24">
                                                    <div className='monthlyPricingImg accelerateplan'>
                                                        <img src="/assets/images/star_icon.svg" />
                                                    </div>
                                                    <div>
                                                        <h3>Accelerate</h3>
                                                    </div>
                                                </div>

                                                <div className="displayFlex alignItem_center justifyContent_spacebetween  mb_10">
                                                    <div> <h4>₹7999<span>&nbsp; /month</span></h4></div>
                                                    <div>
                                                        <label className='percant-badge'>63 % OFF</label>
                                                    </div>
                                                </div>
                                                <p class="mb_16">billed once yearly</p>

                                                <h2>₹2999<span>&nbsp;+&nbsp;gst</span></h2>
                                                <p class="mb_24">billed once yearly</p>

                                                <Link href="https://www.go-omnic.com/app/auth/sign-up">Get Started</Link>

                                                <div class="border-div-custom"></div>
                                                <ul className='emptyList'>

                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>Unlimited Products</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>Custom Storefront</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>Unlimited Categories</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>1000 Vendors</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>5000 Purchase Bills</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>50000 Customers</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> 5000 Sales Invoices</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Recurring Expenses</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Zyl AI Powerhouse</span></li>


                                                </ul>

                                            </div>
                                        </div>
                                        <div className='col-lg-3'>
                                            <div className='monthlyPricingItem'>
                                                <div className="displayFlex alignItem_center gap16 mb_24">
                                                    <div className='monthlyPricingImg scaleplan'>
                                                        <img src="/assets/images/star_icon.svg" />
                                                    </div>
                                                    <div>
                                                        <h3>Scale</h3>
                                                    </div>
                                                </div>

                                                <div className="displayFlex alignItem_center justifyContent_spacebetween  mb_10">
                                                    <div> <h4>₹99999<span>&nbsp; /month</span></h4></div>
                                                    <div>
                                                        <label className='percant-badge'>63 % OFF</label>
                                                    </div>
                                                </div>
                                                <p class="mb_16">billed once yearly</p>

                                                <h2>₹37499<span>&nbsp;+&nbsp;gst</span></h2>
                                                <p class="mb_24">billed once yearly</p>


                                                <Link href="https://www.go-omnic.com/app/auth/sign-up">Get Started</Link>
                                                <div class="border-div-custom"></div>

                                                <ul className='emptyList'>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>Unlimited Products</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>Custom Storefront</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>Unlimited Categories</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>1000 Vendors</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>5000 Purchase Bills</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span>50000 Customers</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> 5000 Sales Invoices</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Recurring Expenses</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Zyl AI Powerhouse</span></li>

                                                </ul>

                                            </div>
                                        </div>
                                        {/* <div className='col'>
                                            <div className='monthlyPricingItem'>
                                                <label>Recommended</label>
                                                <div className='monthlyPricingImg enterprisePlan'>
                                                    <img src="/assets/images/star_icon.svg" />
                                                </div>
                                                <h3>Enterprise Plan</h3>
                                                <h2>Custom</h2>
                                                <p>Product Catalog Management Product Catalog Management Product Catalog Management Product Catalog ManagementProduct Catalog Management Product Catalog Management</p>

                                                <Link href="https://www.go-omnic.com/app/auth/sign-up">Get Started</Link>

                                            </div>
                                        </div> */}
                                    </div>
                                </div>

                            </Tab>

                        </Tabs>
                    </div>


                </div>
            </section>


            <div className='displayFlex alignItem_center justifyContent_center mb_60'>
                <div>
                    <button onClick={() => setExpand(!expand)} className='mainbutton ruinedSmoresbtn textDecoration_unset gap12'>
                        <img src="/assets/images/compare_icon.svg" alt="Compare all features" />
                        <span>
                            {expand ? "Hide all features" : " Compare all features" }
                            </span>
                    </button>
                </div>
            </div>
            {expand && (
                <>
                    <section className='comparePlans_sec'>
                        <div className='container'>
                            <h2 className='fontSize30 fontWeight600 ruinedSmores_clr  textalign_center mb_40'>Compare Plans</h2>


                            <div className='viewComparePlans'>
                                <Tabs
                                    id="plans-tabs"
                                    activeKey={key}
                                    onSelect={(k) => setKey(k || "Start")}
                                    className="mobileCompareView"
                                >
                                    {planNames.map((plan, inx) => (
                                        <Tab eventKey={plan} title={plan} key={plan}>
                                            {
                                                inx == 2 && <div className='viewPlansRecommended'>Recommended</div>
                                            }
                                            <div className={inx == 2 ? "fullPlanparent" : ""}>
                                                {modulesData.map((module) => (
                                                    <div key={module.module}>
                                                        <div className='panelTitle'>
                                                            <h5 className="fontSize18  fontWeight500 ruinedSmoresText_clr">{module.module}</h5>
                                                        </div>
                                                        <div className='panelBody'>
                                                            {module.features.map((feature) => (
                                                                <div key={feature.name} className='displayFlex alignItem_center justifyContent_spacebetween'>
                                                                    <div>  <h5 className='fontSize14  fontWeight400 rockabillyText_clr'>{feature.name}</h5>
                                                                    </div>
                                                                    <div>
                                                                        <p className='fontSize14  fontWeight400 ruinedSmoresText_clr'>{feature.plans[plan] || "-"}</p>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </Tab>
                                    ))}
                                </Tabs>
                            </div>



                            <div className="comparePlansTable Recommended">
                                <table className="tableHeader">
                                    <thead>

                                        <tr>
                                            <th >Feature’s</th>
                                            {planNames?.map((plan, inx) => (
                                                <th key={plan} className='planHeader '>
                                                    {
                                                        inx == 2 && <div className='recommendedTop'>Recommended</div>
                                                    }
                                                    <div data-label={plan} className='displayInlineFlex alignItem_center gap10'>
                                                        <div className={`plansframe ${plan.toLowerCase()}plan`}>
                                                            <img src="/assets/images/star_icon.svg" alt={plan} />
                                                        </div>
                                                        <div>
                                                            <h5 className='fontSize18 fontWeight600 ruinedSmoresText_clr'>{plan}</h5>
                                                        </div>
                                                    </div>


                                                </th>
                                            ))}
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {modulesData.map((mod, i) => (
                                            <>
                                                <tr>
                                                    <td className='hideBeforeMob' key={mod.module}>
                                                        <button className={openIndices.includes(i) ? 'arrowOpen' : ''}
                                                            onClick={() => toggle(i)}
                                                        // style={{
                                                        //     background: openIndices.includes(i) ? "#f0f0f0" : "white",

                                                        // }}
                                                        >
                                                            <span> {mod.module}</span>

                                                            
                                                            <img src="/assets/images/solidDown_icon.svg" alt='solidDown_icon' />
                                                        </button>
                                                    </td>
                                                    <td className='emptytdata'></td>
                                                    <td className='emptytdata'></td>
                                                    <td className='emptytdata'></td>
                                                    <td className='emptytdata'></td>
                                                </tr>

                                                {openIndices.includes(i) && (
                                                    <>
                                                        {/* <thead>
                                                <tr>
                                                    <th style={{ borderBottom: "2px solid #ccc", padding: 10, textAlign: "left" }}>Feature’s</th>
                                                    {planNames?.map((plan) => (
                                                        <th key={plan} style={{ borderBottom: "2px solid #ccc", padding: 10, textAlign: "center" }}>
                                                            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, justifyContent: "center" }}>
                                                                <div className={`plansframe ${plan.toLowerCase()}plan`}>
                                                                    <img src="/assets/images/star_icon.svg" alt={plan} style={{ width: 20, height: 20 }} />
                                                                </div>
                                                                <div>
                                                                    <h5 style={{ fontSize: 18, fontWeight: 600, color: "#6a4c93" }}>{plan}</h5>
                                                                </div>
                                                            </div>
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead> */}
                                                        {mod.features.map(({ name, plans }, idx) => (
                                                            <tr key={idx}>
                                                                <td data-label="Feature’s" key={idx}>{name}</td>
                                                                {planNames.map((val, idx2) => (
                                                                    <td data-label={val} key={idx2}>
                                                                        {plans[val]}
                                                                    </td>

                                                                ))

                                                                }
                                                            </tr>
                                                        ))}
                                                    </>
                                                )}
                                            </>
                                        ))}
                                    </tbody>

                                </table>


                            </div>
                        </div>
                    </section>

                </>
            )}


            <section className='bizziloEnterprise_sec'>
                <div className='container'>
                    <div className='enterpriseFrame'>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <div className='mobspaceMb_24'>
                                    <h2 className='midnightSkyText_clr fontSize30 fontWeight700 mb_16'>Bizzilo Enterprise</h2>

                                    <p className='blackText_Clr fontSize14 fontWeight400 mb_24'>Power your business with our lightning-fast, all-in-one platform. From e-commerce websites to POS billing, inventory, and operations—launch quickly, manage seamlessly, and scale with unmatched performance.</p>

                                    <button onClick={() => setShow(true)} className='scheduleDemo_btn'>Schedule Demo</button>
                                </div>
                            </div>
                            <div className='col-lg-7 offset-lg-1'>

                                <div className='row'>
                                    <div className='col-lg-6 mobspaceMb_24'>

                                        <div className='enterpriseItem mb_24'>
                                            <img src="/assets/images/custom-themes.svg" alt='Custom Themes' />
                                            <h5>Custom Themes & Layouts</h5>
                                            <p>Customize your themes and layout based on your business use case</p>
                                        </div>

                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='enterpriseItem mb_24'>
                                            <img src="/assets/images/dedicated-infrastructure.svg" alt='dedicated-infrastructure' />
                                            <h5>Dedicated Infrastructure</h5>
                                            <p>Get private cloud hosting with auto-scaling to handle peak traffic for seamless reliability.</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='enterpriseItem mobspaceMb_24'>
                                            <img src="/assets/images/dedicated-account-manager.svg" alt='Dedicated Account Manager' />
                                            <h5>Dedicated Account Manager</h5>
                                            <p>Get personalized support with a dedicated account manager who understands your business. Receive expert guidance and tailored solutions - without the need to hire external developers or freelancers.</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='enterpriseItem'>
                                            <img src="/assets/images/custoIntegrations.svg" alt='Customizations & Integrations' />

                                            <h5>Customizations & Integrations</h5>
                                            <p>Customize your online store with bespoke features and smooth third-party integrations. Customize every aspect of your e-commerce journey to align perfectly with your business goals</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ScheduleDemo show={show} handleClose={() => setShow(false)} />

            <section
                className="clientLogo"

            >
                <div className='container'>
                    <div className=''>
                        <h2 className='fontSize36 fontWeight600 sootytext_clr mb_40 textalign_center'>Join Thousands of businesses at Bizzilo</h2>
                    </div>
                    <Marquee speed={50} direction="right">
                        <div className="clientLogoImage">
                            <div className="clientLogoIconframe">
                                <img
                                    className="height_80"
                                    src="/assets/images/client_logo_one.svg"
                                    alt="ClientLogos"
                                />
                            </div>
                            <div className="clientLogoIconframe">
                                <img
                                    className="height_150"
                                    src="/assets/images/client_logo_two.svg"
                                    alt="ClientLogos"
                                />
                            </div>
                            <div className="clientLogoIconframe ">
                                <img
                                    className="height_80"
                                    src="/assets/images/client_logo_three.svg"
                                    alt="ClientLogos"
                                />
                            </div>
                            <div className="clientLogoIconframe ">
                                {" "}
                                <img
                                    className="height_150"
                                    src="/assets/images/client_logo_four.svg"
                                    alt="ClientLogos"
                                />
                            </div>
                            <div className="clientLogoIconframe ">
                                {" "}
                                <img
                                    className="height_150"
                                    src="/assets/images/client_logo_five.svg"
                                    alt="ClientLogos"
                                />
                            </div>
                            <div className="clientLogoIconframe">
                                {" "}
                                <img
                                    className="height_150"
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
                                    className="height_80"
                                    src="/assets/images/client_logo_one.svg"
                                    alt="ClientLogos"
                                />
                            </div>
                            <div className="clientLogoIconframe">
                                <img
                                    className="height_150"
                                    src="/assets/images/client_logo_two.svg"
                                    alt="ClientLogos"
                                />
                            </div>
                            <div className="clientLogoIconframe ">
                                <img
                                    className="height_80"
                                    src="/assets/images/client_logo_three.svg"
                                    alt="ClientLogos"
                                />
                            </div>
                            <div className="clientLogoIconframe ">
                                {" "}
                                <img
                                    className="height_150"
                                    src="/assets/images/client_logo_four.svg"
                                    alt="ClientLogos"
                                />
                            </div>
                            <div className="clientLogoIconframe ">
                                {" "}
                                <img
                                    className="height_150"
                                    src="/assets/images/client_logo_five.svg"
                                    alt="ClientLogos"
                                />
                            </div>
                            <div className="clientLogoIconframe">
                                {" "}
                                <img
                                    className="height_150"
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
                </div>
            </section>

            <section className='addontoyourplans_sec'>
                <div className='container'>
                    <h5 className='fontSize20 fontWeight400 rockabillyText_clr mb_20'>Add-on to your plans</h5>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='addPlansItem mb_24'>
                                <div className='displayInlineFlex alignItem_center gap12'>
                                    <div className='addPlansIcon'>
                                        <img src="/assets/images/blackuser_icon.svg" alt='blackuser_icon' />
                                    </div>
                                    <div>
                                        <h4>Additional Users (Portal)</h4>
                                        <p>user per month</p>
                                    </div>
                                </div>
                                <div>
                                    <h5>₹99</h5>
                                  
                                </div>


                            </div>
                        </div>


                        <div className='col-lg-4'>
                            <div className='addPlansItem mb_24'>
                                <div className='displayInlineFlex alignItem_center gap12'>
                                    <div className='addPlansIcon'>
                                        <img src="/assets/images/additional-stores.svg" alt='Additional Stores' />
                                    </div>
                                    <div>
                                        <h4>Additional Stores</h4>
                                        <p>user per month</p>
                                    </div>
                                </div>
                                <div>
                                    <h5>₹599</h5>
                                  
                                </div>


                            </div>
                        </div>



                        <div className='col-lg-4'>
                            <div className='addPlansItem mb_24'>
                                <div className='displayInlineFlex alignItem_center gap12'>
                                    <div className='addPlansIcon'>
                                        <img src="/assets/images/additional-warehouse.svg" alt='additional-warehouse' />
                                    </div>
                                    <div>
                                        <h4>Additional Warehouse</h4>
                                        <p>warehouse per month</p>
                                    </div>
                                </div>
                                <div>
                                    <h5>₹599</h5>
                                  
                                </div>


                            </div>
                        </div>



                        <div className='col-lg-4'>
                            <div className='addPlansItem mb_24'>
                                <div className='displayInlineFlex alignItem_center gap12'>
                                    <div className='addPlansIcon'>
                                        <img src="/assets/images/sms-pack.svg" alt='sms pack' />
                                    </div>
                                    <div>
                                        <h4>SMS Pack</h4>
                                        <p>50 SMS</p>
                                    </div>
                                </div>
                                <div>
                                    <h5>₹599</h5>
                                 
                                </div>


                            </div>
                        </div>




                        <div className='col-lg-4'>
                            <div className='addPlansItem mb_24'>
                                <div className='displayInlineFlex alignItem_center gap12'>
                                    <div className='addPlansIcon'>
                                        <img src="/assets/images/sales-invoices.svg" alt='Sales Invoices' />
                                    </div>
                                    <div>
                                        <h4>Sales Invoices</h4>
                                        <p>per cycle</p>
                                    </div>
                                </div>
                                <div>
                                    <h5>₹99</h5>
                                   
                                </div>


                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='addPlansItem mobspaceMb_24'>
                                <div className='displayInlineFlex alignItem_center gap12'>
                                    <div className='addPlansIcon'>
                                        <img src="/assets/images/sales-invoices.svg" alt='Purchase Bills' />
                                    </div>
                                    <div>
                                        <h4>Purchase Bills</h4>
                                        <p>per cycle</p>
                                    </div>
                                </div>
                                <div>
                                    <h5>₹99</h5>
                                   
                                </div>


                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='addPlansItem mobspaceMb_24'>
                                <div className='displayInlineFlex alignItem_center gap12'>
                                    <div className='addPlansIcon'>
                                        <img src="/assets/images/ai-img-generation.svg" alt='ai-img-generation' />
                                    </div>
                                    <div>
                                        <h4>AI Image Generation</h4>
                                        <p>50 Images</p>
                                    </div>
                                </div>
                                <div>
                                    <h5>₹99</h5>
                                  
                                </div>


                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='addPlansItem'>
                                <div className='displayInlineFlex alignItem_center gap12'>
                                    <div className='addPlansIcon'>
                                        <img src="/assets/images/ai-content-generation.svg" alt='ai-content-generation' />
                                    </div>
                                    <div>
                                        <h4>AI Content Generation</h4>
                                        <p>5000 words</p>
                                    </div>
                                </div>
                                <div>
                                    <h5>₹49</h5>
                                   
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className='clientsSayaboutus_sec'>
                <div className='container'>
                    <h2 className='fontSize36 fontWeight600 sootytext_clr mb_60 textalign_center'>What our clients say about us</h2>



                    <Slider {...clientsSayaboutSlider}>
                        <div className="clientsSayaboutItem">
                            <div className='row alignItem_center'>
                                <div className='col-lg-8'>
                                    <div className='clientsSayaboutContent mobspaceMb_24'>
                                        <div>
                                            <p className='fontSize18 fontWeight400 blackText_Clr'>I wanted a solution that could handle everything—website, orders, inventory, and payments—without me depending on multiple tools. Bizzilo gave me exactly that. From managing my online store to tracking stock and handling returns, everything is integrated. The platform is easy to use and perfect for small businesses like mine that want to look professional while saving time.</p>
                                        </div>
                                        <div>

                                            <div className='displayInlineFlex alignItem_center gap12'>
                                                <div className='clientsSayaboutIcon'>
                                                    <img src="/assets/images/ananth.jpg" alt='Maheshwari' />
                                                </div>
                                                <div>
                                                    <h4 className='fontSize16 fontWeight600 blackText_Clr'>Maheshwari</h4>
                                                    <p className='fontSize16 fontWeight400 blackText_Clr'>Cheerful Colors (Online Retail for Kidswear)</p>
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <img className='width100per' src="/assets/images/kidswear.png" alt='kidswear' />

                                </div>
                            </div>

                        </div>
                        <div className="clientsSayaboutItem">
                            <div className='row alignItem_center'>
                                <div className='col-lg-8'>
                                    <div className='clientsSayaboutContent mobspaceMb_24'>
                                        <div>
                                            <p className='fontSize18 fontWeight400 blackText_Clr'>Running both an online store and a physical shop was messy until I switched to Bizzilo. Now, inventory syncs automatically between my shop POS and online orders, so I never oversell or lose track of stock. The system gives me full visibility into sales, customers, and inventory, which helps me plan better. It feels like having a complete back-office team inside one software</p>
                                        </div>
                                        <div>

                                            <div className='displayInlineFlex alignItem_center gap12'>
                                                <div className='clientsSayaboutIcon'>
                                                    <img src="/assets/images/ananth.jpg" alt='Geetha T' />
                                                </div>
                                                <div>
                                                    <h4 className='fontSize16 fontWeight600 blackText_Clr'>Geetha T</h4>
                                                    <p className='fontSize16 fontWeight400 blackText_Clr'>Veehomecart (Kitchenwares, Online + Physical Store)</p>
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <img className='width100per' src="/assets/images/veehomecart.png" alt='veehomecart' />

                                </div>
                            </div>

                        </div>
                        <div className="clientsSayaboutItem">
                            <div className='row alignItem_center'>
                                <div className='col-lg-8'>
                                    <div className='clientsSayaboutContent mobspaceMb_24'>
                                        <div>
                                            <p className='fontSize18 fontWeight400 blackText_Clr'>Managing multiple warehouses and retail outlets was always a challenge for us. With Bizzilo, we now run both wholesale and retail sales—online and offline—from one single platform. Inventory updates happen in real time across warehouses and stores, and the POS integration ensures our billing is seamless. It has truly simplified operations and helped us scale without worrying about mismanagement</p>
                                        </div>
                                        <div>

                                            <div className='displayInlineFlex alignItem_center gap12'>
                                                <div className='clientsSayaboutIcon'>
                                                    <img src="/assets/images/balan-sivanthi.jpg" alt='balan sivanthiAadithan' />
                                                </div>
                                                <div>
                                                    <h4 className='fontSize16 fontWeight600 blackText_Clr'>Balan Sivanthi Aadithan</h4>
                                                    <p className='fontSize16 fontWeight400 blackText_Clr'>BKS Stores (Retail & Wholesale of Kitchenwares)</p>
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <img className='width100per' src="/assets/images/bks-stores.png" alt="bks-stores" />

                                </div>
                            </div>

                        </div>
                        <div className="clientsSayaboutItem">
                            <div className='row alignItem_center'>
                                <div className='col-lg-8'>
                                    <div className='clientsSayaboutContent mobspaceMb_24'>
                                        <div>
                                            <p className='fontSize18 fontWeight400 blackText_Clr'>As a distributor, my biggest pain point was tracking stock across multiple warehouses and monitoring collections from field sales executives. Bizzilo solved both. Now our team can record orders and collections on the go, and I get a complete view of stock movement and outstanding payments in real time. It has improved efficiency and reduced errors significantly</p>
                                        </div>
                                        <div>

                                            <div className='displayInlineFlex alignItem_center gap12'>
                                                <div className='clientsSayaboutIcon'>
                                                    <img src="/assets/images/ananth.jpg" alt='ananth' />
                                                </div>
                                                <div>
                                                    <h4 className='fontSize16 fontWeight600 blackText_Clr'>Ananth</h4>
                                                    <p className='fontSize16 fontWeight400 blackText_Clr'>AVS Trading (Distribution of Kitchenwares)</p>
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <img className='width100per' src="/assets/images/avs-trading.png" alt="AVS Trading" />

                                </div>
                            </div>

                        </div>
                    </Slider>

                </div>
            </section>

        </>
    )
}

export default PricingComponent
