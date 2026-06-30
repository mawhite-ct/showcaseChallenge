interface DownloadCardProps {
  title: string
  description: string
  href: string
  badges: string[]
  icon: string
}

export default function DownloadCard({ title, description, href, badges, icon }: DownloadCardProps) {
  return (
    <div className="group relative rounded-2xl p-px transition-transform hover:scale-[1.02]">
      {/* Gradient border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-accent/30 via-accent/5 to-transparent" />

      <div className="relative flex flex-col items-center gap-5 rounded-2xl bg-bg-card p-8 text-center">
        <img
          src={icon}
          alt={title}
          className="h-20 max-w-[6rem] rounded-xl object-contain"
        />
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-text-secondary">{description}</p>
        </div>

        {/* Badge pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
            >
              {badge}
            </span>
          ))}
        </div>

        <a
          href={href}
          download
          className="mt-auto inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-bg-primary transition-colors hover:bg-accent-hover"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          Download for macOS
        </a>
      </div>
    </div>
  )
}
