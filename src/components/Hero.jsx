import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <h1 className="hero__title">WE TAKE IT PERSONALLY!</h1>
        <p className="hero__description">
          At Infinity Gym, every rep, every set, and every goal is yours alone.
          Our expert trainers craft personalized programs designed around your
          body, your schedule, and your ambitions — because your fitness journey
          deserves nothing less than our full attention.
        </p>
        <div className="hero__actions">
          <a href="#pricing" className="hero__btn hero__btn--primary">
            Start Now &gt;
          </a>
          <button type="button" className="hero__btn hero__btn--secondary">
            Watch Video
          </button>
        </div>
      </div>

      <div className="hero__visual">
        <img
          src="/hero.png"
          alt="Athletic woman in white sportswear holding a water bottle"
          className="hero__image"
        />
        <div className="hero__gradient" />
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
