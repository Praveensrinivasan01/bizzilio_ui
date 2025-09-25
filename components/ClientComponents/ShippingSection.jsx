"use client";

import { useRef, useState } from 'react';
import RadarGradient from '../../app/[locale]/features/ecommerce/radargradient';
import MovingTrackerPath from '../../app/[locale]/features/ecommerce/movingtracker';

export default function ShippingSection() {
    // const [imgSize, setImgSize] = useState({ width: 300, height: 300 });
    const imgRef = useRef(null)
    return (
        <section className='shipping_sec'>
            <div className='container'>
                <h2>Shipping</h2>
                <p className='fontSize16 nightSkyText_clr fontWeight400 mb_40'>
                    Improve your eCommerce shipping experience by controlling <br className='brHideOnMobile' />
                    shipping zones and assigning delivery zones for each product.
                </p>

                <div className='row mb_16'>
                    <div className='col-lg-6 mobspace_mb_16'>
                        <div className='shippingItem firststrowEqualHeight'>
                            <h5>Customized Shipping</h5>
                            <p>Businesses can set specific shipping rules or methods for each zone, optimizing costs and delivery options tailored to different regions</p>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='shippingItem firststrowEqualHeight'>
                            <h5>Delivery Time</h5>
                            <p>Zones can also impact delivery times, with closer zones generally having shorter delivery times compared to farther ones</p>
                        </div>
                    </div>
                </div>

                <div className='shippingItem mb_16'>
                    <div className='row'>
                        <div className='col-lg-7 mobspaceMb_24'>
                            <h5>Shipping Zone</h5>
                            <p>Businesses can set specific shipping rules or methods for each zone, optimizing costs and delivery options tailored to different regions</p>
                        </div>
                        {/* minHeight: 300  */}
                        <div className="col-lg-5" style={{ position: "relative"}}>
                            <img
                                src="/assets/images/shippingZone.png"
                                alt="Shipping Zone"
                                style={{ width: "100%", display: "block" }}
                                 ref={imgRef}
                                // onLoad={e => {
                                //     setImgSize({
                                //         width: e.target.naturalWidth,
                                //         height: e.target.naturalHeight
                                //     });
                                // }}
                            />
                            <MovingTrackerPath imgRef={imgRef} />
                        </div>
                    </div>
                </div>

                <div className='shippingItem mb_16'>
                    <div className='row'>
                        <div className='col-lg-7 mobspaceMb_24'>
                            <h5>Shipping calculator</h5>
                            <p>Different shipping zones may have varying shipping rates or methods based on their distance from the shipping origin</p>
                        </div>
                        {/* minHeight: 400  */}
                        <div className="col-lg-5" style={{ position: "relative"}}>
                            <div style={{
                                position: "relative",
                                top: "50%",
                                transform: "translateY(-50%)"
                            }}>
                                <RadarGradient />
                            </div>
                        </div>
                    </div>
                </div>

                    <div className='row'>
                        <div className='col-lg-6 mobspace_mb_16'>
                            <div className='shippingItem lastrowEqualHeight'>
                                <h5>Last Mile Delivery</h5>
                                <p className='mb_24'>Businesses can set specific shipping rules or methods for each zone, optimizing costs and delivery options tailored to different regions</p>

                                <img src="/assets/images/lastMile_delivery.png" alt='Last Mile Delivery' />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='shippingItem lastrowEqualHeight'>
                                <h5>Hyperlocal Delivery</h5>
                                <p className='mb_24'>Businesses can set specific shipping rules or methods for each zone, optimizing costs and delivery options tailored to different regions</p>

                                <img src="/assets/images/hyperlocalDelivery.png" alt='Hyperlocal Delivery' />

                            </div>
                        </div>
                    </div>
            </div>
        </section>
    );
}
