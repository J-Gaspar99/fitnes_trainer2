import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { fadeUpChild } from './motion'

export default function SectionHeader({ label, title, subtitle, align = 'center' }) {
  const alignClass =
    align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto'

  return (
    <div className={`flex flex-col gap-5 mb-16 md:mb-20 max-w-3xl ${alignClass}`}>
      {label && (
        <Reveal delay={0}>
          <span className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-[#d4af37]/75">
            {label}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-tight text-white">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.18}>
          <p className="text-white/65 text-base md:text-lg leading-[1.8] font-light">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}

export function AnimatedParagraph({ children, className = '', delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <p className={`text-white/65 text-base lg:text-[1.05rem] leading-[1.85] font-light ${className}`}>
        {children}
      </p>
    </Reveal>
  )
}

export function StaggerHeader({ label, title, subtitle, className = '' }) {
  return (
    <motion.div
      className={`flex flex-col gap-5 mb-16 md:mb-20 max-w-3xl text-center items-center mx-auto ${className}`}
      variants={fadeUpChild}
    >
      {label && (
        <span className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-[#d4af37]/75">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/65 text-base md:text-lg leading-[1.8] font-light">{subtitle}</p>
      )}
    </motion.div>
  )
}
