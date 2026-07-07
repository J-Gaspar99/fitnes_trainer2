import { motion } from 'framer-motion'
import { site } from '../../data/content'
import SectionHeader from '../ui/SectionHeader'
import Stagger from '../ui/Stagger'
import { fadeUpChild } from '../ui/motion'

export default function Services() {
  const { services } = site

  return (
    <section id="usluge" className="section-purple relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader label={services.label} title={services.title} subtitle={services.subtitle} />

        <Stagger className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.items.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUpChild}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.5 }}
              className="glass-gold rounded-2xl p-8 lg:p-10 group"
            >
              <h3 className="font-display text-xl lg:text-2xl text-white mb-4">{item.title}</h3>
              <p className="text-white/70 text-sm leading-[1.8] font-light mb-6">
                {item.description}
              </p>
              <span className="text-[0.7rem] tracking-[0.15em] uppercase text-[#d4af37]/80">
                {item.price}
              </span>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
