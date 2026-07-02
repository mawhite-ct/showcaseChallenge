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
          <div className="mb-8 rounded-xl border border-accent/20 bg-accent/5 px-5 py-4 text-sm text-text-secondary">
            <p className="font-medium text-accent">📋 First-time setup</p>
            <p className="mt-2 leading-relaxed">
              These apps aren't code-signed, so macOS will block them by default.
              After mounting the DMG and dragging the app to your Applications folder,
              open Terminal and run:
            </p>
            <div className="mt-3 space-y-2">
              <code className="block rounded bg-white/10 px-3 py-2 text-xs text-text-primary">
                xattr -d com.apple.quarantine /Applications/Neo-Blast\ Ascension.app
              </code>
              <code className="block rounded bg-white/10 px-3 py-2 text-xs text-text-primary">
                xattr -d com.apple.quarantine /Applications/Ember\ Engine.app
              </code>
            </div>
            <p className="mt-3 leading-relaxed">
              After that, the apps will open normally.
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
