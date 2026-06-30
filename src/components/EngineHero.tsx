import FadeIn from './FadeIn'

export default function EngineHero() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-24 text-center">
      {/* Teal glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-drift-slow absolute top-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-accent/6 blur-[140px]" />
        <div className="animate-drift-reverse absolute bottom-0 right-0 h-[250px] w-[350px] translate-x-1/4 rounded-full bg-cyan-400/4 blur-[120px]" />
      </div>

      <div className="relative">
        <FadeIn>
          <h2 className="font-display text-5xl font-bold tracking-tight md:text-7xl">
            <span className="text-accent">Ember</span> Engine
          </h2>
        </FadeIn>
        <FadeIn delay={150}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary md:text-xl">
            A full 3D game engine with a scene editor, real-time Vulkan & Metal
            rendering, physics, and Lua scripting. From scratch. With AI.
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <div className="mt-10 flex items-center justify-center gap-3">
            <span className="inline-block h-1 w-12 rounded-full bg-accent opacity-60" />
            <span className="inline-block h-1 w-6 rounded-full bg-accent opacity-30" />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
