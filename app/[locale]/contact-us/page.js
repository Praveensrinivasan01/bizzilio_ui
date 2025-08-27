'use client'
import Link from 'next/link'
import React, { useRef } from 'react'
import { ReCAPTCHA } from 'react-google-recaptcha'

const page = () => {
      const recaptchaRef = useRef(null);

      const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value);
    setCaptchaValue(value);
  };


    return (
      <section className="accountCreation_sec">
        <div className="container">
          <div className="row alignItem_center ">
            <div className="col-lg-6">
              <div className="balljumbingFrame">
                <div className="ball">
                  <img src="/assets/images/ball_jump.png" alt="ball_jump" />
                </div>
                <div className="ballshadow"></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accountCreationFrame">
                <Link
                  href="#"
                  className="mb_32 displayInlineFlex alignItem_center gap12  blackText_Clr fontSize16 fontWeight600 textDecoration_unset"
                >
                  <img
                    className="blackFilter width14px"
                    src="/assets/images/leftarrow.svg"
                    alt="leftarrow"
                  />
                  <span>Back</span>
                </Link>

                <h2 className="ruinedSmoresText_clr fontSize18 fontWeight700 mb_8">
                  Schedule Demo
                </h2>
                <p className="midnightSkyText_clr fontSize14 fontWeight400 mb_34">
                  Request a demo by filling the form
                </p>

                <form>
                  <div className="mb_24">
                    <label className="labeltext">Name</label>
                    <input type="text" placeholder="" className="mainInput" />
                  </div>

                  <div className="mb_24">
                    <label className="labeltext">
                      Organisation Name (Optional)
                    </label>
                    <input type="text" placeholder="" className="mainInput" />
                  </div>

                  <div className="mb_24">
                    <label className="labeltext">Email ID</label>
                    <input type="text" placeholder="" className="mainInput" />
                  </div>

                  <div className="mb_24">
                    <label className="labeltext">Mobile</label>
                    <input type="text" placeholder="" className="mainInput" />
                  </div>

                  <div className="mb_24">
                    <label className="labeltext mb_16">Schedule Demo</label>

                    <div className="displayFlex alignItem_center gap20">
                      <div className="prefer_method">
                        <input
                          type="radio"
                          id="interested"
                          name="scheduleDemo"
                        />
                        <label htmlFor="interested">Yes I’m Interested</label>
                      </div>

                      <div className="prefer_method">
                        <input
                          type="radio"
                          id="notIntrested"
                          name="scheduleDemo"
                        />
                        <label htmlFor="notIntrested">I’m Not Intrested</label>
                      </div>
                    </div>
                  </div>
                  <div className="mb_34">
                    <label className="labeltext mb_16">
                      Select Preferred Date
                    </label>
                  </div>

                  <div className="mb_34">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                      onChange={handleCaptchaChange}
                    />
                  </div>
                  <button className="loginBtn">Schedule</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default page
