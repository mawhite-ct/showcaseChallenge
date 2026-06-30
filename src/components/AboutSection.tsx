import FadeIn from './FadeIn'

export default function AboutSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <FadeIn>
          <h2 className="text-2xl font-bold md:text-3xl">The Game</h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="text-text-secondary leading-relaxed">
            Neo-Blast Ascension is a marble-roll platformer inspired by Marble
            Blast Ultra. Roll, jump, and race through 10 levels of increasing
            difficulty — all built with AI assistance.
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-text-secondary leading-relaxed">
            This game was built using Claude Opus to help create all the gameplay
            code. It created scripts for gameplay mechanics, designed layouts for
            levels, and generated assets. I used AI to combine all of these pieces
            along with audio that I found online to create this game.
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <p className="text-text-secondary leading-relaxed">
            I hooked Claude up to Blender to help with the asset creation process.
            I also generated a skill that could take a layout string like "FBGFFF"
            and create a track for the marble levels — which is how all the levels
            were made.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
