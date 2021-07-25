import styled from "styled-components"

export const StyledBlog = styled.section`
    h1 {
      margin: 1rem 0 1rem 0;
      color: ${(props) => props.theme.primary};
      font-size: 2rem;
    }

    hr {
      margin: 1rem 0 1rem 0;
    }

    @media screen and (max-width: 719px) {
      h1 {
        margin: 5rem 0 1rem 0;
        padding-top: 1rem;
        text-align: center;
      }
    }
`;

export const StyledCard = styled.div`
    .blog-card-wrapper {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: left;
      margin: 0 auto;
      max-width: 75vw;
    }

    .blog-card {
      width: 250px;
      height: auto;
      -webkit-transition: box-shadow 0.6s linear;
      transition: box-shadow 0.2s linear;
      margin: 0.5em;
      border: 1px solid rgba(0,0,0,0.125);
      border-radius: 20px;
      border-style: solid;
      border-color: #000000;
      overflow: hidden;
      padding: 3rem 2rem;
      cursor: pointer;
    }

    .blog-card:hover {
      box-shadow: 6px 6px 2px 0px #2079c7;
    }

    .blog-card-img {
      margin-bottom: 1rem;
      overflow: hidden;
    }

    .blog-card-img img {
      width: 250px;
      height: auto;
      object-position: cover;
      overflow: hidden;
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

    a {
      color: #000000;
    }

    @media screen and (max-width: 719px) {
        .blog-card-wrapper {
          justify-content: center;
          align-items: center;
        }
    }
`;