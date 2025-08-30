"use client"
import { useState, useEffect } from 'react';
import ClientTabs from "../../components/ClientTabs";
import ClientTab from "../../components/ClientTab";
import BlogSlider from "../../components/BlogSlider";
import { fetchBlogs } from "../../lib/api";

export default function ResourceTabs() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (tag) => {
    const res = await fetchBlogs(tag);
    setResponse(res);
  };

  return (
    <section className="resources_sec">
      <div className="container">
        <div className="sectionheader">
          <h2 className="textalign_center">Resources</h2>
        </div>
        <div className='textalign_center'>
          <ClientTabs
            defaultActiveKey="blog"
            id="resources-tabs"
            className="bizziloTab"
          >
            <ClientTab eventKey="blog" title="Blog">
              <BlogSlider blogs={response?.results} />
            </ClientTab>
            <ClientTab eventKey="caseStudy" title="Case Study" >
              <BlogSlider blogs={response?.results?.filter((ele) => {
                return ele.categories.includes("Case Study");
              })} />
            </ClientTab>
          </ClientTabs>
        </div>
      </div>
    </section>
  );
}
