import styled from "styled-components";

export const StyledCard = styled.div`
    a {
      color: ${props => props.theme.colors.text};
    }

    a:hover {
        border-bottom: 1.5px ${props => props.theme.colors.link} dotted;
    }

    .projects__projects {
        display: grid;
        grid-template-columns: 100%;
        grid-gap: 3rem;
    }

    .project-card {
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .project-card__image {
        background-color: ${props => props.theme.colors.background};
        border-radius: .3rem;
        box-shadow: ${props => props.theme.colors.boxShadow};
        overflow: hidden;
        padding-bottom: 50%;
        position: relative;
        width: calc(100% - 1.5rem);
        z-index: -1;
    }

    .project-card__image .lazy {
        bottom: 0;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }

    .project-card__title {
        display: inline-block;
        margin-bottom: .5rem;
        font-weight: 700;
        font-size: 1.5rem;
    }

    .project-card__link {
        color: ${props => props.theme.colors.link};
    }

    .project-card__link:after {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        content: "";
        top: 0;
    }

    .project-card__link:hover {
        background-size: 100% 1px;
    }

    .project-card__date {
        font-weight: 400;
        font-size: 1.1rem;
        margin-bottom: .5rem;
        display: block;
        font-family: "Open Sans", sans-serif;
        color: ${props => props.theme.colors.date};
    }

    small {
        font-size: 90%;
    }

    .lazy {
        background-color: ${props => props.theme.colors.background};
        border-radius: .3rem;
        width: 100%;
    }

    .project-card__image .lazy picture {
        height: 100%;
    }

    .lazy picture {
        border-radius: .3rem;
        overflow: hidden;
    }

    img, picture, video {
        max-width: 100%;
    }

    .project-card__content {
        background-color: ${props => props.theme.colors.background};
        border: 1px solid ${props => props.theme.colors.tertiary};
        border-radius: .3rem;
        box-shadow: ${props => props.theme.colors.boxShadow};
        flex-grow: 1;
        margin-top: -3rem;
        margin-left: 1.5rem;
        padding: 1rem 1.5rem 1.5rem;
        transition: box-shadow .15s cubic-bezier(.445,.05,.55,.95),border-color .15s cubic-bezier(.445,.05,.55,.95);
    }

    .project-card__description {
        font-weight: 400;
        font-size: 1.1rem;
    }

    .project-card__content:hover {
        border-color: ${props => props.theme.colors.link};
        box-shadow: 0 0 2rem -1rem ${props => props.theme.colors.boxShadow};
    }

    .project-card:hover .project-card__image:after {
        opacity: .5;
    }

    @media (min-width: 800px) {
        .projects__projects {
            grid-template-columns: minmax(0,1fr) minmax(0,1fr);
        }
    }

    .project-card__image:after {
        background-image: linear-gradient(${props => props.theme.colors.tertiary},${props => props.theme.colors.link});
        content: "";
        height: 100%;
        left: 0;
        opacity: 0;
        position: absolute;
        top: 0;
        transition: opacity .15s cubic-bezier(.445,.05,.55,.95);
        width: 100%;
    }

    .project-card__image .lazy picture .lazy__image--loaded {
        height: 100%;
    }

    .project-card__image .lazy picture .lazy__image {
        object-fit: cover;
        object-position: top left;
    }

    .lazy__image--loaded {
        filter: none;
        margin: 0;
        max-width: 100%;
        width: 100%;
    }

    .lazy__image {
        display: block;
    }

    ol {
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
    }

    ol, ul {
        list-style: none;
    }

    .blog__posts {
        display: grid;
        grid-gap: 1.5rem;
    }

    .post-card {
        background-color: ${props => props.theme.colors.background};
        border: 1px solid ${props => props.theme.colors.tertiary};
        border-radius: .3rem;
        box-shadow: ${props => props.theme.colors.boxShadow};
        position: relative;
        transition: box-shadow .15s cubic-bezier(.445,.05,.55,.95),border-color .15s cubic-bezier(.445,.05,.55,.95);
    }

    .post-card:before {
        background-image: linear-gradient(90deg,${props => props.theme.colors.background} 2rem,rgba(249,249,251,0));
        border-radius: .3rem;
        content: "";
        height: calc(100% + 2rem);
        left: -1rem;
        pointer-events: none;
        position: absolute;
        top: -.5rem;
        width: calc(100% + 1rem);
    }

    .post-card:hover {
        border: 1px solid ${props => props.theme.colors.link};
        box-shadow: ${props => props.theme.colors.boxShadow};
    }

    .post-card__content {
        padding: 1rem 1.5rem 1.5rem 0;
        position: relative;
    }

    .post-card__title {
        margin-bottom: .5rem;
        font-weight: 700;
        font-size: 1.5rem;
    }

    .post-card__link {
        color: ${props => props.theme.colors.link};
    }

    .post-card__link:hover {
        background-size: 100% 1px;
    }

    .post-card__link:after {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        content: "";
        top: 0;
    }

    .post-card__details {
        display: block;
        margin-bottom: .5rem;
        font-weight: 400;
        font-size: 1.1rem;
        font-family: "Open Sans", sans-serif;
        color: ${props => props.theme.colors.date};
    }

    .post-card__description {
        font-weight: 400;
        font-size: 1.1rem;
    }

    
`;

export const StyledProjectsCard = styled.div`
    p {
        font-size: 1rem;
    }

    .columns {
        margin-left: -1rem;
        margin-right: -1rem;
        margin-top: -1rem;
    }

    .column {
        display: block;
        flex-basis: 0;
        flex-grow: 1;
        flex-shrink: 1;
        padding: 1rem 1em 1rem 1rem;
    }

    .card {
        background-color: ${props => props.theme.colors.background};
        border-radius: .25rem;
        box-shadow: ${props => props.theme.colors.boxShadow};
        color: ${props => props.theme.colors.text};
        max-width: 100%;
        overflow: hidden;
        position: relative;
    }

    .card-content {
        padding: 1rem 1rem 0 1rem;
    }

    .content {
        display: flex;
        justify-content: space-evenly;
    }

    .text-centered {
        text-align: center;
    }

    .title {
        font-weight: 700;
    }

    .card-footer {
        border-top: 1px solid ${props => props.theme.colors.date};
        text-align: center;
    }

    .card-footer-item {
        display: inline-block;
        position: relative;
        margin: 1rem 1rem 1rem 1rem;
        line-height: 0;

        svg {
            fill:  ${props => props.theme.colors.text};
        }
    }

    @media ${props => props.theme.devices.tablet} {
        .columns {
            display: flex;
        }
    }
`

export const StyledSkillsCard = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 30px 30px;

    .cardsGrid {
        display: flex;
        flex-direction: column;
        width: 100%;
        /*margin-top: 1rem;*/

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

    h3 {
        font-size: 1rem;
        font-weight: 700;
        text-align: center;
        color: ${props => props.theme.colors.text};
        font-family: "Open Sans", sans-serif;
    }

    .card {
        width: calc(min(100%, 300px));
        height: 400px;
        margin: 16px 0 30px;
        background-color: ${props => props.theme.colors.secondary};
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

                h4 {
                    color: #F4F7F5;
                    text-align: center;
                    margin-top: 8px;
                    font-family: "Open Sans", sans-serif;
                }

                &:hover {
                    transform: scale(1.1);
                }
            }
        }
    }
}
`;


