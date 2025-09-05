'use client';
import { useState } from 'react'
import Link from 'next/link';
import Modal from 'react-bootstrap/Modal';
import ScheduleDemo from '../ScheduleDemo';

const Footer = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [showEcom, setEcomShow] = useState(false);
  const handleEcomClose = () => setEcomShow(false);
  const handleEcomShow = () => setEcomShow(true);


  const [showPos, setPosShow] = useState(false);
  const handlePosClose = () => setPosShow(false);
  const handlePosShow = () => setPosShow(true);
  return (
    // <footer>
    //   <div className='container'>
    //     <div className='row mb_74'>
    //       <div className='col-lg-4'>
    //         <img src="/assets/images/footer_logo.png" className='footerlogo' alt='BizziloFooterLogo' />
    //         <p className='fontSize14 fontWeight400 midnightSkyText_clr mb_16 rockabillyText_clr'>BIZZILO SOLUTIONS PRIVATE LIMITED VILLA 31 S 135/3 P.NO7B, MALLES AKKANSHA NOOKAM, Pallikaranai, Tambaram, Kanchipuram, Tamilnadu- 600100</p>

    //       </div>
    //       <div className='col-lg-6 offset-lg-2'>

    //         <div className='row'>
    //           <div className='col-lg-4'>
    //             <div className='latestItem  mobspaceMb_24'>
    //               <img src="/assets/images/pos_delivery.png" alt='Posdelivery' />
    //             </div>
    //           </div>
    //           <div className='col-lg-4'>
    //             <div className='latestItem'>
    //               <img src="/assets/images/ai_lastmaildelivery.png" alt='Ailastmaildelivery' />
    //             </div>
    //           </div>
    //         </div>

    //       </div>

    //     </div>

    //     <div className='row'>
    //       <div className='col-lg-4 mobspaceMb_24'>

    //         <div className='mb_24'>
    //           <input type='text' placeholder='Name' className='footerInput' />
    //         </div>
    //         <div className='mb_24'>
    //           <input type='text' placeholder='Email' className='footerInput' />
    //         </div>

    //         <div className='inputCheckbox'>
    //           <input
    //             type='checkbox'
    //             id='leaveAtMydoorstep'
    //           />
    //           <label htmlFor='leaveAtMydoorstep'>

    //             <div>
    //               I consent to receiving newsletters, updates, insights, and other related communications from bizzilo at the above name and email address
    //             </div>
    //           </label>
    //         </div>

    //         <button className='subscribebtn'>
    //           <span>Subscribe</span>
    //           <div className='iconFrame'> <img src="/assets/images/leftarrow.svg" alt='Leftarrow' /></div>
    //         </button>

    //       </div>
    //       <div className='col-lg-6 offset-lg-2'>
    //         <div className='row mobspaceMb_24'>
    //           <div className='col-lg-3 mobspaceMb_24'>
    //             <h5 className='fontSize14 fontWeight500 midnightSkyText_clr mb_16'>Solutions</h5>
    //             <ul className='footerLink'>
    //               <li>
    //                 <Link href="#">Ecom</Link>
    //               </li>
    //               <li>
    //                 <Link href="#">Pos</Link>
    //               </li>
    //               <li>
    //                 <Link href="#">Inventory</Link>
    //               </li>
    //             </ul>
    //           </div>

    //           <div className='col-lg-3 mobspaceMb_24'>
    //             <h5 className='fontSize14 fontWeight500 midnightSkyText_clr mb_16'>Resources</h5>
    //             <ul className='footerLink'>
    //               <li>
    //                 <Link href="#">Blog</Link>
    //               </li>
    //               <li>
    //                 <Link href="#">Newsletter</Link>
    //               </li>
    //               <li>
    //                 <Link href="#">Academic</Link>
    //               </li>
    //             </ul>
    //           </div>

    //           <div className='col-lg-3 mobspaceMb_24'>

    //             <h5 className='fontSize14 fontWeight500 midnightSkyText_clr mb_16'>Company</h5>
    //             <ul className='footerLink'>
    //               <li>
    //                 <Link href="#">About</Link>
    //               </li>
    //               <li>
    //                 <Link href="#">Contact</Link>
    //               </li>

    //             </ul>

    //           </div>

    //           <div className='col-lg-3'>

    //             <h5 className='fontSize14 fontWeight500 midnightSkyText_clr mb_16'>Social</h5>

    //             <div className='displayFlex alignItem_center gap20'>
    //               <div>
    //                 <Link href="#">
    //                   <img src="/assets/images/linkedin_icon.svg" alt='LinkedinIcon' />
    //                 </Link>
    //               </div>
    //               <div>
    //                 <Link href="#">
    //                   <img src="/assets/images/facebook_icon.svg" alt='FacebookIcon' /></Link></div>
    //             </div>
    //           </div>
    //         </div>

    //       </div>
    //     </div>

    //     <ul className='legalPolicy'>
    //       <li>
    //         <Link href="#">2025 Bizzilo</Link>
    //       </li>
    //       <li>
    //         <Link href="#">Privacy Policy</Link>
    //       </li>
    //       <li>
    //         <Link href="#">Terms of Service</Link>
    //       </li>
    //     </ul>

    //   </div>
    // </footer>
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="footerLeftCol">
                <img
                  src="/assets/images/bizzilo_logo.png"
                  className="footerlogo"
                  alt="BizziloFooterLogo"
                />

                <div className="row mb_74">
                  <div className="col-lg-3">
                    <div className="latestItem  mb_24">
                      <button
                        onClick={handlePosShow}
                        className="emptyBtn width100per"
                      >
                        <img
                          src="/assets/images/pos_delivery.png"
                          alt="Posdelivery"
                        />
                      </button>
                    </div>

                    <div className="latestItem mobspaceMb_24">
                      <button
                        onClick={handleEcomShow}
                        className="emptyBtn width100per"
                      >
                        <img
                          src="/assets/images/ai_lastmaildelivery.png"
                          alt="Ailastmaildelivery"
                        />
                      </button>
                    </div>
                    <Modal
                      className="modelXl"
                      show={showPos}
                      onHide={handlePosClose}
                      centered
                    >
                      <Modal.Body>
                        <div className="row">
                          <div className="col-lg-7">
                            <div className="leadMagnetpopup_leftcol">
                              <div className="displayFlex alignItem_center gap16 justifyContent_center mb_24">
                                <img
                                  src="/assets/images/pointofSale_icon.svg"
                                  className="width44px"
                                  alt="pointofSale_icon"
                                />
                                <h5 className="fontSize24 billiardRoomtext_clr fontWeight600">
                                  POS
                                </h5>
                              </div>
                              <h2>POS</h2>
                              <div className="textalign_center leadMagnetpopup_img">
                                <img
                                  src="/assets/images/ecommerce_seo.png"
                                  alt="ecommerce_seo"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="leadMagnetpopup_Rightcol">
                              <div className="textalign_right">
                                <button
                                  onClick={handlePosClose}
                                  className="closeBtn"
                                >
                                  <img
                                    src="/assets/images/close_icon.svg"
                                    alt="close_icon"
                                  />
                                </button>
                              </div>
                              <h5>Ebook</h5>
                              <p>
                                An In-Depth Resource for Optimizing Your Online
                                Store's SEO
                              </p>
                              <div className="mb_34">
                                <label className="infinityBeyondText_clr fontSize16 fontWeight500 mb_14">
                                  E-mail
                                </label>
                                <input
                                  type="text"
                                  className="deutziaWhiteInput"
                                  placeholder="example@gmail.com"
                                />
                              </div>

                              <div className="smallInputCheckbox mb_24">
                                <input
                                  type="checkbox"
                                  id="Subscribefutureposts"
                                />
                                <label htmlFor="Subscribefutureposts">
                                  <div>
                                    Subscribe if you’d like to be notified o
                                    future posts
                                  </div>
                                </label>
                              </div>

                              <button className="sherwoodGreenbtn">
                                Download Now
                              </button>
                              {/* <div className="authentication-divider js-webauthn-login-divider">
                                <span>OR</span>
                              </div> */}
                              {/* 
                              <button className='google_btn'>
                                <img src="/assets/images/google_icon.svg" />
                                <span>Continue with Google</span>
                              </button> */}
                            </div>
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal>
                    <Modal
                      className="modelXl"
                      show={showEcom}
                      onHide={handleEcomClose}
                      centered
                    >
                      <Modal.Body>
                        <div className="row">
                          <div className="col-lg-7">
                            <div className="leadMagnetpopup_leftcol">
                              <div className="displayFlex alignItem_center gap16 justifyContent_center mb_24">
                                <img
                                  src="/assets/images/shoppingCart_blueicon.svg"
                                  alt="shopping Cart"
                                />
                                <h5 className="fontSize24 brightNavyBlueText_clr fontWeight600">
                                  Ecommerce
                                </h5>
                              </div>
                              <h2>Ecommerce SEO</h2>
                              <div className="textalign_center leadMagnetpopup_img">
                                <img
                                  src="/assets/images/ecommerce_seo.png"
                                  alt="ecommerce_seo"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="leadMagnetpopup_Rightcol">
                              <div className="textalign_right">
                                <button
                                  onClick={handleClose}
                                  className="closeBtn"
                                >
                                  <img
                                    src="/assets/images/close_icon.svg"
                                    alt="close_icon"
                                  />
                                </button>
                              </div>
                              <h5>Ebook</h5>
                              <p>
                                An In-Depth Resource for Optimizing Your Online
                                Store's SEO
                              </p>
                              <div className="mb_34">
                                <label className="infinityBeyondText_clr fontSize16 fontWeight500 mb_14">
                                  E-mail
                                </label>
                                <input
                                  type="text"
                                  className="deutziaWhiteInput"
                                  placeholder="example@gmail.com"
                                />
                              </div>

                              <div className="smallInputCheckbox mb_24">
                                <input
                                  type="checkbox"
                                  id="Subscribefutureposts"
                                />
                                <label htmlFor="Subscribefutureposts">
                                  <div>
                                    Subscribe if you’d like to be notified o
                                    future posts
                                  </div>
                                </label>
                              </div>

                              <button className="sherwoodGreenbtn">
                                Download Now
                              </button>
                              {/* <div className="authentication-divider js-webauthn-login-divider">
                                <span>OR</span>
                              </div> */}
                              {/* 
                              <button className='google_btn'>
                                <img src="/assets/images/google_icon.svg" />
                                <span>Continue with Google</span>
                              </button> */}
                            </div>
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </div>
                  <div className="col-lg-8 offset-lg-1">
                    <div className="row mb_80">
                      <div className="col-lg-4 mobspaceMb_24 ">
                        <h5 className="fontSize16 fontWeight700 nightSkyText_clr mb_16">
                          Products
                        </h5>
                        <ul className="footerLink">
                          <li>
                            <Link href={"/features/ecommerce"}>E-Commerce</Link>
                          </li>
                        <li>
                            <Link href="#">Pos</Link>
                          </li>
                          {/*   <li>
                            <Link href="#">Inventory</Link>
                          </li> */}
                        </ul>
                      </div>

                      <div className="col-lg-4 mobspaceMb_24">
                        <h5 className="fontSize16 fontWeight700 nightSkyText_clr mb_16">
                          Resources
                        </h5>
                        <ul className="footerLink">
                          <li>
                            <Link href={"/blog"}>Blog</Link>
                          </li>
                          <li>
                            <Link href="#">Newsletter</Link>
                          </li>
                          {/* <li>
                            <Link href="#">Academic</Link>
                          </li> */}
                        </ul>
                      </div>

                      <div className="col-lg-4">
                        <h5 className="fontSize16 fontWeight700 nightSkyText_clr mb_16">
                          Company
                        </h5>
                        <ul className="footerLink">
                          <li>
                            <Link href={"/about-us"}>About Us</Link>
                          </li>
                          {/* <li>
                            <Link href={'/contact-us'}>Contact</Link>
                          </li> */}
                        </ul>
                      </div>
                    </div>

                    <h5 className="fontSize16 fontWeight700 nightSkyText_clr mb_16">
                      Headquarters Address
                    </h5>

                    <p className="fontSize14 fontWeight400 midnightSkyText_clr rockabillyText_clr">
                      BIZZILO SOLUTIONS PRIVATE LIMITED VILLA 31 S 135/3 P.NO7B,
                      MALLES AKKANSHA NOOKAM, Pallikaranai, Tambaram,
                      Kanchipuram, Tamilnadu- 600100
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footerRightCol">
                <h5 className="fontSize16 fontWeight700 nightSkyText_clr mb_16">
                  News Letter Subscription
                </h5>

                <form className="mb_40">
                  <div className="mb_24">
                    <input
                      type="text"
                      placeholder="Name"
                      className="footerInput"
                    />
                  </div>
                  <div className="mb_24">
                    <input
                      type="text"
                      placeholder="Email"
                      className="footerInput"
                    />
                  </div>

                  <div className="inputCheckbox mb_24">
                    <input type="checkbox" id="leaveAtMydoorstep" />
                    <label htmlFor="leaveAtMydoorstep">
                      <div>
                        I consent to receiving newsletters, updates, insights,
                        and other related communications from bizzilo at the
                        above name and email address
                      </div>
                    </label>
                  </div>

                  <button className="subscribebtn">
                    <span>Subscribe</span>
                    <div className="iconFrame">
                      {" "}
                      <img src="/assets/images/leftarrow.svg" alt="Leftarrow" />
                    </div>
                  </button>
                </form>

                <h5 className="fontSize14 fontWeight500 midnightSkyText_clr mb_16">
                  Social
                </h5>

                <div className="displayFlex alignItem_center gap20">
                  <div>
                    <Link
                      href="https://www.linkedin.com/company/bizzilo/"
                      target="_blank"
                    >
                      <img
                        src="/assets/images/linkedin_icon.svg"
                        alt="LinkedinIcon"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://www.facebook.com/share/1Co5MHJX8F/?mibextid=wwXIfr"
                      target="_blank"
                    >
                      <img
                        src="/assets/images/facebook_icon.svg"
                        alt="FacebookIcon"
                      />
                    </Link>
                  </div>

                  <div>
                    <Link
                      href="https://www.instagram.com/bizzilo.in?igsh=MTg1OGJpd2t1OWJoYQ%3D%3D&utm_source=website"
                      target="_blank"
                    >
                      <img
                        src="/assets/images/insta_icon.svg"
                        alt="Inst icon"
                      />
                    </Link>
                  </div>

                  <div>
                    <Link
                      href="https://youtube.com/@bizzilo?feature=shared "
                      target="_blank"
                    >
                      <img
                        src="/assets/images/youtube_icon.svg"
                        alt="Youtube"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footerQuickAction">
        <div className="container">
          <div className="displayFlex alignItem_center gap30 justifyContent_center">
            <div>
              <button className="mainbutton ruinedSmoresbtn ">
                Get Started Now
              </button>
            </div>
            <div>
              <button
                className="mainbutton whitebtn btnBoxShadow"
                onClick={() => setShow(true)}
              >
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      <ScheduleDemo show={show} handleClose={() => setShow(false)} />

      <div className="copyRightSec">
        <div className="container">
          <nav>
            <div>
              <ul className="legalpolicyList">
                <li>
                  <Link
                    href="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" target="_blank">
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy" target="_blank">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="fontSize16 fontWeight500 ruinedSmoresText_clr textalign_right">
                Crafted with <img src="/assets/images/heart_icon.svg" alt="" />{" "}
                in Chennai
              </p>
            </div>
          </nav>
        </div>
      </div>

      <div className="contactus-form-stickydiv" id="contactus-form-stickydiv">

        <div className='whatsappbtn'>
          <Link href="https://wa.me/+919566675055" target="_blank" rel="noopener noreferrer">
          <img src="/assets/images/whatsappOutline_icon.svg" alt="WhatsApp" />
          </Link>

        </div>
        <div className="demo-sticky move-dropup-up zcustom-a" id="contactus-sticky">
          <div className="demo-pop-over" onClick={() => setShow(true)}>Schedule a free demo</div>
        </div>
      </div>

    
    </>
  );
}

export default Footer;
