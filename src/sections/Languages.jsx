import Section from '../components/Section.jsx'
import Icon from '../components/Icon.jsx'
import { profile } from '../data/profile.js'

export default function Languages() {
  return (
    <Section
      id="langues"
      eyebrow="// 06. Communication"
      title="Langues Pratiquées"
      description="Des compétences linguistiques adaptées aux échanges professionnels, à l'analyse de documentation technique et au travail d'équipe."
    >
      <div className="languages-grid">
        {profile.languages.map((l) => (
          <div className="language-card" key={l.name}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <span style={{ fontSize: '1.4rem' }}>
                {l.name === 'Français' ? '🇫🇷' : l.name === 'Anglais' ? '🇬🇧' : '🇧🇯'}
              </span>
              <h3 className="language-name" style={{ margin: 0 }}>{l.name}</h3>
            </div>
            <p className="language-level">{l.level}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
