import { useState } from 'react'
import assets from '../assets/design-assets.json'
import { isPlaceholderUrl, siteConfig } from '../siteConfig'

const a = assets['1:615']
export default function ContactPage() {
  const [status, setStatus] = useState('')
  const [busy, setBusy] = useState(false)
  async function submit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const fields = Object.fromEntries(new FormData(form))
    if (
      !fields.firstName.trim() ||
      !fields.lastName.trim() ||
      !fields.message.trim()
    ) {
      setStatus('Please enter your name and message.')
      return
    }
    const endpoint = siteConfig.contactEndpoint
    if (isPlaceholderUrl(endpoint)) {
      setStatus(
        'Your demo message is complete. This preview does not send enquiries. Connect with our team directly for a consultation.',
      )
      form.reset()
      return
    }
    setBusy(true)
    setStatus('')
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      if (!response.ok) throw new Error('Submission failed')
      setStatus(
        'Thank you! Your message has been sent. Our team will be in touch.',
      )
      form.reset()
    } catch {
      setStatus(
        'We couldn’t send your message. Please try again, or contact us by email or phone.',
      )
    } finally {
      setBusy(false)
    }
  }
  return (
    <main>
      <section className="container page-intro contact-intro">
        <h1>
          Your Progress Starts
          <br />
          With A <span>Conversation</span>
        </h1>
        <p>
          Tell us where you are, what you’ve tried, and where you want to go.
          We’ll guide you with a personalized path built for long-term strength.
        </p>
      </section>
      <section className="container contact-layout" aria-label="Get in touch">
        <form className="contact-panel" onSubmit={submit}>
          <h2>Send Us a Message</h2>
          <div className="form-grid">
            <label>
              First Name
              <input
                name="firstName"
                autoComplete="given-name"
                placeholder="Enter your first name"
                required
                maxLength={100}
              />
            </label>
            <label>
              Last Name
              <input
                name="lastName"
                autoComplete="family-name"
                placeholder="Enter your last name"
                required
                maxLength={100}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="name@example.com"
                required
                maxLength={254}
              />
            </label>
            <label>
              Phone
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="+1 (555) 000-0000"
                maxLength={40}
              />
            </label>
            <label className="form-full">
              Message
              <textarea
                name="message"
                placeholder="How can we help you today?"
                required
                rows={4}
                maxLength={5000}
              />
            </label>
          </div>
          <button className="button" type="submit" disabled={busy}>
            {busy ? 'Sending…' : 'Submit Message'}
            <img src={a.imgIcon} alt="" />
          </button>
          <p className="form-status" role="status">
            {status}
          </p>
        </form>
        <aside className="contact-panel contact-info">
          <h2>Contact Information</h2>
          <ul>
            <li>
              <img src={a.imgMapPin} alt="" />
              <div>
                <h3>Address</h3>
                <p>{siteConfig.address}</p>
              </div>
            </li>
            <li>
              <img src={a.imgPhone} alt="" />
              <div>
                <h3>Phone</h3>
                <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, '')}`}>
                  {siteConfig.phone}
                </a>
              </div>
            </li>
            <li>
              <img src={a.imgMail} alt="" />
              <div>
                <h3>Email</h3>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
            </li>
            <li>
              <img src={a.imgClock} alt="" />
              <div>
                <h3>Hours</h3>
                <p>
                  Mon - Fri: 5am - 10pm
                  <br />
                  Sat - Sun: 7am - 8pm
                </p>
              </div>
            </li>
          </ul>
          <h3 className="contact-follow">Follow Us</h3>
          <div className="social-links">
            {[
              ['Instagram', a.imgInstagram, siteConfig.instagram],
              ['Twitter', a.imgTwitter, siteConfig.twitter],
              ['YouTube', a.imgYoutube, siteConfig.youtube],
            ].map(([name, image, href]) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                target="_blank"
                rel="noreferrer"
              >
                <img src={image} alt="" />
              </a>
            ))}
          </div>
        </aside>
      </section>
      <section className="container map-section">
        <span className="eyebrow">Visit Our Facility</span>
        <h2>Find Your Way to Elite Performance</h2>
        <div className="facility-map">
          <img
            src={a.imgMapContainer}
            alt="Illustrated map showing the Infitnity HQ location"
            loading="lazy"
          />
          <span className="facility-map__label">Infitnity HQ</span>
          <span className="facility-map__pin">
            <img src={a.imgTarget} alt="" />
          </span>
        </div>
      </section>
    </main>
  )
}
