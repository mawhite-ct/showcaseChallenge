import FadeIn from './FadeIn'

export default function RevealSection() {
  return (
    <section className="relative overflow-hidden px-6 py-48">
      <div className="relative mx-auto max-w-3xl text-center">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-widest text-text-secondary">
            But wait
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
            There's more.
          </h2>
        </FadeIn>

        {/* Ellipsis — vertical dots to build anticipation */}
        <div className="my-40 flex flex-col items-center gap-16">
          <FadeIn delay={400}>
            <span className="block h-3 w-3 rounded-full bg-text-secondary/40" />
          </FadeIn>
          <FadeIn delay={550}>
            <span className="block h-3 w-3 rounded-full bg-text-secondary/40" />
          </FadeIn>
          <FadeIn delay={700}>
            <span className="block h-3 w-3 rounded-full bg-text-secondary/40" />
          </FadeIn>
        </div>

        <FadeIn delay={850}>
          <p className="mx-auto mt-16 max-w-2xl text-lg text-text-secondary leading-relaxed">
            Neo-Blast Ascension wasn't built in Unity. It wasn't built in Unreal.
            It was built in a{' '}
            <span className="font-semibold text-text-primary">custom 3D game engine</span>{' '}
            — one that was also built with AI.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
