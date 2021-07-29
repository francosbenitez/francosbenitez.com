import styled from "styled-components";

export const StyledCard = styled.div`
    .card-wrapper {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: left;
      margin: 0 auto;
      max-width: 75vw;
    }

    .card {
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

    .card:hover {
      box-shadow: 6px 6px 2px 0px #2079c7;
    }

    .card-img {
      margin-bottom: 1rem;
      overflow: hidden;
    }

    .card-img img {
      width: 250px;
      height: auto;
      object-position: cover;
      overflow: hidden;
    }

    .card-text {
        font-weight: 700;
        font-size: 1.2rem;
    }

    .card-date {
        font-size: 1rem;
        font-weight: 300;
    }

    .card-description {
        margin-top: 1rem;
        font-size: .8rem;
        font-weight: 500;
    }

    a {
      color: #000000;
    }

    @media screen and (max-width: 719px) {
        .card-wrapper {
          justify-content: center;
          align-items: center;
        }
    }
`;