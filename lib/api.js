import axios from 'axios';

export const fetchBlogs = async (tag, pagination) => {
  try {
    let url = `${process.env.NEXT_PUBLIC_BLOG_API_URL}`;

    // Build query params
    const params = new URLSearchParams();

    if (tag) {
      params.append('find', tag);
    }

    if (pagination>1) {
      params.append('page', pagination);
    }

    if (params.toString()) {
      url += `?${params.toString()}`;
    }

    console.log("fetchBlogs URL =>", url);

    const response = await axios.get(url);
    console.log("Fetched blogs:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error.message);
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