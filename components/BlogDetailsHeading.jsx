'use client'
import Link from "next/link"
import React from 'react'

const BlogDetailsHeading = ({ blogDetails }) => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(blogDetails?.body, "text/html")

  const headings = Array.from(doc.querySelectorAll("p"))
    .filter(p => p.children.length === 1 && p.children[0]?.tagName === "B")
    .map(p => ({
      text: p.textContent.trim(),
      key: p.getAttribute("data-block-key")
    }))

  return (
    <ul className='titleSelection'>
      {headings?.map((item, index) => (
        <li key={index}>
          <Link href={`/blog-detail/${blogDetails?.meta?.slug}#${item.key}`} prefetch className="text-decoration-none">
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default BlogDetailsHeading
