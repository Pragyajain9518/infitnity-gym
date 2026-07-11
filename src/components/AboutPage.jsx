import { useEffect, useState } from 'react'
import './AboutPage.css'

const pillars = [
  {
    eyebrow: 'Holistic Support',
    title: 'Lifestyle Coaching',
    copy:
      'Real progress starts outside the gym. We help shape sleep, stress, nutrition, and routine so training has a foundation that actually holds.',
    image: '/hero.png',
    number: '01',
  },
  {
    eyebrow: 'Fuel And Repair',
    title: 'Nutrition',
    copy:
      'Simple, practical guidance built around your schedule, preferences, and goals, so food supports the body you are building.',
    image: '/services-bg.png',
    number: '02',
  },
  {
    eyebrow: 'Direct Guidance',
    title: '1:1 Coaching',
    copy:
      'Every session is coached with attention to form, intensity, and recovery. You are never left guessing what to do next.',
    image: '/hero.png',
    number: '03',
  },
  {
    eyebrow: 'Move Better',
    title: 'Rehab',
    copy:
      'We work around limitations, rebuild confidence, and progress movement with care so training feels strong again.',
    image: '/services-bg.png',
    number: '04',
  },
  {
    eyebrow: 'Performance Built',
    title: 'Athletic Training',
    copy:
      'Strength, power, conditioning, and movement quality come together in programs designed for measurable performance.',
    image: '/hero.png',
    number: '05',
  },
]

export default function AboutPage() {
  const [activePillar, setActivePillar] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActivePillar((index) => (index + 1) % pillars.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [])

  const pillar = pillars[activePillar]

  return (
    <main className="about-page">
      <section className="about-hero" id="services">
        <div className="about-hero__image" />
        <div className="about-hero__content">
          <span className="about-page__eyebrow">Infinity Services</span>
          <h1>
            NOT YOUR
            <br />
            TYPICAL <span>GYM.</span>
          </h1>
          <p>
            We combine private coaching, corrective movement, and lifestyle
            support into a training experience built around real people and real
            results.
          </p>
          <div className="about-hero__actions">
            <a href="#services-plan" className="about-page__button">
              Start With Us
            </a>
            <a href="#services-method" className="about-page__button about-page__button--ghost">
              See Our Approach
            </a>
          </div>
        </div>
      </section>

      <section className="about-slider" id="services-method">
        <article className="about-slide" key={pillar.title}>
          <div className="about-slide__copy">
            <span className="about-page__eyebrow">{pillar.eyebrow}</span>
            <h2>{pillar.title}</h2>
            <p>{pillar.copy}</p>
            <ul>
              <li>Personal assessment before programming</li>
              <li>Progressions matched to your body and schedule</li>
              <li>Clear targets, coaching feedback, and accountability</li>
            </ul>
            <a href="#services-plan" className="about-slide__link">
              Learn More
            </a>
            <span className="about-slide__number">{pillar.number}</span>
          </div>

          <div className="about-slide__media">
            <img src={pillar.image} alt="" />
          </div>
        </article>

        <div className="about-slider__footer" aria-label="Services section progress">
          <div className="about-slider__segments">
            {pillars.map((item, index) => (
              <button
                className={`about-slider__segment ${
                  index === activePillar ? 'about-slider__segment--active' : ''
                }`}
                key={item.title}
                type="button"
                aria-label={`Show ${item.title}`}
                onClick={() => setActivePillar(index)}
              />
            ))}
          </div>
          <span className="about-slider__counter">
            {String(activePillar + 1).padStart(2, '0')} /{' '}
            {String(pillars.length).padStart(2, '0')}
          </span>
        </div>
      </section>

      <section className="about-plan" id="services-plan">
        <span className="about-page__eyebrow">Your Goals Deserve A Plan.</span>
        <h2>Start here.</h2>
        <p>
          Book a consultation and we will map the first step around your goals,
          history, and current capacity.
        </p>
        <a href="#contact" className="about-page__button">
          Consult Today
        </a>
      </section>
    </main>
  )
}
