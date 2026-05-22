import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "contents");

async function getContentFile(
  lang: string,
  filename: string
): Promise<{ content: string }> {
  const filePath = path.join(contentDirectory, lang, `${filename}.mdx`);

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { content } = matter(fileContent);

    // Return the raw content for processing by remark
    return { content };
  } catch (error) {
    console.error(`Error reading ${filename} content for ${lang}:`, error);
    return { content: "Content not found" };
  }
}

export async function getAboutContent(
  lang: string
): Promise<{ content: string }> {
  return getContentFile(lang, "about");
}

/**
 * Loads blog MDX raw content. Returns null if the file is missing or unreadable.
 */
export async function getBlogPostContent(
  lang: string,
  slug: string
): Promise<{ content: string } | null> {
  const filePath = path.join(contentDirectory, lang, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { content } = matter(fileContent);
    return { content };
  } catch (error) {
    console.error(`Error reading ${slug} content for ${lang}:`, error);
    return null;
  }
}
