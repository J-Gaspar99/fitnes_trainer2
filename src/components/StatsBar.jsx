import { siteContent } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function StatsBar() {
  const ref = useScrollReveal()

  return (
    <section className="stats-bar">
      <div className="container stats-bar__inner scroll-reveal" ref={ref}>
        {siteContent.about.stats.map((stat) => (
          <div key={stat.label} className="stats-bar__item">
            <span className="stats-bar__value">{stat.value}</span>
            <span className="stats-bar__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
