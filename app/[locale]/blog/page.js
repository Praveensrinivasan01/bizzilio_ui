import { fetchBlogs, fetchCategories, fetchTrendingBlogs } from '../../../lib/api';
import BlogPage from '../../../components/BlogPage';

const Page = async ({searchParams}) => {

let searchValue = await searchParams 
  const [blogs, categories] = await Promise.all([
    fetchBlogs(searchValue?.search),
    fetchCategories(),
  ]);

  const latestBlog = blogs?.results?.length > 0 ? blogs.results[0] : null;

  return (
    <main>
      <BlogPage
        latestBlog={latestBlog}
        // trendingBlogs={trendingBlogs.results}
        categorizedBlogs={blogs.results}
        categories={[{ id: 'all', name: 'All' }, ...(categories.results || [])]}
      />
    </main>
  );
};

export default Page;
