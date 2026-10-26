import { useState } from 'react'
import assets from '../assets/design-assets.json'
import './ServicesSection.css'
const services = [
  [
    'Personal Training',
    'Fully personalized coaching with complete attention to your form, progress, goals, and overall lifestyle.',
    assets['1:2531'].imgImagePersonalTraining,
  ],
  [
    'Lifestyle Coaching',
    'Expert guidance for hormonal balance, stress, sleep, and sustainable lifestyle changes.',
    assets['1:3327'].imgImageLifestyleCoaching,
  ],
  [
    'Nutrition Coaching',
    'Sports and clinical nutrition to help you perform better, recover faster, and build your ideal body.',
    assets['1:3370'].imgImageNutritionCoaching,
  ],
]
export default function ServicesSection() {
  const [active, setActive] = useState(0)
  return (
    <section
      className="services"
      id="programs"
      aria-label="Training and coaching"
    >
      <div className="services__hero" aria-hidden="true">
        {services.map(([title, , image], index) => (
          <div
            className={`services__bg services__bg--${index} ${active === index ? 'is-active' : ''}`}
            key={title}
          >
            <img src={image} alt="" loading="lazy" />
          </div>
        ))}
      </div>
      <div className="container services__cards">
        {services.map(([title, description], index) => (
          <article
            className={`services__card ${active === index ? 'is-active' : ''}`}
            key={title}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
          >
            <h2>
              <button
                onClick={() => setActive(index)}
                aria-expanded={active === index}
                aria-controls={`service-preview-${index}`}
              >
                {title}
              </button>
            </h2>
            <div id={`service-preview-${index}`} className="services__detail">
              <p>{description}</p>
              <a href="#services">
                Know More{' '}
                <span>
                  <img
                    src={
                      active === index
                        ? assets['1:2531'].imgIcon
                        : assets['1:2531'].imgIcon1
                    }
                    alt=""
                  />
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
