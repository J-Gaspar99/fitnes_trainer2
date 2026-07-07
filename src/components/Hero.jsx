import LightShimmerText from './LightShimmerText'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { siteContent } from '../data/content'

function ChevronEdge() {
  return (
    <svg
      className="hero-zigzag__chevron"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <polyline
        className="hero-zigzag__chevron-line hero-zigzag__chevron-line--outer"
        points="100,0 0,50 100,100"
      />
    </svg>
  )
}

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const slides = siteContent.heroSlides

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length)
  }, [slides.length])

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]

  return (
    <section id="pocetna" className="hero-zigzag">
      <div className="hero-zigzag__content">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="hero-zigzag__copy"
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.45 }}
          >
            <span className="hero-zigzag__label">{slide.label}</span>
            <LightShimmerText as="h1" variant="title" className="hero-zigzag__title">
              {slide.title.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </LightShimmerText>
            <p className="hero-zigzag__desc">{slide.description}</p>
            <a href="#kontakt" className="btn btn--gold btn--lg shimmer-btn hero-zigzag__cta">
              {slide.cta}
            </a>
          </motion.div>
        </AnimatePresence>

        <div className="hero-zigzag__controls">
          <button type="button" onClick={prev} className="hero-zigzag__arrow" aria-label="Prethodni slajd">
            <HiChevronLeft />
          </button>
          <div className="hero-zigzag__dots">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`hero-zigzag__dot ${i === current ? 'hero-zigzag__dot--active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Slajd ${i + 1}`}
              />
            ))}
          </div>
          <button type="button" onClick={next} className="hero-zigzag__arrow" aria-label="Sledeći slajd">
            <HiChevronRight />
          </button>
        </div>
      </div>

      <div className="hero-zigzag__media">
        <ChevronEdge />
        <div className="hero-zigzag__image-clip">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.image}
              className={`hero-zigzag__slide-media${slide.imageVariant === 'brand' ? ' hero-zigzag__slide-media--brand' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
            >
              <img
                src={slide.image}
                alt=""
                className="hero-zigzag__image-bg"
                aria-hidden="true"
                style={{
                  '--hero-img-pos': slide.imagePosition || 'center center',
                  '--hero-img-pos-mobile': slide.imagePositionMobile || 'center bottom',
                }}
              />
              <img
                src={slide.image}
                alt={slide.label}
                className={`hero-zigzag__image${slide.imageVariant === 'brand' ? ' hero-zigzag__image--brand' : ''}`}
                style={{
                  '--hero-img-pos': slide.imagePosition || 'center center',
                  '--hero-img-pos-mobile': slide.imagePositionMobile || 'center bottom',
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
