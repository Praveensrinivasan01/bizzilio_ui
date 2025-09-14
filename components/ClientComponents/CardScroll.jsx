"use client";

import Link from 'next/link';
import { useEffect } from "react";
import '../../components/card.css';


export default function CardScroll() {
  // Initialize the card scroll effect
  useEffect(() => {
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          entry.target.classList.toggle('show', entry.isIntersecting);
        });
      },
      {
        threshold: 0.6,
      }
    );

    cards.forEach(card => {
      observer.observe(card);
    });

    return () => {
      cards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="advanceFeatures_sec">
      <div className='container'>

        <h2 className='fontSize36 ruinedSmoresText_clr  fontWeight600 mb_20'>Advance Features</h2>
        <ul id="cards" className='emptyList'>
          <li className="card" id="card-1">
            <div className='advanceFeatures_item mb_24'>
              <div className='row alignItem_center'>
                <div className='col-lg-3'>
                  <div className='advanceFeatures_img'>
                    <img src="/assets/images/adveCom_marketing.png" alt='Advanced eCommerce marketing' />
                  </div>
                </div>
                <div className='col-lg-8 offset-lg-1'>
                  <h3>Advanced eCommerce marketing</h3>
                  <ul className='emptyList'>
                    <li className='displayInlineFlex gap12 mb_34'>
                      <div>
                        <img src="/assets/images/starpoint.svg" alt='Funnel' />
                      </div>
                      <div>
                        <h5>Funnel</h5>
                        <p>Drive top-of-funnel traffic to convert like a charm</p>
                      </div>
                    </li>
                    <li className='displayInlineFlex gap12 mb_34'>
                      <div>
                        <img src="/assets/images/starpoint.svg" alt='Funnel' />
                      </div>
                      <div>
                        <h5>Scale your business</h5>
                        <p>Effectively scale your business and accomplish your goals with our-well- thought-out eCommerce marketing features.</p>
                      </div>
                    </li>
                  </ul>
                  {/* <Link className='brightNavyBlueText_btn' href="#"><span>More Details</span>  <img className='rotateMin180deg' src="/assets/images/leftarrow.svg" alt='leftarrow' /></Link> */}
                </div>
              </div>
            </div>
          </li>

          <li className="card" id="card-2">
            <div className='advanceFeatures_item mb_24'>
              <div className='row alignItem_center'>
                <div className='col-lg-3'>
                  <div className='advanceFeatures_img'>
                    <img src="/assets/images/Recommendati_engine.png" alt='Bizzilo Recommendation engine' />
                  </div>
                </div>
                <div className='col-lg-8 offset-lg-1'>
                  <h3>Bizzilo Recommendation engine</h3>
                  <ul className='emptyList'>
                    <li className='displayInlineFlex gap12 mb_24'>
                      <div>
                        <img src="/assets/images/starpoint.svg" alt='Funnel' />
                      </div>
                      <div>
                        <h5>Increased Engagement</h5>
                        <p>Recommending related or complementary products keeps customers engaged, leading to longer sessions and higher retention rates</p>
                      </div>
                    </li>
                    <li className='displayInlineFlex gap12'>
                      <div>
                        <img src="/assets/images/starpoint.svg" alt='Funnel' />
                      </div>
                      <div>
                        <h5>Upselling and Cross-selling</h5>
                        <p>Elevate customer experiences by analyzing data, providing tailored suggestions, and increasing average cart value through personalized recommendations</p>
                      </div>
                    </li>
                  </ul>
                  {/* <Link className='brightNavyBlueText_btn' href="#"><span>More Details</span>  <img className='rotateMin180deg' src="/assets/images/leftarrow.svg" alt='leftarrow' /></Link> */}
                </div>
              </div>
            </div>
          </li>

          <li className="card" id="card-3">
            <div className='advanceFeatures_item'>
              <div className='row alignItem_center'>
                <div className='col-lg-3'>
                  <div className='advanceFeatures_img'>
                    <img src="/assets/images/abandoned_checkouts.png" alt='No more abandoned checkouts' />
                  </div>
                </div>
                <div className='col-lg-8 offset-lg-1'>
                  <h3>No more abandoned checkouts</h3>
                  <ul className='emptyList'>
                    <li className='displayInlineFlex gap12 mb_24'>
                      <div>
                        <img src="/assets/images/starpoint.svg" alt='Funnel' />
                      </div>
                      <div>
                        <h5>Recovery of Lost Sales</h5>
                        <p>Reaching out to customers who abandoned their carts provides an opportunity to recover potentially lost sales by reminding them about their pending purchase.</p>
                      </div>
                    </li>
                    <li className='displayInlineFlex gap12'>
                      <div>
                        <img src="/assets/images/starpoint.svg" alt='Funnel' />
                      </div>
                      <div>
                        <h5>Insights for Optimization</h5>
                        <p>Analyzing reasons for cart abandonment can provide insights into website issues or customer concerns, enabling optimization for a smoother checkout process</p>
                      </div>
                    </li>
                  </ul>
                  {/* <Link className='brightNavyBlueText_btn' href="#"><span>More Details</span>  <img className='rotateMin180deg' src="/assets/images/leftarrow.svg" alt='leftarrow' /></Link> */}
                </div>
              </div>
            </div>
          </li>

          {/* <li className="card" id="card-4">
          <div className="card-content">
            <div>
              <h2>Card Four</h2>
              <p>This is the content of card four. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <figure>
              <img src="https://assets.codepen.io/210284/flower-6.jpg" alt="card four" />
            </figure>
          </div>
        </li> */}
        </ul>
      </div>
    </section>
  );
}