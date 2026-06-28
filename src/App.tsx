import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import VideoSection from './components/VideoSection'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <div className="mx-auto max-w-5xl">
        <Hero />
        <AboutSection />
        <VideoSection />
      </div>
    </div>
  )
}
