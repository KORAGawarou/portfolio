import Icon, { WhatsAppIcon } from '../components/Icon.jsx'
import { profile } from '../data/profile.js'

export default function Hero({ onOpenCvModal }) {
  return (
    <section id="accueil" className="hero" aria-labelledby="hero-name">
      <div className="hero-glow-1" aria-hidden="true" />
      <div className="hero-glow-2" aria-hidden="true" />

      <div className="wrap">
        <div className="hero-layout">
          <div>
            <div className="hero-status-pill">
              <span className="status-dot" aria-hidden="true" />
              <span>{profile.status}</span>
            </div>

            <p className="hero-greeting">👋 Bonjour, je suis</p>
            <h1 id="hero-name">{profile.name}</h1>
            <p className="hero-title">{profile.title}</p>
            <p className="hero-subtitle">{profile.subtitle}</p>
            <p className="hero-text">{profile.tagline}</p>

            <div className="actions">
              <a className="btn primary" href="#projets">
                <Icon name="FolderGit2" size={18} />
                <span>Explorer mes projets</span>
              </a>

              <button
                type="button"
                className="btn"
                onClick={onOpenCvModal}
                title="Demander mon CV complet"
              >
                <Icon name="FileDown" size={18} />
                <span>Demander mon CV</span>
              </button>

              <a
                className="btn whatsapp"
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={18} />
                <span>WhatsApp direct</span>
              </a>

              <a className="btn" href="#contact">
                <Icon name="Mail" size={18} />
                <span>Me contacter</span>
              </a>
            </div>

            <div className="social">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mon profil GitHub (nouvel onglet)"
                title="GitHub"
              >
                <Icon name="Github" size={20} />
              </a>
              <a
                href={profile.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mon profil Facebook (nouvel onglet)"
                title="Facebook"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href={profile.emailHref}
                aria-label="M'envoyer un e-mail"
                title="E-mail direct"
              >
                <Icon name="Mail" size={20} />
              </a>
              <a
                href={profile.phoneHref}
                aria-label="M'appeler par téléphone"
                title="Téléphone"
              >
                <Icon name="Phone" size={20} />
              </a>
            </div>
          </div>

          <div className="hero-avatar-card">
            <div className="avatar-ring">
              <div className="avatar-inner">KG</div>
              <div className="avatar-badge" title="En ligne">✓</div>
            </div>
            <h3 className="avatar-name">{profile.name}</h3>
            <p className="avatar-role">Développeur Full-Stack</p>
            <span className="avatar-location">
              <Icon name="MapPin" size={15} />
              <span>{profile.location}</span>
            </span>
          </div>
        </div>

        {/* STATS ROW */}
        <div className="stats-grid">
          {profile.stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <div className="stat-val">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
