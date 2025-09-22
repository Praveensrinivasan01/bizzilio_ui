'use client';
import React, { useState, useRef, useEffect } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';

const testimonialData = [
  {
    id: 'pavi',
    img: '/assets/images/maheshwari.jpg',
    alt: 'Maheshwari',
    title: 'Maheshwari',
    role: 'Cheerful Colors (Online Retail for Kidswear)',
    text: '“I wanted a solution that could handle everything—website, orders, inventory, and payments—without me depending on multiple tools. Bizzilo gave me exactly that. From managing my online store to tracking stock and handling returns, everything is integrated. The platform is easy to use and perfect for small businesses like mine that want to look professional while saving time.',
  },
  {
    id: 'praveen',
    img: '/assets/images/geetha.jpg',
    alt: 'Geetha',
    title: 'Geetha T',
    role: 'Veehomecart (Kitchenwares, Online + Physical Store)',
    text: 'Running both an online store and a physical shop was messy until I switched to Bizzilo. Now, inventory syncs automatically between my shop POS and online orders, so I never oversell or lose track of stock. The system gives me full visibility into sales, customers, and inventory, which helps me plan better. It feels like having a complete back-office team inside one software',
  },
  {
    id: 'saravana',
    img: '/assets/images/balan-sivanthi.jpg',
    alt: 'Balan',
    title: 'Balan Sivanthi Aadithan',
    role: 'BKS Stores (Retail & Wholesale of Kitchenwares)',
    text: 'Managing multiple warehouses and retail outlets was always a challenge for us. With Bizzilo, we now run both wholesale and retail sales—online and offline—from one single platform. Inventory updates happen in real time across warehouses and stores, and the POS integration ensures our billing is seamless. It has truly simplified operations and helped us scale without worrying about mismanagement',
  },
  {
    id: 'hema',
    img: '/assets/images/ananth.jpg',
    alt: 'Ananth',
    title: 'Ananth',
    role: 'AVS Trading (Distribution of Kitchenwares)',
    text: 'As a distributor, my biggest pain point was tracking stock across multiple warehouses and monitoring collections from field sales executives. Bizzilo solved both. Now our team can record orders and collections on the go, and I get a complete view of stock movement and outstanding payments in real time. It has improved efficiency and reduced errors significantly',
  },
];

