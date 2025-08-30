// export const dynamic = 'force-static';
export const revalidate = 7200; 
export const fetchCache = 'force-cache';

import React from 'react'
import { fetchBlogs } from '../../../../lib/api'
import { formatDate } from '../../../../utils'
import BlogDetailsHeading from '../../../../components/BlogDetailsHeading'
import { MetaTags } from '../../../../components/MetaTags';



export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await fetchBlogs();
  const blogDetails = blog?.results?.find((item) => item?.meta?.slug === slug);

  
  const title = blogDetails?.title ? `${blogDetails.title} | Bizzilio Blog` : 'Blog | Bizzilio';
  const description = blogDetails?.meta_description || blogDetails?.excerpt || 'Read the latest articles and insights on our blog. Stay updated with industry trends, tips, and expert advice from Bizzilio.';

  return MetaTags({ title, description });
}

const page = async ({ params }) => {
  const { slug } = await params

  const blog = await fetchBlogs()
  const blogDetails = blog?.results?.find((item) => item?.meta?.slug === slug)

  return (
    <>
      {blogDetails &&
        <section className='blogDetail_page'>
          <div className='container'>
            <label className='taglinePanel'>{blogDetails?.tags?.map((item) => item)}</label>
            <h2 className='fontSize36 fontWeight400 salutetext_clr mb_16'>{blogDetails?.title}</h2>
            <div className='displayInlineFlex alignItem_baseline gap10 mb_32'>
              <div className='fontSize14 fontWeight400 stoneColdtext_clr'>{formatDate(blogDetails?.date)}</div>
              <div className='coolOperatorsOverallstext_clr'>|</div>
              <div className='fontSize14 fontWeight400 stoneColdtext_clr'>{blogDetails?.estimated_read_time}</div>
            </div>
            <div className='blogmain_img'>
              <img src={`${blogDetails?.images?.header}`} alt='blog_img' />
            </div>

            <div className='row'>
              <div className='col-lg-3 d-none d-lg-block'>
                <h5 className='fontSize24 fontWeight500 salutetext_clr mb_16 outfitFontfamily'>In this article</h5>
                <div
                  style={{
                    position: 'sticky',
                    top: '80px',
                    maxHeight: '80vh',
                    overflowY: 'auto',
                  }}
                >
                  <BlogDetailsHeading blogDetails={blogDetails} />
                </div>
              </div>
              <div className='col-lg-9'>
                <div className='blogDetailContent'>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: addHeadingIds(blogDetails?.body || ""),
                    }}
                  />
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


const addHeadingIds = (html) => {
  let idx = 0;
  return html.replace(/<(h[23])([^>]*)>(.*?)<\/\1>/gi, (match, tag, attrs, text) => {
    const slug = text
      .toLowerCase()
      .replace(/[^\w]+/g, '-')
      .replace(/^-+|-+$/g, '') + '-' + idx++;
    return `<${tag}${attrs} id="${slug}">${text}</${tag}>`;
  });
};