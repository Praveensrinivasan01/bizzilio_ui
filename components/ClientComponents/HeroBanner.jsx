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

             
                <svg className='firstRightPath' xmlns="http://www.w3.org/2000/svg" width="150" height="42" viewBox="0 0 150 42" fill="none">
                  <path d="M150 41H50.6667H11C5.47717 41 1 36.5228 1 31V0" stroke="#2160FF" stroke-width="2" />
                </svg>
                <img src="/assets/images/ecom_bnr/nike.png" alt='nike' />
                {/* <svg  xmlns="http://www.w3.org/2000/svg" width="3" height="76" viewBox="0 0 3 76" fill="none">
                  <path d="M1.5 76L1.5 0" stroke="#2160FF" stroke-width="2" />
                </svg> */}
                <svg className='firstBottomPath' xmlns="http://www.w3.org/2000/svg" width="3" height="120" viewBox="0 0 3 120" fill="none">
                  <path d="M1.5 120L1.5 -4.29153e-06" stroke="#2160FF" stroke-width="2" />
                </svg>
              </div>
              <div className="ecomWflowItem">
                <svg className='secondRight' xmlns="http://www.w3.org/2000/svg" width="118" height="38" viewBox="0 0 118 38" fill="none">
                  <path d="M118 37H40H11C5.47716 37 1 32.5228 1 27V1.07288e-06" stroke="#2160FF" stroke-width="2" />
                </svg>
                <img src="/assets/images/ecom_bnr/aviatorSunglasses.png" alt='aviatorSunglasses' />
              </div>


              <div className="ecomWflowItem">
                <svg className='thirdRightTop' xmlns="http://www.w3.org/2000/svg" width="197" height="70" viewBox="0 0 197 70" fill="none">
                  <path d="M0.000120508 69.0003L157.404 69.0003C162.927 69.0003 167.404 64.5232 167.404 59.0003L167.404 11.7534C167.404 6.26425 171.829 1.8012 177.318 1.75374L196.573 1.58727" stroke="#2160FF" stroke-width="2" />
                </svg>
                <img src="/assets/images/ecom_bnr/ecomphone.png" alt='ecomphone' />
              </div>

              <div className="ecomWflowItem">
                <svg className='fourthrightBottom' xmlns="http://www.w3.org/2000/svg" width="93" height="86" viewBox="0 0 93 86" fill="none">
                  <path d="M0 1L61.3333 1L82 1C87.5229 1 92 5.47715 92 11L92 86" stroke="#2160FF" stroke-width="2" />
                </svg>
                <img src="/assets/images/ecom_bnr/designerSilkSaree.png" alt='designerSilkSaree' />
              </div>

              
              <div className="ecomWflowItem">
                <svg className='fiveRight' xmlns="http://www.w3.org/2000/svg" width="166" height="2" viewBox="0 0 166 2" fill="none">
                  <path d="M0 1H99.3333H149H165.5" stroke="#2160FF" stroke-width="2" />
                </svg>
                
                <img src="/assets/images/ecom_bnr/midiDress.png" alt='midiDress' />
              </div>
              <div className="ecomWflowItem">
                <svg className='sixRight' xmlns="http://www.w3.org/2000/svg" width="53" height="2" viewBox="0 0 53 2" fill="none">
                  <path d="M0 1L31.8107 1L47.716 1L53 1" stroke="#2160FF" stroke-width="2" />
                </svg>
                <img src="/assets/images/ecom_bnr/ultrabook.png" alt='ultrabook' />
              </div>
              <div className="ecomWflowItem">
  
                <svg className='sevenRight' xmlns="http://www.w3.org/2000/svg" width="85" height="2" viewBox="0 0 85 2" fill="none">
                  <path d="M0 1L51.0171 1L76.5257 1L85 1" stroke="#2160FF" stroke-width="2" />
                </svg>
                <img src="/assets/images/ecom_bnr/cheese.png" alt='cheese' />

                <svg className='sevenRightTwo' xmlns="http://www.w3.org/2000/svg" width="133" height="2" viewBox="0 0 133 2" fill="none">
                  <path d="M0 1L79.8268 1L119.74 1L133 1" stroke="#2160FF" stroke-width="2" />
                </svg>
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
