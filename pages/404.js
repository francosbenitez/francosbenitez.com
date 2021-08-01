import Link from "next/link"
import styled from "styled-components"

const Container = styled.div`
    /*max-width: 36rem;
    padding: 0 1rem;
    margin: 3rem auto 6rem;

    .backToHome {
        margin: 3rem 0 0;
    }*/
`

export default function Custom404() {
    return (
    <>
    <Container>
    <div>
        <h1>Hey there! This page doesn&apos;t exist.</h1>
        <hr />
        <div className="backToHome">
            <Link href="/">
            <a>← Back to home</a>
            </Link>
        </div>
    </div>
    </Container>
    </>
    )
    
  }