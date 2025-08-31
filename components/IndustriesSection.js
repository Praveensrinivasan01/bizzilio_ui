"use client";

import IndustryTabsSlider from './IndustryTabsSlider'

const IndustriesSection = () => {
  return (
    <section className='onlineStoreBizzilo_sec'>
      <div className='container'>
        <h2 className='fontSize36 ruinedSmoresText_clr textalign_center fontWeight600  mb_24'>Covering 20+ Industries</h2>
        
        <div className='textalign_center mb_70'>
          <IndustryTabsSlider />
        </div>

        <div className='onlineStoreBizzilo_item'>
          <div className='row alignItem_center'>
            <div className='col-lg-6'>
              <div className='onlineStore_img'>
                <img src="/assets/images/createEcom_drag_drop.jpg" alt='Full Brand Customization' />
              </div>
            </div>
            <div className='col-lg-5 offset-lg-1 '>
              <div className='onlineStore_Content'>
                <h3>Create Ecom with Drag & Drop </h3>
                <p>Save time and costs on coding and confidently run your store on zero code. Pick a domain, list your products, and start selling - it is as easy as it sounds.</p>
                {/* <a href="#" className='brightNavyBlueText_btn'><span>More Details</span>  <img src="/assets/images/leftarrow.svg" alt='leftarrow' /></a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection