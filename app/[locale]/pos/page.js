import React from 'react'

const page = () => {
    return (
        <>
            <section className='posBnr'>
                <div className='container'>
                    <div className='posBnrHeader'>
                        <div>
                            <img src="/assets/images/bizziloPos_logo.svg" alt='Pos_logo' />
                        </div>
                        <div>
                            <h5 className='nightSkyText_clr fontSize16 fontWeight600'>Features</h5>
                        </div>
                    </div>

                    <h1>Drive Growth Using Bizzilo’s Future-Ready <br className='brHideOnMobile' /> Retail Point Of Sale</h1>



                </div>
            </section>


            <div className='posFeaturesListTab'>
                <ul>
                    <li><button className='active'>Catalogue</button></li>
                    <li><button>Billing</button></li>
                    <li><button>Inventory</button></li>
                    <li><button>Payments</button></li>
                    <li><button>Hardware</button></li>
                    <li><button>E-Commerce</button></li>
                    <li><button>Procurement & Sales</button></li>
                    <li><button>Applications</button></li>
                    <li><button>Reports</button></li>
                    <li><button>Support</button></li>
                </ul>
            </div>


            <section className='productCatalogue_sec'>

                <div className='container'>

                    <div className='sectionheader'>
                        <h2 className='textalign_center whiteText_Clr' style={{ color: "#fff" }}>Product Catalogue</h2>
                    </div>



                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='productCatalogueItem'>
                            </div>

                        </div>

                        <div className='col-lg-6'>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default page
