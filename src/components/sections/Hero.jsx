import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { site } from '../../data/content'
import Stagger from '../ui/Stagger'
import Button from '../ui/Button'
import GoldBeamTitle from '../ui/GoldBeamTitle'
import { fadeUpChild } from '../ui/motion'

const SLIDE_MS = 5000

export default function Hero() {
  const { hero } = site
  const images = hero.images.slice(0, 3)
  const [index, setIndex] = useState(0)
  const [hovered, setHovered] = useState(false)

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    if (hovered) return undefined
    const t = setInterval(next, SLIDE_MS)
    return () => clearInterval(t)
  }, [next, hovered])

  const image = images[index]

  return (
    <section id="pocetna" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full py-16 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Leva polovina — naslov i tekst */}
          <Stagger className="flex flex-col gap-7 order-2 lg:order-1">
            <motion.div variants={fadeUpChild}>
              <span className="inline-block text-[0.68rem] font-semibold tracking-[0.32em] uppercase text-[#d4af37]/75 mb-5">
                Premium personalni trening
              </span>
              <GoldBeamTitle className="font-display text-[2rem] sm:text-4xl lg:text-[2.85rem] xl:text-5xl font-semibold leading-[1.12]">
                {hero.title}
              </GoldBeamTitle>
            </motion.div>

            {hero.paragraphs.map((p) => (
              <motion.p
                key={p.slice(0, 48)}
                variants={fadeUpChild}
                className="text-white/70 text-[0.95rem] lg:text-[1.05rem] leading-[1.85] font-light"
              >
                {p}
              </motion.p>
            ))}

            <motion.div variants={fadeUpChild} className="flex flex-wrap gap-4 pt-3">
              <Button href="#kontakt" variant="primary">
                {hero.ctaPrimary}
              </Button>
              <Button href="#galerija" variant="secondary">
                {hero.ctaSecondary}
              </Button>
            </motion.div>
          </Stagger>

          {/* Desna polovina — 3 rotirajuće slike */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="relative order-1 lg:order-2"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className="relative aspect-[4/5] max-w-[420px] mx-auto lg:ml-auto lg:mr-0">
              {/* Dekorativni okvir */}
              <div className="absolute -inset-px rounded-[1.25rem] bg-gradient-to-br from-[#d4af37]/25 via-transparent to-[#d4af37]/10 pointer-events-none" />
              <div className="absolute -bottom-5 -left-5 w-28 h-28 border border-[#d4af37]/20 rounded-2xl pointer-events-none hidden lg:block" />

              <div className="relative h-full rounded-[1.25rem] overflow-hidden glass-gold group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    loading="eager"
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{
                      opacity: 1,
                      scale: hovered ? 1.03 : 1,
                    }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 w-full h-full object-cover will-change-transform"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e]/70 via-[#1a0a2e]/10 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Indikatori — 3 slike */}
            <div className="flex justify-center lg:justify-end gap-3 mt-8 max-w-[420px] mx-auto lg:ml-auto lg:mr-0">
              {images.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`group/thumb relative overflow-hidden rounded-lg transition-all duration-500 ${
                    i === index
                      ? 'w-16 h-20 ring-1 ring-[#d4af37]/50 opacity-100'
                      : 'w-12 h-16 opacity-45 hover:opacity-75'
                  }`}
                  aria-label={`Prikaži sliku ${i + 1}`}
                >
                  <img
                    src={img.src}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
