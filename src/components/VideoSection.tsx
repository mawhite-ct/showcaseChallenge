import VideoCard from './VideoCard'

export default function VideoSection() {
  return (
    <section className="px-6 py-16">
      <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
        See Them in Action
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        <VideoCard
          title="Ember Engine"
          description="A full 3D game engine — scene editor, real-time rendering, physics, and scripting."
          src="/videos/ember-engine-demo.mp4"
        />
        <VideoCard
          title="Neo-Blast Ascension"
          description="A marble-roll game with 10 levels, built entirely in Ember Engine. Think Marble Blast Ultra."
          src="/videos/neo-blast-ascension-demo.mp4"
        />
      </div>
    </section>
  )
}
