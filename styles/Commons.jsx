import styled from "styled-components"

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 1rem 0 1rem; 
    justify-content: center;
    width: 90%;
    position: relative;
    max-width: 1152px;
    margin: 0 auto;
    min-height: calc(100vh - 6.5rem); 
    padding-top: 7.5rem;
    padding-bottom: 4.5rem;

    h1 {
        font-size: 4.2rem;
        margin: 1rem 0 1rem 0;
        color: ${props => props.theme.colors.secondary};
        line-height: 1;
        font-weight: 700;
    }

    span {
        color: ${props => props.theme.colors.primary};
        line-height: 1;
    }

    p {
        font-size: 1.4rem;
    }

    .see-all,
    .see-all:hover {
        flex: 1; 
        float: right; 
        white-space: nowrap;
        margin-top: 1rem;
        /* display: inline-block; */
        border-bottom: none; 
        font-size: 1.1rem;
    }

    .back-to-home,
    .back-to-home:hover {
        flex: 1; 
        text-align: left; 
        white-space: nowrap;
        margin-top: 1rem;
        display: inline-block;
        border-bottom: none; 
        font-size: 1.1rem;
    }

    .see-all span,
    .back-to-home span {
        color: ${props => props.theme.colors.link};
    }

    .see-all span:hover,
    .back-to-home span:hover {
        border-bottom: 1.5px ${props => props.theme.colors.link} dotted;
        color: ${props => props.theme.colors.link};
    }

    .blog-container:before {
        background-image: radial-gradient(#5b8efc4b 15%,transparent 0),radial-gradient(#5b8efc4b 15%,transparent 0);
        background-size: .75rem .75rem;
        background-position: 0 0,.375rem .375rem;
        -webkit-clip-path: polygon(100% 15%,50% 25%,45% 35%,100% 45%,100% 100%,50% 100%,0 70%,0 100%,100% 100%);
        clip-path: polygon(0 25%,30% 35%,30% 55%,0 65%,0 75%,30% 65%,40% 75%,30% 200%,0 100%,90% 100%,100% 90%,100% 100%,0 100%);
        content: "";
        height: 100%;
        left: 50%;
        position: absolute;
        top: 0;
        transform: translateX(-50%);
        width: 100%;
        z-index: -1;
    }

    .projects-container:before {
        background-image: radial-gradient(#5b8efc4b 15%,transparent 0),radial-gradient(#5b8efc4b 15%,transparent 0);
        background-size: .75rem .75rem;
        background-position: 0 0,.375rem .375rem;
        -webkit-clip-path: polygon(50% 0, 100% 0%, 100% 100%, 50% 100%, 20% 50%);
        clip-path: polygon(50% 0, 100% 0%, 100% 100%, 50% 100%, 20% 50%);
        content: "";
        height: 100%;
        left: 50%;
        position: absolute;
        top: 0;
        transform: translateX(-50%);
        width: 100%;
        z-index: -1;
    }
`

export const Posts = styled.div`
    max-width: 960px;
    padding: 0 1.5rem;
    margin: 6rem auto 9rem;
    min-height: calc(100vh - 6.5rem); 

    h1 {
        font-size: 3rem;
        margin: 1rem 0 1rem 0;
        /* font-weight: 900; */
        line-height: 1.25;
        background: ${props => props.theme.colors.primary};
        background: linear-gradient(90deg,${props => props.theme.colors.primary},${props => props.theme.colors.text} 70%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    h2 {
        font-size: 1.1rem;
        margin: 1rem 0 1rem 0;
        font-weight: 400;
        //font-family: "Open Sans", sans-serif;
    }

    p {
        margin: 1rem 0 1rem 0;
    }

    .article-date {
        font-weight: 400;
        color: ${props => props.theme.colors.date};
        font-family: "Open Sans", sans-serif;
    }

    hr {
        margin: 1rem 0 1rem 0;
    }
    
    .back-and-go {
        display: inline-block;
        width: 100%;
        a {
            color: ${props => props.theme.colors.link};
        }
    }

    .go-to-all {
        float: right;
        font-size: 1.1rem;
    }

    .back-to-home {
        float: left;
        font-size: 1.1rem;
    }
`