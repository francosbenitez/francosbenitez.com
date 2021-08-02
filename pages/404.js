import Link from "next/link"
import { StyledPost } from "../components/Blog/styles"
import Head from "next/head"

export default function Custom404() {
    return (
        <>
            <Head>
                <title>Page not found</title>
                <meta name="description" content="Hey there! This page doesn't exist." />
            </Head>
            <StyledPost>
                <h1>Hey there! This page doesn&apos;t exist.</h1>
                <hr />
                <div className="back-to-home">
                    <Link href="/">
                    <a>← Back to home</a>
                    </Link>
                </div>
            </StyledPost>
        </>
    )
}