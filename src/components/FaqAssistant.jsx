import { useEffect, useRef, useState } from 'react'
import assets from '../assets/design-assets.json'

const a = assets['1:3688']
const questions = [
  [
    'What is included in the membership?',
    'Access to all primary zones, basic metrics tracking, and 2 group sessions per month. Personal coaching requires the Elite tier.',
  ],
  [
    'Do you offer day passes?',
    <>
      Please <a href="#contact">contact our team</a> to discuss availability and
      find the right training option for you.
    </>,
  ],
  [
    'What are the facility hours?',
    'Mon – Fri: 5am – 10pm. Sat – Sun: 7am – 8pm.',
  ],
]
export default function FaqAssistant() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const toggle = useRef(null)
  useEffect(() => {
    if (!open) return
    const close = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggle.current?.focus()
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [open])
  return (
    <aside className="faq-assistant" aria-label="Frequently asked questions">
      {open && (
        <section className="faq-panel" id="faq-panel">
          <header>
            <h2>
              <span />
              Infinity Assistant
            </h2>
            <button
              aria-label="Close assistant"
              onClick={() => {
                setOpen(false)
                toggle.current?.focus()
              }}
            >
              <img src={a.imgIcon3} alt="" />
            </button>
          </header>
          <div className="faq-questions">
            {questions.map(([question, answer], index) => (
              <div className="faq-item" key={question}>
                <button
                  aria-expanded={active === index}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setActive(active === index ? -1 : index)}
                >
                  {question}
                  <img src={active === index ? a.imgIcon : a.imgIcon1} alt="" />
                </button>
                <div id={`faq-answer-${index}`} hidden={active !== index}>
                  <p>{answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      <button
        className="faq-toggle"
        ref={toggle}
        aria-label={open ? 'Close assistant' : 'Open assistant'}
        aria-expanded={open}
        aria-controls="faq-panel"
        onClick={() => setOpen(!open)}
      >
        <img src={open ? a.imgIcon3 : a.imgIcon2} alt="" />
      </button>
    </aside>
  )
}
