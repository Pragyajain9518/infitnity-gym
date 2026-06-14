import './ValueSection.css'

const valueFeatures = [
  {
    title: 'Limited Capacity',
    description:
      'Small class sizes mean you always get the attention and coaching you deserve.',
  },
  {
    title: 'Expert Coaches',
    description:
      'Certified trainers with years of experience in strength, mobility, and performance.',
  },
  {
    title: 'Movement Mechanics',
    description:
      'We teach proper form first — so you train harder, safer, and without injury.',
  },
  {
    title: 'Holistic Approach',
    description:
      'Training, nutrition, recovery, and mindset — everything you need under one roof.',
  },
]

export default function ValueSection() {
  return (
    <section className="value">
      <div className="value__inner">
        <div className="value__text">
          <h2 className="value__title">
            DESIGNED FOR PEOPLE WHO WANT{' '}
            <span className="value__highlight">MORE FROM FITNESS.</span>
          </h2>
          <p className="value__description">
            Infinity isn&apos;t just a gym — it&apos;s a complete ecosystem for
            physical evolution. We combine cutting-edge training methods with
            personalized coaching to help you break through plateaus and reach
            levels you never thought possible.
          </p>
        </div>

        <ul className="value__list">
          {valueFeatures.map((feature) => (
            <li key={feature.title} className="value__item">
              <span className="value__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                </svg>
              </span>
              <div>
                <h3 className="value__item-title">{feature.title}</h3>
                <p className="value__item-desc">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
