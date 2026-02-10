import BlobBackground from "../components/BlobBackground";
import { client } from "../../sanity/lib/client";
import { PortableText } from "@portabletext/react";

interface Blurb {
  _id: string;
  company: string;
  location: string;
  position: string;
  timePeriod: { startDate: string; endDate?: string };
  description?: string[];
  deepDescription?: any[];
}

interface ResumeData {
  title: string;
  blurbs: Blurb[];
}

const query = `*[_type == "resume"][0]{
  title,
  blurbs[]->{
    _id,
    company,
    location,
    position,
    timePeriod,
    description,
    deepDescription
  }
}`;

export default async function Resume() {
  const resumeData: ResumeData = await client.fetch(query);

  return (
    <main className="min-h-screen">
      <header className="relative border-b border-[var(--border)]">
        <BlobBackground />
        <div className="mx-auto max-w-4xl px-5 py-40 sm:px-8 sm:py-56 md:py-64 text-left relative z-10">
          <h1 className="font-serif text-5xl font-bold tracking-tight text-[var(--foreground)] sm:text-6xl md:text-7xl">
            {resumeData.title}
          </h1>
          <p className="mt-5 text-lg text-[var(--foreground-muted)] sm:text-xl max-w-xl mx-auto">
            This page contains an interactive resume built with Sanity.io.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-16">
        {resumeData.blurbs.map((blurb) => (
          <div key={blurb._id} className="mb-10">
            <h2 className="text-2xl font-bold text-[var(--foreground)]">{blurb.company}</h2>
            <p className="text-lg text-[var(--foreground-muted)]">{blurb.position} - {blurb.location}</p>
            <p className="text-md text-[var(--foreground-muted)]">{blurb.timePeriod.startDate} - {blurb.timePeriod.endDate || "Present"}</p>
            {blurb.description && blurb.description.length > 0 && (
              <ul className="list-disc list-inside mt-2 text-[var(--foreground-muted)]">
                {blurb.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
            {blurb.deepDescription && blurb.deepDescription.length > 0 && (
              <div className="mt-4 text-[var(--foreground-muted)]">
                <PortableText value={blurb.deepDescription} />
              </div>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}