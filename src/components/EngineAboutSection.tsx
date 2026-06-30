import FadeIn from './FadeIn'

export default function EngineAboutSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <FadeIn>
          <h2 className="text-2xl font-bold md:text-3xl">The Engine</h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="text-text-secondary leading-relaxed">
            Ember Engine is a real-time 3D game engine written from scratch in
            C++20 — fully built with AI. Solo-developed, ~80k lines of code,
            shipping a complete 10-level game built on top of it.
          </p>
        </FadeIn>
      </div>

      {/* Technical details — left-aligned for readability */}
      <div className="mx-auto mt-12 max-w-3xl space-y-8 text-left">
        <FadeIn delay={200}>
          <h3 className="text-lg font-semibold text-accent">Rendering</h3>
          <p className="mt-2 text-sm text-text-secondary leading-relaxed">
            Vulkan 1.3 via MoltenVK. 12-stage deferred/forward hybrid pipeline
            with PBR materials (Cook-Torrance BRDF), cascaded shadow maps, SSAO,
            screen-space reflections, volumetric fog, TAA, bloom, and ACES tone
            mapping. Bindless descriptors, clustered light culling, GPU frame
            times under 10ms at 1080p on Apple Silicon.
          </p>
        </FadeIn>

        <FadeIn delay={250}>
          <h3 className="text-lg font-semibold text-accent">Architecture</h3>
          <p className="mt-2 text-sm text-text-secondary leading-relaxed">
            Entity-component system (entt) with 21 serializable component types.
            Strict layered module design with composition-root dependency
            injection. Zero global mutable state, smart-pointer-only ownership,
            AddressSanitizer clean.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <h3 className="text-lg font-semibold text-accent">Physics</h3>
          <p className="mt-2 text-sm text-text-secondary leading-relaxed">
            Jolt Physics integration: rigid bodies, triggers, raycasting,
            collision layers, mesh colliders with automatic internal-edge
            removal. Character controller with ground detection, slope
            rejection, and step-up.
          </p>
        </FadeIn>

        <FadeIn delay={350}>
          <h3 className="text-lg font-semibold text-accent">Editor</h3>
          <p className="mt-2 text-sm text-text-secondary leading-relaxed">
            ImGui-based level editor with scene graph, property inspector,
            transform gizmos, 256-deep undo/redo, prefab system with per-field
            overrides, asset browser, multiple debug visualization modes, and
            hot-reload via FSEvents.
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <h3 className="text-lg font-semibold text-accent">Asset Pipeline</h3>
          <p className="mt-2 text-sm text-text-secondary leading-relaxed">
            glTF/FBX/OBJ import with mesh optimization (meshoptimizer), mipmap
            generation, KTX2 texture compression, and a cooked binary scene
            format. Two-format serialization: human-readable JSON for authoring,
            FOURCC-chunked binary for runtime.
          </p>
        </FadeIn>

        <FadeIn delay={450}>
          <h3 className="text-lg font-semibold text-accent">Scripting</h3>
          <p className="mt-2 text-sm text-text-secondary leading-relaxed">
            Sandboxed Lua 5.4 with sol2 bindings. Per-entity lifecycle hooks,
            full API surface (physics, audio, input, UI, scene management),
            hot-reload in editor builds.
          </p>
        </FadeIn>

        <FadeIn delay={500}>
          <h3 className="text-lg font-semibold text-accent">Audio</h3>
          <p className="mt-2 text-sm text-text-secondary leading-relaxed">
            miniaudio backend with 3D spatialization, distance attenuation, 64
            concurrent voices, and channel-group mixing.
          </p>
        </FadeIn>

        <FadeIn delay={550}>
          <h3 className="text-lg font-semibold text-accent">Additional Systems</h3>
          <p className="mt-2 text-sm text-text-secondary leading-relaxed">
            Skeletal animation with GPU skinning (compute shader), AI navigation
            (Recast/Detour), particle system, volumetric fog (froxel
            ray-marching), MSDF text rendering, save/load system, automated test
            suite with headless Vulkan rendering and pixel regression.
          </p>
        </FadeIn>

        <FadeIn delay={600}>
          <p className="text-xs text-text-secondary/60">
            macOS (Apple Silicon primary, Intel secondary) · ~35 third-party
            libraries managed via CMake FetchContent
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
