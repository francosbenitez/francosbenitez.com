import React from "react";
import styled from "styled-components";
import content from "../lib/content.json";
import Image from "next/image";
import testImage from "../public/images/test-image.jpg"

const StyledBlog = styled.section`
    h1 {
        color: ${(props) => props.theme.primary};
    }
`;

const StyledCard = styled.div`
    width: 250px;
    height: auto;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
    border: 1px solid rgba(0,0,0,0.125);
    border-radius: 20px;
    overflow: hidden;
    margin: 2rem 1rem;
    transition: all 0.2s ease-in-out;
    padding: 3rem 2rem;

    .blog-card-img {
        margin-bottom: 1rem;
    }

    .blog-card-text {
        font-weight: 700;
        font-size: 1.2rem;
    }

    .blog-card-date {
        font-size: 1rem;
        font-weight: 300;
    }

    .blog-card-description {
        margin-top: 1rem;
        font-size: .8rem;
        font-weight: 500;
    }
`

const Blog = () => {
    return (
        <StyledBlog>
            <h1>{content.blog.title.en} 📝</h1>
            <hr />
            <StyledCard className="blog-card">
                    <div className="blog-card-img">
                        <Image 
                        src={testImage}
                        alt=""
                        />
                    </div>
                    <div className="blog-card-text">
                        My Portfolio Website
                    </div>
                    <div className="blog-card-date">
                        JULY 2021
                    </div>
                    <div className="blog-card-description">
                        Built from scratch with Next. 
                    </div>
            </StyledCard>
        </StyledBlog>
    );
};

export default Blog;