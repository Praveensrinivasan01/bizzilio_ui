import Link from 'next/link';
import dynamic from 'next/dynamic';

// Import static server components
// Dynamic import client components with loading states
const HeroBanner = dynamic(() => import('../../../../components/ClientComponents/HeroBanner'), {
  loading: () => <div className="loading-placeholder">Loading...</div>
});

const IndustryTabs = dynamic(() => import('../../../../components/ClientComponents/IndustryTabs'), {
  loading: () => <div className="loading-placeholder">Loading...</div>
});

const CardScroll = dynamic(() => import('../../../../components/ClientComponents/CardScroll'), {
  loading: () => <div className="loading-placeholder">Loading...</div>
});

const ShippingSection = dynamic(() => import('../../../../components/ClientComponents/ShippingSection'), {
  loading: () => <div className="loading-placeholder">Loading...</div>
});


const page = () =>  {
  return (
    <>
      {/* Client-side hero banner with interactive elements */}
      <HeroBanner />
      
      {/* Client-side industry tabs with slider */}
      <IndustryTabs />
      
      {/* Static server-rendered section for core features */}
      <section className='coreFeatures_sec'>
        <div className='container'>
          <h2 className='fontSize36 whiteText_Clr fontWeight600 mb_20'>Core Features</h2>
          <p className='fontSize16 ancestralWatertext_clr fontWeight400 mb_80'>
            Intuitive, Streamlined interface for effortless navigation and seamless interaction
            <br className='brHideOnMobile' /> 
            Streamlined interface for effortless navigation and seamless interaction
          </p>

          <div className='coreFeaturesGrid'>
            <div className='coreFeatures_item'>
              <h5>Meticulous Product Catalog Management</h5>
              <p>Seamlessly manage categories, collections, individual product entries and bulk csv upload simplifying data input.</p>
              <Link className='brightNavyBlueText_btn' href="#"><span>More Details</span> <img className='rotateMin180deg' src="/assets/images/leftarrow.svg" alt='leftarrow' /></Link>
            </div>
            <div className='coreFeatures_item'>
              <h5>Proactive CRM</h5>
              <p>Gain comprehensive views of products, sales, customers, and purchases for informed decisions.</p>
              <Link className='brightNavyBlueText_btn' href="#"><span>More Details</span> <img className='rotateMin180deg' src="/assets/images/leftarrow.svg" alt='leftarrow' /></Link>
            </div>

            <div className='coreFeatures_item'>
              <h5>Strategic Shipping Options</h5>
              <p>Connect with top 3PL partners and manage deliveries from order to doorstep with ease. Unlock the best shipping rates and expand reach—all from a single platform.</p>
              <Link className='brightNavyBlueText_btn' href="#"><span>More Details</span> <img className='rotateMin180deg' src="/assets/images/leftarrow.svg" alt='leftarrow' /></Link>
            </div>

            <div className='coreFeatures_item'>
              <h5>Omnichannel</h5>
              <p>Protect sensitive business data with robust authentication, role-based access, and permission controls. Prevent unauthorized access and ensure data integrity across your organization.</p>
              <Link className='brightNavyBlueText_btn' href="#"><span>More Details</span> <img className='rotateMin180deg' src="/assets/images/leftarrow.svg" alt='leftarrow' /></Link>
            </div>
            <div className='coreFeatures_item'>
              <h5>Robust user access control</h5>
              <p>Robust protection ensuring data integrity and confidentiality for utmost safety.</p>
              <Link className='brightNavyBlueText_btn' href="#"><span>More Details</span> <img className='rotateMin180deg' src="/assets/images/leftarrow.svg" alt='leftarrow' /></Link>
            </div>
            <div></div>


          </div>

        </div>
      </section>
      
      {/* Client-side card scroll with animations */}
      <CardScroll />
      
      {/* Static server-rendered AI Powered Commerce section */}
      <section className='aiPoweredCommerce_sec'>
        <div className='container'>
          <h2 className='fontSize36 ruinedSmoresText_clr textalign_center fontWeight600 mb_70'>AI Powered Commerce</h2>
          <div className='row justifyContent_center'>
            <div className='col-lg-4'>
              <div className='aiPoweredCommerceItem mobspaceMb_24'>
                <div className='aiPoweredCommerce_imgFrame'>
                  <img src="/assets/images/productImgMockup.png" alt='productImgMockup' />
                </div>
                <h5>Product Image Mockup</h5>
                <p>Consistent product photo for your catalog with bizzilo context</p>
                <Link className='brightNavyBlueText_btn' href="#"><span>More Details</span> <img className='rotateMin180deg' src="/assets/images/leftarrow.svg" alt='leftarrow' /></Link>

              </div>
            </div>
            <div className='col-lg-4'>
              <div className='aiPoweredCommerceItem'>
                <div className='aiPoweredCommerce_imgFrame'>
                  <img src="/assets/images/productContent_Generator.png" alt='productContent_Generator' />
                </div>
                <h5>Product Content Generator</h5>
                <p>Introducing an easy-to-use AI tool designed to write high-quality,compelling product description for your store in seconds</p>
                <Link className='brightNavyBlueText_btn' href="#"><span>More Details</span> <img className='rotateMin180deg' src="/assets/images/leftarrow.svg" alt='leftarrow' /></Link>

              </div>
            </div>

          </div>

        </div>
      </section>
      
      {/* Static server-rendered Performance Insights section */}
      <section className='performanceInsights_sec'>
        <div className='container'>
          <div className='row gap40 justifyContent_center'>
            <div className='col-md-4'>

              <div className='performanceInsights_item'>
                <div className='performanceInsights_img'>
                  <img src="/assets/images/detailedAnalytics.svg" alt='Detailed Analytics' />
                </div>
                <h5>Detailed Analytics</h5>
                <p>Funnel analytics to understand user behavior, dynamic heatmaps to gather insights on visitor interaction, A/B tests to improve conversion, and more, to slice and dice every piece for information available for best results.</p>
                <Link className='brightNavyBlueText_btn' href="#"><span>More Details</span> <img className='rotateMin180deg' src="/assets/images/leftarrow.svg" alt='leftarrow' /></Link>


              </div>
            </div>
            <div className='col-md-4'>

              <div className='performanceInsights_item'>
                <div className='performanceInsights_img'>
                  <img src="/assets/images/comprehensiveReporting.svg" alt='Comprehensive Reporting' />

                </div>
                <h5>Comprehensive Reporting</h5>
                <p>Up-to-date statistics at your fingertips. Enjoy access to a bevy of eCommerce reports with the power and depth you need for the effective management of your online store</p>
                <Link className='brightNavyBlueText_btn' href="#"><span>More Details</span> <img className='rotateMin180deg' src="/assets/images/leftarrow.svg" alt='leftarrow' /></Link>


              </div>

            </div>
          </div>
        </div>
      </section>
      
      {/* Static server-rendered Coupons & Gift Cards section */}
      <section className='amusingCoupons_sec'>
        <div className='container'>
          <div className='row justifyContent_center mb_50'>
            <div className='col-lg-6'>
              <h2 className='fontSize36 ruinedSmoresText_clr textalign_center fontWeight600  mb_20'>Amusing coupons & gift cards</h2>
              <p className='fontSize16 midnightSkyText_clr textalign_center fontWeight400'>Want to drive boost sales? Throw customized discounts based on products, categories, collections, or shipping zones in a click. Effortlessly set up your coupon’s validity, usage, value, and more with our coupon settings.</p>
            </div>

          </div>



          <div className='row justifyContent_center alignItem_center'>
            <div className='col-lg-4'>

              <div className='amusingcouponsItem mobspaceMb_24'>

                <div className='amusingcoupons_img'>
                  <img src="/assets/images/engagement.png" alt='Customer Engagement' />
                </div>

                <h5>Customer Engagement</h5>
                <p>Coupons and gift cards engage customers, incentivising purchases and fostering loyalty through discounts and special offers a charm </p>
                <Link className='brightNavyBlueText_btn' href="#"><span>More Details</span> <img className='rotateMin180deg' src="/assets/images/leftarrow.svg" alt='leftarrow' /></Link>

              </div>
            </div>
            <div className='col-lg-2'>
              <div className='centerBorderLine'>
                <img src="/assets/images/centerborderLine.svg" alt='centerborderLine' />
              </div>
            </div>
            <div className='col-lg-4'>

              <div className='amusingcouponsItem'>

                <div className='amusingcoupons_img'>
                  <img src="/assets/images/customerAcquisition.png" alt='Customer Acquisition and Retention' />
                </div>

                <h5>Customer Acquisition and Retention</h5>
                <p>They aid in both acquiring new customers, who might be attracted by discounts, and retaining existing ones through rewards and incentives</p>
                <Link className='brightNavyBlueText_btn' href="#"><span>More Details</span> <img className='rotateMin180deg' src="/assets/images/leftarrow.svg" alt='leftarrow' /></Link>

              </div>
            </div>
          </div>

        </div>
      </section>
      
      {/* Client-side shipping section with animations */}
      <ShippingSection />
    </>
  );
}
export default page
