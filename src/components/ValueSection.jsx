import assets from '../assets/design-assets.json'
import './ValueSection.css'
const features = [
  [
    'Limited Capacity',
    'Only 12 clients at a time in a premium, distraction-free space.',
  ],
  [
    'Expert Coaches',
    'Multi-certified coaches who correct, guide, and educate.',
  ],
  [
    'Movement Mechanics',
    'Strong focus on posture, movement, and injury prevention.',
  ],
  [
    'Holistic Approach',
    'Highly personalized lifestyle coaching for lasting change.',
  ],
]
export default function ValueSection() {
  return (
    <section className="value">
      <div className="container value__inner">
        <div>
          <h2>
            Designed For
            <br className="desktop-break" /> People Who Want
            <br />
            <span>More From Fitness.</span>
          </h2>
          <p className="value__description">
            Most gyms give you access. We give you real guidance. At Infitnity,
            you’re supported, corrected, and coached every step of the way, so
            you can train with confidence, avoid setbacks, and build strength
            that lasts beyond the studio.
          </p>
        </div>
        <ul className="value__list">
          {features.map(([title, description]) => (
            <li key={title}>
              <span className="value__icon">
                <img src={assets['1:2531'].imgIcon3} alt="" />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
