import { useRef, useState } from 'react'
import { Logo } from './Shared'
import './Footer.css'
import { siteConfig } from '../siteConfig'
export default function Footer() {
  const dialog = useRef(null)
  const [policy, setPolicy] = useState('')
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#home" aria-label="Infitnity home">
              <Logo />
            </a>
            <p className="footer__tagline">
              Train Beyond Limits. The ultimate ecosystem for physical
              evolution.
            </p>
          </div>
          <div className="footer__links">
            <div className="footer__col">
              <h2>Connect</h2>
              <ul>
                {[
                  ['Instagram', siteConfig.instagram],
                  ['Twitter', siteConfig.twitter],
                  ['YouTube', siteConfig.youtube],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noreferrer">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__col">
              <h2>Legal</h2>
              <ul>
                {['Privacy Policy', 'Terms of Service'].map((label) => (
                  <li key={label}>
                    {siteConfig[
                      label === 'Privacy Policy' ? 'privacy' : 'terms'
                    ] ? (
                      <a
                        href={
                          siteConfig[
                            label === 'Privacy Policy' ? 'privacy' : 'terms'
                          ]
                        }
                      >
                        {label}
                      </a>
                    ) : (
                      <button
                        onClick={() => {
                          setPolicy(label)
                          dialog.current.showModal()
                        }}
                      >
                        {label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© 2026 INFINITY Gym. All rights reserved</p>
          <p className="footer__impact">BUILT FOR IMPACT.</p>
        </div>
      </div>
      <dialog ref={dialog} className="media-dialog">
        <button
          className="dialog-close"
          aria-label="Close policy"
          onClick={() => dialog.current.close()}
        >
          ×
        </button>
        <h2>{policy}</h2>
        <p>
          Please contact our team to request the current {policy.toLowerCase()}.
        </p>
        <a
          href="#contact"
          className="button"
          onClick={() => dialog.current.close()}
        >
          Contact Us
        </a>
      </dialog>
    </footer>
  )
}
