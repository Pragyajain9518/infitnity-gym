import './ValueSection.css'

const valueFeatures = [
  {
    title: 'Limited Capacity',
    description:
      'Only 12 clients at a time for a premium, distraction-free space.',
  },
  {
    title: 'Expert Coaches',
    description:
      'Multi-certified coaches who correct, guide, and educate.',
  },
  {
    title: 'Movement Mechanics',
    description:
      'Strong focus on posture, movement, and injury prevention.',
  },
  {
    title: 'Holistic Approach',
    description:
      'Highly personalized lifestyle coaching for lasting change.',
  },
]

export default function ValueSection() {
  return (
    <section className="value">
      <div className="value__inner">
        <div className="value__text">
          <h2 className="value__title">
            <span className="value__line">DESIGNED FOR</span>
            <span className="value__line">PEOPLE WHO</span>
            <span className="value__line">WANT</span>
            <span className="value__line value__highlight">MORE FROM</span>
            <span className="value__line value__highlight">FITNESS.</span>
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
                <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
                  <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1" />
                  <path
                    d="M8 12.2l2.6 2.6L16.2 9.2"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
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
