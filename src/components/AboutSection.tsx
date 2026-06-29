import FadeIn from './FadeIn'

export default function AboutSection() {
  return (
    <section className="px-6 py-32">
      <FadeIn>
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">The Game</h2>
          <p className="text-text-secondary leading-relaxed">
            Neo-Blast Ascension is a marble-roll platformer inspired by Marble
            Blast Ultra. Roll, jump, and race through 10 levels of increasing
            difficulty — all built with AI assistance.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Placeholder — add more about the gameplay, the challenge of building
            it, what makes it fun, etc.
          </p>
        </div>
      </FadeIn>
    </section>
  )
}
