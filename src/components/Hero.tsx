export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-24 text-center">
      {/* Subtle top glow — fades smoothly into the nba-bg */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-drift-slow absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-nba-pink/6 blur-[160px]" />
        <div className="animate-drift absolute top-1/4 right-0 h-[300px] w-[400px] translate-x-1/4 rounded-full bg-nba-purple/5 blur-[140px]" />
      </div>

      <div className="relative">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-nba-pink">
          AI Challenge Submission
        </p>
        <h1 className="font-display text-5xl font-bold tracking-tight md:text-7xl">
          <span className="text-white">Neo-Blast</span>{' '}
          <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-nba-pink via-nba-purple to-nba-blue bg-clip-text text-transparent">
            Ascension
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary md:text-xl">
          A marble-roll game with 10 handcrafted levels — built with AI
          for the Showcase Challenge.
        </p>
        <div className="mt-10 flex items-center justify-center gap-3">
          <span className="inline-block h-1 w-12 rounded-full bg-nba-pink opacity-60" />
          <span className="inline-block h-1 w-6 rounded-full bg-nba-purple opacity-30" />
        </div>
      </div>
    </section>
  )
}
