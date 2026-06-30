import FadeIn from './FadeIn'

export default function RequirementsSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
            System Requirements
          </h2>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          <FadeIn delay={100}>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="mb-4 text-lg font-semibold text-nba-pink">
                Neo-Blast Ascension
              </h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-nba-pink/60" />
                  macOS 14.0+ (Sonoma)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-nba-pink/60" />
                  Apple Silicon (M1 or later)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-nba-pink/60" />
                  4 GB RAM
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="mb-4 text-lg font-semibold text-accent">
                Ember Engine (Editor)
              </h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                  macOS 14.0+ (Sonoma)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                  Apple Silicon (M1 or later)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                  8 GB RAM recommended
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={300}>
          <div className="mt-6 rounded-lg border border-white/5 bg-white/[0.02] px-5 py-3 text-center text-xs text-text-secondary/70">
            <span className="font-medium text-text-secondary">Recommended:</span>{' '}
            M2+ for full 60 fps at 1080p · Intel Macs may work (MoltenVK + BC7
            path exists) but are untested
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
