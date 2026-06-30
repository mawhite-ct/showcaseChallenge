import ScrollReveal, { reveal, revealScale } from './ScrollReveal'

export default function RevealSection() {
  return (
    <ScrollReveal height="300vh">
      {(progress) => (
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="text-sm font-medium uppercase tracking-widest text-text-secondary transition-all duration-500"
            style={reveal(progress, 0)}
          >
            But wait
          </p>

          <h2
            className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl transition-all duration-500"
            style={reveal(progress, 0.12)}
          >
            There's more.
          </h2>

          {/* Vertical dots */}
          <div className="my-12 flex flex-col items-center gap-6">
            <span
              className="block h-3 w-3 rounded-full bg-text-secondary/40 transition-all duration-500"
              style={revealScale(progress, 0.25)}
            />
            <span
              className="block h-3 w-3 rounded-full bg-text-secondary/40 transition-all duration-500"
              style={revealScale(progress, 0.4)}
            />
            <span
              className="block h-3 w-3 rounded-full bg-text-secondary/40 transition-all duration-500"
              style={revealScale(progress, 0.55)}
            />
          </div>

          <p
            className="mx-auto max-w-2xl text-lg text-text-secondary leading-relaxed transition-all duration-700"
            style={reveal(progress, 0.75)}
          >
            Neo-Blast Ascension wasn't built in Unity. It wasn't built in Unreal.
            It was built in a{' '}
            <span className="font-semibold text-text-primary">custom 3D game engine</span>{' '}
            — one that was also built with AI.
          </p>
        </div>
      )}
    </ScrollReveal>
  )
}
