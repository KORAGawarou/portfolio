import { useState, useMemo } from 'react'
import Section from '../components/Section.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

const categories = ['Tous', 'Full-Stack', 'Gestion Administrative', 'React / Frontend']

export default function Projects() {
  const [filter, setFilter] = useState('Tous')

  const filteredProjects = useMemo(() => {
    let list = [...projects]
    if (filter !== 'Tous') {
      list = list.filter((p) => p.category === filter)
    }
    // Sort featured first
    return list.sort((a, b) => Number(b.featured) - Number(a.featured))
  }, [filter])

  return (
    <Section
      id="projets"
      eyebrow="// 03. Réalisations Concrètes"
      title="Mes Projets Récents"
      description="Découvrez des applications conçues pour simplifier la gestion documentaire, automatiser le suivi académique et digitaliser les processus administratifs."
    >
      <div className="project-filters">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            className={`filter-btn ${filter === c ? 'active' : ''}`}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid projects">
        {filteredProjects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </Section>
  )
}
