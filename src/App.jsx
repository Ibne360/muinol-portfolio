import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Marquee from './components/Marquee.jsx'
import AuroraBackground from './components/AuroraBackground.jsx'
import SectionDivider from './components/SectionDivider.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-canvas text-fg">
      {/* Animated aurora mesh + premium noise grain (full-page, fixed, -z-10) */}
      <AuroraBackground />

      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
