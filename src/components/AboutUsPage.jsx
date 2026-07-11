import './AboutUsPage.css'

const stats = [
  { value: '500+', label: 'Members Built' },
  { value: '50+', label: 'Transformations' },
  { value: '10+', label: 'Expert Coaches' },
  { value: '95%', label: 'Member Retention' },
]

const minds = [
  {
    name: 'Tejas',
    role: 'Founder',
    image: '/hero.png',
    copy:
      'A strength coach focused on helping people build structure, confidence, and long-term discipline without the noise of generic gym culture.',
  },
  {
    name: 'Sachi',
    role: 'Co-Founder',
    image: '/services-bg.png',
    copy:
      'A movement-first coach who connects training, recovery, nutrition, and lifestyle into programs people can actually sustain.',
  },
]

const standards = [
  {
    title: 'Private Assessment',
    copy: 'Every member starts with movement, lifestyle, and goal mapping before programming begins.',
  },
  {
    title: 'Legacy Strength',
    copy: 'We build strong basics first, then progress intensity with purpose and accountability.',
  },
  {
    title: 'Holistic Performance',
    copy: 'Training works with sleep, stress, nutrition, and recovery instead of ignoring them.',
  },
  {
    title: 'Coach First',
    copy: 'Every plan is coached, measured, and adjusted around the person standing in front of us.',
  },
]

const stories = [
  'I finally understood what my body needed instead of copying random workouts.',
  'The coaching made training feel focused, personal, and sustainable.',
  'Infinity helped me move pain-free and build strength with confidence.',
]

export default function AboutUsPage() {
  return (
    <main className="about-us">
      <section className="about-us__hero">
        <div className="about-us__hero-bg" />
        <div className="about-us__container about-us__hero-inner">
          <div className="about-us__hero-copy">
            <span className="about-us__eyebrow">About Infinity</span>
            <h1>
              Built for the long run. <span>Literally.</span>
            </h1>
            <p>
              Infinity is a private training ecosystem for people who want
              coaching that respects their body, lifestyle, and ambition.
            </p>
            <div className="about-us__actions">
              <a className="about-us__button" href="#contact">
                Contact Us
              </a>
              <a className="about-us__button about-us__button--ghost" href="#about-story">
                Our Story
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about-us__story about-us__container" id="about-story">
        <div className="about-us__story-copy">
          <span className="about-us__eyebrow">The Story</span>
          <h2>From a single room to a movement</h2>
          <p>
            We began with a simple belief: people do not need louder gyms, they
            need better coaching. Infinity was built as a focused training
            space where strength, recovery, mobility, and nutrition are treated
            as one connected plan.
          </p>
          <div className="about-us__mini-stats">
            <div>
              <strong>10+</strong>
              <span>Years coaching</span>
            </div>
            <div>
              <strong>500+</strong>
              <span>Members transformed</span>
            </div>
          </div>
        </div>
        <div className="about-us__story-media">
          <img src="/hero.png" alt="" />
        </div>
      </section>

      <section className="about-us__numbers">
        <div className="about-us__container">
          <span className="about-us__eyebrow">Impact</span>
          <h2>The numbers that matter</h2>
          <div className="about-us__stat-grid">
            {stats.map((stat) => (
              <div className="about-us__stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-us__minds about-us__container">
        <span className="about-us__eyebrow">People</span>
        <h2>The minds behind Infinity</h2>
        <div className="about-us__mind-grid">
          {minds.map((person) => (
            <article className="about-us__mind" key={person.name}>
              <img src={person.image} alt="" />
              <h3>{person.name}</h3>
              <span>{person.role}</span>
              <p>{person.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-us__equipment about-us__container">
        <span className="about-us__eyebrow">The Space</span>
        <h2>World-class equipment. Unmatched environment.</h2>
        <div className="about-us__equipment-layout">
          <div className="about-us__equipment-grid">
            <img src="/services-bg.png" alt="" />
            <img src="/hero.png" alt="" />
            <img src="/about-hero.png" alt="" />
            <img src="/services-bg.png" alt="" />
          </div>
          <ul>
            <li>Premium strength training floor</li>
            <li>Private coaching bays</li>
            <li>Mobility and rehab tools</li>
            <li>Performance-focused lighting and layout</li>
          </ul>
        </div>
      </section>

      <section className="about-us__beliefs about-us__container">
        <article>
          <span className="about-us__eyebrow">Why We Exist</span>
          <h2>To make serious coaching personal again.</h2>
          <p>
            We reject one-size-fits-all training. Every member deserves a plan
            that understands their starting point and moves with their life.
          </p>
          <img src="/hero.png" alt="" />
        </article>
        <article>
          <span className="about-us__eyebrow">The Future</span>
          <h2>A smarter standard for fitness.</h2>
          <p>
            Infinity is building a coaching culture where progress is measured,
            human, and sustainable across every phase of life.
          </p>
          <img src="/services-bg.png" alt="" />
        </article>
      </section>

      <section className="about-us__standards">
        <div className="about-us__container">
          <span className="about-us__eyebrow">Principles</span>
          <h2>The standards we hold ourselves to</h2>
          <div className="about-us__standard-grid">
            {standards.map((standard, index) => (
              <article className="about-us__standard" key={standard.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{standard.title}</h3>
                <p>{standard.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-us__stories about-us__container">
        <span className="about-us__eyebrow">Community</span>
        <h2>What our members saw</h2>
        <div className="about-us__story-card-grid">
          {stories.map((story, index) => (
            <article className="about-us__story-card" key={story}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{story}</p>
              <strong>Member Story</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="about-us__join">
        <div className="about-us__container">
          <h2>Join our Infinity family.</h2>
          <p>Get a private consultation and start with a plan built for you.</p>
          <a className="about-us__button" href="#contact">
            Join Us
          </a>
        </div>
      </section>
    </main>
  )
}
