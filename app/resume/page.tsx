import BlobBackground from "../components/BlobBackground";

export default function ResumePage() {
  return (
    <main className="min-h-screen">
      {/* Hero - Smaller banner with name and contact info */}
      <header className="relative border-b border-[var(--border)]">
        <BlobBackground />
        <div className="mx-auto max-w-4xl px-5 pt-10 pb-16 sm:px-8 sm:pt-12 sm:pb-20 md:pt-16 md:pb-24 text-left relative z-10">
          <h1 className="font-serif text-5xl font-bold tracking-tight text-[var(--navy-blue)] sm:text-6xl md:text-7xl white-dropshadow">
            <div className="flex flex-col">
              <span className="block">Carlton</span>
              <span className="block translate-x-24">Madison</span>
            </div>
          </h1>
          <div className="py-2 px-4 rounded-lg mt-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
            <p className="text-lg text-[var(--navy-blue)] sm:text-xl text-center">
              1824 Woodland Pointe Dr. • 615-917-7835 • trey.madison2024@gmail.com • <a href="https://www.linkedin.com/in/trey-madison-116403328/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-color)] hover:underline">LinkedIn</a>
            </p>
          </div>
        </div>
      </header>

      {/* Resume Content Section */}
      <section id="resume-content" className="w-full border-t border-[var(--border)] bg-[var(--surface)] pt-14 pb-20 sm:pt-16 sm:pb-28" aria-label="Carlton Madison's Resume">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">

          {/* Education Section */}
          <section className="mb-8">
            <h2 className="font-serif text-xl font-bold border-b-2 border-gray-300 pb-1 mb-4">
              EDUCATION
            </h2>
            <div className="flex justify-between items-baseline mb-1">
              <p className="font-bold">University of Richmond, Richmond, Virginia</p>
              <p>August 2024 - Present</p>
            </div>
            <p>Bachelor of Arts (BA), Political Science, Economics, Leadership Studies</p>
            <p>Minor: Law & the Liberal Arts</p>
            <p>4.00 GPA</p>
          </section>

          {/* Professional Experience Section */}
          <section className="mb-8">
            <h2 className="font-serif text-xl font-bold border-b-2 border-gray-300 pb-1 mb-4">
              PROFESSIONAL EXPERIENCE
            </h2>

            <div className="mb-6">
              <div className="flex justify-between items-baseline mb-1">
                <p className="font-bold">U.S. House of Representatives (Rep. Jennifer McClellan), Richmond, VA</p>
                <p>January 2026 - Present</p>
              </div>
              <p className="italic mb-2">District Office Intern</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Drafted commendation letters and official correspondence on behalf of the Congresswoman; assisted with casework, district events, and constituent engagement across Richmond and surrounding localities.</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-baseline mb-1">
                <p className="font-bold">Office of Virginia State Senate Majority Leader, Richmond, VA</p>
                <p>January 2026 - Present</p>
              </div>
              <p className="italic mb-2">Legislative Intern</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Assisted Senator Scott Surovell in advancing four constitutional amendments alongside landmark legislation such as the Virginia Energy Innovation Bank, Virginia Solar Energy Phase-In, and expanded collective bargaining rights for public-sector workers.</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-baseline mb-1">
                <p className="font-bold">Virginia Democratic Party, Richmond, Virginia</p>
                <p>July 2025 - November 2025</p>
              </div>
              <p className="italic mb-2">Youth Organizer, Campaign Fellow</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Spearheaded on-campus voter mobilization, outreach, and registration efforts at the University of Richmond leading up to and on Election Day. Campus-wide turnout increased by 18% relative to 2021.</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-baseline mb-1">
                <p className="font-bold">Law Firm Intern, Nashville, Tennessee</p>
                <p>May 2025 - August 2025</p>
              </div>
              <p className="italic mb-2">Ortale-Kelley; Brewer, Krause, Brooks, Chastain, & Meisner</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Conducted legal research, drafted memoranda, attended depositions, assisted with document review and filing, and helped develop litigation strategies in auto negligence and fatal injury claims.</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-baseline mb-1">
                <p className="font-bold">Heidi Campbell for Congress, Mayor, State Senate, Nashville, Tennessee</p>
                <p>July 2022 - November 2024</p>
              </div>
              <p className="italic mb-2">Campaign Aide, Youth Organizing Director</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Led youth voter mobilization across three campaigns, directing phonebanks, canvassing, social media outreach on TikTok and Instagram, and Election Day operations engaging more than 4,000 voters.</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-baseline mb-1">
                <p className="font-bold">Tennessee State Senate, Nashville, Tennessee</p>
                <p>January 2023 - May 2024</p>
              </div>
              <p className="italic mb-2">Legislative Aide</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Co-authored and passed into law the Tennessee Student Voter Act and contributed to the Tennessee Safer Communities Act and Communities Reform Act, advancing youth civic access and public safety reforms.</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-baseline mb-1">
                <p className="font-bold">United States Senate Youth Program, Washington, D.C.</p>
                <p>March 2024 - March 2024</p>
              </div>
              <p className="italic mb-2">Delegate</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Represented Tennessee interests in national debates surrounding education, public safety, and civic engagement by engaging with federal policymakers, including the President of the United States.</li>
              </ul>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="font-serif text-xl font-bold border-b-2 border-gray-300 pb-1 mb-4">
              SKILLS
            </h2>
            <p>Political Organizing, Policy Research, Public Speaking & Presentation, Strategic Communications, Digital Advocacy & Outreach, Legal Research & Writing</p>
          </section>
        </div>
      </section>
    </main>
  );
}