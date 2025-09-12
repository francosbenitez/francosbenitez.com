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

export async function getQuotesContent(
  lang: string
): Promise<{ content: string }> {
  const filePath = path.join(contentDirectory, lang, "quotes.mdx");

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { content } = matter(fileContent);

    // Return the raw content for processing by remark
    return { content };
  } catch (error) {
    console.error(`Error reading quotes content for ${lang}:`, error);
    return { content: "Content not found" };
  }
}

export async function getJourneyContent(
  lang: string
): Promise<{ content: string }> {
  const filePath = path.join(contentDirectory, lang, "journey.mdx");

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { content } = matter(fileContent);

    // Return the raw content for processing by remark
    return { content };
  } catch (error) {
    console.error(`Error reading journey content for ${lang}:`, error);
    return { content: "Content not found" };
  }
}
