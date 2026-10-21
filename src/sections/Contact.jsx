import { useState } from 'react'
import Section from '../components/Section.jsx'
import Icon, { WhatsAppIcon } from '../components/Icon.jsx'
import ContactForm from '../components/ContactForm.jsx'
import { profile } from '../data/profile.js'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <Section
      id="contact"
      eyebrow="// 07. Prenons Contact"
      title="Discutons de vos Projets"
      description="Disponible pour un stage professionnel, un emploi en entreprise ou une mission de développement logiciel. Échangeons dès aujourd'hui !"
    >
      <div className="contact-layout">
        <div className="contact-info-card">
          <h3 style={{ fontSize: '1.3rem', margin: '0 0 0.5rem', color: 'var(--text)' }}>
            Coordonnées directes
          </h3>
          <p className="muted" style={{ margin: '0 0 1.5rem', fontSize: '0.96rem' }}>
            N'hésitez pas à me joindre directement par téléphone, WhatsApp ou e-mail.
          </p>

          <div className="contact-channels">
            <div className="contact-channel-item">
              <div className="channel-left">
                <Icon name="Mail" size={18} />
                <span>{profile.email}</span>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={copyEmail}
                title="Copier l'adresse e-mail"
                aria-label="Copier l'adresse e-mail"
              >
                <Icon name={copied ? 'Check' : 'Copy'} size={16} />
              </button>
            </div>

            <a className="contact-channel-item" href={profile.phoneHref}>
              <div className="channel-left">
                <Icon name="Phone" size={18} />
                <span>{profile.phone}</span>
              </div>
              <Icon name="ChevronRight" size={16} className="muted" />
            </a>

            <a
              className="contact-channel-item"
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              style={{ borderColor: 'rgba(37, 211, 102, 0.4)' }}
            >
              <div className="channel-left" style={{ color: '#25d366' }}>
                <WhatsAppIcon size={18} />
                <span>Échanger sur WhatsApp</span>
              </div>
              <Icon name="ExternalLink" size={16} style={{ color: '#25d366' }} />
            </a>

            <a
              className="contact-channel-item"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="channel-left">
                <Icon name="Github" size={18} />
                <span>Profil GitHub (GawarouKora)</span>
              </div>
              <Icon name="ExternalLink" size={16} className="muted" />
            </a>

            <a
              className="contact-channel-item"
              href={profile.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="channel-left">
                <Icon name="Facebook" size={18} />
                <span>Profil Facebook</span>
              </div>
              <Icon name="ExternalLink" size={16} className="muted" />
            </a>
          </div>

          <div style={{ marginTop: '1.5rem', paddingTop: '1.2rem', borderTop: '1px solid var(--line)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--muted)', fontSize: '0.92rem' }}>
              <Icon name="MapPin" size={16} />
              <span>Localisation : {profile.location} (Disponible sur place & à distance)</span>
            </div>

            <a
              className="btn"
              href={profile.cvPath}
              download="CV-KORA-Gawarou.pdf"
              style={{ width: '100%' }}
            >
              <Icon name="Download" size={16} />
              <span>Télécharger mon CV (PDF)</span>
            </a>
          </div>
        </div>

        <ContactForm />
      </div>

      {copied && (
        <div className="toast" role="status">
          ✓ Adresse e-mail copiée dans le presse-papier !
        </div>
      )}
    </Section>
  )
}
