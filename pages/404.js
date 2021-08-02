import Link from "next/link"
import styled from "styled-components"

const Styled404 = styled.section`
    min-height: calc(100vh - 6.5rem); 
    padding-top: 7.5rem;
    padding-bottom: 4.5rem;
    

`

export default function Custom404() {
    return (
        <Styled404>
            <h1>Hey there! This page doesn&apos;t exist.</h1>
            <hr />
            <div className="backToHome">
                <Link href="/">
                <a>← Back to home</a>
                </Link>
            </div>
        </Styled404>
    )
}