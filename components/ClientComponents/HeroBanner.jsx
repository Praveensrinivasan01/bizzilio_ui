"use client";

import Link from 'next/link';
import { useState } from 'react';
import ScheduleDemo from '../../components/ScheduleDemo';

export default function HeroBanner() {
  const [show, setShow] = useState(false);

  return (
    <section className='ecomBnr'>
      <div className='container'>
        {/* <div className='ecomBnrHeader'> */}
          {/* <h2>Ecommerce</h2> */}
          {/* <img src="/assets/images/commerce_logo.png" alt='commerce_logo' /> */}
        {/* </div> */}
        <div className='ecombnrWhiteFrame'>
          <h1>Digitize Your Business, <span>Regardless</span> <br /> Of <span>Your Industry</span>.</h1>

          <div className='displayInlineFlex alignItem_center gap24'>
            <div>
              <button className='mainbutton brightNavyBluebtn btnBoxShadow'>
                <Link href={`${process.env.NEXT_PUBLIC_SIGN_UP}`}>Get Started Now</Link>
              </button>
            </div>
            <div>
              <button className='mainbutton brightNavyBlueOutlinebtn btnBoxShadow' onClick={() => setShow(true)}>
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>

        <ScheduleDemo show={show} handleClose={() => setShow(false)} />

        <div className="row justifyContent_center">
          <div className="col-lg-8">
            <div className="ecomWorkflow">
              <div className="ecomWflowItem">
                <img src="/assets/images/ecom_bnr/nike.png" alt='nike' />
              </div>
              <div className="ecomWflowItem">
                <img src="/assets/images/ecom_bnr/aviatorSunglasses.png" alt='aviatorSunglasses' />
              </div>

              <div className="ecomWflowItem">
                <img src="/assets/images/ecom_bnr/ecomphone.png" alt='ecomphone' />
              </div>

              <div className="ecomWflowItem">
                <img src="/assets/images/ecom_bnr/designerSilkSaree.png" alt='designerSilkSaree' />
              </div>

              
              <div className="ecomWflowItem">
                <img src="/assets/images/ecom_bnr/midiDress.png" alt='midiDress' />
              </div>
              <div className="ecomWflowItem">
                <img src="/assets/images/ecom_bnr/ultrabook.png" alt='ultrabook' />
              </div>
              <div className="ecomWflowItem">
                <img src="/assets/images/ecom_bnr/cheese.png" alt='cheese' />
              </div>

              <div className="ecomWflowItem">
                <img src="/assets/images/ecom_bnr/modernWooden.png" alt='modernWooden' />
              </div>


            </div>
          </div>
        </div>




      </div>
    </section>
  );
}
