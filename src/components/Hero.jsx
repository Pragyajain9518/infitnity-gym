import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__visual">
        <img
          src="/hero.png"
          alt="Athletic woman in white sportswear holding a water bottle"
          className="hero__image"
        />
        <div className="hero__gradient" />
      </div>

      <div className="hero__content">
        <h1 className="hero__title">
          <span className="hero__line">WE TAKE IT</span>
          <span className="hero__line hero__line--muted">
            PERSONALLY
            <span className="hero__exclaim">!</span>
          </span>
        </h1>

        <div className="hero__body">
          <p className="hero__description">
            <span className="hero__desc hero__desc--mobile">
              Train in a space limited to 12 people, where every 1-on-1 session is
              personalized for your body, lifestyle, and long-term health, so you
              finally see results without setbacks.
            </span>
            <span className="hero__desc hero__desc--desktop">
              Train in a space limited to 12 people, where every 1-on-1 session is personalized for your body, lifestyle, and long-term health, so you finally see results without setbacks.
            </span>
          </p>
          <div className="hero__actions">
            <a href="#pricing" className="hero__btn hero__btn--primary">
              Consult Today
              <span className="hero__arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a href="#stats" className="hero__btn hero__btn--outline">
              See Our Results
            </a>
          </div>
        </div>
      </div>

      <a href="#stats" className="hero__scroll" aria-label="Scroll down">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  )
}
