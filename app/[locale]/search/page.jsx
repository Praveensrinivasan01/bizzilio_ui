import React from 'react'
import { fetchBlogs } from '../../../lib/api';
import SearchPage from '../../../components/SearchPage';

const Page = async({searchParams}) => {
    const searchValue = await searchParams
    const page = parseInt(searchParams?.page) || 1;
     const [blogs] = await Promise.all([
        fetchBlogs(searchValue?.search,page)
      ]);

  return (
    <div>
      <SearchPage categorizedBlogs={blogs}/>
    </div>
  )
}

export default Page
