interface VideoCardProps {
  title: string
  description: string
  src: string
}

export default function VideoCard({ title, description, src }: VideoCardProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-hidden rounded-xl border border-white/5 bg-bg-card shadow-lg">
        <video
          className="aspect-video w-full"
          controls
          preload="metadata"
          src={src}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="px-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-text-secondary">{description}</p>
      </div>
    </div>
  )
}
