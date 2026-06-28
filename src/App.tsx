import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import VideoSection from './components/VideoSection'
import DownloadSection from './components/DownloadSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <div className="mx-auto max-w-5xl">
        <Hero />
        <AboutSection />
        <VideoSection />
        <DownloadSection />
      </div>
      <Footer />
    </div>
  )
}
