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

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-canvas text-fg">
      {/* Ambient background layers */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-radial-gold opacity-80 dark:opacity-90" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-noise opacity-[0.03] mix-blend-multiply dark:mix-blend-overlay dark:opacity-[0.05]" />

      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
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
