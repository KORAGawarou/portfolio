import Icon, { WhatsAppIcon } from './Icon.jsx'
import { profile } from '../data/profile.js'

export default function CvRequestModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <dialog
      open
      className="dialog"
      style={{ maxWidth: '560px', zIndex: 100 }}
      aria-labelledby="cv-modal-title"
      onClick={(e) => e.target.tagName === 'DIALOG' && onClose()}
    >
      <div className="dialog-head">
        <div>
          <span className="badge" style={{ borderColor: 'var(--blue-light)', color: 'var(--blue-light)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <Icon name="CheckCircle" size={14} />
            <span>Confidentialité & Données Personnelles</span>
          </span>
          <h3 id="cv-modal-title" style={{ marginTop: '0.4rem', fontSize: '1.35rem' }}>
            Demander mon CV complet
          </h3>
        </div>
        <button
          className="icon-btn"
          onClick={onClose}
          aria-label="Fermer la boîte de dialogue"
        >
          <Icon name="X" size={20} />
        </button>
      </div>

      <p style={{ color: 'var(--text-soft)', lineHeight: 1.6, fontSize: '0.98rem', margin: '0 0 1.4rem' }}>
        Afin de protéger mes coordonnées personnelles contre le démarchage et les robots web, mon <strong>CV complet au format PDF</strong> est transmis sur simple demande aux recruteurs, entreprises et collaborateurs.
      </p>

      <div style={{ display: 'grid', gap: '0.85rem' }}>
        <a
          className="btn whatsapp"
          href={profile.whatsappCvRequest}
          target="_blank"
          rel="noopener noreferrer"
          style={{ justifyContent: 'center', width: '100%', minHeight: '48px' }}
          onClick={onClose}
        >
          <WhatsAppIcon size={18} />
          <span>Demander instantanément via WhatsApp</span>
        </a>

        <a
          className="btn primary"
          href="#contact"
          style={{ justifyContent: 'center', width: '100%', minHeight: '48px' }}
          onClick={() => {
            onClose()
            const subj = document.getElementById('f-subject')
            if (subj) {
              subj.value = 'Demande de CV complet (Recrutement)'
              subj.focus()
            }
          }}
        >
          <Icon name="Mail" size={18} />
          <span>Demander par le formulaire de contact</span>
        </a>
      </div>

      <p className="muted" style={{ fontSize: '0.82rem', textAlign: 'center', margin: '1.2rem 0 0' }}>
        ⚡ Réponse garantie dans la journée avec transmission immédiate du PDF.
      </p>
    </dialog>
  )
}
