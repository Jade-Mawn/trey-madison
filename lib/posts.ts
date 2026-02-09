import Parser from "rss-parser";

const RSS_FEED_URL = "https://treymadison.substack.com/feed";
const MAX_POSTS = 5;

export type Post = {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  image: string | null;
};

/** Get first image URL from enclosure or from HTML content */
function getImageUrl(item: {
  enclosure?: { url?: string; type?: string };
  content?: string;
  "content:encoded"?: string;
}): string | null {
  const enclosure = item.enclosure;
  if (enclosure?.url && /^image\//i.test(enclosure.type ?? "")) {
    return enclosure.url;
  }
  const html = item.content ?? (item as Record<string, string>)["content:encoded"] ?? "";
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1] ?? null;
}

const parser = new Parser();

export async function getLatestPosts(): Promise<Post[]> {
  try {
    const feed = await parser.parseURL(RSS_FEED_URL);
    const items = feed.items ?? [];
    return items.slice(0, MAX_POSTS).map((item) => ({
      title: item.title ?? "",
      link: item.link ?? "",
      pubDate: item.pubDate ?? "",
      contentSnippet: item.contentSnippet ?? "",
      image: getImageUrl(item),
    }));
  } catch {
    return [];
  }
}
