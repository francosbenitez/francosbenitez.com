import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    ENVIRONMENT: process.env.ENVIRONMENT,
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: ["remark-gfm"], // https://nextjs.org/docs/app/guides/mdx#using-plugins-with-turbopack
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
