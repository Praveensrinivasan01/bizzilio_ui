'use client'
import React from 'react'

const BlogContent = ({ blogDetails }) => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(blogDetails?.body, "text/html")

  Array.from(doc.querySelectorAll("[data-block-key]"))
    .forEach(p => {
      const key = p.getAttribute("data-block-key")
      if (key) p.setAttribute("id", key)
    })

  console.log(blogDetails, "blogdetails")

  return (
    <div
      className="blog-content ml-6"
      dangerouslySetInnerHTML={{ __html: doc.body.innerHTML }}
    />
  )
}

export default BlogContent
