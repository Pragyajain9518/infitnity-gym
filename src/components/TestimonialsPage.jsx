import { useRef, useState } from 'react'
import assets from '../assets/design-assets.json'
import { isPlaceholderUrl, siteConfig } from '../siteConfig'
import { CallToAction } from './Shared'

const a = assets['1:424']
const stories = [
  [
    'David Chen',
    'Elite Member',
    'The personalized coaching corrected my squat mechanics in one session. Dropped 14% body fat in under 6 months.',
    a.imgRectangle1,
  ],
  [
    'Marcus Thorne',
    'Personal Training',
    'Consistency was always my struggle. The accountability structure at Infitnity kept me showing up even on bad days.',
    a.imgRectangle2,
  ],
  [
    'Zoe Harrington',
    'Lifestyle Coaching',
    'Finally, a gym that understands women’s physiology. My energy levels have doubled since starting.',
    a.imgRectangle3,
  ],
  [
    'James Holloway',
    'Master Tier',
    'I came for the aesthetics, I stayed for the community. The vibe here is focused but incredibly supportive.',
    a.imgRectangle4,
  ],
  [
    'Maya Webb',
    'Elite Member',
    'The 12-client limit makes a world of difference. No waiting for machines, just pure, uninterrupted focus.',
    a.imgRectangle5,
  ],
  [
    'Ethan Blackwell',
    'Powerlifting',
    'From a 200lb deadlift to 450lb. The periodized programming works if you do the work.',
    a.imgRectangle6,
  ],
  [
    'Claire Bennet',
    'Transformation',
    'The nutrition coaching was the missing piece. I’m eating more than ever and look better than I did at 20.',
    a.imgRectangle7,
  ],
  [
    'Alex Rivera',
    'Elite Member',
    'Infitnity isn’t just a gym; it’s an investment in how I’ll move for the next 40 years of my life.',
    a.imgRectangle8,
  ],
]
const journeys = [
  ['Elena Rossi', 'Elite Member', a.imgThumbnail],
  ['Kevin Sterling', 'Transformation', a.imgThumbnail1],
  ['Sruthi K.', 'Lifestyle Coaching', a.imgThumbnail2],
]

export default function TestimonialsPage() {
  const [selected, setSelected] = useState(null)
  const dialog = useRef(null)
  return (
    <main>
      <section className="page-intro container">
        <h1>
          From The Infitnity
          <br />
          <span>Community</span>
        </h1>
        <p>
          Honest experiences from people who chose structured guidance and
          discovered what real, sustainable progress feels like.
        </p>
      </section>
      <section
        className="container featured-story"
        aria-label="Featured transformation"
      >
        <img
          src={a.imgFeaturedImage}
          alt="Member lifting a barbell in the studio"
        />
        <div className="featured-story__body">
          <span className="eyebrow">Featured Transformation</span>
          <blockquote>
            “After 3 years of chronic back pain, I thought my lifting days were
            over. Infitnity’s biomechanics screening identified a severe
            imbalance in my kinetic chain. 12 weeks later, I’m completely
            pain-free and pulling 405lbs off the floor.”
          </blockquote>
          <div className="featured-story__meta">
            <div className="member">
              <img src={a.imgRectangle} alt="" />
              <div>
                <strong>Sarah Jenkins</strong>
                <small>Software Engineer</small>
              </div>
            </div>
            <div>
              <small>Result</small>
              <strong>+85lbs DL</strong>
            </div>
            <div>
              <small>Status</small>
              <strong>Pain-Free</strong>
            </div>
          </div>
        </div>
      </section>
      <section className="container story-section">
        <span className="eyebrow">More Stories. More Progress</span>
        <h2>Join the hundreds of members</h2>
        <div className="story-grid">
          {stories.map(([name, role, quote, image]) => (
            <article className="story-card" key={name}>
              <img className="story-quote" src={a.imgVector} alt="" />
              <blockquote>{quote}</blockquote>
              <div className="member">
                <img src={image} alt="" loading="lazy" />
                <div>
                  <h3>{name}</h3>
                  <small>{role}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="container journey-section">
        <span className="eyebrow">Results, Unscripted</span>
        <h2>Watch Their Journey</h2>
        <div className="journey-grid">
          {journeys.map(([name, role, image], index) => (
            <article key={name}>
              <button
                className="journey-thumbnail"
                aria-label={`Watch ${name}’s journey`}
                onClick={() => {
                  setSelected({ name, image, url: siteConfig.videos[index] })
                  dialog.current.showModal()
                }}
              >
                <img src={image} alt={name} loading="lazy" />
                <span>
                  <img src={a.imgPlay} alt="" />
                </span>
              </button>
              <h3>{name}</h3>
              <p>{role}</p>
            </article>
          ))}
        </div>
      </section>
      <CallToAction title="Ready to Rewrite Your Fitness Story?">
        Take the first step towards a stronger, pain-free future. Consult with
        our master trainers today.
      </CallToAction>
      <dialog ref={dialog} className="media-dialog">
        <button
          className="dialog-close"
          aria-label="Close video"
          onClick={() => dialog.current.close()}
        >
          ×
        </button>
        <h2>{selected?.name}’s Journey</h2>
        {!isPlaceholderUrl(selected?.url) ? (
          <video
            key={selected.url}
            src={selected.url}
            poster={selected.image}
            controls
            playsInline
            preload="metadata"
          >
            Your browser does not support video playback.
          </video>
        ) : (
          <>
            <img
              className="video-placeholder"
              src={selected?.image}
              alt={selected?.name || ''}
            />
            <p>
              Video preview coming soon. Talk with our team to learn more about
              our members’ progress.
            </p>
            <a
              className="button"
              href="#contact"
              onClick={() => dialog.current.close()}
            >
              Talk to us
            </a>
          </>
        )}
      </dialog>
    </main>
  )
}
