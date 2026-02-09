import Link from "next/link";
import { getLatestPosts } from "@/lib/posts";

export const revalidate = 3600; // ISR: revalidate every hour

function formatDate(isoDate: string): string {
  try {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return isoDate;
  }
}

export default async function Home() {
  const posts = await getLatestPosts();

  return (
    <main className="min-h-screen flex flex-col items-center px-5 py-12 sm:px-8 sm:py-16 max-w-2xl mx-auto">
      <header className="text-center mb-14 sm:mb-16">
        <h1 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[var(--foreground)]">
          Trey Madison
        </h1>
        <p className="mt-4 text-[var(--foreground-muted)] text-base sm:text-lg max-w-md mx-auto">
          A clean Next.js app ready to deploy on Cloudflare.
        </p>
      </header>

      <section className="w-full" aria-label="Latest articles from Substack">
        <h2 className="font-serif text-xl sm:text-2xl font-normal text-[var(--foreground)] mb-8">
          Latest writing
        </h2>
        {posts.length === 0 ? (
          <p className="text-[var(--foreground-muted)] text-sm">No posts available.</p>
        ) : (
          <ul className="space-y-10 list-none p-0 m-0">
            {/* First article: featured card */}
            <li key={posts[0].link}>
              <article className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] overflow-hidden shadow-sm transition-shadow hover:shadow-md">
                {posts[0].image ? (
                  <Link
                    href={posts[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden aspect-video bg-[var(--border)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={posts[0].image}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                      loading="eager"
                      sizes="(max-width: 672px) 100vw, 672px"
                    />
                  </Link>
                ) : null}
                <div className="p-6 sm:p-7">
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-snug">
                    <Link
                      href={posts[0].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--foreground)] hover:text-[var(--accent)] focus:text-[var(--accent)] focus:outline-none transition-colors"
                    >
                      {posts[0].title}
                    </Link>
                  </h3>
                  <time
                    dateTime={posts[0].pubDate}
                    className="block mt-2 text-sm text-[var(--foreground-muted)]"
                  >
                    {formatDate(posts[0].pubDate)}
                  </time>
                  {posts[0].contentSnippet ? (
                    <p className="mt-4 text-[var(--foreground-muted)] text-[15px] leading-relaxed line-clamp-3">
                      {posts[0].contentSnippet}
                    </p>
                  ) : null}
                </div>
              </article>
            </li>
            {/* Rest: compact list items */}
            {posts.slice(1).map((post) => (
              <li key={post.link}>
                <article className="flex gap-4 sm:gap-5 py-5 border-b border-[var(--border)] last:border-0 last:pb-0">
                  {post.image ? (
                    <Link
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-[var(--border)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.image}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                        sizes="96px"
                      />
                    </Link>
                  ) : null}
                  <div className="min-w-0 flex-1 pt-0.5">
                    <h3 className="font-serif text-lg font-normal leading-snug">
                      <Link
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--foreground)] hover:text-[var(--accent)] focus:text-[var(--accent)] focus:outline-none transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <time
                      dateTime={post.pubDate}
                      className="block mt-1 text-xs text-[var(--foreground-muted)]"
                    >
                      {formatDate(post.pubDate)}
                    </time>
                    {post.contentSnippet ? (
                      <p className="mt-2 text-[var(--foreground-muted)] text-sm leading-relaxed line-clamp-2">
                        {post.contentSnippet}
                      </p>
                    ) : null}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}
        {posts.length > 0 && (
          <p className="mt-10 text-center">
            <Link
              href="https://treymadison.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors focus:outline-none focus-visible:underline"
            >
              See more on Substack →
            </Link>
          </p>
        )}
      </section>
    </main>
  );
}
