import './StatsBar.css'

const stats = [
  { value: '500+', label: 'Elite Members', labelDesktop: 'Members' },
  { value: '50+', label: 'Transformations', labelDesktop: 'Programs' },
  { value: '10+', label: 'Master Trainers', labelDesktop: 'Expert Trainers' },
]

export default function StatsBar() {
  return (
    <section id="stats" className="stats">
      <div className="stats__inner">
        {stats.map((stat) => (
          <div key={stat.label} className="stats__item">
            <span className="stats__value">{stat.value}</span>
            <span className="stats__label stats__label--mobile">{stat.label}</span>
            <span className="stats__label stats__label--desktop">{stat.labelDesktop}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
