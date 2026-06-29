import { useRef, useState } from 'react'

interface VideoCardProps {
  title: string
  description: string
  src: string
  variant?: 'teal' | 'pink'
}

export default function VideoCard({ title, description, src, variant = 'teal' }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    videoRef.current?.play()
    setPlaying(true)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="group relative overflow-hidden rounded-xl border border-white/5 bg-bg-card shadow-lg">
        <video
          ref={videoRef}
          className="aspect-video w-full"
          controls={playing}
          preload="metadata"
          src={src}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        >
          Your browser does not support the video tag.
        </video>

        {/* Play overlay — shown until user starts playing */}
        {!playing && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/40"
          >
            <div className={`flex h-16 w-16 items-center justify-center rounded-full transition-transform hover:scale-110 ${
              variant === 'pink'
                ? 'bg-nba-pink/90 shadow-lg shadow-nba-pink/20'
                : 'bg-accent/90 shadow-lg shadow-accent/20'
            }`}>
              <svg className="ml-1 h-7 w-7 text-bg-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        )}
      </div>
      <div className="px-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-text-secondary">{description}</p>
      </div>
    </div>
  )
}
