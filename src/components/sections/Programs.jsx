import { motion } from 'framer-motion'
import { site } from '../../data/content'
import SectionHeader from '../ui/SectionHeader'
import Stagger from '../ui/Stagger'
import Button from '../ui/Button'
import { fadeUpChild } from '../ui/motion'

export default function Programs() {
  const { programs } = site

  return (
    <section id="programi" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader label={programs.label} title={programs.title} />

        <Stagger className="grid lg:grid-cols-3 gap-8">
          {programs.items.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUpChild}
              whileHover={{ y: -8 }}
              className="glass-gold rounded-2xl p-10 flex flex-col text-center"
            >
              <h3 className="font-display text-2xl text-white mb-4">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed font-light flex-1 mb-8">
                {item.description}
              </p>
              <span className="text-[0.7rem] tracking-[0.15em] uppercase text-[#d4af37]/80 mb-6 block">
                {item.price}
              </span>
              <Button href="#kontakt" variant="secondary" className="!px-6 !py-3 !text-xs w-full">
                Saznaj više
              </Button>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
