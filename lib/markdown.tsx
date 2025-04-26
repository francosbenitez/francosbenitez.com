import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeStringify from "rehype-stringify"
import remarkGfm from "remark-gfm"
// import rehypeRaw from "rehype-raw"

export async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    // NOTE: The commented code
    // below is for rendering `img`, `Image`, etc., in .mdx files
    // .use(remarkRehype, { allowDangerousHtml: true })
    // .use(rehypeRaw)
    .use(rehypeStringify)
    .process(markdown)

  return result.toString()
}
