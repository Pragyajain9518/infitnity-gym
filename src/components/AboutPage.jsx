import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import assets from '../assets/design-assets.json'
import { CallToAction, PageHero } from './Shared'
import './AboutPage.css'

gsap.registerPlugin(ScrollTrigger)
const a = assets['1:1446']
const pillars = [
  {
    eyebrow: 'Holistic Support',
    title: 'Lifestyle Coaching',
    copy: 'Real strength isn’t built in the gym alone. How you sleep, manage stress, regulate hormones, and move through the day shapes your energy, focus, and long-term health. We help you create routines that work with your life, so you feel more in control, recover better, and show up stronger.',
    image: a.imgRectangle12,
    points: [
      'Individual attention with holistic health in mind.',
      'Clear structure for steady, long-lasting progress.',
      'Move better, feel stronger, live pain-free (despite chronic conditions).',
    ],
  },
  {
    eyebrow: 'Clinical & Sports',
    title: 'Nutrition',
    copy: 'We blend clinical insight with performance-focused nutrition to move you beyond fad diets and quick-fixes. With personalized guidance, you build a sustainable way of eating that supports strength, energy, and lasting results.',
    image: a.imgRectangle15,
    points: [
      'Fuel your body for better performance, recovery, and results',
      'Support health goals with clinically informed nutrition guidance',
      'Build sustainable eating habits for long-term progress',
    ],
  },
  {
    eyebrow: 'Personalized Guidance',
    title: '1:1 Coaching',
    copy: 'With complete attention on you, every session is tailored to your body, goals, and pace. Our 1:1 coaching focuses on form, progression, and thoughtful guidance, so you build strength safely, move better, and see consistent, long-term results.',
    image: a.imgRectangle13,
    points: [
      'Fully personalized training built around your body and goals',
      'Improve form and reduce risk of injury with expert guidance',
      'Steady, structured progress for long-term strength',
    ],
  },
  {
    eyebrow: 'Recovery & Rebuilding',
    title: 'Rehab',
    copy: 'Coming back from an injury, managing a chronic condition, or rebuilding strength post-partum can feel uncertain, but it’s also a chance to move better than before. With careful, progressive training tailored to your body, we help you restore confidence, improve mobility, and rebuild strength safely, so you return stronger and ready for long-term health.',
    image: a.imgRectangle14,
    points: [
      'We work with your doctors to ensure personalized support',
      'Move better than before with guided, progressive training',
      'Return stronger and more resilient',
    ],
  },
  {
    eyebrow: 'Sports Performance',
    title: 'Athletic Training',
    copy: 'Whether you’re building a foundation or training for a specific sport, our athletic coaching helps you develop the strength, control, and efficiency needed to perform at your best. With structured, progressive training tailored to your level and goals, we help you train smarter and build long-term athletic capability.',
    image: a.imgRectangle16,
    points: [
      'Improve strength, speed, and overall performance',
      'Reduce injury risk with balanced athletic development',
      'Build long-term resilience and confidence',
    ],
  },
]
function ServiceContent({ pillar, index }) {
  return (
    <div className="about-slide__inner">
      <div className="about-slide__copy">
        <span className="eyebrow">{pillar.eyebrow}</span>
        <h2>{pillar.title}</h2>
        <p>{pillar.copy}</p>
        <ol>
          {pillar.points.map((point, i) => (
            <li key={point}>
              <span>{String(i + 1).padStart(2, '0')} /</span>
              {point}
            </li>
          ))}
        </ol>
        <a className="about-slide__link" href="#contact">
          Learn More <img src={a.imgIcon1} alt="" />
        </a>
        <span className="about-slide__number" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <div className={`about-slide__media about-slide__media--${index}`}>
        <img
          src={pillar.image}
          alt={`${pillar.title} at Infitnity`}
          loading="lazy"
        />
      </div>
    </div>
  )
}
export default function AboutPage() {
  const sliderRef = useRef(null)
  const trackRef = useRef(null)
  const [expanded, setExpanded] = useState(0)
  function toggleService(index, event) {
    const article = event.currentTarget.closest('article')
    setExpanded(expanded === index ? -1 : index)
    if (expanded !== index)
      requestAnimationFrame(() =>
        article?.scrollIntoView({ block: 'start', behavior: 'smooth' }),
      )
  }
  useLayoutEffect(() => {
    const media = gsap.matchMedia()
    media.add(
      '(min-width: 761px) and (prefers-reduced-motion: no-preference)',
      () => {
        const slider = sliderRef.current,
          track = trackRef.current
        const distance = () => track.scrollWidth - slider.clientWidth
        gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: slider,
            start: 'top 67px',
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
      },
    )
    return () => media.revert()
  }, [])
  return (
    <main className="about-page">
      <PageHero
        className="services-page-hero"
        image={a.imgRectangle1}
        title={
          <>
            Not Your
            <br />
            Typical <span>Gym.</span>
          </>
        }
      >
        <span className="desktop-copy">
          You show up consistently. You work hard. But without the right
          guidance, progress can feel stagnant. That’s why we focus on
          personalized coaching, thoughtful progression, and support that meets
          you where you are for long-term strength.
        </span>
        <span className="mobile-copy">
          You show up consistently. You work hard. We focus on personalized
          coaching and thoughtful progression for long-term strength.
        </span>
      </PageHero>
      <section
        className="about-slider"
        id="services-method"
        ref={sliderRef}
        aria-label="Our services"
      >
        <div className="about-slider__track" ref={trackRef}>
          {pillars.map((pillar, index) => (
            <article className="about-slide" key={pillar.title}>
              <ServiceContent pillar={pillar} index={index} />
            </article>
          ))}
        </div>
      </section>
      <section
        className="services-accordion container"
        aria-label="Our services"
      >
        <span className="eyebrow">OUR SERVICES</span>
        {pillars.map((pillar, index) => (
          <article
            className={`service-accordion ${expanded === index ? 'is-expanded' : ''}`}
            key={pillar.title}
          >
            <button
              aria-expanded={expanded === index}
              aria-controls={`service-content-${index}`}
              onClick={(event) => toggleService(index, event)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <span>
                <small>{pillar.eyebrow}</small>
                <strong>{pillar.title}</strong>
              </span>
              <img src={assets['1:1854'].imgChevronDown} alt="" />
            </button>
            <div id={`service-content-${index}`} hidden={expanded !== index}>
              <ServiceContent pillar={pillar} index={index} />
            </div>
          </article>
        ))}
      </section>
      <div id="services-plan">
        <CallToAction
          title={
            <>
              Your Goals Deserve A Plan.
              <br />
              <span className="accent">START HERE.</span>
            </>
          }
        >
          Personalized Coaching Built Around Your Body, Goals, And Lifestyle.
        </CallToAction>
      </div>
    </main>
  )
}
