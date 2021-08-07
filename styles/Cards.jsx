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



