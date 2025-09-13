
// export const dynamic = 'force-static';
// export const revalidate = 3600;
// export const fetchCache = 'force-cache';


export async function generateMetadata() {
  const title = 'Blog | Bizzilio';
  const description = 'Read the latest articles and insights on our blog. Stay updated with industry trends, tips, and expert advice from Bizzilio.';

  const metaData = MetaTags({ title, description });

  return metaData;
}

import { fetchBlogs, fetchCategories, fetchTrendingBlogs } from '../../../lib/api';
import BlogPage from '../../../components/BlogPage';
import { MetaTags } from '../../../components/MetaTags';
// import { useState } from 'react';

const Page = async ({searchParams}) => {

let searchValue = await searchParams 
 const page = parseInt(searchParams?.page) || 1;

  const [blogs, categories] = await Promise.all([
    fetchBlogs("",page),
    fetchCategories(),
  ]);

  

  // const [nextPreviousUrl ,setPreviousUrl] = useState('')

  const latestBlog = blogs?.results?.length > 0 ? blogs.results[0] : null;


  return (
    <main>
      <BlogPage
        latestBlog={latestBlog}
        // trendingBlogs={trendingBlogs.results}
        categorizedBlogs={blogs}
        categories={[{ id: 'all', name: 'All' }, ...(categories.results || [])]}
        currentPage={page}
      />
      
    </main>
  );
};

export default Page;
