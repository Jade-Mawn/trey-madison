import { getLatestPosts } from "@/lib/posts";
import { WritingCarousel } from "./components/WritingCarousel";
import BlobBackground from "./components/BlobBackground";

export const revalidate = 3600; // ISR: revalidate every hour

export default async function Home() {
  const posts = await getLatestPosts();

  return (
    <main className="min-h-screen">
      {/* Hero — more vertical space so writing is below the fold */}
      <header className="relative border-b border-[var(--border)]">
        <BlobBackground />
        <div className="mx-auto max-w-4xl px-5 py-40 sm:px-8 sm:py-56 md:py-64 text-left relative z-10">
          <h1 className="font-serif text-5xl font-bold tracking-tight text-[var(--foreground)] sm:text-6xl md:text-7xl">
            <div className="flex flex-col">
              <span className="block">Trey</span>
              <span className="block translate-x-24">Madison</span>
            </div>
          </h1>
          <p className="mt-5 text-lg text-[var(--foreground-muted)] sm:text-xl max-w-xl mx-auto">
            I'm a current undergraduate student at the University of Richmond studying Political Science and Leadership Studies, with a minor in Law & the Liberal Arts and Economics. I'm someone who feels strongly and leads passionately, and who gives 110% to anything I commit to.
          </p>
        </div>
      </header>

      {/* Writing — full-width carousel, only visible after scroll */}
      <section id="writing" className="w-full border-t border-[var(--border)] bg-[var(--surface)] pt-14 pb-20 sm:pt-16 sm:pb-28" aria-label="Latest articles from Substack">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 mb-8">
          <h2 className="font-serif text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
            Latest writing
          </h2>
        </div>
        <WritingCarousel posts={posts} />
      </section>
    </main>
  );
}
