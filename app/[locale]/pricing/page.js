"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const page = () => {
    const [openIndices, setOpenIndices] = useState([]); // changed from openIndex

    const toggle = (index) => {
        setOpenIndices((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };
    const planNames = ["Start", "Grow", "Accelerate", "Scale"];
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
                { name: "Collections", plans: { Start: "Y", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "Barcode", plans: { Start: "Y", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "QR Code", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } }
            ]
        },
        {
            module: "Procurement",
            features: [
                { name: "Supplier/Vendor", plans: { Start: "50", Grow: "500", Accelerate: "1000", Scale: "UNLIMITED" } },
                { name: "Supplier price list", plans: { Start: "50", Grow: "500", Accelerate: "1000", Scale: "UNLIMITED" } },
                { name: "Request for Quotation (RFQ)", plans: { Start: "N", Grow: "N", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Purchase Order(PO) & Bills", plans: { Start: "500/mo", Grow: "1000/mo", Accelerate: "5000/mo", Scale: "UNLIMITED" } },
                { name: "Purchase Approvals", plans: { Start: "Y", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "GRN", plans: { Start: "Y", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "Quality and Quantity Check", plans: { Start: "Y", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
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
                { name: "Sales Approvals", plans: { Start: "Y", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "Sales Invoice", plans: { Start: "500/mo", Grow: "1000/mo", Accelerate: "5000/mo", Scale: "UNLIMITED" } },
                { name: "Sales Return", plans: { Start: "100/mo", Grow: "200/mo", Accelerate: "1000/mo", Scale: "UNLIMITED" } },
                { name: "Shipping labels", plans: { Start: "Y", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "Picklist", plans: { Start: "Y", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "Shipment Tracking", plans: { Start: "Y", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "e-way Billing", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "e-Invoicing", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Shipping Restriction", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Shipping Rate Calculator", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Shipping API", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "E-Invoices", plans: { Start: "N", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "E-Waybills", plans: { Start: "N", Grow: "N", Accelerate: "Y", Scale: "Y" } }
            ]
        },
        {
            module: "Inventory",
            features: [
                { name: "Track Inventory", plans: { Start: "Y", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "Stock Enquiry", plans: { Start: "Y", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "Stock Transfer - Internal", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Stock Transfer - External", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Warehouse Rejection", plans: { Start: "Y", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "Batch Number Tracking", plans: { Start: "N", Grow: "N", Accelerate: "Y", Scale: "Y" } },
                { name: "Serial Number Tracking", plans: { Start: "N", Grow: "N", Accelerate: "Y", Scale: "Y" } },
                { name: "Warehouse Labels Generation", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "UOM Conversions", plans: { Start: "Y", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "Re-order points and Levels", plans: { Start: "", Grow: "", Accelerate: "", Scale: "" } }
            ]
        },
        {
            module: "Payables",
            features: [
                { name: "Supplier/Vendor Payments", plans: { Start: "Y", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "Debit Notes", plans: { Start: "Y", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "Debit Note Approvals", plans: { Start: "Y", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "Recurring Bills", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } }
            ]
        },
        {
            module: "Receivables",
            features: [
                { name: "Customer Payments", plans: { Start: "Y", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "Credit Notes", plans: { Start: "Y", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "Credit Note Approvals", plans: { Start: "Y", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
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
                { name: "Invoice Customization", plans: { Start: "Y", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "Multi-lingual invoicing", plans: { Start: "N", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "Multi-transaction number series", plans: { Start: "N", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "Multi-currency invoicing", plans: { Start: "N", Grow: "N", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Automatic exchange rates", plans: { Start: "N", Grow: "N", Accelerate: "N", Scale: "Coming Soon" } }
            ]
        },
        {
            module: "Integrations",
            features: [
                { name: "Payment Gateways(Razorpay, PhonePe)", plans: { Start: "N", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "SMS Vendors (Gupshup, Kaleyra)", plans: { Start: "N", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "3rd Party Logistics", plans: { Start: "N", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "ONDC", plans: { Start: "Coming Soon", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } }
            ]
        },
        {
            module: "Portal Access",
            features: [
                { name: "Supplier Portal", plans: { Start: "N", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } },
                { name: "Customer Portal", plans: { Start: "N", Grow: "Coming Soon", Accelerate: "Coming Soon", Scale: "Coming Soon" } }
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
                { name: "Basic Support", plans: { Start: "N", Grow: "N", Accelerate: "N", Scale: "Y" } },
                { name: "Dedicated Support", plans: { Start: "N", Grow: "N", Accelerate: "N", Scale: "Y" } }
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
                { name: "Basic", plans: { Start: "Y", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "Advanced", plans: { Start: "N", Grow: "N", Accelerate: "Y", Scale: "Y" } }
            ]
        },
        {
            module: "E-commerce",
            features: [
                { name: "Online Store(Subdomain)", plans: { Start: "Y", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "Custom Domain", plans: { Start: "N", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "SSL Certificate", plans: { Start: "N", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "Built-in SEO", plans: { Start: "N", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "Blogs", plans: { Start: "N", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "Recommendation Engine", plans: { Start: "N", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "Google Analytics", plans: { Start: "N", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "Google Tag Manager", plans: { Start: "N", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "Google and Meta Ads", plans: { Start: "N", Grow: "N", Accelerate: "Y", Scale: "Y" } },
                { name: "Abandoned Cart Email", plans: { Start: "N", Grow: "Y", Accelerate: "Y", Scale: "Y" } },
                { name: "Campaign Tools", plans: { Start: "N", Grow: "N", Accelerate: "Y", Scale: "Y" } }
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
                { name: "Admin App", plans: { Start: "Y", Grow: "Y", Accelerate: "Y", Scale: "Y" } }
            ]
        }
    ];


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

                                        <div className='col'>
                                            <div className='monthlyPricingItem mobspaceMb_24'>
                                                <label>Recommended</label>
                                                <div className='monthlyPricingImg startplan'>
                                                    <img src="/assets/images/star_icon.svg" />
                                                </div>
                                                <h3>Start</h3>
                                                <h2>₹999</h2>
                                                <p>Product Catalog Management Product Catalog Management Product Catalog Management Product Catalog ManagementProduct Catalog Management Product Catalog Management</p>

                                                <Link href="https://www.go-omnic.com/app/auth/sign-up">Get Started</Link>

                                            </div>
                                        </div>
                                        <div className='col mobspaceMb_24'>
                                            <div className='monthlyPricingItem'>
                                                <label>Recommended</label>
                                                <div className='monthlyPricingImg growplan'>
                                                    <img src="/assets/images/star_icon.svg" />
                                                </div>
                                                <h3>Grow</h3>
                                                <h2>₹1,499</h2>
                                                <p>Product Catalog Management Product Catalog Management Product Catalog Management Product Catalog ManagementProduct Catalog Management Product Catalog Management</p>

                                                <Link href="https://www.go-omnic.com/app/auth/sign-up">Get Started</Link>

                                            </div>
                                        </div>
                                        <div className='col mobspaceMb_24'>
                                            <div className='monthlyPricingItem recommendedFrame'>
                                                <label>Recommended</label>
                                                <div className='monthlyPricingImg accelerateplan'>
                                                    <img src="/assets/images/star_icon.svg" />
                                                </div>
                                                <h3>Accelerate</h3>
                                                <h2>₹4,999</h2>
                                                <p>Product Catalog Management Product Catalog Management Product Catalog Management Product Catalog ManagementProduct Catalog Management Product Catalog Management</p>

                                                <Link href="https://www.go-omnic.com/app/auth/sign-up">Get Started</Link>

                                            </div>
                                        </div>
                                        <div className='col mobspaceMb_24'>
                                            <div className='monthlyPricingItem'>
                                                <label>Recommended</label>
                                                <div className='monthlyPricingImg scaleplan'>
                                                    <img src="/assets/images/star_icon.svg" />
                                                </div>
                                                <h3>Scale</h3>
                                                <h2>₹9,999</h2>
                                                <p>Product Catalog Management Product Catalog Management Product Catalog Management Product Catalog ManagementProduct Catalog Management Product Catalog Management</p>

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

                                        <div className='col'>
                                            <div className='monthlyPricingItem '>
                                                <label>Recommended</label>
                                                <div className='monthlyPricingImg startplan'>
                                                    <img src="/assets/images/star_icon.svg" />
                                                </div>
                                                <h3>Start</h3>
                                                <h2>₹11,988</h2>
                                                <p>Product Catalog Management Product Catalog Management Product Catalog Management Product Catalog ManagementProduct Catalog Management Product Catalog Management</p>

                                                <Link href="https://www.go-omnic.com/app/auth/sign-up">Get Started</Link>

                                            </div>
                                        </div>
                                        <div className='col mobspaceMb_24'>
                                            <div className='monthlyPricingItem'>
                                                <label>Recommended</label>
                                                <div className='monthlyPricingImg growplan'>
                                                    <img src="/assets/images/star_icon.svg" />
                                                </div>
                                                <h3>Grow</h3>
                                                <h2>₹14,390</h2>
                                                <p>Product Catalog Management Product Catalog Management Product Catalog Management Product Catalog ManagementProduct Catalog Management Product Catalog Management</p>

                                                <Link href="https://www.go-omnic.com/app/auth/sign-up">Get Started</Link>

                                            </div>
                                        </div>
                                        <div className='col mobspaceMb_24'>
                                            <div className='monthlyPricingItem recommendedFrame'>
                                                <label>Recommended</label>
                                                <div className='monthlyPricingImg accelerateplan'>
                                                    <img src="/assets/images/star_icon.svg" />
                                                </div>
                                                <h3>Accelerate</h3>
                                                <h2>₹28,790</h2>
                                                <p>Product Catalog Management Product Catalog Management Product Catalog Management Product Catalog ManagementProduct Catalog Management Product Catalog Management</p>

                                                <Link href="https://www.go-omnic.com/app/auth/sign-up">Get Started</Link>

                                            </div>
                                        </div>
                                        <div className='col mobspaceMb_24'>
                                            <div className='monthlyPricingItem'>
                                                <label>Recommended</label>
                                                <div className='monthlyPricingImg scaleplan'>
                                                    <img src="/assets/images/star_icon.svg" />
                                                </div>
                                                <h3>Scale</h3>
                                                <h2>₹47,990</h2>
                                                <p>Product Catalog Management Product Catalog Management Product Catalog Management Product Catalog ManagementProduct Catalog Management Product Catalog Management</p>

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

            <section className='comparePlans_sec'>
                <div className='container'>
                    <h2 className='fontSize30 fontWeight600 ruinedSmores_clr  textalign_center mb_60'>Compare Plans</h2>


                    {/* <div className='comparePlansTable'>
                        <table className='tableResponsive'>
                            <thead>
                                <tr>
                                    <th >Feature’s</th>
                                    <th>
                                        <div className='displayInlineFlex alignItem_center gap10'>
                                            <div className='plansframe startplan'>
                                                <img src="/assets/images/star_icon.svg" alt='Start' />
                                            </div>
                                            <div><h5 className='fontSize18 fontWeight600 ruinedSmoresText_clr'>Start</h5></div>
                                        </div>
                                    </th>
                                    <th>
                                        <div className='displayInlineFlex alignItem_center gap10'>
                                            <div className='plansframe growplan'>
                                                <img src="/assets/images/star_icon.svg" alt='Start' />
                                            </div>
                                            <div><h5 className='fontSize18 fontWeight600 ruinedSmoresText_clr'>Grow</h5></div>
                                        </div>
                                    </th>
                                    <th>
                                        <div className='displayInlineFlex alignItem_center gap10'>
                                            <div className='plansframe accelerateplan'>
                                                <img src="/assets/images/star_icon.svg" alt='Start' />
                                            </div>
                                            <div><h5 className='fontSize18 fontWeight600 ruinedSmoresText_clr'>Accelerate</h5></div>
                                        </div>
                                    </th>
                                    <th>
                                        <div className='displayInlineFlex alignItem_center gap10'>
                                            <div className='plansframe scaleplan'>
                                                <img src="/assets/images/star_icon.svg" alt='Start' />
                                            </div>
                                            <div><h5 className='fontSize18 fontWeight600 ruinedSmoresText_clr'>Scale</h5></div>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='fontSize18 fontWeight600 ruinedSmoresText_clr'>Basic</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Companies</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Multi currency</td>
                                    <td>Coming soon</td>
                                    <td>Coming soon</td>
                                    <td>Coming soon</td>
                                    <td>Coming soon</td>
                                </tr>
                                <tr>
                                    <td>Multi language</td>
                                    <td>Coming soon</td>
                                    <td>Coming soon</td>
                                    <td>Coming soon</td>
                                    <td>Coming soon</td>
                                </tr>
                                <tr>
                                    <td>Stores</td>
                                    <td>1</td>
                                    <td>5</td>
                                    <td>10</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>Users</td>
                                    <td>2</td>
                                    <td>5</td>
                                    <td>10</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>Warehouses</td>
                                    <td>1</td>
                                    <td>5</td>
                                    <td>10</td>
                                    <td>200</td>
                                </tr>

                                <tr>
                                    <td className='fontSize18 fontWeight600 ruinedSmoresText_clr'>Product catalogue</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td>Barcode</td>
                                    <td>Barcode</td>
                                    <td>Barcode</td>
                                    <td>Barcode</td>
                                    <td>Barcode</td>
                                </tr>
                                <tr>
                                    <td>Categories</td>
                                    <td>Categories</td>
                                    <td>Categories</td>
                                    <td>Categories</td>
                                    <td>Categories</td>
                                </tr>
                                <tr>
                                    <td>Collections</td>
                                    <td>Collections</td>
                                    <td>Collections</td>
                                    <td>Collections</td>
                                    <td>Collections</td>
                                </tr>
                                <tr>
                                    <td>Combos/groups</td>
                                    <td>Combos/groups</td>
                                    <td>Combos/groups</td>
                                    <td>Combos/groups</td>
                                    <td>Combos/groups</td>
                                </tr>
                                <tr>
                                    <td>Products</td>
                                    <td>Products</td>
                                    <td>Products</td>
                                    <td>Products</td>
                                    <td>Products</td>
                                </tr>
                                <tr>
                                    <td>Qr code</td>
                                    <td>Qr code</td>
                                    <td>Qr code</td>
                                    <td>Qr code</td>
                                    <td>Qr code</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> */}



                     
                    <div className="comparePlansTable Recommended">
                        <table className="tableHeader">
                            <thead>
 
                                <tr>
                                    <th>Feature’s</th>
                                    {planNames?.map((plan) => (
                                        <th key={plan} className='planHeader '>
                                            <div className='recommendedTop'>
                                                Recommended
                                            </div>
                                            <div className='displayInlineFlex alignItem_center gap10'>
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
                                            <td key={mod.module}>
                                                <button
                                                    onClick={() => toggle(i)}
                                                // style={{
                                                //     background: openIndices.includes(i) ? "#f0f0f0" : "white",

                                                // }}
                                                >
                                                    {mod.module}
                                                </button>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
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
                                                    <tr>
                                                        <td key={idx}>{name}</td>
                                                        {planNames.map((val, idx2) => (
                                                            <td key={idx2}>
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
    )
}

export default page
