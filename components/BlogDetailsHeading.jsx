'use client'
import Link from "next/link"
import React from 'react'

const BlogDetailsHeading = ({ blogDetails }) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(blogDetails?.body || "", "text/html");
  const headings = Array.from(doc.querySelectorAll("h2, h3"));

  const handleScroll = (index) => (e) => {
    e.preventDefault();
    const el = document.querySelectorAll("h2, h3")[index];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ul className='titleSelection'>
      {headings?.map((item, index) => (
        <li key={index}>
          <a
            href={`#heading-${index}`}
            className="text-decoration-none"
            onClick={handleScroll(index)}
          >
            {item.innerText}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default BlogDetailsHeading