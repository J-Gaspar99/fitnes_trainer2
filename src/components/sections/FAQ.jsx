import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiPlus, HiMinus } from 'react-icons/hi'
import { site } from '../../data/content'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'

export default function FAQ() {
  const { faq } = site
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="section-purple relative py-28 lg:py-36">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeader label={faq.label} title={faq.title} />

        <div className="flex flex-col gap-4">
          {faq.items.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.06}>
              <div className="glass-gold rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-display text-base lg:text-lg text-white">{item.q}</span>
                  <span className="text-[#d4af37]/70 shrink-0">
                    {open === i ? <HiMinus /> : <HiPlus />}
                  </span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-white/60 text-sm leading-relaxed font-light">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
