import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <h2 className="footer__logo">INFINITY</h2>
            <p className="footer__tagline">
              Train Beyond Limits. The ultimate ecosystem for physical evolution.
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__col">
              <h3 className="footer__col-title">Connect</h3>
              <ul>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__col">
              <h3 className="footer__col-title">Legal</h3>
              <ul>
                <li>
                  <a href="#privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="#terms">Terms Of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; 2026 INFINITY Gym. All Rights Reserved
          </p>
          <p className="footer__impact">BUILT FOR IMPACT.</p>
        </div>
      </div>
    </footer>
  )
}
