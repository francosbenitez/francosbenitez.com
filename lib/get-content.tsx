import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "contents");

export async function getAboutContent(
  lang: string
): Promise<{ content: string }> {
  const filePath = path.join(contentDirectory, lang, "about.mdx");

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { content } = matter(fileContent);

    // Return the raw content for processing by remark
    return { content };
  } catch (error) {
    console.error(`Error reading about content for ${lang}:`, error);
    return { content: "Content not found" };
  }
}