const Testimonials = () => {
  const [activeId, setActiveId] = useState(null);

  // Dynamic refs for each testimonial
  const refs = useRef({});
  testimonialData.forEach(item => {
    if (!refs.current[item.id]) {
      refs.current[item.id] = React.createRef();
    }
  });

  const handleClick = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  useEffect(() => {
  function handleClickOutside(event) {
    if (!activeId) return;
    const activeRef = refs.current[activeId]?.current;
    if (activeRef && !activeRef.contains(event.target)) {
      setActiveId(null);
    }
  }
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [activeId]);

  return (
    <section className='testimonials_sec'>
      <div className="sectionheader">
        <h2 className='textalign_center'>Testimonials</h2>
      </div>
      <div className='testimonialsmapframe'>
        <div className='container height100per'>
          <div className='threeRowMap'>
            <div className='topRow'>
              <div className='visibilityhidden'>
                <div className='profiledp videoReview'>
                  <img src="/assets/images/sathish.png" alt='sathish' />
                </div>
              </div>
              {/* Pavi */}
              <div ref={refs.current['pavi']}>
                <div className='profiledp'>
                  <button onClick={() => handleClick('pavi')} className='emptyBtn'>
                    <img src={testimonialData[0].img} alt={testimonialData[0].alt} />
                  </button>
                  <Overlay
                    show={activeId === 'pavi'}
                    target={refs.current['pavi'].current}
                    placement="bottom"
                    container={refs.current['pavi'].current}
                    // containerPadding={20}
                  >
                    <Popover id="popover-pavi">
                      <Popover.Body>
                        <div className="custom_tooltiptext">
                          <h4>{testimonialData[0].title}</h4>
                          <h5>{testimonialData[0].role}</h5>
                          <p>{testimonialData[0].text}</p>
                        </div>
                      </Popover.Body>
                    </Popover>
                  </Overlay>
                </div>
              </div>
              <div>
                <div className='userIconProfile'>
                  <img src="/assets/images/dp_icon.png" alt='DpIcon' />
                </div>
              </div>
              {/* Praveen */}
              <div ref={refs.current['praveen']}>
                <div className='profiledp'>
                  <button onClick={() => handleClick('praveen')} className='emptyBtn'>
                    <img src={testimonialData[1].img} alt={testimonialData[1].alt} />
                  </button>
                  <Overlay
                    show={activeId === 'praveen'}
                    target={refs.current['praveen'].current}
                    placement="bottom"
                    container={refs.current['praveen'].current}
                    containerPadding={20}
                  >
                    <Popover id="popover-praveen">
                      <Popover.Body>
                        <div className="custom_tooltiptext">
                          <h4>{testimonialData[1].title}</h4>
                          <h5>{testimonialData[1].role}</h5>
                          <p>{testimonialData[1].text}</p>
                        </div>
                      </Popover.Body>
                    </Popover>
                  </Overlay>
                </div>
              </div>
              <div>
                {/* <div className='emptyDp'></div> */}
                <div className='userIconProfile'>
                  <img src="/assets/images/dp_icon.png" alt='DpIcon' />
                </div>
              </div>
              <div>
                {/* <div className='emptyDp'></div> */}
                <div className='userIconProfile'>
                  <img src="/assets/images/dp_icon.png" alt='DpIcon' />
                </div>
              </div>
            </div>
            <div className='centerRow'>
              <div>
                <h3>Join us to begin <br className='brHideOnMobile' /> your journey</h3>
              </div>
            </div>
            <div className='bottomRow'>
              <div>
                {/* <div className='emptyDp'></div> */}
                <div className='userIconProfile'>
                  <img src="/assets/images/dp_icon.png" alt='DpIcon' />
                </div>
              </div>
              <div>
                {/* Saravana */}
                <div>
                  <div className='profiledp'>
  <button
    ref={refs.current['saravana']}
    onClick={() => handleClick('saravana')}
    className='emptyBtn'
  >
                      <img src={testimonialData[2].img} alt={testimonialData[2].alt} />
  </button>

  <Overlay
    show={activeId === 'saravana'}
    target={refs.current['saravana'].current}   // 👈 anchor is button with img
    placement="bottom"
    containerPadding={8}                        // 👈 adds spacing between img & popover
  >
    <Popover id="popover-saravana">
      <Popover.Body>
        <div className="custom_tooltiptext">
          <h4>{testimonialData[2].title}</h4>
          <h5>{testimonialData[2].role}</h5>
          <p>{testimonialData[2].text}</p>
        </div>
      </Popover.Body>
    </Popover>
  </Overlay>
</div>

                </div>
                {/* Hema */}
                <div>
                  <div className='profiledp'>
  <button
    ref={refs.current['hema']}   // ✅ ref on the button itself
    onClick={() => handleClick('hema')}
    className='emptyBtn'
  >
                      <img src={testimonialData[3].img} alt={testimonialData[3].alt} />
  </button>

  <Overlay
    show={activeId === 'hema'}
    target={refs.current['hema'].current}    // ✅ button is the anchor
    placement="bottom"
    containerPadding={8}                     // ✅ small gap between img & popover
    popperConfig={{ modifiers: [{ name: 'offset', options: { offset: [0, 4] } }] }} 
  >
    <Popover id="popover-hema">
      <Popover.Body>
        <div className="custom_tooltiptext">
          <h4>{testimonialData[3].title}</h4>
          <h5>{testimonialData[3].role}</h5>
          <p>{testimonialData[3].text}</p>
        </div>
      </Popover.Body>
    </Popover>
  </Overlay>
</div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;