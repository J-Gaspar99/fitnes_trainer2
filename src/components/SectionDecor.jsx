const DECOR_PRESETS = {
  program: ['top'],
  about: ['bottom'],
  plans: ['top'],
  steps: ['bottom'],
  value: ['top', 'bottom'],
  cta: ['top'],
  gallery: ['bottom'],
  testimonials: ['top'],
  contact: ['top', 'bottom'],
}

export default function SectionDecor({ variant }) {
  const positions = DECOR_PRESETS[variant]
  if (!positions) return null

  return (
    <div className={`section-decor section-decor--${variant}`} aria-hidden="true">
      {positions.map((pos) => (
        <img
          key={`${variant}-${pos}`}
          src="/images/decor/waves-gold.png"
          alt=""
          className={`section-decor__waves section-decor__waves--${pos}`}
          loading="lazy"
        />
      ))}
    </div>
  )
}
