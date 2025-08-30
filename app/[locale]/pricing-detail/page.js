export const dynamic = 'force-static';
export const revalidate = 7200; 
export const fetchCache = 'force-cache';

import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "Pricing Details | Bizzilo - Accelerate Plan & Add-ons",
  description: "View detailed pricing for Bizzilo’s Accelerate plan, including users, stores, POS, sales features, and add-ons like extra users, locations, and POS terminals.",
  keywords: "Bizzilo pricing, Accelerate plan, ERP subscription cost, add-ons, users, locations, POS, cloud ERP plans",
  openGraph: {
    title: "Pricing Details | Bizzilo",
    description: "Explore Bizzilo’s Accelerate plan details and add-ons including additional users, locations, and POS at affordable monthly rates.",
    type: "website",
  },
}

const page = () => {
    return (
        <>
            <section className='pricingDetail_sec'>
                <div className='container'>
                    <Link href="#" className='mb_32 displayInlineFlex alignItem_center gap12  blackText_Clr fontSize16 fontWeight600 textDecoration_unset'>
                        <img className='blackFilter width14px' src="/assets/images/leftarrow.svg" alt='leftarrow' />
                        <span>Back</span>
                    </Link>
                    <div className='pricingDetail_frame'>
                        <div className='displayInlineFlex alignItem_center gap16 mb_35'>
                            <div className='planOverviewicon accelerateplan'>
                                <img src="/assets/images/star_icon.svg" />
                            </div>
                            <div>
                                <h5 className='midnightSkyText_clr fontSize20 fontWeight600 '>Accelerate</h5>
                            </div>
                            <div>
                                <Link href="#" className='brightNavyBlueText_clr fontSize20 fontWeight400 textDecoration_unset'>
                                    Change
                                </Link>
                            </div>

                        </div>

                        <div>
                            <ul className='plansdetailCount'>
                                <li>
                                    <div className='displayInlineFlex alignItem_center gap10'>
                                        <div>
                                            <img src="/assets/images/users_icon.svg" />
                                        </div>
                                        <div>
                                            <h3>Users</h3>
                                        </div>
                                    </div>
                                    <div>
                                        <h5>25</h5>
                                    </div>
                                </li>

                                <li>



                                    <div className='displayInlineFlex alignItem_center gap10'>
                                        <div>
                                            <img src="/assets/images/store_icon.svg" />
                                        </div>
                                        <div>
                                            <h3>Store</h3>
                                        </div>
                                    </div>
                                    <div>
                                        <h5>25</h5>
                                    </div>



                                </li>

                                <li>
                                    <div className='displayInlineFlex alignItem_center gap10'>
                                        <div>
                                            <img src="/assets/images/pos_icon.svg" />
                                        </div>
                                        <div>
                                            <h3>Store</h3>
                                        </div>
                                    </div>
                                    <div>
                                        <h5>25</h5>
                                    </div>



                                </li>

                                <li>


                                    <div className='displayInlineFlex alignItem_center gap10'>
                                        <div>
                                            <img src="/assets/images/sales_icon.svg" />
                                        </div>
                                        <div>
                                            <h3>Store</h3>
                                        </div>
                                    </div>
                                    <div>
                                        <h5>25</h5>
                                    </div>


                                </li>
                            </ul></div>
                        <div>
                            <Link href="#" className='displayInlineFlex alignItem_center gap12  midnightSkyText_clr fontSize18 fontWeight500 textDecoration_unset'>
                                <span>View Details</span>
                                <img src="/assets/images/downArrow.svg" alt='down sarrow' />

                            </Link>
                        </div>
                    </div>
                    <h5 className='fontSize20 fontWeight400 rockabillyText_clr mb_20'>Add-on to your plans</h5>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='addtoyourplansItem'>
                                <div>
                                    <div>
                                        <img src="/assets/images/blackuser_icon.svg" alt='blackuser_icon'/>
                                    </div>
                                    <div>
                                        <h4>Additional Users</h4>
                                        <p>Add more team members to manage your store efficiently</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h4>₹129</h4>
                                        <p>/ per user per month</p>
                                    </div>
                                    <div>
                                        <button className='mainbutton ruinedSmoresbtn gap8'>
                                            <span>Add</span>
                                            <img src="/assets/images/plus_icon.svg" alt='plus' />
                                       </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='addtoyourplansItem'>
                                <div>
                                    <div>
                                        <img src="/assets/images/blackLocations_icon.svg" alt='blackLocations_icon' />
                                    </div>
                                    <div>
                                        <h4>Locations</h4>
                                        <p>Set up store locations and fulfil orders faster</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h4>₹599</h4>
                                        <p>/ per user per month</p>
                                    </div>
                                    <div>
                                        <button className='mainbutton ruinedSmoresbtn gap8'>
                                            <span>Add</span>
                                            <img src="/assets/images/plus_icon.svg" alt='plus' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='addtoyourplansItem'>
                                <div>
                                    <div>
                                        <img src="/assets/images/blackPos_icon.svg" alt='blackPos_icons' />
                                    </div>
                                    <div>
                                        <h4>POS</h4>
                                        <p>Set up store locations and fulfil orders faster</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h4>₹999</h4>
                                        <p>/ per user per month</p>
                                    </div>
                                    <div>
                                        <button className='mainbutton ruinedSmoresbtn gap8'>
                                            <span>Add</span>
                                            <img src="/assets/images/plus_icon.svg" alt='plus' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
