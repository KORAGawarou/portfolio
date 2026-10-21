import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import Logo from './Logo.jsx'
import { profile } from '../data/profile.js'

const links = [
  ['a-propos', 'À propos'],
  ['competences', 'Compétences'],
  ['projets', 'Projets'],
  ['experience', 'Expérience'],
  ['formation', 'Formation'],
  ['langues', 'Langues'],
  ['contact', 'Contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'dark'
    } catch {
      return 'dark'
    }
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* stockage indisponible */
    }
  }, [theme])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="nav">
      <div className="nav-inner">
        <Logo />

        <nav id="menu" className={open ? 'menu open' : 'menu'} aria-label="Navigation principale">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            className="nav-cv-btn"
            href={profile.cvPath}
            download="CV-KORA-Gawarou.pdf"
            title="Télécharger le CV au format PDF"
          >
            <Icon name="Download" size={15} />
            <span>Mon CV</span>
          </a>

          <button
            className="icon-btn"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
            title={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
          >
            <Icon name={theme === 'dark' ? 'Sun' : 'Moon'} size={18} />
          </button>

          <button
            className="icon-btn burger"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="menu"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <Icon name={open ? 'X' : 'Menu'} size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
