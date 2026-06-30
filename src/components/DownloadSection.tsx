import DownloadCard from './DownloadCard'
import FadeIn from './FadeIn'

export default function DownloadSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
            Download
          </h2>
        </FadeIn>
        <div className="grid gap-8 md:grid-cols-2">
          <FadeIn delay={100}>
            <DownloadCard
              title="Neo-Blast Ascension"
              description="A 10-level marble-roll game. Launch and play — no engine install needed."
              href="https://github.com/mawhite-ct/showcaseChallenge/releases/latest/download/neo-blast-ascension.dmg"
              badges={['10 Levels', 'Physics', 'Standalone', 'macOS']}
              icon="/icons/neo-blast-ascension.png"
            />
          </FadeIn>
          <FadeIn delay={200}>
            <DownloadCard
              title="Ember Engine"
              description="The full 3D game engine — editor, renderer, physics, and Lua scripting. macOS only."
              href="https://github.com/mawhite-ct/showcaseChallenge/releases/latest/download/ember-engine.dmg"
              badges={['3D Engine', 'Vulkan + Metal', 'Lua Scripting', 'macOS']}
              icon="/icons/ember-engine.png"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
