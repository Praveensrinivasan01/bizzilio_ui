"use client";
import Link from "next/link";
import { useState } from "react";
import ScheduleDemo from "../ScheduleDemo";

const POSHero = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="posBnr">
        <div className="container textalign_center">
          <h1>
            Drive Growth Using Bizzilo's Future-Ready{" "}
            <br className="brHideOnMobile" /> Retail Point Of Sale
          </h1>

          <div className="displayInlineFlex alignItem_center gap24">
            <div>
              <button className="mainbutton brightNavyBluebtn btnBoxShadow">
                <Link href={`${process.env.NEXT_PUBLIC_SIGN_UP}`}>
                  Get Started Now
                </Link>
              </button>
            </div>
            <div>
              <button
                className="mainbutton brightNavyBlueOutlinebtn btnBoxShadow"
                onClick={() => setShow(true)}
              >
                Schedule a Demo
              </button>
            </div>
          </div>

          <div className="posBnrBg">
            <img
              src="/assets/images/posbnr.png"
              className="posBnrimg"
              alt="posbnr"
            />

            <div className="posBnrVideo">
              <video
                width="100%"
                height="auto"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src="/assets/images/posbnr_vi.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
      <ScheduleDemo show={show} handleClose={() => setShow(false)} />
    </>
  );
};

export default POSHero;
