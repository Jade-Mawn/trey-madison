"use client";

import React, { useState } from 'react';
import { Navbar } from '@/app/components/Navbar';

export default function Resume() {
  return (
    <div className="min-h-screen bg-white text-black font-sans py-20 px-6 md:px-0">
      <Navbar />

      <div className="max-w-4xl mx-auto border-t-8 border-black pt-16">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
              Jade Mawn
            </h1>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
              UR 0344, 410 Westhampton Way, Richmond, VA 23173
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end font-bold text-sm uppercase tracking-widest">
            <a href="tel:4348721225" className="hover:text-[var(--stripe)] transition-colors">434-872-1225</a>
            <a href="mailto:jade.mawn@richmond.edu" className="hover:text-[var(--stripe)] transition-colors">jade.mawn@richmond.edu</a>
            <a href="https://jademawn.com" className="hover:text-[var(--stripe)] transition-colors">jademawn.com</a>
          </div>
        </header>

        {/* Education Section - Always visible summary, expandable detail */}
        <section className="mb-24">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[var(--accent)] mb-8 border-b-2 border-zinc-100 pb-2">
            Education
          </h2>
          <ExperienceItem
            company="University of Richmond"
            role="Bachelor of Science, Computer Science and Mathematics"
            period="2022 — Present"
            bullets={[
              "GPA 3.88, Minor in French Language & Culture, Dean’s List, Phi Eta Sigma"
            ]}
            moreDetail={(
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="aspect-video bg-zinc-100 border-2 border-dashed border-zinc-200 flex items-center justify-center group overflow-hidden relative">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-30">Campus / Research Photo</span>
                </div>
                <div className="aspect-video bg-zinc-100 border-2 border-dashed border-zinc-200 flex items-center justify-center group overflow-hidden relative">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-30">Achievement / Award</span>
                </div>
              </div>
            )}
          />
        </section>

        {/* Experience Section - Always visible summary, expandable detail */}
        <section className="mb-24">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[var(--stripe)] mb-12 border-b-2 border-zinc-100 pb-2">
            Work Experience
          </h2>
          <div className="space-y-16">
            <ExperienceItem 
              company="Blue Atlas"
              role="Server, Host, Barback"
              period="Sept 2025 — Present"
              bullets={[
                "Assist in Front-of-House operations as barback, food runner, and busser."
              ]}
              moreDetail="At Blue Atlas, I provide critical support to the Front-of-House team in a fast-paced environment. My role involves high-speed coordination and ensuring that service standards remain consistent during peak hours."
            />
            <ExperienceItem 
              company="Passport Café, University of Richmond"
              role="Student Café Manager"
              period="Sept 2023 — Present"
              bullets={[
                "Delivered high-quality customer service in a fast-paced café, fulfilling an average of 50 custom food and drink orders per hour with accuracy and professionalism.",
                "Mentor for new student staff to ensure smooth operations and consistent service standards, promoting a welcoming and efficient environment.",
                "Developed new menu items based on customer preferences and seasonal availability.",
                "Oversaw opening and closing procedures, including setup, breakdown, cleaning, and restocking of service areas."
              ]}
              moreDetail="As Student Manager, I lead a team of student workers to maintain operational efficiency. I've focused on enhancing customer experience through proactive service and menu innovation while managing the full lifecycle of daily café operations."
            />
            <ExperienceItem 
              company="Bar Italia Ristorante / Third Phase Coffee"
              role="Special Projects Assistant & Front-of-House Support"
              period="May 2025 — Sept 2025"
              bullets={[
                "Supported Front of House by food-running, waiting tables and bartending as needed.",
                "Identified and resolved technical issues in Toast POS, implementing a new device configuration to improve overall usability.",
                "Collaborated with the owner in establishment of Third Phase, an in-house specialty coffee shop, contributing to concept development, setup, and operations."
              ]}
              moreDetail="This role was a blend of hospitality and operational consulting. I successfully troubleshot POS systems to streamline orders and worked directly with ownership to launch 'Third Phase', bridging the gap between specialty coffee and high-end restaurant service."
            />
            <ExperienceItem 
              company="Dept. of Computer Science, Univ. of Richmond"
              role="Lab Assistant and Tutor"
              period="Sept 2024 — Dec 2024"
              bullets={[
                "Led collaborative weekly group tutoring sessions for students in Data Structures.",
                "Developed innovative teaching methods to improve student comprehension of Java implementations.",
                "Assisted in Software Systems labs; aided in use of virtual machines, git/github, and C++."
              ]}
              moreDetail="As a tutor, I focused on creating visual mental models for complex abstractions. For Data Structures, I used physical analogies to explain pointers and heap memory."
            />
            <ExperienceItem 
              company="Dept. of Mathematics, Univ. of Richmond"
              role="Undergraduate Researcher"
              period="May 2024 — July 2024"
              bullets={[
                "Researched SL_n Web Combinatorics under supervision of Dr. Heather Russell.",
                "Proved three new theorems and refuted longstanding conjectures.",
                "Designed necessary code to support discoveries."
              ]}
              moreDetail="My research bridged abstract algebra and combinatorics. I developed a suite of Python tools to automate the verification of SL_n web properties."
            />
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-24">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-12 border-b-2 border-zinc-100 pb-2">
            Selected Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProjectCard 
              name="Coffee.learn"
              role="Founder & Lead Developer"
              description="A digital platform dedicated to coffee education, bridging the gap between technical extraction and consumer appreciation."
              tags={["Next.js", "React", "Education", "UI/UX"]}
              moreDetail="Coffee.learn is an ongoing project designed to democratize specialty coffee knowledge. It features interactive brewing guides, TDS calculation tools, and a curated library of regional flavor profiles."
            />
            <ProjectCard 
              name="Chesapeake Times"
              role="Website Development"
              description="Developed a Next.js news site for student writers, leveraging Sanity.io for CMS and Tailwind/Shadcn for UI."
              tags={["Next.js", "Sanity.io", "Tailwind", "Shadcn"]}
              moreDetail="Built a custom content pipeline that allows writers to draft in a structured environment while automatically handling image optimization and SEO metadata."
            />
            <ProjectCard 
              name="SL_4 Webs"
              role="Bridges Conference Presentation"
              description="Presented visual art on SL_4 web constructions to 400+ viewers, showcasing complex mathematical research."
              tags={["Research", "Visual Art", "Combinatorics"]}
              moreDetail="Used LaTeX and vector graphics software to create precise mathematical diagrams that illustrated the proven SL_4 theorems for a broad academic audience."
            />
          </div>
        </section>

        {/* Skills & Interests */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 pb-32">
          <div>
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[var(--accent)] mb-8 border-b-2 border-zinc-100 pb-2">
              Technical Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {["Python", "Java", "C++", "Next.js", "Html", "Css", "LaTeX", "Prolog", "Assembly"].map(skill => (
                <span key={skill} className="px-3 py-1 bg-zinc-100 text-[10px] font-black uppercase tracking-widest hover:bg-stripe hover:text-white transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[var(--accent)] mb-8 border-b-2 border-zinc-100 pb-2">
              Interests
            </h2>
            <p className="text-sm font-bold leading-relaxed">
              French (C1) • Spanish (B1) • Piano • Cooking & Baking • Graphic Design • Printmaking • Running • Travel
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

function ExpandableContent({ summary, children }: { summary: React.ReactNode; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="cursor-pointer group"
    >
      {summary}
      <div className={`overflow-hidden transition-all duration-1000 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100 mt-8' : 'max-h-0 opacity-0'}`}>
        {children}
        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-300 mt-4 italic">Click to collapse</p>
      </div>
      {!isOpen && (
          <p className="text-[10px] font-black uppercase tracking-widest text-[var(--accent)] mt-4 animate-pulse">Click for more detail +</p>
      )}
    </div>
  );
}

function ExperienceItem({ company, role, period, bullets, moreDetail }: { company: string, role: string, period: string, bullets: string[], moreDetail?: React.ReactNode }) {
  const summary = (
    <div className="group border-l-2 border-zinc-100 pl-8 hover:border-[var(--stripe)] transition-colors duration-500 cursor-pointer">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-4 gap-2">
        <div>
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight group-hover:text-[var(--stripe)] transition-colors">
            {company}
          </h3>
          <p className="text-sm font-black uppercase tracking-[0.1em] text-zinc-500">{role}</p>
        </div>
        <span className="text-xs font-bold opacity-40 uppercase tracking-widest whitespace-nowrap">{period}</span>
      </div>
      <ul className="space-y-2 mb-6">
        {bullets.map((bullet, i) => (
          <li key={i} className="text-base md:text-lg font-medium text-zinc-700 leading-snug">
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <ExpandableContent summary={summary}>
      {moreDetail && (
        <div className="bg-zinc-50 p-6 border-l-4 border-stripe mb-8">
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--stripe)] mb-2">Deep Dive:</p>
          <p className="text-base text-zinc-600 leading-relaxed italic">{moreDetail}</p>
        </div>
      )}
      <div className="aspect-video w-full bg-zinc-100 border-2 border-dashed border-zinc-200 flex items-center justify-center group overflow-hidden relative">
        <span className="text-[10px] font-bold uppercase tracking-widest opacity-30">Role Artifact / Documentation</span>
      </div>
    </ExpandableContent>
  );
}

function ProjectCard({ name, role, description, tags, moreDetail }: { name: string, role: string, description: string, tags: string[], moreDetail?: React.ReactNode }) {
  const summary = (
    <div className="bg-zinc-50 p-8 border border-zinc-100 hover:border-black transition-all group flex flex-col justify-between cursor-pointer">
      <div>
        <div className="flex justify-between items-baseline mb-2">
          <h3 className="text-2xl font-black uppercase tracking-tight group-hover:text-[var(--stripe)] transition-colors">{name}</h3>
          <p className="text-[10px] font-black uppercase tracking-widest text-[var(--accent)]">{role}</p>
        </div>
        <p className="text-base font-medium text-zinc-700 leading-relaxed mb-6">{description}</p>
      </div>
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2 justify-end">
          {tags.map(tag => (
            <span key={tag} className="text-[9px] font-bold uppercase tracking-tighter opacity-40">#{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <ExpandableContent summary={summary}>
      {moreDetail && (
        <div className="mb-6 py-6 border-t border-zinc-200">
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--accent)] mb-2">Deep Dive:</p>
          <p className="text-sm text-zinc-500 leading-relaxed">{moreDetail}</p>
        </div>
      )}
      <div className="aspect-video w-full bg-white border border-zinc-200 flex items-center justify-center mb-6">
        <span className="text-[10px] font-bold uppercase tracking-widest opacity-20">Project Screenshot</span>
      </div>
    </ExpandableContent>
  );
}
