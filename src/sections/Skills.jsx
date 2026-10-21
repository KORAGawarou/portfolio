import Section from '../components/Section.jsx'
import Icon from '../components/Icon.jsx'
import { skillGroups, softSkills } from '../data/skills.js'

export default function Skills() {
  return (
    <Section
      id="competences"
      eyebrow="// 02. Expertise Technique"
      title="Compétences & Technologies"
      description="Une maîtrise concrète des architectures logicielles modernes, de la modélisation Merise et des bases de données relationnelles."
    >
      <div className="skills-grid">
        {skillGroups.map((g) => (
          <div className="skill-group-card" key={g.title}>
            <div className="skill-group-header">
              <div
                className="skill-icon-wrap"
                style={{ background: g.color || 'var(--blue)' }}
              >
                <Icon name={g.icon} size={20} />
              </div>
              <div>
                <h3 className="skill-group-title">{g.title}</h3>
              </div>
            </div>
            <p className="skill-group-desc">{g.description}</p>
            <div className="skill-items-list">
              {g.items.map((item) => (
                <span className="skill-pill" key={item.name}>
                  <span>{item.name}</span>
                  <span className="skill-level-chip">{item.level}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '3.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: 'var(--text)' }}>
          Compétences relationnelles & Méthodologiques
        </h3>
        <p className="muted" style={{ margin: '0 0 1.5rem', fontSize: '0.98rem' }}>
          Ce qui fait la différence au quotidien dans la conduite d'un projet informatique.
        </p>
        <div className="soft-skills-grid">
          {softSkills.map((s) => (
            <div className="soft-skill-card" key={s.name}>
              <h4 className="soft-skill-title">
                <Icon name={s.icon} size={18} />
                <span>{s.name}</span>
              </h4>
              <p className="soft-skill-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
