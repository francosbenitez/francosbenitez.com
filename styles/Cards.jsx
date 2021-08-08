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
      border: 1px solid ${props => props.theme.colors.primary};
      border-radius: 20px;
      /*border-style: solid;*/
      overflow: hidden;
      padding: 3rem 2rem;
      cursor: pointer;
    }

    .card:hover {
      box-shadow: 6px 6px 2px 0px ${props => props.theme.colors.secondary};
    }

    .card-img {
      margin-bottom: 1rem;
      overflow: hidden;
    }

    .card-img img {
      /*width: 250px;
      height: auto;
      object-position: cover;*/
      overflow: hidden;
    }

    .card-text {
        font-weight: 700;
        font-size: 1.4em;
    }

    .card-date {
        font-weight: 300;
    }

    .card-description {
        margin-top: 1.25rem;
        font-weight: 500;
    }

    a {
      color: ${props => props.theme.colors.text};
    }

    @media screen and (max-width: 719px) {
        .card-wrapper {
          justify-content: center;
          align-items: center;
        }
    }
`;

export const StyledProjectsCard = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    border: 3px solid rgba(0,0,0,0.125);
    
    .tools {
        width: 100%;
        border-bottom: 3px solid rgba(0,0,0,0.125);
        text-align: center;
    }

    .link {
        text-align: center;
        width: 100%;
    }

    .date {
        font-weight: 500;
    }

    .tools-used,
    .published {
        font-weight: 800;
    }

    hr {
        border: 1px solid rgba(0,0,0,0.125);
    }

    @media ${props => props.theme.devices.tablet} {
        flex-direction: row;

        .tools {
            border-bottom: none;
            border-right: 3px solid rgba(0,0,0,0.125);
        }
    }
`

export const StyledSkillsCard = styled.div`
    .container {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 30px 30px;
  margin-top: 50px;
  margin-bottom: 50px;
}

.cardsGrid {
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-top: 50px;

  @media (min-width: 850px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;

    .cardWrapper {
      margin: 0 16px;
    }
  }
}

.cardWrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    /*color: white;
    font-family: 'Big Shoulders Stencil Display', cursive;*/
    font-size: 24px;
    font-weight: 400;
    text-align: center;
  }

  .card {
    width: calc(min(100%, 300px));
    height: 400px;
    margin: 16px 0 30px;

    background-color: black;
    border-radius: 10px;

    padding: 10px 8px 40px;

    display: flex;
    flex-direction: column;

    .row {
      flex: 1;
      display: flex;
      align-items: flex-end;
      justify-content: space-evenly;

      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: 0.2s;

        h3 {
          color: white;
          text-align: center;
          margin-top: 8px;
        }

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
}

`;


