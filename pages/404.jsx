import Link from "next/link"
import styled from "styled-components"

const Styled404 = styled.section`
    .container {
        max-width: 36rem;
        padding: 0 1rem;
        padding: 6rem auto 9rem;
    }
    

    h1 {
        font-size: 3em;
        margin: 1rem 0 1rem 0;
        color: ${props => props.theme.colors.text};
        font-weight: 900;
    }
`

export default function Custom404() {
    return (
        <Styled404>
        <div className="container">
            
            <h1>Hey there! This page doesn&apos;t exist.</h1>
            <hr />
            <div className="backToHome">
                <Link href="/">
                <a>← Back to home</a>
                </Link>
            </div>
            
        </div>
        </Styled404>
    )
    
  }