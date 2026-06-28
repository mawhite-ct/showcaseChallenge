export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-20 text-center">
      {/* Subtle radial glow behind the title */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[600px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative">
        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          Ember Engine{' '}
          <span className="text-accent">&</span>{' '}
          <br className="hidden md:block" />
          Neo-Blast Ascension
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary md:text-xl">
          A 3D game engine and a marble-roll game — both built with AI for the
          Showcase Challenge.
        </p>
        <div className="mt-10 flex items-center justify-center gap-3">
          <span className="inline-block h-1 w-12 rounded-full bg-accent opacity-60" />
          <span className="inline-block h-1 w-6 rounded-full bg-accent opacity-30" />
        </div>
      </div>
    </section>
  )
}
