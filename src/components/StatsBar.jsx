import './StatsBar.css'

const stats = [
  { value: '500+', label: 'Members' },
  { value: '50+', label: 'Programs' },
  { value: '10+', label: 'Expert Trainers' },
]

export default function StatsBar() {
  return (
    <section id="stats" className="stats">
      <div className="stats__inner">
        {stats.map((stat, index) => (
          <div key={stat.label} className="stats__item">
            {index > 0 && <div className="stats__divider" aria-hidden="true" />}
            <span className="stats__value">{stat.value}</span>
            <span className="stats__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
