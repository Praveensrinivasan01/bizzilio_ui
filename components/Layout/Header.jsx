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

  const handleMenuClose = () => {
    dropdownRef.current?.click();
    handleToggleClick();
    setIsActive(false);
  }


  return (
    <>
      <header className="sticky-top">
        <div className="container">
          <nav>
            <div className="mobileHeader">
              <div className="brandlogo">
                <Link href={"/"} prefetch>
                  <img
                    src="/assets/images/bizzilo_logo.png"
                    alt="BizziloLogo"
                  />
                </Link>
              </div>

              <div className="mobileToggle">
                <button className="emptyBtn" onClick={handleToggleClick}>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
            <div
              className={isActive ? " navbarCollapse show" : "navbarCollapse"}
            >
              <div className="margin_auto">
                <ul>
                  <li>
                    <Dropdown ref={dropdownRef} className="mega-dropdown">
                      <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Products
                      </Dropdown.Toggle>

                      <Dropdown.Menu
                        className="mega-menu"
                        style={{ width: menuWidth }}
                      >
                        {/* <div className='row'> */}
                        {/* <div className='col-lg-12'> */}
                        <ol className="megaMenulist">
                          <li>
                            <Link
                              href="/features/ecommerce"
                              prefetch
                              onClick={handleMenuClose}
                            >
                              <div className="megaMenuIcon">
                                <img
                                  src="/assets/images/shoppingCart_icon.svg"
                                  alt=""
                                />
                              </div>

                              <div>
                                <h5>Ecommerce</h5>
                                <p>
                                  Digitize Your Business, Regardless Of Your
                                  Industry
                                </p>
                              </div>
                            </Link>
                          </li>

                          {/* <li>
                              <Link href="/pos" prefetch onClick={handleMenuClose}>
                                <div className='megaMenuIcon'>
                                  <img src="/assets/images/pointofSale_icon.svg" alt='' />
                                </div>

                                <div>
                                  <h5>Point of Sale</h5>
                                  <p>Transform Your Device Into A Complete POS Solution</p>
                                </div>
                              </Link>
                              </li>
                         
                         
                              <li>
                              <Link href="/inventory" prefetch onClick={handleMenuClose}>
                                <div className='megaMenuIcon'>
                                  <img src="/assets/images/inventory_icon.svg" alt='' />
                                </div>

                                <div>
                                  <h5>Inventory</h5>
                                  <p>Transform Your Device Into A Complete Point Of Sale Solution</p>
                                </div>
                              </Link>
                              </li>
                          
                         
                              <li>
                              <Link href="/accounting" prefetch onClick={handleMenuClose}>
                                <div className='megaMenuIcon'>
                                  <img src="/assets/images/accounting_icon.svg" alt='' />
                                </div>

                                <div>
                                  <h5>Accounting</h5>
                                  <p>Transform Your Device Into A Complete Point Of Sale Solution</p>
                                </div>
                              </Link>
                              </li> */}
                        </ol>
                        {/* </div> */}
                        {/* <div className='col-lg-6'>
                          <div className=''>
                              <ol className='menuRightsidelist'>
                                <li>
                                  <div className='menuRightsideimg'>
                                    <img src="/assets/images/dropdown_list.png" alt='dropdown_list' />
                                  </div>

                                  <div>
                                    <h5>Bizzilo</h5>
                                    <p>Digitize Your Business, Regardless Of Your Industry</p>
                                  </div>
                                </li>
  
                                <li>
                                  <div className='menuRightsideimg'>
                                    <img src="/assets/images/dropdown_list.png" alt='dropdown_list' />
                                  </div>

                                  <div>
                                    <h5>Bizzilo</h5>
                                    <p>Digitize Your Business, Regardless Of Your Industry</p>
                                  </div>
                                </li>
                              </ol>
                          </div>

                          </div> */}

                        {/* </div> */}
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li>
                    {/* <button></button> */}

                    <Dropdown ref={dropdownRef} className="mega-dropdown">
                      <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Resources
                      </Dropdown.Toggle>

                      <Dropdown.Menu
                        className="mega-menu"
                        style={{ width: menuWidth }}
                      >
                        {/* <div className='row'> */}
                        {/* <div className='col-lg-12'> */}
                        <ol className="megaMenulist">
                          <li>
                            <Link
                              href="/blog"
                              prefetch
                              onClick={handleMenuClose}
                            >
                              <div className="megaMenuIcon">
                                <img
                                  src="/assets/images/report_icon.svg"
                                  alt=""
                                />
                              </div>

                              <div>
                                <h5>Blogs</h5>
                                <p>
                                  Digitize Your Business, Regardless Of Your
                                  Industry
                                </p>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href={`/blog?search=Case%20Study`}
                              prefetch
                              onClick={handleMenuClose}
                            >
                              <div className="megaMenuIcon">
                                <img
                                  className="billiardRoomFilter"
                                  src="/assets/images/report_icon.svg"
                                  alt=""
                                />
                              </div>
                              <div>
                                <h5>Case Study</h5>
                                <p>
                                  Transform Your Device Into A Complete POS
                                  Solution
                                </p>
                              </div>
                            </Link>
                          </li>

                          {/* <li>
                            <Link href="#"prefetch onClick={handleMenuClose}>
                              <div className='megaMenuIcon'>
                                <img className='orangeSpiceFilter' src="/assets/images/report_icon.svg" alt='' />
                              </div>

                              <div>
                                <h5>White Paper</h5>
                                <p>Transform Your Device Into A Complete Point Of Sale Solution</p>
                              </div>
                              </Link>
                            </li> */}
                        </ol>
                        {/* </div> */}
                        {/* <div className='col-lg-6'>
                            <div className=''>
                              <ol className='menuRightsidelist'>
                                <li>
                                  <div className='menuRightsideimg'>
                                    <img src="/assets/images/dropdown_list.png" alt='dropdown_list' />
                                  </div>

                                  <div>
                                    <h5>Bizzilo</h5>
                                    <p>Digitize Your Business, Regardless Of Your Industry</p>
                                  </div>
                                </li>

                                <li>
                                  <div className='menuRightsideimg'>
                                    <img src="/assets/images/dropdown_list.png" alt='dropdown_list' />
                                  </div>

                                  <div>
                                    <h5>Bizzilo</h5>
                                    <p>Digitize Your Business, Regardless Of Your Industry</p>
                                  </div>
                                </li>
                              </ol>
                            </div>

                          </div> */}

                        {/* </div> */}
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li>
                    <Link href={"/about-us"} prefetch>
                      <button>About</button>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/pricing"} prefetch>
                      <button>Pricing</button>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="displayInlineFlex alignItem_center gap16">
                <div>
                  <Link
                    className="mainbutton transparentbtn textDecoration_unset"
                    prefetch
                    href={process.env.NEXT_PUBLIC_SIGN_IN}
                  >
                    Sign in
                  </Link>
                </div>
                <div>
                  <Link
                    className="mainbutton ruinedSmoresbtn textDecoration_unset"
                    prefetch
                    href={process.env.NEXT_PUBLIC_SIGN_UP}
                  >
                    Sign Up Now
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
