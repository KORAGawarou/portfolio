import Section from '../components/Section.jsx'
import Icon from '../components/Icon.jsx'
import { profile } from '../data/profile.js'

export default function About() {
  return (
    <Section
      id="a-propos"
      eyebrow="// 01. Profil & Vision"
      title="À propos de moi"
      description="Développeur rigoureux, formé aux architectures logicielles et forgé par les besoins concrets du terrain."
    >
      <div className="prose">
        {profile.about.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>

      <div style={{ marginTop: '2.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.2rem', color: 'var(--text)' }}>
          Mes principes de travail
        </h3>
        <div className="grid">
          {profile.strengths.map((s, idx) => (
            <div className="card pad" key={idx} style={{ background: 'var(--surface)' }}>
              <h4 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem', color: 'var(--blue-light)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Icon name="CheckCircle" size={18} />
                <span>{s.title}</span>
              </h4>
              <p style={{ margin: 0, fontSize: '0.96rem', color: 'var(--text-soft)', lineHeight: 1.6 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
