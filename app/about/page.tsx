import BlobBackground from "../components/BlobBackground";

export const revalidate = 3600; // ISR: revalidate every hour

export default async function About() {
  return (
    <main className="min-h-screen">
      <header className="relative border-b border-[var(--border)]">
        <BlobBackground />
        <div className="mx-auto max-w-4xl px-5 py-40 sm:px-8 sm:py-56 md:py-64 text-left relative z-10">
          <h1 className="font-serif text-5xl font-bold tracking-tight text-[var(--foreground)] sm:text-6xl md:text-7xl">
            About Me
          </h1>
          <p className="mt-5 text-lg text-[var(--foreground-muted)] sm:text-xl max-w-xl mx-auto">
            This is a more detailed about page. Here you can add more information about yourself, your experiences, skills, and anything else you'd like to share.
          </p>
        </div>
      </header>
    </main>
  );
}