import { useEffect } from 'react'
import Icon, { WhatsAppIcon } from './Icon.jsx'
import { profile } from '../data/profile.js'

export default function CvRequestModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
    >
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-head">
          <div>
            <span
              className="badge"
              style={{
                borderColor: 'var(--blue)',
                color: 'var(--blue)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <Icon name="CheckCircle" size={14} />
              <span>Confidentialité & Données</span>
            </span>
            <h3 id="cv-modal-title" style={{ marginTop: '0.4rem', fontSize: '1.25rem' }}>
              Demander mon CV complet
            </h3>
          </div>
          <button
            type="button"
            className="icon-btn"
            onClick={onClose}
            aria-label="Fermer la boîte de dialogue"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        <p style={{ color: 'var(--text-soft)', lineHeight: 1.6, fontSize: '0.94rem', margin: '0 0 1.3rem' }}>
          Afin de protéger mes coordonnées personnelles contre le démarchage et les robots web, mon{' '}
          <strong>CV complet au format PDF</strong> est transmis sur simple demande aux recruteurs,
          entreprises et collaborateurs.
        </p>

        <div style={{ display: 'grid', gap: '0.85rem' }}>
          <a
            className="btn whatsapp"
            href={profile.whatsappCvRequest}
            target="_blank"
            rel="noopener noreferrer"
            style={{ justifyContent: 'center', width: '100%', minHeight: '44px' }}
            onClick={onClose}
          >
            <WhatsAppIcon size={18} />
            <span>Demander instantanément via WhatsApp</span>
          </a>

          <a
            className="btn primary"
            href="#contact"
            style={{ justifyContent: 'center', width: '100%', minHeight: '44px' }}
            onClick={() => {
              onClose()
              setTimeout(() => {
                const subj = document.getElementById('f-subject')
                if (subj) {
                  subj.value = 'Demande de CV complet (Recrutement)'
                  subj.focus()
                }
              }, 150)
            }}
          >
            <Icon name="Mail" size={18} />
            <span>Demander par le formulaire de contact</span>
          </a>
        </div>

        <p className="muted" style={{ fontSize: '0.82rem', textAlign: 'center', margin: '1.2rem 0 0' }}>
          ⚡ Réponse rapide avec transmission immédiate du document.
        </p>
      </div>
    </div>
  )
}
