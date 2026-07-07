import { motion } from 'framer-motion'
import { site } from '../../data/content'
import SectionHeader from '../ui/SectionHeader'
import Stagger from '../ui/Stagger'
import { fadeUpChild } from '../ui/motion'

export default function About() {
  const { about } = site

  return (
    <section id="o-meni" className="section-purple relative py-28 lg:py-36">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader label={about.label} title={about.title} />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Stagger className="flex flex-col gap-6">
            {about.paragraphs.map((p) => (
              <motion.p
                key={p.slice(0, 40)}
                variants={fadeUpChild}
                className="text-white/70 text-[0.95rem] lg:text-[1.05rem] leading-[1.85] font-light"
              >
                {p}
              </motion.p>
            ))}

            <motion.div variants={fadeUpChild} className="flex flex-wrap gap-3 pt-4">
              {about.highlights.map((h) => (
                <span
                  key={h}
                  className="glass px-4 py-2 rounded-full text-xs tracking-wide text-white/80"
                >
                  {h}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUpChild}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10"
            >
              {about.stats.map((s) => (
                <div key={s.label}>
                  <span className="font-display text-2xl lg:text-3xl text-white block">{s.value}</span>
                  <span className="text-[0.65rem] tracking-wider uppercase text-white/45 mt-1 block">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </Stagger>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="glass-gold rounded-2xl overflow-hidden aspect-[3/4] max-w-md mx-auto">
              <img
                src={about.image}
                alt={site.name}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#d4af37]/30 rounded-2xl pointer-events-none hidden lg:block" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
