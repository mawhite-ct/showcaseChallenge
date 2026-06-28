import DownloadCard from './DownloadCard'

export default function DownloadSection() {
  return (
    <section className="px-6 py-16">
      <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
        Download
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        <DownloadCard
          title="Ember Engine"
          description="The full 3D game engine — editor, renderer, physics, and Lua scripting. macOS only."
          filename="ember-engine.zip"
        />
        <DownloadCard
          title="Neo-Blast Ascension"
          description="A 10-level marble-roll game built in Ember Engine. Launch and play — no engine install needed."
          filename="neo-blast-ascension.zip"
        />
      </div>
    </section>
  )
}
