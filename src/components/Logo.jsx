export default function Logo() {
  const PHOTO_PATH = '/profile/photo.jpg'
  return (
    <a className="logo" href="#accueil" aria-label="KORA Gawarou, retour à l'accueil">
      <div className="logo-avatar">
        <img
          src={PHOTO_PATH}
          alt=""
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.parentElement.textContent = 'KG'
          }}
        />
      </div>
      <div className="logo-text">
        <span className="logo-name">KORA Gawarou</span>
        <span className="logo-sub">Développeur Full-Stack</span>
      </div>
    </a>
  )
}
