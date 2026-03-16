"use client";

import React from "react";
import ReadMoreDropdown from "../components/ReadMoreDropdown";

interface ExperienceItem {
  title: string;
  period: string; // Add this line for the date/period
  briefDescription: string;
  detailedDescription?: string;
}

const professionalExperiences: ExperienceItem[] = [
  {
    title: "U.S. House of Representatives (Rep. Jennifer McClellan), Richmond, VA",
    period: "January 2026 - Present",
    briefDescription: "Drafted commendation letters and official correspondence on behalf of the Congresswoman; assisted with casework, district events, and constituent engagement across Richmond and surrounding localities.",
    detailedDescription: "",
  },
  {
    title: "Office of Virginia State Senate Majority Leader, Richmond, VA",
    period: "January 2026 - Present",
    briefDescription: "Assisted Senator Scott Surovell in advancing four constitutional amendments alongside landmark legislation such as the Virginia Energy Innovation Bank, Virginia Solar Energy Phase-In, and expanded collective bargaining rights for public-sector workers.",
    detailedDescription: "",
  },
  {
    title: "Virginia Democratic Party, Richmond, Virginia",
    period: "July 2025 - November 2025",
    briefDescription: "Youth Organizer, Campaign Fellow - Spearheaded on-campus voter mobilization, outreach, and registration efforts at the University of Richmond leading up to and on Election Day. Campus-wide turnout increased by 18% relative to 2021.",
    detailedDescription: `Youth Organizer, 2022 TN-05 Congressional Campaign: July 2022 - November 2022\n\nIn July of 2022, as the midterm elections were beginning to get properly underway, I joined Heidi Campbell’s campaign for Tennessee’s Fifth Congressional District, at the time occupied by Representative Jim Cooper. Following the 2020 census, the Tennessee legislature redrew Tennessee’s nine congressional districts in such a way as to gain a seat for the Republican Party by splitting Nashville, which until that time had anchored Tennessee’s Fifth District, three ways. State Senator Campbell chose to enter the race to retain TN-05 after Representative Cooper elected not to seek re-election. \n\nOn this campaign, I served as a youth organizer, tasked with organizing phone banks, supporting in-person canvassing operations, and working with a team of other students to engage with voters online through social media platforms like TikTok and Instagram. In the course of this campaign, our campaign had direct engagement with over 10,000 voters and raised more than one million dollars. Nevertheless, we did not prevail on election night. What this taught me, more than anything, is that there’s only so much one can do, and at times, the best thing one can do is accept one’s lack of control in situations.`,
  },
  {
    title: "Law Firm Intern, Nashville, Tennessee",
    period: "May 2025 - August 2025",
    briefDescription: "Intern, Brewer, Krause, Brooks, Chastain, & Meisner; Ortale-Kelley Law Firm - Conducted legal research, drafted memoranda, attended depositions, assisted with document review and filing, and helped develop litigation strategies in auto negligence and fatal injury claims.",
    detailedDescription: `Intern, Brewer, Krause, Brooks, Chastain, & Meisner; Ortale-Kelley Law Firm, May 2025 - August 2025\n\nConducted legal research, drafted memoranda, attended depositions, assisted with document review and filing, and helped develop litigation strategies in auto negligence and fatal injury claims.`,
  },
  {
    title: "Heidi Campbell for Congress, Mayor, State Senate, Nashville, Tennessee",
    period: "July 2022 - November 2024",
    briefDescription: "Campaign Aide, Youth Organizing Director - Led youth voter mobilization across three campaigns, directing phonebanks, canvassing, social media outreach on TikTok and Instagram, and Election Day operations engaging more than 4,000 voters.",
    detailedDescription: `Youth Organizing Director, 2023 Nashville Mayoral Campaign, 2024 Tennessee State Senate Campaign, April 2023 - November 2024\n\nIn April of 2023, State Senate Heidi Campbell launched her campaign for Mayor of Nashville. After having served on her 2022 congressional campaign, I re-joined her campaign team and served as Youth Organizing Director, in charge of engaging, mobilizing, and turning out young voters in the Nashville Mayoral election. This included organizing digitally through targeted outreach on Instagram, TikTok, and directly through phonebanks, textbanks, and postcards. This also gave me the opportunity to understand and appreciate Nashville more. Despite the fact that I’d spent so much of my life in the city, this campaign exposed many new areas, facets, and identities often subsumed into the broader “Nashville culture.” Despite the fact that Senator Campbell was unsuccessful in her mayoral campaign, I wouldn’t exchange this experience for the world.\n\nI reprised this role in 2024 where I lent my organizing experience to Senator Campbells re-election campaign. After moving to college in Richmond, Virginia, in August of 2024, I continued this role from afar, and helped recruit and train new young leaders eager to get involved and hungry to make change in their city, state, and nation. In November of 2024, Senator Campbell was re-elected by an expanded margin compared to her 2020 election victory, and continues to serve in the Tennessee State Senate with courage, conviction, and compassion today.`,
  },
  {
    title: "Tennessee State Senate, Nashville, Tennessee",
    period: "January 2023 - May 2024",
    briefDescription: "Legislative Aide - Co-authored and passed into law the Tennessee Student Voter Act and contributed to the Tennessee Safer Communities Act and Communities Reform Act, advancing youth civic access and public safety reforms.",
    detailedDescription: `Legislative Aide, Tennessee State Senate, January 2023 - May 2024\n\nIn January of 2023, I joined State Senator Heidi Campbell’s office as a legislative aide, and began addressing the glaring issue of cratering youth electoral turnout statewide in Tennessee. Following the 2022 midterm elections, data had been released showing that just 12% of young voters had come out to vote, making Tennessee the single-worst state for youth engagement in the country. \n\nIn response to this, I worked with Senator Campbell and a team of students to draft the Tennessee Student Voter Act, a piece of legislation which, in its initial form, would have legalized the use of student IDs at polling places, extended the early voting period, and codified the right to mail-in ballots across Tennessee. It did not receive a hearing.\n\nFollowing that setback, we re-drafted the legislation to be more narrowly tailored so as to effect some sort of change. We instead allowed election commission officials to go onto high school and college campuses to register voters, mandated communications from educational leaders to students about their eligibility to register and vote upon their 18th birthday, and codified a nonpartisan election commission within the state. This legislation passed near-unanimously and was signed into law. Despite being wildly different than what we’d initially crafted, this experience, and the eventual success of our efforts, taught me invaluable lessons in the legislative process, in consensus-building, and in the merits of reform in some fashion as opposed to none at all. \n\nAdditionally, following the deadly shooting at the Covenant School in Nashville in 2023, I helped craft the Tennessee Safer Communities Initiative and Safer Schools Act, both of which were incorporated into Governor Bill Lee’s legislation passed during the special session on public safety called later that year.`,
  },
  {
    title: "United States Senate Youth Program, Washington, D.C.",
    period: "March 2024 - March 2024",
    briefDescription: "Delegate - Represented Tennessee interests in national debates surrounding education, public safety, and civic engagement by engaging with federal policymakers, including the President of the United States.",
    detailedDescription: `Member, Mayor’s Youth Council, August 2023 - May 2024\n\nThe Mayor’s Youth Council is an organization designed for high school students to engage thoughtfully with policy and devise solutions to some of Nashville’s biggest issues. I had the opportunity to serve on the Mayor’s Youth Council during my senior year of high school. Within the council, I served on the Environmental Committee, where we confronted the way in which public policy from the municipal government was failing to address climate issues plaguing much of Davidson County. \n\nTo that end, we worked directly with the Mayor’s Office to develop a revitalized public transportation and infrastructure plan that would aim to make Nashville public transit and infrastructure achieve net-zero carbon emissions by 2035. It was ambitious, expensive, and risky, but with the support of Mayor O’Connell, the plan was placed before Nashville voters in a referendum held concurrently with the 2024 elections, and passed. Thanks to the efforts of too many people to name, we helped place Nashville on a markedly better climate trajectory. While there is much more work to be done, this was an undisputed victory for people everywhere.`,
  },
];

