export default function Section({ id, eyebrow, title, description, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`.trim()} aria-labelledby={`${id}-titre`}>
      <div className="wrap">
        <div className="section-header">
          {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
          <h2 id={`${id}-titre`}>{title}</h2>
          {description && <p className="section-desc">{description}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
