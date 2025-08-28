import axios from 'axios';

export const fetchBlogs = async (tag) => {
  try {
    console.log("Fetching blogs with tag:", process.env.NEXT_PUBLIC_BLOG_API_URL);
    const url = tag
      ? `${process.env.NEXT_PUBLIC_BLOG_API_URL}?find=${encodeURIComponent(
          tag
        )}`
      : `${process.env.NEXT_PUBLIC_BLOG_API_URL}`;
    
    const response = await axios.get(url);
    console.log("Fetched blogs:", response.data);
    return response.data;

  } catch (error) {
    return { results: [] };
  }
};

export const fetchCategories = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BLOG_API_URL}categories/`);
   
    return res.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return { results: [] };
  }
};

// export const fetchTrendingBlogs = async () => {
//   try {
//     const res = await axios.get(`https://go-omnic.com/api/blogs/?tag=${params}`);
  
//     return res.data;
//   } catch (error) {
//     console.error('Error fetching trending blogs:', error);
//     return { results: [] };
//   }
// };