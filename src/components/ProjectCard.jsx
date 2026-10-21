import { useRef } from 'react'
import Icon from './Icon.jsx'

export default function ProjectCard({ project }) {
  const dialog = useRef(null)
  const cover = project.images && project.images[0]
  const showCode = Boolean(project.repoUrl && !project.confidential)

  return (
    <article className={`card project-card ${project.featured ? 'featured' : ''}`}>
      <div className="project-thumb-wrap">
        <div className="project-badges-top">
          {project.featured && (
            <span className="badge-featured">★ Projet Phare (Réalisé Seul)</span>
          )}
          {project.category && (
            <span className="badge-category">{project.category}</span>
          )}
        </div>

        {cover ? (
          <img
            className="project-thumb"
            src={cover}
            alt={`Aperçu visuel du projet : ${project.title}`}
            loading="lazy"
          />
        ) : (
          <div className="shot placeholder">
            <Icon name="Image" size={32} />
            <span>Aperçu de l'application</span>
          </div>
        )}
      </div>

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-summary">{project.summary}</p>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="project-highlights">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}

        {project.tech && project.tech.length > 0 && (
          <ul className="tags" style={{ marginBottom: '1.2rem' }}>
            {project.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}

        <div className="project-footer actions">
          <button
            className="btn primary btn-sm"
            onClick={() => dialog.current && dialog.current.showModal()}
          >
            <Icon name="Eye" size={16} />
            <span>Détails & Architecture</span>
          </button>

          {showCode && (
            <a
              className="btn btn-sm"
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Consulter le dépôt sur GitHub"
            >
              <Icon name="Github" size={16} />
              <span>GitHub</span>
            </a>
          )}

          {project.demoUrl && (
            <a
              className="btn btn-sm"
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="ExternalLink" size={16} />
              <span>Démo</span>
            </a>
          )}
        </div>
      </div>

      {/* DETAILED MODAL DIALOG */}
      <dialog
        ref={dialog}
        className="dialog"
        aria-labelledby={`${project.id}-title`}
        onClick={(e) => e.target === dialog.current && dialog.current.close()}
      >
        <div className="dialog-head">
          <div>
            {project.category && <span className="dialog-category">{project.category}</span>}
            <h3 id={`${project.id}-title`}>{project.title}</h3>
          </div>
          <button
            className="icon-btn"
            onClick={() => dialog.current && dialog.current.close()}
            aria-label="Fermer la fenêtre de présentation"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        <div>
          <h4 className="dialog-section-title">
            <Icon name="Award" size={18} />
            <span>Besoin & Contexte</span>
          </h4>
          <p style={{ color: 'var(--text-soft)', lineHeight: 1.6, margin: 0 }}>
            {project.need}
          </p>

          <h4 className="dialog-section-title">
            <Icon name="CheckCircle" size={18} />
            <span>Problème résolu</span>
          </h4>
          <p style={{ color: 'var(--text-soft)', lineHeight: 1.6, margin: 0 }}>
            {project.problem}
          </p>

          {project.features && project.features.length > 0 && (
            <>
              <h4 className="dialog-section-title">
                <Icon name="Zap" size={18} />
                <span>Fonctionnalités clés implémentées</span>
              </h4>
              <ul className="feature-list">
                {project.features.map((f, i) => (
                  <li key={i}>
                    <span className="feature-check">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {project.role && (
            <>
              <h4 className="dialog-section-title">
                <Icon name="Briefcase" size={18} />
                <span>Mon rôle & Réalisation technique</span>
              </h4>
              <p style={{ color: 'var(--text-soft)', lineHeight: 1.6, margin: 0 }}>
                {project.role}
              </p>
            </>
          )}

          {project.tech && project.tech.length > 0 && (
            <>
              <h4 className="dialog-section-title">
                <Icon name="Cpu" size={18} />
                <span>Stack technique utilisée</span>
              </h4>
              <ul className="tags big" style={{ marginTop: '0.5rem', marginBottom: '1.25rem' }}>
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </>
          )}

          {cover && (
            <>
              <h4 className="dialog-section-title">
                <Icon name="Image" size={18} />
                <span>Aperçu de l'interface logicielle</span>
              </h4>
              <img
                className="dialog-preview-img"
                src={cover}
                alt={`Maquette de l'application ${project.title}`}
              />
            </>
          )}

          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end', gap: '0.8rem' }}>
            {showCode && (
              <a
                className="btn"
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="Github" size={16} />
                <span>Voir le code sur GitHub</span>
              </a>
            )}
            <button
              className="btn primary"
              onClick={() => dialog.current && dialog.current.close()}
            >
              Fermer
            </button>
          </div>
        </div>
      </dialog>
    </article>
  )
}
