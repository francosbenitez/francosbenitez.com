import styled from "styled-components";

export const StyledCard = styled.div`
    a {
      color: ${props => props.theme.colors.text};
    }

    // Projects
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
        border: 1px solid ${props => props.theme.colors.link};
        border-radius: .3rem;
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
        font-size: calc(1.2rem + 1vw);
        display: inline-block;
        margin-bottom: .5rem;
        font-weight: 700;
        font-size: 1.4em;
        font-family: "Open Sans", sans-serif;
    }

    .project-card__date {
        font-weight: 300;
        font-size: 1em;
        margin-bottom: .5rem;
        display: block;
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
        border: 1px solid ${props => props.theme.colors.link};
        border-radius: .3rem;
        flex-grow: 1;
        margin-top: -3rem;
        margin-left: 1.5rem;
        padding: 1rem 1.5rem 1.5rem;
    }

    .project-card__description {
        font-weight: 500;
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

    // Posts
    ol {
        display: block;
        list-style-type: decimal;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
    }

    .blog__posts {
        display: grid;
        grid-gap: 1.5rem;
    }

    .post-card {
        background-color: ${props => props.theme.colors.background};
        border: 1px solid ${props => props.theme.colors.link};
        border-radius: .3rem;
        box-shadow: ${props => props.theme.colors.boxShadow};
        position: relative;
    }

    .post-card:before {
        background-image: linear-gradient(90deg,${props => props.theme.colors.background} 2rem,rgba(249,249,251,0));
        border-radius: .3rem;
        content: "";
        height: calc(100% + 2rem);
        left: -1rem;
        pointer-events: none;
        position: absolute;
        top: -1rem;
        width: calc(100% + 1rem);
    }

    .post-card__content {
        padding: 1rem 1.5rem 1.5rem 0;
        position: relative;
    }

    .post-card__title {
        margin-bottom: .5rem;
        font-weight: 700;
        font-size: 1.4em;
        font-family: "Open Sans", sans-serif;
    }

    .post-card__details {
        display: block;
        margin-bottom: .5rem;
        font-weight: 300;
        font-size: 1em;
    }

    .post-card__description {
        font-weight: 500;
    }
`;

export const StyledProjectsCard = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    border: 3px solid ${props => props.theme.colors.primary};
    
    .tools {
        width: 100%;
        border-bottom: 3px solid ${props => props.theme.colors.primary};
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
        border: 1px solid ${props => props.theme.colors.primary};
    }

    @media ${props => props.theme.devices.tablet} {
        flex-direction: row;

        .tools {
            border-bottom: none;
            border-right: 3px solid ${props => props.theme.colors.primary};
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
        font-size: 1em;
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


