import LightShimmerText from './LightShimmerText'
import SectionDecor from './SectionDecor'
import { siteContent } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function HowItWorks() {
  const headerRef = useScrollReveal()
  const { howItWorks } = siteContent

  return (
    <section id="kako-radi" className="section how-it-works">
      <SectionDecor variant="steps" />
      <div className="how-it-works__bg" />
      <div className="container">
        <div className="section-header scroll-reveal" ref={headerRef}>
          <span className="section-label">{howItWorks.label}</span>
          <LightShimmerText as="h2" variant="title" className="section-title">
            {howItWorks.title}
          </LightShimmerText>
        </div>

        <div className="steps-grid">
          {howItWorks.steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, index }) {
  const ref = useScrollReveal(0.08)

  return (
    <div
      className="step-card scroll-reveal"
      ref={ref}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <h3>{step.title}</h3>
      <p>{step.description}</p>
      <a href="#kontakt" className="step-card__cta">Zakaži termin →</a>
    </div>
  )
}
