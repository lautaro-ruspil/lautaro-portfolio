import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#080808] min-h-screen text-[#f5f5f5] font-sans">
      {/* Skip to content — accessibility for keyboard users */}
      <a
        href="#sobre-mi"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-emerald-400 focus:text-black focus:px-4 focus:py-2 focus:rounded-full focus:font-semibold focus:text-sm"
      >
        Saltar al contenido
      </a>

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
