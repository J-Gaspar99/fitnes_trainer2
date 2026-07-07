import { motion } from 'framer-motion'
import { FaGem, FaChartLine, FaCrown, FaGraduationCap, FaClock, FaInfinity } from 'react-icons/fa'
import { site } from '../../data/content'
import SectionHeader from '../ui/SectionHeader'
import Stagger from '../ui/Stagger'
import { fadeUpChild } from '../ui/motion'

const icons = [FaGem, FaChartLine, FaCrown, FaGraduationCap, FaClock, FaInfinity]

export default function Benefits() {
  const { benefits } = site

  return (
    <section id="benefiti" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-[#3d2a5c]/20 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader label={benefits.label} title={benefits.title} subtitle={benefits.subtitle} />

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.items.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.div
                key={item.title}
                variants={fadeUpChild}
                whileHover={{ y: -5 }}
                className="glass-gold rounded-2xl p-8"
              >
                <div className="w-12 h-12 rounded-full border border-[#d4af37]/25 flex items-center justify-center text-[#d4af37]/80 mb-6">
                  <Icon size={18} />
                </div>
                <h3 className="font-display text-lg text-white mb-3">{item.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed font-light">{item.description}</p>
              </motion.div>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
