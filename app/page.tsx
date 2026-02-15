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
        <div className="mx-auto max-w-4xl px-5 pt-20 pb-64 sm:px-8 sm:pt-24 sm:pb-72 md:pt-32 md:pb-80 text-left relative z-10">
          <h1 className="font-serif text-5xl font-bold tracking-tight text-[var(--navy-blue)] sm:text-6xl md:text-7xl white-dropshadow">
            <div className="flex flex-col">
              <span className="block">Trey</span>
              <span className="block translate-x-24">Madison</span>
            </div>
          </h1>
          <div className="py-2 px-4 rounded-lg mt-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
            <p className="text-lg text-[var(--navy-blue)] sm:text-xl max-w-3xl mx-auto">
              I'm a current undergraduate student at the University of Richmond studying Political Science and Leadership Studies, with a minor in Law & the Liberal Arts and Economics. I'm someone who feels strongly and leads passionately, and who gives 110% to anything I commit to.
            </p>
          </div>
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
