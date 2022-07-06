import styled from "styled-components";

export const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 1rem 0 1rem;
  width: 90%;
  position: relative;
  max-width: 1152px;
  margin: 0 auto;
  min-height: calc(100vh - 6.5rem);
  padding-top: 7.5rem;
  padding-bottom: 4.5rem;
  justify-content: center;

  .hero-container:before {
    background-image: radial-gradient(#5b8efc4b 15%, transparent 0),
      radial-gradient(#5b8efc4b 15%, transparent 0);
    background-size: 0.75rem 0.75rem;
    background-position: 0 0, 0.375rem 0.375rem;
    -webkit-clip-path: polygon(
      100% 15%,
      50% 25%,
      45% 35%,
      100% 45%,
      100% 100%,
      50% 100%,
      0 70%,
      0 100%,
      100% 100%
    );
    clip-path: polygon(
      100% 15%,
      50% 25%,
      45% 35%,
      100% 45%,
      100% 100%,
      50% 100%,
      0 70%,
      0 100%,
      100% 100%
    );
    content: "";
    height: 100%;
    left: 50%;
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    width: 100%;
    z-index: -1;
  }

  h1 {
    font-size: 4rem;
    margin-bottom: 2rem;
    color: ${(props) => props.theme.colors.secondary};
    font-weight: 700;
    line-height: 1;
  }

  span {
    color: ${(props) => props.theme.colors.primary};
    line-height: 1;
  }

  h2 {
    font-size: 175%;
    margin-bottom: 2rem;
    color: ${(props) => props.theme.colors.text};
    font-weight: 600;
    font-family: "Open Sans", sans-serif;
  }

  .hero-img svg {
    width: 100%;
    margin: 2rem 0 2rem 0;
    .st0 {
      fill: ${(props) => props.theme.colors.tertiary};
    }
    .st1 {
      fill: ${(props) => props.theme.colors.primary};
    }
    .st2 {
      fill: #f2f2f2;
    }
    .st3 {
      fill: none;
    }
    .st4 {
      fill: none;
      stroke: #d3d3d3;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-miterlimit: 10;
    }
    .st5 {
      fill: #e8baba;
    }
    .st6 {
      fill: #313131;
    }
    .st7 {
      fill: #fbbebe;
    }
    .st8 {
      fill: #3f3d56;
    }
    .st9 {
      fill: #ffffff;
    }
    .st10 {
      fill: #d1d3d4;
    }
    .st11 {
      fill: #e6e7e8;
    }
  }

  @media ${(props) => props.theme.devices.tablet} {
    text-align: left;

    .buttons {
      display: flex;
      flex-direction: row;
      float: left;
    }

    .hero-container {
      display: flex;
      flex-direction: row;
    }

    .hero-description {
      flex-basis: 50%;
    }

    .hero-img svg {
      width: 150%;
    }
  }
`;
