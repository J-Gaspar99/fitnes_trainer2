import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { site } from '../../data/content'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'

export default function Testimonials() {
  const { testimonials } = site
  const [index, setIndex] = useState(0)
  const item = testimonials.items[index]

  const prev = () => setIndex((i) => (i - 1 + testimonials.items.length) % testimonials.items.length)
  const next = () => setIndex((i) => (i + 1) % testimonials.items.length)

  return (
    <section id="utisci" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeader label={testimonials.label} title={testimonials.title} />

        <Reveal>
          <div className="glass-gold rounded-3xl p-10 lg:p-14 text-center relative">
            <span className="font-display text-7xl text-[#d4af37]/15 absolute top-6 left-8 leading-none">
              "
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex justify-center gap-1 mb-8">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar key={i} className="text-[#d4af37]/70 text-sm" />
                  ))}
                </div>
                <p className="text-white/75 text-lg lg:text-xl leading-relaxed font-light italic mb-8">
                  "{item.quote}"
                </p>
                <p className="font-display text-white text-lg">{item.name}</p>
                <p className="text-white/40 text-xs tracking-widest uppercase mt-1">{item.role}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 mt-10">
              <button onClick={prev} className="w-11 h-11 rounded-full glass flex items-center justify-center text-white/70 hover:text-white transition-colors" aria-label="Prethodni">
                <HiChevronLeft />
              </button>
              <button onClick={next} className="w-11 h-11 rounded-full glass flex items-center justify-center text-white/70 hover:text-white transition-colors" aria-label="Sledeći">
                <HiChevronRight />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
