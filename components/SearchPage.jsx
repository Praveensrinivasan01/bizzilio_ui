import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '../utils';


const SearchPage = ({ categorizedBlogs, currentPage = 1 }) => {

  return (
    <div >
        <div className='gridLayout'>
  {categorizedBlogs?.results?.map((blog) => (
        <Link
          href={`/blogs/${blog?.meta?.slug}`}
          key={blog.id} // key should be on the Link
          className="text-decoration-none"
          prefetch
        >
          <div className="browsebycategoriesItem">
            <div className="browsebycategories_img">
              <img
                src={blog?.images?.thumbnail}
                alt={blog?.title}
              />
            </div>
            <div className="browsebycategories_content">
              <h5>{blog?.categories?.[0]}</h5>
              <h2>{blog?.title}</h2>
              <p>
                {formatDate(blog?.date)} - {blog?.estimated_read_time}
              </p>
            </div>
          </div>
        </Link>
      ))}
        </div>
    

      <div className="pagination">
        {categorizedBlogs?.previous ? (
          <Link
            href={{
              pathname: '/blog',
              query: {
                page: currentPage - 1,
              },
            }}
          >
            <button className="buttonNext">Previous</button>
          </Link>
        ) : (
          <button className="buttonNext" disabled>Previous</button>
        )}

        {categorizedBlogs?.next ? (
          <Link
            href={{
              pathname: '/blog',
              query: {
                page: currentPage + 1,
              },
            }}
          >
            <button className="buttonNext">Next</button>
          </Link>
        ) : (
          <button className="buttonNext" disabled>Next</button>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
