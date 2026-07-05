import { useEffect, useState } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'David Chen',
    role: 'ENTREPRENEUR',
    quote:
      'I was exhausted from generic HIIT classes that left me sore but never stronger. The personalized strength programming completely changed my physique and my energy levels.',
    result: '-14% Body Fat',
    image: '/hero.png',
  },
  {
    name: 'Sarah Jenkins',
    role: 'SOFTWARE ENGINEER',
    quote:
      'After 3 years of chronic back pain, I thought my lifting days were over. Infinity\'s biomechanics screening identified a severe imbalance in my kinetic chain. 12 weeks later, I\'m completely pain-free and pulling 405lbs off the floor.',
    result: '+85lbs Deadlift',
    image: '/services-bg.png',
  },
  {
    name: 'Priya Sharma',
    role: 'PHYSICAL THERAPIST',
    quote:
      'As someone who understands movement, I was impressed by Infinity\'s focus on mechanics. They fixed my squat form and eliminated the knee pain I\'d had for years.',
    result: 'Pain-Free Squats',
    image: '/hero.png',
  },
  {
    name: 'Marcus Okonkwo',
    role: 'MILITARY VETERAN',
    quote:
      'The holistic approach here is real, not just marketing. Training, nutrition, and recovery all work together. I\'m in the best shape of my life at 42.',
    result: '+40lbs Bench Press',
    image: '/services-bg.png',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [cardWidth, setCardWidth] = useState(949)
  const total = testimonials.length

  useEffect(() => {
    const syncCardWidth = () => {
      if (window.innerWidth <= 760) {
        setCardWidth(Math.min(320, window.innerWidth - 48))
        return
      }

      setCardWidth(Math.min(949, window.innerWidth - 32))
    }

    syncCardWidth()
    window.addEventListener('resize', syncCardWidth)

    return () => window.removeEventListener('resize', syncCardWidth)
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % total)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [total])

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
          <div
            className="testimonials__track"
            style={{
              transform: `translateX(calc(50vw - ${
                current * (cardWidth + 10) + cardWidth / 2
              }px))`,
            }}
          >
            {testimonials.map((item, index) => (
              <article
                className={`testimonials__card ${
                  index === current ? 'testimonials__card--active' : ''
                }`}
                key={item.name}
                aria-hidden={index !== current}
              >
                <div className="testimonials__photo">
                  <img src={item.image} alt="" />
                  <span className="testimonials__corner testimonials__corner--tl" />
                  <span className="testimonials__corner testimonials__corner--br" />
                </div>

                <div className="testimonials__body">
                  <blockquote className="testimonials__quote">
                    &quot;{item.quote}&quot;
                  </blockquote>

                  <div className="testimonials__meta">
                    <div>
                      <p className="testimonials__name">{item.name}</p>
                      <p className="testimonials__role">{item.role}</p>
                    </div>
                    <div className="testimonials__divider" />
                    <div>
                      <span className="testimonials__result-label">KEY RESULT</span>
                      <span className="testimonials__result-value">{item.result}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="testimonials__footer" aria-label="Testimonial progress">
          <div className="testimonials__segments">
            {testimonials.map((item, index) => (
              <span
                key={item.name}
                className={`testimonials__segment ${
                  index === current ? 'testimonials__segment--active' : ''
                }`}
              />
            ))}
          </div>
          <span className="testimonials__counter">
            {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  )
}