export default function ResumePage() {
  return (
    <main className="min-h-screen">
      {/* Hero - Smaller banner with name and contact info */}
      <header className="relative border-b border-[var(--border)]">
        <div className="mx-auto max-w-4xl px-5 pt-10 pb-16 sm:px-8 sm:pt-12 sm:pb-20 md:pt-16 md:pb-24 text-left relative z-10">
          <h1 className="font-serif text-5xl font-bold tracking-tight text-[var(--navy-blue)] sm:text-6xl md:text-7xl white-dropshadow">
            <div className="flex flex-col">
              <span className="block">Carlton</span>
              <span className="block translate-x-24">Madison</span>
            </div>
          </h1>
          <div className="py-6 px-10 rounded-lg mt-5" style={{ backgroundColor: 'var(--text-background-color)' }}>
            <p className="text-lg text-[var(--off-white)] sm:text-xl text-left" style={{ textIndent: '2em' }}>
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

            {
              professionalExperiences.map((experience, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-baseline mb-1">
                    <p className="font-bold">
                      {experience.title}
                    </p>
                  <p>{experience.period}</p>
                </div>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>{experience.briefDescription}</li>
                  </ul>
                  <ReadMoreDropdown detailedDescription={experience.detailedDescription} />
                </div>
              ))
            }
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
