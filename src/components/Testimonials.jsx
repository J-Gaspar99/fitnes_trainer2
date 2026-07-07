import LightShimmerText from './LightShimmerText'
import { siteContent } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Testimonials() {
  const headerRef = useScrollReveal()
  const { testimonials } = siteContent

  return (
    <section id="utisci" className="section testimonials">
      <div className="container">
        <div className="section-header scroll-reveal" ref={headerRef}>
          <span className="section-label">{testimonials.label}</span>
          <LightShimmerText as="h2" variant="title" className="section-title">
            {testimonials.title}
          </LightShimmerText>
        </div>

        <div className="testimonials__grid">
          {testimonials.items.map((item, i) => (
            <TestimonialCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ item, index }) {
  const ref = useScrollReveal(0.1)

  return (
    <blockquote
      className="testimonial-card scroll-reveal"
      ref={ref}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <p className="testimonial-card__quote">"{item.quote}"</p>
      <footer>
        <span className="testimonial-card__name">{item.name}, {item.age}</span>
      </footer>
    </blockquote>
  )
}
