import assets from '../assets/design-assets.json'
import { Button } from './Shared'
import './Hero.css'
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__visual" aria-hidden="true">
        <img src={assets['1:2531'].imgRectangle1} alt="" />
        <div className="hero__gradient" />
      </div>
      <div className="container hero__content">
        <h1>
          WE TAKE IT
          <br />
          <span className="hero__muted">PERSONALLY</span>
          <span className="hero__exclaim">!</span>
        </h1>
        <div className="hero__body">
          <p>
            Train in a space limited to 12 people, where every 1-on-1 session is
            personalized for your body, lifestyle, and long-term health, so you
            finally see results without setbacks.
          </p>
          <div className="button-row">
            <Button />
            <Button href="#testimonials" outline arrow={false}>
              See Our Results
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
