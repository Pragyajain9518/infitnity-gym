import './FeatureSection.css'

const features = [
  'Personalized workout plans tailored to your fitness level and goals.',
  'State-of-the-art equipment and a motivating group atmosphere.',
  'Nutrition guidance and progress tracking to keep you accountable.',
]

export default function FeatureSection() {
  return (
    <section id="about" className="features">
      <div className="features__inner">
        <div className="features__text">
          <h2 className="features__title">
            STOP GUESSING. START{' '}
            <span className="features__highlight">PROGRESSING.</span>
          </h2>
          <p className="features__description">
            No more wandering the gym floor wondering what to do next. Our
            structured programs eliminate the guesswork so you can focus on
            what matters — showing up, pushing hard, and seeing real results
            week after week.
          </p>
        </div>

        <ul className="features__list">
          {features.map((feature) => (
            <li key={feature} className="features__item">
              <span className="features__bullet" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
