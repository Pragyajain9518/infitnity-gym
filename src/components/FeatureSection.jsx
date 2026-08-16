import './FeatureSection.css'

const features = [
  'Individual attention with holistic health in mind.',
  'Clear structure for steady, long-lasting progress.',
  'Move better, feel stronger, live pain-free (despite chronic conditions).',
]

export default function FeatureSection() {
  return (
    <section id="home-about" className="features">
      <div className="features__inner">
        <div className="features__text">
          <h2 className="features__title">
            <span className="features__line features__line--white">STOP</span>
            <span className="features__line features__line--muted">GUESSING.</span>
            <span className="features__line features__line--white">START</span>
            <span className="features__line features__line--orange">PROGRESSING.</span>
          </h2>

          <p className="features__description">
            <span className="features__desc features__desc--mobile">
              Tired of inconsistent workouts, no results, and trainers focused on
              women squatting? You deserve better. We offer personalized coaching,
              expert guidance, and a structure built around your body and lifestyle.
            </span>
            <span className="features__desc features__desc--desktop">
              No more wandering the gym floor wondering what to do next. Our
              structured programs eliminate the guesswork so you can focus on
              what matters — showing up, pushing hard, and seeing real results
              week after week.
            </span>
          </p>
        </div>

        <div className="features__aside">
          <div className="features__divider" aria-hidden="true" />

          <ol className="features__list">
            {features.map((feature, index) => (
              <li key={feature} className="features__item">
                <span className="features__number">
                  {String(index + 1).padStart(2, '0')} /
                </span>
                <span className="features__text-item">{feature}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
