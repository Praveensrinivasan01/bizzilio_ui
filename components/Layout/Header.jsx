'use client';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react'
import { Dropdown } from 'react-bootstrap';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  // const [fix, setFix] = useState(false);

  const handleToggleClick = (event) => {
    setIsActive((current) => !current);
  };


  const dropdownRef = useRef();
  const [menuWidth, setMenuWidth] = useState('auto');

  useEffect(() => {
    const container = document.querySelector('.container');
    const toggle = dropdownRef.current?.querySelector('.dropdown-toggle');

    if (container && toggle) {
      const containerRight = container.getBoundingClientRect().right;
      const toggleLeft = toggle.getBoundingClientRect().left;

      const width = containerRight - toggleLeft;
      setMenuWidth(`${width}px`);
    }
  }, []);


  return (
    < >
      <header className="sticky-top">
        <div className='container'>
          <nav>
            <div className='mobileHeader'>
              <div className='brandlogo'>
                <img src="/assets/images/bizzilo_logo.png" alt='BizziloLogo' />
              </div>

              <div className="mobileToggle">
                <button className="emptyBtn" onClick={handleToggleClick}>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
            <div className={isActive ? ' navbarCollapse show' : 'navbarCollapse'}>
              <div className='margin_auto'>
                <ul>
                  <li>


                    <Dropdown ref={dropdownRef} className="mega-dropdown">
                      <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Solutions
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="mega-menu" style={{ width: menuWidth }}>
                        <div className='row'>
                          <div className='col-lg-6'>
                            <ol className='megaMenulist'>
                              <li>
                                <div className='megaMenuIcon'>
                                  <img src="/assets/images/shoppingCart_icon.svg" alt='' />
                                </div>

                                <div>
                                  <h5>Ecommerce</h5>
                                  <p>Digitize Your Business, Regardless Of Your Industry</p>
                                </div>
                              </li>
                              <li>
                                <div className='megaMenuIcon'>
                                  <img src="/assets/images/pointofSale_icon.svg" alt='' />
                                </div>

                                <div>
                                  <h5>Point of Sale</h5>
                                  <p>Transform Your Device Into A Complete POS Solution</p>
                                </div>
                              </li>

                              <li>
                                <div className='megaMenuIcon'>
                                  <img src="/assets/images/inventory_icon.svg" alt='' />
                                </div>

                                <div>
                                  <h5>Inventory</h5>
                                  <p>Transform Your Device Into A Complete Point Of Sale Solution</p>
                                </div>
                              </li>

                              <li>
                                <div className='megaMenuIcon'>
                                  <img src="/assets/images/accounting_icon.svg" alt='' />
                                </div>

                                <div>
                                  <h5>Accounting</h5>
                                  <p>Transform Your Device Into A Complete Point Of Sale Solution</p>
                                </div>
                              </li>
                            </ol>
                          </div>
                          <div className='col-lg-6'></div>

                        </div>
                      </Dropdown.Menu>
                    </Dropdown>



                  </li>
                  <li>
                    <button>Resources</button>
                  </li>
                  <li>
                    <Link href={'/about-us'}>
                      <button>About</button>
                    </Link>
                  </li>
                  <li>
                    <Link href={'/pricing'
                    }>

                      <button>Pricing</button>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='displayInlineFlex alignItem_center gap16'>
                <div>
                  <Link href={'/account-creation'}>
                    <button className='mainbutton transparentbtn'>Sign in</button></Link></div>
                <div>
                  <button className='mainbutton ruinedSmoresbtn'>Sign Up Now</button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header;
