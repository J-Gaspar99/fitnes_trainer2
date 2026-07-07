import { FaInstagram } from 'react-icons/fa'
import { site } from '../../data/content'
import Reveal from '../ui/Reveal'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/brand/logo.png" alt="Logo" className="h-10 w-10 rounded-full border border-[#d4af37]/20" />
              <span className="font-display text-white">{site.brand}</span>
            </div>
            <p className="text-white/45 text-sm font-light leading-relaxed">{site.tagline}</p>
          </Reveal>

          <Reveal delay={0.08}>
            <h4 className="text-[0.65rem] tracking-[0.2em] uppercase text-[#d4af37]/70 mb-4">Navigacija</h4>
            <div className="flex flex-col gap-2">
              {site.nav.slice(0, 5).map((l) => (
                <a key={l.href} href={l.href} className="link-gold text-sm text-white/50 hover:text-white transition-colors w-fit">
                  {l.label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <h4 className="text-[0.65rem] tracking-[0.2em] uppercase text-[#d4af37]/70 mb-4">Kontakt</h4>
            <div className="flex flex-col gap-2 text-sm text-white/50">
              <a href={`mailto:${site.contact.email}`} className="hover:text-white transition-colors">
                {site.contact.email}
              </a>
              <a href={`tel:${site.contact.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                {site.contact.phone}
              </a>
              <span>{site.contact.location}</span>
            </div>
            <a
              href={`https://instagram.com/${site.contact.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-4 text-white/50 hover:text-[#d4af37]/80 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </Reveal>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="text-white/25 text-xs">
            © {year} {site.brand}. Sva prava zadržana.
          </p>
          <p className="text-white/30 text-xs">
            Sajt urađen od strane{' '}
            <a
              href="https://audaxtim.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
            >
              Audax TIM
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
