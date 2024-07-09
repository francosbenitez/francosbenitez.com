import React from "react";
import Link from "next/link";
import Head from "next/head";

const Error404 = () => {
  return (
    <>
      <Head>
        <title>Page not found</title>
        <meta
          name="description"
          content="Hey there! This page doesn't exist."
        />
      </Head>
      <div className="post">
        <h1>Hey there! This page doesn&apos;t exist.</h1>
        <p>
          But don&apos;t worry, you can go to home and see the rest of the
          website!
        </p>
        <hr />
        <div className="back-to-home">
          <Link href="/" legacyBehavior>
            <a>← Go to home</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error404;
