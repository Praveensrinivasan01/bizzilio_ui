import React from 'react'
import { fetchBlogs } from '../../../../lib/api'
import { formatDate } from '../../../../utils'
import BlogDetailsHeading from '../../../../components/BlogDetailsHeading'
import BlogsDetailsBody from '../../../../components/BlogsDetailsBody'

const page = async({params}) => {
    const { slug } = await params
    
    const blog = await fetchBlogs()

    const blogDetails = blog?.results?.find((item)=>item?.meta?.slug===slug)

  return (
       <>
       {blogDetails && 
       <section className='blogDetail_page'>
                <div className='container'>
                    <label className='taglinePanel'>{blogDetails?.tags?.map((item)=>item)}</label>
                  <h2 className='fontSize36 fontWeight400 salutetext_clr mb_16'>{blogDetails?.title}</h2>
                  <div className='displayInlineFlex alignItem_baseline gap10 mb_32'>
                      <div className='fontSize14 fontWeight400 stoneColdtext_clr'>{formatDate(blogDetails?.date) }</div>
                      <div className='coolOperatorsOverallstext_clr'>|</div>
                      <div className='fontSize14 fontWeight400 stoneColdtext_clr'>{blogDetails?.estimated_read_time}</div>
                    </div>
                  <div className='blogmain_img'>
                      {/* <Image src={`${blogDetails?.images?.header}`} alt='blog_img'  width={500} 
          height={500} 
          style={{ maxWidth: '50%', height: 'auto' }}/> */}
          <img src={`${blogDetails?.images?.header}`} alt='blog_img'/>
                    </div>

                   

                     <div className='row'>
                        <div className='col-lg-3'>
                            <h5 className='fontSize24 fontWeight500 salutetext_clr mb_16 outfitFontfamily'>In this article</h5>
                           <BlogDetailsHeading blogDetails={blogDetails}/>
                        </div>
                        <div className='col-lg-9'>
                            <div className='blogDetailContent'>
                                {/* <div 
                    dangerouslySetInnerHTML={{__html: blogDetails?.body}}
                    >
                    </div> */}
                    <BlogsDetailsBody blogDetails={blogDetails} />
                            </div>
                        </div>
                    </div>
                </div>
        </section >
       
       }
        
    </>
  )
}

export default page