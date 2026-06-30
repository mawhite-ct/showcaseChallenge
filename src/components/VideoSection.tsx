import VideoCard from './VideoCard'
import FadeIn from './FadeIn'

interface VideoSectionProps {
  title: string
  description: string
  src: string
  heading?: string
  variant?: 'teal' | 'pink'
}

export default function VideoSection({ title, description, src, heading, variant = 'teal' }: VideoSectionProps) {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        {heading && (
          <FadeIn>
            <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
              {heading}
            </h2>
          </FadeIn>
        )}
        <FadeIn delay={150}>
          <VideoCard title={title} description={description} src={src} variant={variant} />
        </FadeIn>
      </div>
    </section>
  )
}
