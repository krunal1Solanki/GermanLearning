import Link from 'next/link';

export default function Home() {
  return (
    <main className="main-flex">
      <div className="hero-box animate-fade-in-up">
        <h1 className="hero-title gradient-text">
          Master German Day by Day
        </h1>
        <p className="hero-subtitle">
          Start your journey with Day 1. Learn fundamental greetings, verbs, and phrases.
        </p>

        <div className="card-grid">
          <Link href="/day1" className="block group">
            <div className="glass-card module-card">
              <div className="card-header">
                <span className="text-sm font-semibold uppercase tracking-wider text-accent">Module 01</span>
                <span className="card-tag">Free</span>
              </div>
              <h2 className="module-title">Day 1: Basics</h2>
              <p className="module-desc">
                Greetings, "To Be" (Sein), Alphabets, and essential phrases.
              </p>

              <div className="flex gap-4">
                <span className="btn-primary w-full">Start Learning</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
