import BlobBackground from "../components/BlobBackground";

export const revalidate = 3600; // ISR: revalidate every hour

export default async function About() {
  return (
    <main className="min-h-screen">
      <header className="relative">
        <BlobBackground />
        <div className="mx-auto max-w-4xl px-5 pt-20 pb-64 sm:px-8 sm:pt-24 sm:pb-72 md:pt-32 md:pb-80 text-left relative z-10">
          <h1 className="font-serif text-5xl font-bold tracking-tight text-[var(--navy-blue)] sm:text-6xl md:text-7xl white-dropshadow">
            About Me
          </h1>
          <div className="py-6 px-10 rounded-lg mt-5 text-left" style={{ backgroundColor: 'var(--text-background-color)' }}>
            <p className="text-lg text-[var(--off-white)] sm:text-xl mb-4" style={{ textIndent: '2em' }}>
            Hi! My name is Trey Madison, and I am a current sophomore at the University of Richmond studying Political Science and Leadership Studies with minors in Economics and Law & the Liberal Arts. 
            </p>
            <p className="text-lg text-[var(--off-white)] sm:text-xl mb-4" style={{ textIndent: '2em' }}>
            I’m originally from Nashville, Tennessee, and was born on June 3rd, 2006. I am the proud product of Nashville Public Schools, and graduated from Martin Luther King Jr. Academic Magnet High School in May 2024. 
            </p>
            <p className="text-lg text-[var(--off-white)] sm:text-xl mb-4" style={{ textIndent: '2em' }}>
            I am a strong believer in the power of people. Throughout my life, I’ve been fortunate enough to be raised, taught, and shaped by amazing neighbors, teachers, family, friends, and complete strangers. I’m a believer in trying, no matter the odds, and in doing your best, no matter the situation. 
            </p>
            <p className="text-lg text-[var(--off-white)] sm:text-xl" style={{ textIndent: '2em' }}>
            Beyond the classroom, I love to read, write, run, travel, and deepen my relationships with others. I am a passionate, outspoken, full-hearted advocate for what I believe in and always give my all to whatever I set my mind to. At the same time, my life has taught me that listening and being willing to hear others is just as important, if not more so, than speaking yourself. I will always prefer consensus to conflict,
            </p>
          </div>
        </div>
      </header>
    </main>
  );
}