import Section from '../components/Section.jsx'
import Icon from '../components/Icon.jsx'
import { profile } from '../data/profile.js'

export default function Education() {
  const e = profile.education
  const years = [e.startYear, e.endYear].filter(Boolean).join(' – ')

  return (
    <Section
      id="formation"
      eyebrow="// 05. Formation Académique"
      title="Formation & Diplômes"
      description="Un cursus universitaire rigoureux axé sur la programmation avancée, les systèmes d'information et le génie logiciel."
    >
      <div className="timeline-card">
        <div className="timeline-header">
          <div>
            <h3 className="timeline-role">{e.title}</h3>
            <p className="timeline-org">{e.institution}</p>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span className="timeline-badge">
              <Icon name="GraduationCap" size={14} />
              <span>{e.status}</span>
            </span>
            {years && (
              <span className="timeline-badge">
                <Icon name="Calendar" size={14} />
                <span>{years}</span>
              </span>
            )}
            {e.location && (
              <span className="timeline-badge">
                <Icon name="MapPin" size={14} />
                <span>{e.location}</span>
              </span>
            )}
          </div>
        </div>

        {e.description && <p className="timeline-desc">{e.description}</p>}

        {e.highlights && (
          <div style={{ marginTop: '1.2rem' }}>
            <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--muted)', display: 'block', marginBottom: '0.5rem' }}>
              Enseignements et domaines clés :
            </span>
            <ul className="tags big">
              {e.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  )
}
