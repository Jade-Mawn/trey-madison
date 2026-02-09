import BlobBackground from "../components/BlobBackground";

export default function Resume() {
  return (
    <main className="min-h-screen">
      <header className="relative border-b border-[var(--border)]">
        <BlobBackground />
        <div className="mx-auto max-w-4xl px-5 py-40 sm:px-8 sm:py-56 md:py-64 text-left relative z-10">
          <h1 className="font-serif text-5xl font-bold tracking-tight text-[var(--foreground)] sm:text-6xl md:text-7xl">
            Interactive Resume
          </h1>
          <p className="mt-5 text-lg text-[var(--foreground-muted)] sm:text-xl max-w-xl mx-auto">
            This page will contain an interactive resume. You can add sections for experience, education, skills, and projects here.
          </p>
        </div>
      </header>
    </main>
  );
}