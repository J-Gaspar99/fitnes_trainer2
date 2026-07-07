import { motion } from 'framer-motion'
import { site } from '../../data/content'
import SectionHeader from '../ui/SectionHeader'
import Stagger from '../ui/Stagger'
import { fadeUpChild } from '../ui/motion'

export default function Process() {
  const { process } = site

  return (
    <section id="proces" className="section-purple relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader label={process.label} title={process.title} subtitle={process.subtitle} />

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {process.steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUpChild}
              whileHover={{ y: -5 }}
              className="glass-gold rounded-2xl p-8 relative"
            >
              <span className="inline-flex w-12 h-12 items-center justify-center rounded-full border border-[#d4af37]/40 text-[#d4af37] font-display text-sm mb-6">
                {step.number}
              </span>
              <h3 className="font-display text-lg text-white mb-3">{step.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed font-light">{step.description}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
