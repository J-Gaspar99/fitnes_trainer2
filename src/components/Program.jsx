import LightShimmerText from './LightShimmerText'
import { FaClipboardList, FaVideo, FaAppleAlt, FaChartLine, FaFemale, FaDumbbell, FaWeight } from 'react-icons/fa'
import { siteContent } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

const programIcons = {
  plan: FaClipboardList,
  video: FaVideo,
  nutrition: FaAppleAlt,
  progress: FaChartLine,
}

const planIcons = {
  body: FaFemale,
  muscle: FaDumbbell,
  weight: FaWeight,
}

export default function Program() {
  const headerRef = useScrollReveal()
  const { program } = siteContent

  return (
    <section id="program" className="section program">
      <div className="container">
        <div className="section-header scroll-reveal" ref={headerRef}>
          <span className="section-label">{program.label}</span>
          <LightShimmerText as="h2" variant="title" className="section-title">
            {program.title}
          </LightShimmerText>
          <LightShimmerText as="p" variant="subtitle" className="section-subtitle">
            {program.subtitle}
          </LightShimmerText>
        </div>

        <div className="program__grid">
          {program.features.map((feature, i) => (
            <ProgramCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProgramCard({ feature, index }) {
  const ref = useScrollReveal(0.1)
  const Icon = programIcons[feature.icon]

  return (
    <div
      className="program-card scroll-reveal"
      ref={ref}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="program-card__icon">
        <Icon />
      </div>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </div>
  )
}

export function TrainingPlans() {
  const headerRef = useScrollReveal()
  const { trainingPlans } = siteContent

  return (
    <section id="planovi" className="section training-plans">
      <div className="training-plans__bg" />
      <div className="container">
        <div className="section-header scroll-reveal" ref={headerRef}>
          <span className="section-label">{trainingPlans.label}</span>
          <LightShimmerText as="h2" variant="title" className="section-title">
            {trainingPlans.title}
          </LightShimmerText>
        </div>

        <div className="training-plans__grid">
          {trainingPlans.plans.map((plan, i) => (
            <PlanCard key={plan.title} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PlanCard({ plan, index }) {
  const ref = useScrollReveal(0.1)
  const Icon = planIcons[plan.icon]

  return (
    <div
      className="plan-card scroll-reveal"
      ref={ref}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="plan-card__icon">
        <Icon />
      </div>
      <h3>{plan.title}</h3>
      <p>{plan.description}</p>
      <a href="#kontakt" className="plan-card__link">Saznaj više →</a>
    </div>
  )
}
