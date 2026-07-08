import SectionDecor from './SectionDecor'
import { siteContent } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function CtaBanner() {
  const ref = useScrollReveal()
  const { ctaBanner } = siteContent

  return (
    <section className="section cta-banner">
      <SectionDecor variant="cta" />
      <div className="cta-banner__bg" />
      <div className="container">
        <div className="cta-banner__header scroll-reveal" ref={ref}>
          <h2 className="cta-banner__title">{ctaBanner.title}</h2>
          <p>{ctaBanner.subtitle}</p>
        </div>

        <div className="cta-banner__cards">
          {ctaBanner.cards.map((card) => (
            <CtaCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaCard({ card }) {
  const ref = useScrollReveal(0.1)

  return (
    <div className="cta-card scroll-reveal" ref={ref}>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      <a href="#kontakt" className="btn btn--outline shimmer-border">
        {card.cta}
      </a>
    </div>
  )
}
