import { useState } from 'react'
import './ServicesSection.css'

const services = [
  {
    title: 'Personal Training',
    description:
      'Fully personalized coaching with complete attention to your form, progress, goals, and overall lifestyle.',
    descriptionDesktop:
      'One-on-one sessions with certified coaches who build programs around your body, goals, and schedule.',
  },
  {
    title: 'Lifestyle Coaching',
    description:
      'Beyond the gym — we help you build sustainable habits for sleep, stress, and daily movement.',
  },
  {
    title: 'Nutrition Coaching',
    description:
      'Personalized meal plans and macro guidance to fuel your training and accelerate results.',
  },
]

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="programs" className="services">
      <div className="services__hero">
        <div className="services__bg" />
        <div className="services__overlay" />
      </div>

      <div className="services__cards">
        {services.map((service, index) => (
          <article
            key={service.title}
            className={`services__card ${index === activeIndex ? 'services__card--active' : ''}`}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
            tabIndex={0}
          >
            <div className="services__card-line" />
            <h3 className="services__card-title">{service.title}</h3>
            <p className="services__card-desc">
              {service.descriptionDesktop && index === 0 ? (
                <>
                  <span className="services__desc-mobile">{service.description}</span>
                  <span className="services__desc-desktop">
                    {service.descriptionDesktop}
                  </span>
                </>
              ) : (
                service.description
              )}
            </p>
            <a href="#services" className="services__card-link">
              Know More
              <span className="services__card-icon" aria-hidden="true">
                →
              </span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
