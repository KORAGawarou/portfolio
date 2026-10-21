import { useState } from 'react'
import Icon from './Icon.jsx'
import { profile } from '../data/profile.js'

const formId = import.meta.env.VITE_FORMSPREE_ID
const empty = { name: '', email: '', subject: '', message: '' }

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Veuillez indiquer votre nom (2 caractères minimum).'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Veuillez entrer une adresse e-mail valide."
  if (v.subject.trim().length < 3) e.subject = 'Veuillez indiquer un sujet (3 caractères minimum).'
  if (v.message.trim().length < 10) e.message = 'Votre message doit contenir au moins 10 caractères.'
  return e
}

export default function ContactForm() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error | fallback

  const set = (k) => (e) => setValues({ ...values, [k]: e.target.value })

  const mailto = () =>
    `${profile.emailHref}?subject=${encodeURIComponent(values.subject || 'Contact via Portfolio')}&body=${encodeURIComponent(`${values.message}\n\nDe : ${values.name} (${values.email})`)}`

  async function onSubmit(e) {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    if (!formId) {
      setStatus('fallback')
      return
    }

    setStatus('loading')
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error('Erreur de transmission')
      setValues(empty)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const field = (k, label, props = {}) => (
    <div className="field">
      <label htmlFor={`f-${k}`}>{label}</label>
      {k === 'message' ? (
        <textarea
          id={`f-${k}`}
          rows="5"
          placeholder="Décrivez votre besoin, opportunité de stage ou projet..."
          value={values[k]}
          onChange={set(k)}
          aria-invalid={!!errors[k]}
          aria-describedby={errors[k] ? `e-${k}` : undefined}
        />
      ) : (
        <input
          id={`f-${k}`}
          value={values[k]}
          onChange={set(k)}
          aria-invalid={!!errors[k]}
          aria-describedby={errors[k] ? `e-${k}` : undefined}
          {...props}
        />
      )}
      {errors[k] && (
        <p className="error" id={`e-${k}`}>
          {errors[k]}
        </p>
      )}
    </div>
  )

  return (
    <form className="form-card" onSubmit={onSubmit} noValidate>
      <h3 style={{ fontSize: '1.25rem', margin: '0 0 1.2rem', color: 'var(--text)' }}>
        Envoyez-moi un message direct
      </h3>

      <div className="form-grid">
        {field('name', 'Votre nom complet', { autoComplete: 'name', placeholder: 'Ex. Jean Dupont' })}
        {field('email', 'Votre adresse e-mail', { type: 'email', autoComplete: 'email', placeholder: 'Ex. jean.dupont@entreprise.com' })}
        {field('subject', 'Objet de votre message', { placeholder: 'Ex. Proposition de stage / Collaboration projet' })}
        {field('message', 'Votre message')}

        <button className="btn primary" type="submit" disabled={status === 'loading'}>
          <Icon name="Mail" size={18} />
          <span>{status === 'loading' ? 'Envoi en cours…' : 'Envoyer mon message'}</span>
        </button>

        <div role="status" aria-live="polite">
          {status === 'success' && (
            <p className="notice ok">
              ✓ Message transmis avec succès ! Merci, je vous réponds dans les plus brefs délais.
            </p>
          )}

          {status === 'error' && (
            <p className="notice bad">
              L'envoi a rencontré une difficulté technique. Veuillez vérifier votre connexion ou m'écrire directement à{' '}
              <a href={profile.emailHref} style={{ textDecoration: 'underline' }}>{profile.email}</a>.
            </p>
          )}

          {status === 'fallback' && (
            <div className="notice fallback">
              <p style={{ margin: '0 0 0.5rem', fontWeight: 600 }}>
                Prêt pour l'envoi de votre message :
              </p>
              <p style={{ margin: '0 0 0.8rem', fontSize: '0.92rem' }}>
                Cliquez ci-dessous pour ouvrir votre messagerie par défaut avec les données pré-remplies :
              </p>
              <a className="btn primary btn-sm" href={mailto()}>
                <Icon name="ExternalLink" size={15} />
                <span>Ouvrir dans mon application e-mail</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </form>
  )
}
