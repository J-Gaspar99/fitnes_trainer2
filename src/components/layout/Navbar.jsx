import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { site } from '../../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-[9000] transition-all duration-500 ${
        scrolled || open
          ? 'bg-[#1a0a2e]/90 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="#pocetna" className="flex items-center gap-3 group">
          <img
            src="/images/brand/logo.png"
            alt="Logo"
            className="h-10 w-10 rounded-full object-cover border border-[#d4af37]/20"
          />
          <div className="hidden sm:block">
            <span className="font-display text-sm font-semibold text-white block leading-tight">
              {site.name}
            </span>
            <span className="text-[0.6rem] tracking-[0.25em] uppercase text-white/50">Fitnes</span>
          </div>
        </a>

        <nav className="hidden xl:flex items-center gap-8">
          {site.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-gold text-[0.72rem] font-medium tracking-[0.1em] uppercase text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontakt"
          className="hidden md:inline-flex glass-gold px-6 py-2.5 text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-white rounded-full hover:scale-[1.02] transition-transform duration-500"
        >
          Zakaži termin
        </a>

        <button
          className="xl:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Meni"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 top-0 z-[8999] flex flex-col items-center justify-center gap-8 bg-[#1a0a2e]/98 backdrop-blur-2xl px-6"
            >
              {site.nav.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="font-display text-2xl text-white"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="glass-gold px-8 py-3 text-sm tracking-widest uppercase text-white rounded-full mt-4"
              >
                Zakaži termin
              </a>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </motion.header>
  )
}
