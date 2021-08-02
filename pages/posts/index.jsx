import React from 'react';
import { getSortedPostsData } from '../../lib/posts'
import Link from "next/link"
import Date from "../../components/Date"
import content from "../../lib/content.json";
import { StyledCard } from "../../styles/Card"
import { StyledBlog } from "../../components/Blog/styles"
import Image from 'next/image'
import Arrow from "../../public/icons/others/arrow.svg"

const Blog = ({ allPostsData }) => {
    return (
        <StyledBlog id="blog">
          <h1>
            All <span>{content.blog.title["2"]}</span>
          </h1>
          <StyledCard>
            <div className="card-wrapper">
              {allPostsData.map(({ id, date, title, description, img, img_alt }) => (
                <div key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>
                      <div className="card">
                          <div className="card-img">
                              <Image 
                              src={img} 
                              alt={img_alt} 
                              width={100}
                              height={100}
                              />
                          </div>
                          <div className="card-text">
                              {title}
                          </div>
                          <div className="card-date">
                              <Date dateString={date} />
                          </div>
                          <div className="card-description">
                              {description} 
                          </div>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </StyledCard>
          <Link href="/posts" passHref>
             <span className="see-all">
                <a>
                  <Arrow />
                  {content.blog.see_more}
                </a>
              </span>
          </Link>
      </StyledBlog>
    );
};

export default Blog;

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }