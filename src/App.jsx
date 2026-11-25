import { useEffect } from 'react'
import CircuitBackground from './components/CircuitBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal')

    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <CircuitBackground />
      <Navbar />
      <main id="top">
        <Hero />
        <div className="container"><div className="divider"></div></div>
        <About />
        <div className="container"><div className="divider"></div></div>
        <Skills />
        <div className="container"><div className="divider"></div></div>
        <Projects />
        <div className="container"><div className="divider"></div></div>
        <Education />
        <div className="container"><div className="divider"></div></div>
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
