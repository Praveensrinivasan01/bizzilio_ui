"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

import { formatDate } from "../utils";

const BlogPage = ({
  latestBlog,
  categorizedBlogs = [],
  categories = [],
  currentPage
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");

  // useEffect(() => {
  // const timer = setTimeout(() => {
  //   const params = new URLSearchParams(window.location.search);
  //   if (searchQuery) {
  //     params.set('search', searchQuery);
  //   } else {
  //     params.delete('search');
  //   }
  //   if (params.toString() !== window.location.search.replace(/^\?/, '')) {
  //     router.replace(`?${params.toString()}`, { scroll: false });
  //   }
  // }, 500);

  //   return () => clearTimeout(timer);
  // }, [searchQuery]);

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  const getSliderSettings = (blogCount) => ({
    rows: blogCount <= 3 ? 1 : 2,
    dots: false,
    arrows: true,
    infinite: blogCount > 6,
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: 1,
    slidesToShow: 3,
    slidesToScroll: Math.min(6, blogCount),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, blogCount),
          infinite: blogCount > 2,
          dots: false,
          rows: blogCount <= 2 ? 1 : 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: Math.min(2, blogCount),
          initialSlide: Math.min(2, blogCount - 1),
          rows: blogCount <= 2 ? 1 : 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          rows: 1
        }
      }
    ]
  });

  const blogCategories = [
    ...new Set(categorizedBlogs.results?.flatMap((blog) => blog?.categories))
  ].filter(Boolean);

  console.log(categorizedBlogs, "categorizedBlogs");

  return (
    <>
      <div className="blackHeader blogHeader">
        <div className="container">
          <nav>
            <div className="blogTitle">
              <h2>Blogs</h2>
              <span className="whiteText_Clr">|</span>
              <h5 className="fontSize18 fontWeight400 whiteText_Clr">
                Stay Updated on E-commerce, Inventory Management & POS
              </h5>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                router.push(`/search?search=${searchQuery}`);
              }}
            >
              <div className="inputMate">
                <div className="inputMatePrepend">
                  <button type="submit" className="inputMateText">
                    <Image
                      src="/assets/images/search_icon.svg"
                      alt="Search"
                      width={18}
                      height={18}
                    />
                  </button>
                </div>

                <input
                  autoComplete="off"
                  placeholder="Search by..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e?.target.value)}
                />
              </div>
            </form>
          </nav>
        </div>
      </div>

      <section className="latestBlog_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h3 className="fontSize18 fontWeight600 darkOrchestra_clr mb_32">
                The Latest
              </h3>
              <Link
                href={`blogs/${latestBlog?.meta?.slug}`}
                prefetch
                className="text-decoration-none"
              >
                <div className="latestBlogframe mobspaceMb_24">
                  <div className="latestbrowsebycategories_img">
                    <img
                      src={latestBlog?.images?.thumbnail}
                      alt={latestBlog?.title}
                    />
                  </div>

                  <div className="displayFlex alignItem_center justifyContent_spacebetween mb_24">
                    <div>
                      <h4 className="fontSize16 fontWeight500 hotOrangetext_clr">
                        {latestBlog?.category}
                      </h4>
                    </div>
                    <div>
                      <span className="fontSize14 fontWeight400 mauveMoletext_clr">
                        {latestBlog?.date}
                      </span>
                    </div>
                  </div>

                  <h2 className="fontSize20 fontWeight600 darkOrchestra_clr mb_14">
                    {latestBlog?.title}
                  </h2>
                  <p className="fontSize16 fontWeight400 darkOrchestra_clr">
                    {latestBlog?.excerpt}
                  </p>
                </div>
              </Link>
            </div>

            <div className="col-lg-1">
              <div className="blogcenterDivider"></div>
            </div>

            <div className="col-lg-4">
              <h3 className="fontSize18 fontWeight600 darkOrchestra_clr mb_32">
                Trending
              </h3>
              {categorizedBlogs?.results?.slice(0, 3)?.map((blog, index) => (
                <Link
                  href={`blogs/${blog?.meta?.slug}`}
                  prefetch
                  className="text-decoration-none"
                  key={index}
                >
                  <div className="trendingItem">
                    <span>{blog?.category}</span>
                    <h4>{blog?.title}</h4>
                    <p>{blog?.excerpt}</p>
                    <h6>{blog?.date}</h6>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="browsebycategories_sec">
        <div className="container">
          {/* Set defaultActiveKey to "all" */}
          <Tab.Container id="blog-categories-tabs" defaultActiveKey="all">
            <div className="row">
              <div className="col-lg-2 mobspaceMb_24">
                <div className="browsebycategoriesScroll">
                  <h3 className="fontSize16 fontWeight600 midnightSkyText_clr mb_16">
                    Browse by categories
                  </h3>

                  <Nav className="flex-column browsebycategoriesTab">
                    <Nav.Item key="all">
                      <Nav.Link eventKey="all">All</Nav.Link>
                    </Nav.Item>
                    {blogCategories?.map((category, index) => (
                      <Nav.Item key={index}>
                        <Nav.Link eventKey={category}>{category}</Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </div>
              </div>

              <div className="col-lg-10">
                <Tab.Content>
                  {/* All blogs tab - now the default */}
                  <Tab.Pane eventKey="all">
                    <Slider
                      {...getSliderSettings(categorizedBlogs?.results?.length)}
                      className="browsebycategoriesSlider"
                    >
                      {categorizedBlogs?.results?.map((blog) => (
                        <Link
                          href={`blogs/${blog?.meta?.slug}`}
                          prefetch
                          className="text-decoration-none"
                        >
                          <div
                            className="browsebycategoriesItem"
                            key={blog?.id}
                          >
                            <div className="browsebycategories_img">
                              <img
                                src={
                                  blog?.images?.thumbnail
                                    ? blog?.images?.thumbnail
                                    : "/assets/images/fallBack.jpeg"
                                }
                                alt={blog?.title}
                              />
                            </div>
                            <div className="browsebycategories_content">
                              <h5>
                                {blog?.categories?.[0] || "Uncategorized"}
                              </h5>
                              <h2>{blog?.title}</h2>
                              <p>
                                {formatDate(blog?.date)} -{" "}
                                {blog?.estimated_read_time}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </Slider>
                  </Tab.Pane>

                  {blogCategories.map((category) => (
                    <Tab.Pane eventKey={category} key={category}>
                      <Slider
                        {...getSliderSettings(
                          categorizedBlogs?.results?.filter((blog) =>
                            blog?.categories?.includes(category)
                          )?.length
                        )}
                        className="browsebycategoriesSlider"
                      >
                        {categorizedBlogs?.results
                          ?.filter((blog) =>
                            blog?.categories?.includes(category)
                          )
                          ?.map((blog) => (
                            <Link
                              href={`blogs/${blog?.meta?.slug}`}
                              prefetch
                              className="text-decoration-none"
                            >
                              <div
                                className="browsebycategoriesItem"
                                key={blog.id}
                              >
                                <div className="browsebycategories_img">
                                  <img
                                    src={
                                      blog?.images?.thumbnail
                                        ? blog?.images?.thumbnail
                                        : "/assets/images/fallBack.jpeg"
                                    }
                                    alt={blog?.title}
                                  />
                                </div>
                                <div className="browsebycategories_content">
                                  <h5>{blog?.categories[0]}</h5>
                                  <h2>{blog?.title}</h2>
                                  <p>
                                    {formatDate(blog?.date)} -{" "}
                                    {blog?.estimated_read_time}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          ))}
                      </Slider>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </div>
            </div>
          </Tab.Container>
          {/* {categorizedBlogs?.previous ? (
  <Link
    href={{
      pathname: '/blog',
      query: {
        page: currentPage - 1,
      },
    }}
  >
    <button className="buttonNext">
      Previous
    </button>
  </Link>
) : (
  <button className="buttonNext" disabled>
    Previous
  </button>
)} */}

          {/* {categorizedBlogs?.next ? (
  <Link
    href={{
      pathname: '/blog',
      query: {
        page: currentPage + 1,
      },
    }}
  >
    <button className="buttonNext">
      Next
    </button>
  </Link>
) : (
  <button className="buttonNext" disabled>
    Next
  </button>
)} */}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
