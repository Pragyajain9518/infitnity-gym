import './AboutUsPage.css'
import assets from '../assets/design-assets.json'
import { CallToAction, PageHero } from './Shared'

const a = assets['1:988']

const stats = [
  { value: '500+', label: 'Members' },
  { value: '50+', label: 'Transformations' },
  { value: '10+', label: 'Expert Coaches' },
  { value: '95%', label: 'Retention Rate' },
]

const minds = [
  {
    name: 'Tejas',
    role: 'Founder',
    years: '10+ Years',
    image: a.imgPhoto,
    copy: 'Tejas believes fitness should do more than transform bodies. Through years of coaching, he has helped people build strength, confidence, and healthier lifestyles by focusing on what lasts: good movement, better habits, and long-term health.',
    tags: ['Strength & Conditioning', 'Habit-Building', 'Movement Quality'],
    quote:
      'Infitnity is my way of delivering coaching that prioritizes long-term health over short-term transformations.',
  },
  {
    name: 'Sruti',
    role: 'Co-Founder',
    years: '9+ Years',
    image: a.imgPhoto1,
    copy: 'With a background in UX design and customer experience, Sruti understands that meaningful progress starts with feeling supported. She helps shape every part of the Infitnity journey to be thoughtful, personal, and built around the individual.',
    tags: ['Customer Experience', 'Community Building', 'Journey Design'],
    quote:
      'People achieve more when they feel seen, supported, and genuinely cared for.',
  },
]

const facility = [
  'State-of-the-Art Equipment',
  'Dedicated Functional Training Zone',
  'Premium Recovery Suite',
  'Expert-Led Group Classes',
  'Personalized Programming',
]

const standards = [
  {
    title: 'Precision Over Intensity',
    copy: 'We believe lasting results come from doing things right, not simply doing more. Every movement, habit, and decision should serve a purpose.',
  },
  {
    title: 'Longevity Over Short-Term Wins',
    copy: 'Fitness isn’t a phase or a quick fix. We focus on building strength, health, and resilience that support you for years to come.',
  },
  {
    title: 'Education Over Instruction',
    copy: 'Our role is to help you understand your body, make informed choices, and build confidence for life.',
  },
  {
    title: 'Care In Every Detail',
    copy: 'If someone trusts us with their health, we have a responsibility to get it right. That is why we pay attention to the details others often overlook.',
  },
]

const stories = [
  {
    quote:
      'I was exhausted from generic HIIT classes that left me injured and burned out. The periodized strength programming completely changed my physique.',
    name: 'David Chen',
    role: 'Entrepreneur',
    result: 'Lost 14% Body Fat',
  },
  {
    quote:
      'After 3 years of chronic back pain, I thought my lifting days were over. Infitnity’s biomechanics screening identified a severe imbalance in my kinetic chain.',
    name: 'Sarah Jenkins',
    role: 'Software Engineer',
    result: '+85lbs Deadlift',
  },
  {
    quote:
      'The community here is unlike anywhere else. It’s a space where everyone is pushing themselves to be better, but with zero ego.',
    name: 'Marcus Thorne',
    role: 'Athlete',
    result: 'Improved Mobility',
  },
]

export default function AboutUsPage() {
  return (
    <main className="about-us">
      <PageHero
        className="about-us-hero"
        title={
          <>
            Built For The Long
            <br />
            Run. <span>Literally!</span>
          </>
        }
      >
        Infitnity pays attention. To the movement behind the exercise. The
        habits behind the results. The years beyond the goal.
        <br />
        Fitness should do more than change the way your body looks. It should
        support the way you live, move, and experience life for years to come.
      </PageHero>

      <section className="about-us__story about-us__container" id="about-story">
        <div className="about-us__story-copy">
          <span className="about-us__eyebrow">Our Story</span>
          <h2>From a single room to a movement</h2>
          <p>
            Infitnity began as a single room with a singular focus: to create a
            space where athletes and individuals could train without
            distraction. Over the years, we've grown into a premium facility,
            but our philosophy remains the same:community-first, results-driven,
            and built on the belief that every body deserves a personalized path
            to evolution.
          </p>
          <div className="about-us__mini-stats">
            <div>
              <strong>10+</strong>
              <span>Years of Elite Training</span>
            </div>
            <div>
              <strong>500+</strong>
              <span>Members Transformed</span>
            </div>
          </div>
        </div>
        <div className="about-us__story-media">
          <img
            src={a.imgStoryImage}
            alt="Coaches at the Infitnity studio"
            loading="lazy"
          />
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
        <span className="about-us__eyebrow">The Minds</span>
        <h2>The minds behind Infitnity</h2>
        <div className="about-us__mind-grid">
          {minds.map((person) => (
            <article className="about-us__mind" key={person.name}>
              <img src={person.image} alt={person.name} loading="lazy" />
              <h3>
                {person.name}
                <span className="about-us__mind-years">{person.years}</span>
              </h3>
              <span className="about-us__mind-role">{person.role}</span>
              <p>{person.copy}</p>
              <ul className="about-us__mind-tags">
                {person.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <p className="about-us__mind-quote">
                &ldquo;{person.quote}&rdquo;
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-us__equipment about-us__container">
        <span className="about-us__eyebrow">The Facility</span>
        <h2>World-class equipment. Unmatched environment.</h2>
        <div className="about-us__equipment-layout">
          <figure className="about-us__equipment-feature">
            <img
              src={a.imgHeroImage}
              alt="Infitnity training facility"
              loading="lazy"
            />
          </figure>

          <div className="about-us__equipment-grid">
            <img
              src={a.imgRectangle}
              alt="Training equipment at the studio"
              loading="lazy"
            />
            <img
              src={a.imgRectangle1}
              alt="Infitnity training space"
              loading="lazy"
            />
            <img
              src={a.imgRectangle}
              alt="Training equipment at the studio"
              loading="lazy"
            />
            <img
              src={a.imgRectangle1}
              alt="Infitnity training space"
              loading="lazy"
            />
          </div>

          <ul>
            {facility.map((item) => (
              <li key={item}>
                <img src={a.imgArrowRight} alt="" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-us__beliefs about-us__container">
        <article>
          <span className="about-us__eyebrow">Our Mission</span>
          <h2>Why we exist</h2>
          <p>
            To provide thoughtful guidance, genuine care, and expert coaching
            that empower people to build strength, confidence, and lasting
            health for life.
          </p>
          <img
            src={a.imgRectangle2}
            alt="Strength training at Infitnity"
            loading="lazy"
          />
        </article>
        <article>
          <span className="about-us__eyebrow">Our Vision</span>
          <h2>The future</h2>
          <p>
            To create a world where people build a stronger relationship with
            their body, making lifelong health the standard, not the exception.
          </p>
          <img
            src={a.imgRectangle3}
            alt="A premium training environment"
            loading="lazy"
          />
        </article>
      </section>

      <section className="about-us__standards">
        <div className="about-us__container">
          <span className="about-us__eyebrow">Our Values</span>
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
        <span className="about-us__eyebrow">Real Results</span>
        <h2>What our members say</h2>
        <div className="about-us__story-card-grid">
          {stories.map((story) => (
            <article className="about-us__story-card" key={story.name}>
              <img className="about-us__quote-icon" src={a.imgQuote} alt="" />
              <p>&ldquo;{story.quote}&rdquo;</p>
              <strong>{story.name}</strong>
              <em>{story.role}</em>
              <small>{story.result}</small>
            </article>
          ))}
        </div>
      </section>

      <CallToAction title="Join Our Infitnity Family" />
    </main>
  )
}
