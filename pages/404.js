import Link from "next/link"
import { Posts } from "../styles/Common"
import Head from "next/head"

export default function Custom404() {
    return (
        <>
            <Head>
                <title>Page not found</title>
                <meta name="description" content="Hey there! This page doesn't exist." />
            </Head>
            <Posts>
                <h1>Hey there! This page doesn&apos;t exist.</h1>
                <p>But you don&apos;t worry, you can go to home and see the remaining of the website!</p>
                <hr />
                <div className="back-to-home">
                    <Link href="/">
                    <a>← Back to home</a>
                    </Link>
                </div>
            </Posts>
        </>
    )
}