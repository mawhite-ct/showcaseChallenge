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

        <FadeIn delay={50}>
          <div className="mb-8 rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-4 text-sm text-amber-200/90">
            <p className="font-medium text-amber-300">⚠️ Heads up — unsigned apps</p>
            <p className="mt-2 leading-relaxed">
              These apps are not code-signed with an Apple Developer certificate.
              CapTech-managed Macs will block them from opening. If you have a
              personal Mac with an Apple Silicon chip (M1 or later), you can
              download the DMGs there and they will open normally. We're working
              with IT on a solution for managed machines — stay tuned.
            </p>
          </div>
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
