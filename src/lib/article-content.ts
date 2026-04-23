import { readFile } from "node:fs/promises";
import path from "node:path";

const ARTICLES_DIR = path.join(process.cwd(), "src/content/articles");

const ENTITY_MAP: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&nbsp;": " ",
};

function decodeEntities(input: string) {
  return input.replace(/&(amp|lt|gt|quot|#39|nbsp);/g, (entity) => ENTITY_MAP[entity] ?? entity);
}

function addExternalLinkAttributes(html: string) {
  return html.replace(/<a\s+([^>]*?)href="(https?:\/\/[^"]+)"([^>]*)>/gi, (_match, before, href, after) => {
    const attrs = `${before}href="${href}"${after}`;
    const withTarget = /target=/i.test(attrs) ? attrs : `${attrs} target="_blank"`;
    const withRel = /rel=/i.test(withTarget) ? withTarget : `${withTarget} rel="noopener noreferrer"`;
    const withClass = /class=/i.test(withRel)
      ? withRel.replace(/class="([^"]*)"/i, 'class="$1 article-body-link"')
      : `${withRel} class="article-body-link"`;
    return `<a ${withClass}>`;
  });
}

function stripHtmlForExcerpt(html: string) {
  const text = decodeEntities(html.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
  return text;
}

export async function getArticleHtml(slug: string) {
  const filePath = path.join(ARTICLES_DIR, `${slug}.mdx`);
  const raw = await readFile(filePath, "utf8");
  return addExternalLinkAttributes(raw);
}

export async function getArticleExcerpt(slug: string, maxLength = 160) {
  const filePath = path.join(ARTICLES_DIR, `${slug}.mdx`);
  const raw = await readFile(filePath, "utf8");
  const text = stripHtmlForExcerpt(raw);
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}…`;
}
