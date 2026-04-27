import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink-950 text-white">
      {/* Ambient background layers */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-radial-gold opacity-90" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-noise opacity-[0.04] mix-blend-overlay" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
