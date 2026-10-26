import assets from '../assets/design-assets.json'
import { CallToAction, PageHero } from './Shared'

const images = assets['1:752']
const coaches = [
  [
    'Marcus Thorne',
    'Head Strength Coach',
    '12',
    'Specializing in periodized strength training and injury rehabilitation for high-performance athletes.',
    ['Strength', 'Rehab'],
    images.imgRectangle,
  ],
  [
    'Sarah Jenkins',
    'Lifestyle Coach',
    '8',
    'Expert in nutrition planning and hormonal balance for sustainable lifestyle changes.',
    ['Nutrition', 'Hormones'],
    images.imgRectangle1,
  ],
  [
    'David Chen',
    'Performance Coach',
    '15',
    'Focused on high-intensity interval training and powerlifting for competitive athletes.',
    ['Powerlifting', 'HIIT'],
    images.imgRectangle2,
  ],
  [
    'Elena Rossi',
    'Mobility Specialist',
    '10',
    'Expert in biomechanics and mobility screening to prevent chronic injuries.',
    ['Mobility', 'Biomechanics'],
    images.imgRectangle3,
  ],
  [
    'James Wilson',
    'Nutritionist',
    '9',
    'Clinical nutrition expert focusing on sports performance and body composition.',
    ['Clinical', 'Sports'],
    images.imgRectangle4,
  ],
  [
    'Amanda Lee',
    'Holistic Coach',
    '7',
    'Integrating mental health and physical training for total wellness.',
    ['Wellness', 'Mental'],
    images.imgRectangle5,
  ],
]

export default function CoachesPage() {
  return (
    <main className="coaches-page">
      <PageHero
        title={
          <>
            Meet The Coaches
            <br />
            Behind Your <span>Progress</span>
          </>
        }
        secondary="#coaches/team"
      >
        Our highly certified coaches combine expertise in strength, rehab,
        lifestyle, and performance to guide you with confidence. With
        personalized support and a focus on safe, long-term progress, they’re
        here to help you move better, get stronger, and stay consistent.
      </PageHero>
      <section
        className="container coach-grid"
        id="team"
        aria-label="Our coaches"
      >
        {coaches.map(([name, role, years, copy, tags, image]) => (
          <article className="coach-card" key={name}>
            <img
              className="coach-card__photo"
              src={image}
              alt={name}
              loading="lazy"
            />
            <div className="coach-card__body">
              <h2>{name}</h2>
              <p className="coach-card__role">{role}</p>
              <p className="coach-card__years">{years} Years Experience</p>
              <p>{copy}</p>
              <ul className="tags">
                {tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
      <CallToAction title="Let’s Design Your Progress." />
    </main>
  )
}
