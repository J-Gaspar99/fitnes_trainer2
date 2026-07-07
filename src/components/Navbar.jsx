import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { siteContent } from '../data/content'

const navLinks = [
  { href: '#pocetna', label: 'Početna' },
  { href: '#program', label: 'Program' },
  { href: '#o-meni', label: 'O meni' },
  { href: '#planovi', label: 'Planovi' },
  { href: '#galerija', label: 'Galerija' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return undefined

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--menu-open' : ''}`}>
      <div className="container navbar__inner">
        <a href="#pocetna" className="navbar__logo">
          <img
            src="/images/brand/mark.png"
            alt=""
            className="navbar__logo-mark"
            aria-hidden="true"
          />
          <span className="navbar__brand">
            <span className="navbar__brand-name">Marija Đorđević</span>
            <span className="navbar__brand-tag">Fitness</span>
          </span>
        </a>

        <nav className="navbar__nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#kontakt" className="btn btn--gold navbar__cta">
          Zakaži termin
        </a>

        <button
          className="navbar__burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Meni"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {createPortal(
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <button
                type="button"
                className="mobile-menu__backdrop"
                onClick={closeMenu}
                aria-label="Zatvori meni"
              />

              <div className="mobile-menu__bg" aria-hidden="true">
                <div className="mobile-menu__bg-gradient" />
                <div className="mobile-menu__bg-glow mobile-menu__bg-glow--purple" />
                <div className="mobile-menu__bg-glow mobile-menu__bg-glow--gold" />
              </div>

              <button
                type="button"
                className="mobile-menu__close"
                onClick={closeMenu}
                aria-label="Zatvori meni"
              >
                <HiX />
              </button>

              <div className="mobile-menu__content">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="mobile-menu__link"
                    onClick={handleNavClick}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <a href="#kontakt" className="btn btn--gold shimmer-btn" onClick={handleNavClick}>
                  Zakaži termin
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </header>
  )
}
