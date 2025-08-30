export const dynamic = 'force-static';
export const revalidate = 7200; 
export const fetchCache = 'force-cache';

import React from 'react'

export const metadata = {
  title: 'Create Your Account | Bizzilio - Get Started with Cloud ERP',
  description: 'Sign up for a Bizzilio account and start simplifying your business operations with our powerful cloud ERP platform. Create your account today and transform your business journey.',
  keywords: 'Bizzilio, create account, sign up, cloud ERP, business transformation, account creation',
  openGraph: {
    title: 'Create Your Account | Bizzilio',
    description: 'Sign up for a Bizzilio account and experience seamless business transformation with innovative cloud ERP solutions.',
    type: 'website',
  },
}

import Link from 'next/link'


const page = () => {
    return (
        <section className='accountCreation_sec'>
            <div className='container'>
                <div className='row alignItem_center '>
                    <div className='col-lg-6'>
                    <div className='balljumbingFrame'>
                        <div className="ball">
                            <img src="/assets/images/ball_jump.png" alt='ball_jump' />
                        </div>
                        <div className="ballshadow"></div>

                        </div>

                    </div>
                    <div className='col-lg-6'>
                        <div className='accountCreationFrame'>
                            <Link href="#" className='mb_32 displayInlineFlex alignItem_center gap12  blackText_Clr fontSize16 fontWeight600 textDecoration_unset'>
                                <img className='blackFilter width14px' src="/assets/images/leftarrow.svg" alt='leftarrow' />
                                <span>Back</span>
                            </Link>

                            <h2 className='ruinedSmoresText_clr fontSize18 fontWeight700 mb_32'>Account Creation</h2>

                            <form>
                                <div className='mb_24'>
                                    <label className='labeltext'>Name</label>
                                    <input type='text' placeholder='' className='mainInput' />
                                </div>

                                <div className='mb_24'>
                                    <label className='labeltext'>Email ID</label>
                                    <input type='text' placeholder='' className='mainInput' />
                                </div>
                                <div className='mb_24'>
                                    <label className='labeltext'>Password</label>
                                    <input type='text' placeholder='' className='mainInput' />
                                </div>
                                <div className='mb_24'  >
                                    <label className='labeltext'>Confirm Password</label>
                                    <input type='text' placeholder='' className='mainInput' />
                                </div>

                                <button className='loginBtn mb_32'>Create Account</button>

                                <Link href={'/login'} className='textDecoration_unset fontSize18 fontWeight600 ruinedSmoresText_clr textalign_center display_block'>Login</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page
