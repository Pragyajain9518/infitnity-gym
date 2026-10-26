import './StatsBar.css'
export default function StatsBar() {
  return (
    <section id="stats" className="stats">
      <div className="container stats__inner">
        {[
          ['500+', 'Elite Members'],
          ['50+', 'Transformations'],
          ['10+', 'Master Trainers'],
        ].map(([value, label]) => (
          <div key={label} className="stats__item">
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
