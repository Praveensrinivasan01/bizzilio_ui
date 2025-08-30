"use client"
import { useState } from 'react';
import ScheduleDemo from "../ScheduleDemo";

export default function HeroBanner() {
  const [show, setShow] = useState(false);

  return (
    <section className="hero_bnr">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="hero_content mobspaceMb_34">
              <h1>E-Commerce & Mini ERP</h1>
              <h2>Unified in one Platform</h2>

              <div className="displayFlex alignItem_center gap24">
                <div>
                  <button className="mainbutton ruinedSmoresbtn btnBoxShadow">
                    Get Started Now
                  </button>
                </div>
                <div>
                  <button className="mainbutton whitebtn btnBoxShadow" onClick={() => setShow(true)}>
                    Schedule a Demo
                  </button>
                  <ScheduleDemo show={show} handleClose={() => setShow(false)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
