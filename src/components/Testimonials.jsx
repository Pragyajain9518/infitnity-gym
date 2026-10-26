import { useEffect, useState } from 'react'
import assets from '../assets/design-assets.json'
import './Testimonials.css'
const a = assets['1:2531']
const david = {
  name: 'David Chen',
  role: 'Entrepreneur',
  quote:
    'I was exhausted from generic HIIT classes that left me injured and burned out. The periodized strength programming completely changed my physique. I dropped 14% body fat while adding 12lbs of lean muscle in under 6 months.',
  result: '-14% Body Fat',
  image: a.imgImage1,
}
const sarah = {
  name: 'Sarah Jenkins',
  role: 'Software Engineer',
  quote:
    'After 3 years of chronic back pain, I thought my lifting days were over. Infitnity’s biomechanics screening identified a severe imbalance in my kinetic chain. 12 weeks later, I’m completely pain-free and pulling 405lbs off the floor.',
  result: '+85lbs Deadlift',
  image: a.imgImage,
}
// The source design uses these two stories across its four carousel positions.
const testimonials = [david, sarah, david, sarah]
export default function Testimonials() {
  const [current, setCurrent] = useState(1)
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      return
    const timer = window.setInterval(
      () => setCurrent((index) => (index + 1) % testimonials.length),
      6000,
    )
    return () => clearInterval(timer)
  }, [paused])
  return (
    <section
      className="testimonials"
      aria-label="Member results"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false)
      }}
    >
      <div className="container">
        <span className="eyebrow">The Proof</span>
        <h2>
          We Measure Success, <span>In Metrics Not Promises.</span>
        </h2>
      </div>
      <div className="testimonials__slider">
        <div
          className="testimonials__track"
          style={{ '--slide-index': current }}
        >
          {testimonials.map((item, index) => (
            <article
              className={`testimonials__card ${index === current ? 'is-active' : ''}`}
              key={index}
              aria-hidden={index !== current}
              aria-label={`Testimonial ${index + 1} of 4`}
            >
              <div className="testimonials__photo">
                <img src={item.image} alt="" loading="lazy" />
              </div>
              <div className="testimonials__body">
                <img
                  className="testimonials__quote-icon"
                  src={a.imgIcon5}
                  alt=""
                />
                <blockquote>“{item.quote}”</blockquote>
                <div className="testimonials__meta">
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.role}</p>
                  </div>
                  <div className="testimonials__result">
                    <small>Key Result</small>
                    <strong>{item.result}</strong>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="testimonials__controls">
        <button
          aria-label="Previous testimonial"
          onClick={() => setCurrent((current + 3) % 4)}
        >
          ‹
        </button>
        <div className="testimonials__segments">
          {testimonials.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-pressed={index === current}
              onClick={() => setCurrent(index)}
            >
              <span />
            </button>
          ))}
        </div>
        <span className="testimonials__counter">
          {String(current + 1).padStart(2, '0')} / 04
        </span>
        <button
          aria-label="Next testimonial"
          onClick={() => setCurrent((current + 1) % 4)}
        >
          ›
        </button>
        <button
          aria-label={paused ? 'Play testimonials' : 'Pause testimonials'}
          onClick={() => setPaused(!paused)}
        >
          {paused ? '▶' : 'Ⅱ'}
        </button>
      </div>
    </section>
  )
}
