import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import VideoSection from './components/VideoSection'
import DownloadSection from './components/DownloadSection'
import RevealSection from './components/RevealSection'
import EngineHero from './components/EngineHero'
import EngineAboutSection from './components/EngineAboutSection'
import RequirementsSection from './components/RequirementsSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen text-text-primary">
      {/* Act 1: Neo-Blast — dark indigo/navy bg */}
      <div className="bg-nba-bg">
        <Hero />
        <AboutSection />
        <VideoSection
          heading="See It in Action"
          title="Neo-Blast Ascension"
          description="Roll, jump, and race through 10 levels of marble-rolling action."
          src="/videos/neo-blast-ascension-demo.mp4"
          variant="pink"
        />
      </div>

      {/* Transition: reveal sits in the gradient blend */}
      <div className="bg-gradient-to-b from-nba-bg via-nba-bg/50 to-bg-primary">
        <RevealSection />
      </div>

      {/* Act 2: Ember Engine — dark slate/teal bg */}
      <div className="bg-bg-primary">
        <EngineHero />
        <EngineAboutSection />
        <VideoSection
          heading="The Engine"
          title="Ember Engine"
          description="Scene editor, real-time rendering, physics, and Lua scripting — all from scratch."
          src="/videos/ember-engine-demo.mp4"
        />
        <DownloadSection />
        <RequirementsSection />
        <Footer />
      </div>
    </div>
  )
}
