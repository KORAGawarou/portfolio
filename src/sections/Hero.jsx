import Icon from '../components/Icon.jsx'
import { profile } from '../data/profile.js'

/* ───────────────────────────────────────────────
   Pour ajouter votre photo :
   1. Copiez votre photo dans public/profile/photo.jpg
   2. La photo s'affichera automatiquement.
─────────────────────────────────────────────── */
const PHOTO_PATH = '/profile/photo.jpg'

function ProfilePhoto() {
  return (
    <div className="profile-photo-wrapper">
      <div className="profile-photo-ring">
        <img
          src={PHOTO_PATH}
          alt="Photo de profil de KORA Gawarou"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
        <div className="profile-photo-placeholder" style={{ display: 'none' }}>
          <Icon name="Image" size={36} />
          <span>Votre photo<br />de profil</span>
        </div>
      </div>
    </div>
  )
}

export default function Hero({ onOpenCvModal }) {
  return (
    <section id="accueil" className="hero" aria-labelledby="hero-name">
      <div className="wrap">
        <div className="hero-layout">
          <div>
            <div className="hero-status-pill">
              <span className="status-dot" aria-hidden="true" />
              <span>{profile.status}</span>
            </div>

            <p className="hero-greeting">Bonjour, je suis</p>
            <h1 id="hero-name">{profile.name}</h1>
            <p className="hero-title">{profile.title}</p>
            <p className="hero-subtitle">{profile.subtitle}</p>
            <p className="hero-text">{profile.tagline}</p>

            <div className="actions">
              <a className="btn primary" href="#projets">
                <Icon name="FolderGit2" size={16} />
                <span>Voir mes projets</span>
              </a>

              <button type="button" className="btn" onClick={onOpenCvModal}>
                <Icon name="FileDown" size={16} />
                <span>Demander mon CV</span>
              </button>

              <a className="btn" href="#contact">
                <Icon name="Mail" size={16} />
                <span>Me contacter</span>
              </a>
            </div>

            <div className="social">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                <Icon name="Github" size={18} />
              </a>
              <a href={profile.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook">
                <Icon name="Facebook" size={18} />
              </a>
              <a href={profile.emailHref} aria-label="Envoyer un e-mail" title="E-mail">
                <Icon name="Mail" size={18} />
              </a>
              <a href={profile.phoneHref} aria-label="Appeler" title="Téléphone">
                <Icon name="Phone" size={18} />
              </a>
              <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp">
                <Icon name="Phone" size={18} />
              </a>
            </div>
          </div>

          <ProfilePhoto />
        </div>

        {/* Stats */}
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
