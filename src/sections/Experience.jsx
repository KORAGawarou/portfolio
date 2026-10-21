import Section from '../components/Section.jsx'
import Icon from '../components/Icon.jsx'
import { profile } from '../data/profile.js'

export default function Experience() {
  const x = profile.experience
  const period = [x.startDate, x.endDate].filter(Boolean).join(' – ')

  return (
    <Section
      id="experience"
      eyebrow="// 04. Expérience Professionnelle"
      title="Parcours & Expérience"
      description="Une immersion concrète au sein de l'administration publique pour moderniser et dématérialiser la gestion des documents."
    >
      <ol className="timeline">
        <li className="timeline-card">
          <div className="timeline-header">
            <div>
              <h3 className="timeline-role">{x.title}</h3>
              <p className="timeline-org">{x.organization}</p>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="timeline-badge">
                <Icon name="Calendar" size={14} />
                <span>{[x.duration, period].filter(Boolean).join(' · ')}</span>
              </span>
              {x.location && (
                <span className="timeline-badge">
                  <Icon name="MapPin" size={14} />
                  <span>{x.location}</span>
                </span>
              )}
            </div>
          </div>

          <p className="timeline-desc">{x.details}</p>

          {x.achievements && x.achievements.length > 0 && (
            <div style={{ margin: '1.2rem 0' }}>
              <h4 style={{ fontSize: '1rem', color: 'var(--blue-light)', margin: '0 0 0.6rem' }}>
                Réalisations majeures durant la mission :
              </h4>
              <ul className="achievements-list">
                {x.achievements.map((item, i) => (
                  <li key={i}>
                    <span className="bullet">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {x.technologies && (
            <div style={{ marginTop: '1.2rem' }}>
              <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--muted)', display: 'block', marginBottom: '0.4rem' }}>
                Technologies & Méthodes mobilisées :
              </span>
              <ul className="tags">
                {x.technologies.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          )}

          {x.extra && (
            <p style={{ marginTop: '1.2rem', padding: '0.8rem 1rem', background: 'var(--surface)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--line)', fontSize: '0.92rem', color: 'var(--text-soft)', fontStyle: 'italic' }}>
              {x.extra}
            </p>
          )}
        </li>
      </ol>
    </Section>
  )
}
