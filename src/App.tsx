import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import SectionDivider from './components/SectionDivider'
import VideoSection from './components/VideoSection'
import DownloadSection from './components/DownloadSection'
import RevealSection from './components/RevealSection'
import EngineHero from './components/EngineHero'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen text-text-primary">
      {/* Act 1: Neo-Blast — dark indigo/navy bg */}
      <div className="bg-nba-bg">
        <div className="mx-auto max-w-5xl">
          <Hero />
          <SectionDivider variant="pink" />
          <AboutSection />
          <VideoSection
            heading="See It in Action"
            title="Neo-Blast Ascension"
            description="Roll, jump, and race through 10 levels of marble-rolling action."
            src="/videos/neo-blast-ascension-demo.mp4"
            variant="pink"
          />
        </div>
      </div>

      {/* Transition: reveal sits in the gradient blend */}
      <div className="bg-gradient-to-b from-nba-bg via-nba-bg/50 to-bg-primary">
        <div className="mx-auto max-w-5xl">
          <RevealSection />
        </div>
      </div>

      {/* Act 2: Ember Engine — dark slate/teal bg */}
      <div className="bg-bg-primary">
        <div className="mx-auto max-w-5xl">
          <EngineHero />
          <VideoSection
            heading="The Engine"
            title="Ember Engine"
            description="Scene editor, real-time rendering, physics, and Lua scripting — all from scratch."
            src="/videos/ember-engine-demo.mp4"
          />
          <SectionDivider />
          <DownloadSection />
        </div>
        <Footer />
      </div>
    </div>
  )
}
