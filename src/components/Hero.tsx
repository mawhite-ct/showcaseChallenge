export default function Hero() {
  return (
    <section className="px-6 pt-24 pb-16 text-center">
      <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
        Ember Engine{' '}
        <span className="text-accent">&</span>{' '}
        Neo-Blast Ascension
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary md:text-xl">
        A 3D game engine and a marble-roll game — both built with AI for the
        Showcase Challenge.
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <span className="inline-block h-1 w-12 rounded-full bg-accent opacity-60" />
        <span className="inline-block h-1 w-6 rounded-full bg-accent opacity-30" />
      </div>
    </section>
  )
}
