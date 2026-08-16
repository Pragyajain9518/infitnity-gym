import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './AboutPage.css'

gsap.registerPlugin(ScrollTrigger)

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
  const sliderRef = useRef(null)
  const trackRef = useRef(null)

  useLayoutEffect(() => {
    const slider = sliderRef.current
    const track = trackRef.current
    if (!slider || !track) return

    const ctx = gsap.context(() => {
      // Distance the track must travel to bring the last slide flush left.
      const distance = () => track.scrollWidth - window.innerWidth

      gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: slider,
          start: 'top top',
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
    }, slider)

    return () => ctx.revert()
  }, [])

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
       You show up consistently. You work hard. But without the right guidance, progress can feel stagnant. That's why we focus on personalized coaching, thoughtful progression, and support that meets you where you are for long-term strength.
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

      <section className="about-slider" id="services-method" ref={sliderRef}>
        <div className="about-slider__track" ref={trackRef}>
          {pillars.map((pillar) => (
            <article className="about-slide" key={pillar.title}>
              <div className="about-slide__inner">
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
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-plan" id="services-plan">
        <h2>
          <span className="about-plan__line">Your Goals Deserve A Plan.</span>
          <span className="about-plan__line about-plan__line--accent">
            START HERE.
          </span>
        </h2>
        <p>Personalized Coaching Built Around Your Body, Goals, And Lifestyle.</p>
        <a href="#contact" className="about-plan__cta">
          Let&apos;s Chat
          <span aria-hidden="true">→</span>
        </a>
      </section>
    </main>
  )
}
