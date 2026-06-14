import { useState } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'SOFTWARE ENGINEER',
    quote:
      'I came to Infinity with zero gym experience and left six months later deadlifting 85lbs more than when I started. The coaches didn\'t just train me — they taught me how to move, eat, and recover like an athlete.',
    result: '+85lbs Deadlift',
    initials: 'SJ',
  },
  {
    name: 'Marcus Chen',
    role: 'ENTREPRENEUR',
    quote:
      'Between running a business and family life, I needed a gym that respected my time. Infinity\'s structured programs and limited class sizes meant every session counted.',
    result: '-22lbs Body Fat',
    initials: 'MC',
  },
  {
    name: 'Priya Sharma',
    role: 'PHYSICAL THERAPIST',
    quote:
      'As someone who understands movement, I was impressed by Infinity\'s focus on mechanics. They fixed my squat form and eliminated the knee pain I\'d had for years.',
    result: 'Pain-Free Squats',
    initials: 'PS',
  },
  {
    name: 'David Okonkwo',
    role: 'MILITARY VETERAN',
    quote:
      'The holistic approach here is real — not just marketing. Training, nutrition, and recovery all work together. I\'m in the best shape of my life at 42.',
    result: '+40lbs Bench Press',
    initials: 'DO',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const total = testimonials.length

  const goTo = (index) => setCurrent(index)
  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  const t = testimonials[current]

  return (
    <section className="testimonials">
      <div className="testimonials__inner">
        <span className="testimonials__label">The Proof</span>
        <h2 className="testimonials__title">
          WE MEASURE SUCCESS,{' '}
          <span className="testimonials__title-muted">
            IN METRICS NOT PROMISES.
          </span>
        </h2>

        <div className="testimonials__slider">
          <button
            type="button"
            className="testimonials__nav testimonials__nav--prev"
            onClick={prev}
            aria-label="Previous testimonial"
          >
            ‹
          </button>

          <article className="testimonials__card">
            <div className="testimonials__photo">
              <span className="testimonials__initials">{t.initials}</span>
            </div>
            <div className="testimonials__content">
              <span className="testimonials__quote-mark" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="testimonials__quote">{t.quote}</blockquote>
              <p className="testimonials__name">{t.name}</p>
              <p className="testimonials__role">{t.role}</p>
              <div className="testimonials__result">
                <span className="testimonials__result-label">KEY RESULT</span>
                <span className="testimonials__result-value">{t.result}</span>
              </div>
            </div>
          </article>

          <button
            type="button"
            className="testimonials__nav testimonials__nav--next"
            onClick={next}
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>

        <div className="testimonials__footer">
          <div className="testimonials__progress">
            <div
              className="testimonials__progress-fill"
              style={{ width: `${((current + 1) / total) * 100}%` }}
            />
          </div>
          <span className="testimonials__counter">
            {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>

        <div className="testimonials__dots">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              className={`testimonials__dot ${index === current ? 'testimonials__dot--active' : ''}`}
              onClick={() => goTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
