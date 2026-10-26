import { useEffect, useRef, useState } from 'react'
import { Logo } from './Shared'
import './Navbar.css'

const links = [
  ['services', 'Services'],
  ['coaches', 'Coaches'],
  ['about', 'About Us'],
  ['testimonials', 'Testimonials'],
  ['contact', 'Contact Us'],
]
export default function Navbar({ currentPage }) {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const headerRef = useRef(null)
  function navigate(event) {
    setOpen(false)
    if (window.location.hash === event.currentTarget.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const escape = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
      if (e.key === 'Tab') {
        const controls = headerRef.current?.querySelectorAll('a[href],button')
        const first = controls?.[0],
          last = controls?.[controls.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }
    window.addEventListener('keydown', escape)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', escape)
    }
  }, [open])
  return (
    <header ref={headerRef} className="navbar">
      <div className="container navbar__inner">
        <a
          href="#home"
          aria-label="Infitnity home"
          onClick={navigate}
        >
          <Logo />
        </a>
        <button
          ref={toggleRef}
          className={`navbar__toggle ${open ? 'navbar__toggle--open' : ''}`}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="main-navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`navbar__nav ${open ? 'navbar__nav--open' : ''}`}
        >
          <ul className="navbar__links">
            {links.map(([page, label]) => (
              <li key={page}>
                <a
                  href={`#${page}`}
                  aria-current={currentPage === page ? 'page' : undefined}
                  onClick={navigate}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
