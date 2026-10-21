import Navbar from './components/Navbar.jsx'
import ScrollTop from './components/ScrollTop.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Experience from './sections/Experience.jsx'
import Education from './sections/Education.jsx'
import Languages from './sections/Languages.jsx'
import Contact from './sections/Contact.jsx'
import { profile } from './data/profile.js'

export default function App() {
  return (
    <>
      <a className="skip" href="#a-propos">
        Aller directement au contenu principal
      </a>
      <Navbar />
      <main id="contenu">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Languages />
        <Contact />
      </main>
      <footer className="footer">
        <div className="wrap">
          <div className="footer-inner">
            <div>
              © {new Date().getFullYear()} <strong>{profile.name}</strong> • Tous droits réservés.
            </div>
            <div style={{ color: 'var(--muted)', fontSize: '0.88rem' }}>
              Développé avec <strong>React</strong> & <strong>Vite</strong> • Parakou, Bénin
            </div>
          </div>
        </div>
      </footer>
      <ScrollTop />
    </>
  )
}
