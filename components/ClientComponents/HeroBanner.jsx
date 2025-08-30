"use client";

import Link from 'next/link';
import { useState } from 'react';
import ScheduleDemo from '../../components/ScheduleDemo';

export default function HeroBanner() {
  const [show, setShow] = useState(false);

  return (
    <section className='ecomBnr'>
      <div className='container'>
        <div className='ecomBnrHeader'>
          <h2>Ecommerce</h2>
        </div>
        <div className='ecombnrWhiteFrame'>
          <h1>Digitize Your Business, <span>Regardless</span> Of <span>Your Industry</span>.</h1>

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
      </div>
    </section>
  );
}
