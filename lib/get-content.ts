import fs from "fs"
import path from "path"
import matter from "gray-matter"

export type BlogPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

const contentDirectory = path.join(process.cwd(), "contents")

export async function getAboutContent(lang: string): Promise<{ content: string }> {
  const filePath = path.join(contentDirectory, lang, "about.mdx")

  try {
    const fileContent = fs.readFileSync(filePath, "utf8")
    const { content } = matter(fileContent)

    // Return the raw content for processing by remark
    return { content }
  } catch (error) {
    console.error(`Error reading about content for ${lang}:`, error)
    return { content: "Content not found" }
  }
}

export async function getBlogPosts(lang: string): Promise<BlogPost[]> {
  const blogDirectory = path.join(contentDirectory, lang, "blog")

  try {
    const fileNames = fs.readdirSync(blogDirectory)

    const posts = fileNames.map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "")
      const filePath = path.join(blogDirectory, fileName)
      const fileContent = fs.readFileSync(filePath, "utf8")
      const { data, content } = matter(fileContent)

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        content: "", // We don't need the content for the list
      }
    })

    // Sort posts by date (newest first)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error(`Error reading blog posts for ${lang}:`, error)
    return []
  }
}

export async function getBlogPostBySlug(lang: string, slug: string): Promise<BlogPost | null> {
  const filePath = path.join(contentDirectory, lang, "blog", `${slug}.mdx`)

  try {
    const fileContent = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContent)

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      content,
    }
  } catch (error) {
    console.error(`Error reading blog post ${slug} for ${lang}:`, error)
    return null
  }
}
