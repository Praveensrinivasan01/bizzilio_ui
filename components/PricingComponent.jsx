"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const PricingComponent = () => {
    // Open all indices by default
    const hugeiconsTickIcon = <img className="greenTickFilter" src="/assets/images/uis_check.svg" alt="Yes"  />;
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
                { name: "Recurring expenses", plans: { Start: "", Grow: "", Accelerate: "", Scale: "" } },
                { name: "Apply landed costs to purchases", plans: { Start: "", Grow: "", Accelerate: "", Scale: "" } }
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
                { name: "Re-order points and Levels", plans: { Start: "", Grow: "", Accelerate: "", Scale: "" } }
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
                { name: "Basic Support", plans: { Start: closeIcon, Grow: closeIcon, Accelerate: closeIcon, Scale: hugeiconsTickIcon } },
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
                { name: "Custom Domain", plans: { Start: closeIcon, Grow: hugeiconsTickIcon, Accelerate: hugeiconsTickIcon, Scale: hugeiconsTickIcon } },
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
                { name: "AI Commerce", plans: { Start: "", Grow: "", Accelerate: "", Scale: "" } },
                { name: "Whatsapp Automations", plans: { Start: "", Grow: "", Accelerate: "", Scale: "" } },
                { name: "Zyl - Conversational BI", plans: { Start: "", Grow: "", Accelerate: "", Scale: "" } }
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
                                                <label>Recommended</label>
                                                <div className='monthlyPricingImg startplan'>
                                                    <img src="/assets/images/star_icon.svg" />
                                                </div>
                                                <h3>Start</h3>
                                                <h2>₹999</h2>

                                                <ul className='emptyList'>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>

                                                </ul>

                                                <Link href="https://www.go-omnic.com/app/auth/sign-up">Get Started</Link>

                                            </div>
                                        </div>
                                        <div className='col-lg-3 mobspaceMb_24'>
                                            <div className='monthlyPricingItem'>
                                                <label>Recommended</label>
                                                <div className='monthlyPricingImg growplan'>
                                                    <img src="/assets/images/star_icon.svg" />
                                                </div>
                                                <h3>Grow</h3>
                                                <h2>₹1,499</h2>
                                                <ul className='emptyList'>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>

                                                </ul>
                                                <Link href="https://www.go-omnic.com/app/auth/sign-up">Get Started</Link>

                                            </div>
                                        </div>
                                        <div className='col-lg-3 mobspaceMb_24'>
                                            <div className='monthlyPricingItem recommendedFrame'>
                                                <label>Recommended</label>
                                                <div className='monthlyPricingImg accelerateplan'>
                                                    <img src="/assets/images/star_icon.svg" />
                                                </div>
                                                <h3>Accelerate</h3>
                                                <h2>₹4,999</h2>
                                                <ul className='emptyList'>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>

                                                </ul>
                                                <Link href="https://www.go-omnic.com/app/auth/sign-up">Get Started</Link>

                                            </div>
                                        </div>
                                        <div className='col-lg-3'>
                                            <div className='monthlyPricingItem'>
                                                <label>Recommended</label>
                                                <div className='monthlyPricingImg scaleplan'>
                                                    <img src="/assets/images/star_icon.svg" />
                                                </div>
                                                <h3>Scale</h3>
                                                <h2>₹9,999</h2>
                                                <ul className='emptyList'>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>

                                                </ul>
                                                <Link href="https://www.go-omnic.com/app/auth/sign-up">Get Started</Link>

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
                                            <div className='monthlyPricingItem '>
                                                <label>Recommended</label>
                                                <div className='monthlyPricingImg startplan'>
                                                    <img src="/assets/images/star_icon.svg" />
                                                </div>
                                                <h3>Start</h3>
                                                <h2>₹11,988</h2>
                                                <ul className='emptyList'>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>

                                                </ul>
                                                <Link href="https://www.go-omnic.com/app/auth/sign-up">Get Started</Link>

                                            </div>
                                        </div>
                                        <div className='col-lg-3 mobspaceMb_24'>
                                            <div className='monthlyPricingItem'>
                                                <label>Recommended</label>
                                                <div className='monthlyPricingImg growplan'>
                                                    <img src="/assets/images/star_icon.svg" />
                                                </div>
                                                <h3>Grow</h3>
                                                <h2>₹14,390</h2>
                                                <ul className='emptyList'>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>

                                                </ul>
                                                <Link href="https://www.go-omnic.com/app/auth/sign-up">Get Started</Link>

                                            </div>
                                        </div>
                                        <div className='col-lg-3 mobspaceMb_24'>
                                            <div className='monthlyPricingItem recommendedFrame'>
                                                <label>Recommended</label>
                                                <div className='monthlyPricingImg accelerateplan'>
                                                    <img src="/assets/images/star_icon.svg" />
                                                </div>
                                                <h3>Accelerate</h3>
                                                <h2>₹28,790</h2>
                                                <ul className='emptyList'>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>

                                                </ul>
                                                <Link href="https://www.go-omnic.com/app/auth/sign-up">Get Started</Link>

                                            </div>
                                        </div>
                                        <div className='col-lg-3'>
                                            <div className='monthlyPricingItem'>
                                                <label>Recommended</label>
                                                <div className='monthlyPricingImg scaleplan'>
                                                    <img src="/assets/images/star_icon.svg" />
                                                </div>
                                                <h3>Scale</h3>
                                                <h2>₹47,990</h2>
                                                <ul className='emptyList'>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>
                                                    <li><img src="/assets/images/hugeicons_tick.svg" /><span> Product Catalog Management</span></li>

                                                </ul>
                                                <Link href="https://www.go-omnic.com/app/auth/sign-up">Get Started</Link>

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
                    <button onClick={() => setShow(!show)} className='mainbutton ruinedSmoresbtn textDecoration_unset gap12'>
                        <img src="/assets/images/compare_icon.svg" alt="Compare all features" />
                        <span> Compare all features</span>
                    </button>
                </div>
            </div>
            {show && (
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
                                            <div className={inx == 2 ? "fullPlanparent" :  "" }>
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
                                                        <button
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
        </>
    )
}

export default PricingComponent
