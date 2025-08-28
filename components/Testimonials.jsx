'use client';
import React, { useState, useRef, useEffect } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';

const testimonialData = [
  {
    id: 'pavi',
    img: '/assets/images/pavi.png',
    alt: 'Pavidp',
    title: 'Checking 1',
    role: 'DIRECTOR',
    text: '“Implementing this ERP app was a game changer it optimized work -flow, enhanced collaboration and provided invaluable insights for our business expansion impressive tool.',
  },
  {
    id: 'praveen',
    img: '/assets/images/praveen.png',
    alt: 'Praveendp',
    title: 'Checking 2',
    role: 'DIRECTOR',
    text: 'Checking this ERP app was a game changer it optimized work -flow, enhanced collaboration and provided invaluable insights for our business expansion impressive tool.',
  },
  {
    id: 'saravana',
    img: '/assets/images/saravana.png',
    alt: 'Saravanadp',
    title: 'Checking 3',
    role: 'DIRECTOR',
    text: '“Implementing this ERP app was a game changer it optimized work -flow, enhanced collaboration and provided invaluable insights for our business expansion impressive tool.',
  },
  {
    id: 'hema',
    img: '/assets/images/hema.png',
    alt: 'Hemadp',
    title: 'Checking 4',
    role: 'DIRECTOR',
    text: '“Implementing this ERP app was a game changer it optimized work -flow, enhanced collaboration and provided invaluable insights for our business expansion impressive tool.',
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
              <div>
                <div className='profiledp videoReview'>
                  <img src="/assets/images/sathish.png" alt='sathish' />
                </div>
              </div>
              {/* Pavi */}
              <div ref={refs.current['pavi']}>
                <div className='profiledp'>
                  <button onClick={() => handleClick('pavi')} className='emptyBtn'>
                    <img src="/assets/images/pavi.png" alt='Pavidp' />
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
                    <img src="/assets/images/praveen.png" alt='Praveendp' />
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
                <div className='emptyDp'></div>
              </div>
              <div>
                <div className='emptyDp'></div>
              </div>
            </div>
            <div className='centerRow'>
              <div>
                <h3>Join us to begin <br className='brHideOnMobile' /> your journey</h3>
              </div>
            </div>
            <div className='bottomRow'>
              <div>
                <div className='emptyDp'></div>
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
    <img src="/assets/images/saravana.png" alt="Saravanadp" />
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
    <img src="/assets/images/hema.png" alt='Hemadp' />
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