import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaInstagram } from 'react-icons/fa'
import { site } from '../../data/content'
import SectionHeader from '../ui/SectionHeader'
import Stagger from '../ui/Stagger'
import { fadeUpChild } from '../ui/motion'

export default function Contact() {
  const { contact } = site
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  const fields = [
    { icon: HiMail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: HiPhone, label: 'Telefon', value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
    { icon: FaInstagram, label: 'Instagram', value: contact.instagram, href: `https://instagram.com/${contact.instagram.replace('@', '')}` },
    { icon: HiLocationMarker, label: 'Lokacija', value: contact.location },
  ]

  return (
    <section id="kontakt" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 bg-radial-[ellipse_at_bottom] from-[#3d2a5c]/25 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Kontakt"
          title="Zakažite uvodnu konsultaciju"
          subtitle="Prvi korak ka transformaciji. Popunite formu ili nas kontaktirajte direktno — odgovaramo u roku od 24 sata."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <Stagger className="flex flex-col gap-4">
            {fields.map((f) => (
              <motion.div key={f.label} variants={fadeUpChild} className="glass-gold rounded-2xl p-6 flex items-center gap-5">
                <f.icon className="text-[#d4af37]/70 text-xl shrink-0" />
                <div>
                  <span className="text-[0.65rem] tracking-widest uppercase text-white/40 block mb-1">
                    {f.label}
                  </span>
                  {f.href ? (
                    <a href={f.href} target={f.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-white hover:text-[#d4af37]/80 transition-colors">
                      {f.value}
                    </a>
                  ) : (
                    <span className="text-white">{f.value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </Stagger>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="glass-gold rounded-3xl p-8 lg:p-10 flex flex-col gap-6"
          >
            {['name', 'email', 'message'].map((field) => (
              <div key={field}>
                <label className="text-[0.65rem] tracking-widest uppercase text-white/40 block mb-2">
                  {field === 'name' ? 'Ime i prezime' : field === 'email' ? 'Email' : 'Poruka'}
                </label>
                {field === 'message' ? (
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#d4af37]/50 transition-colors resize-none"
                    placeholder="Opišite svoje ciljeve..."
                  />
                ) : (
                  <input
                    required
                    type={field === 'email' ? 'email' : 'text'}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#d4af37]/50 transition-colors"
                    placeholder={field === 'name' ? 'Vaše ime' : 'vaš@email.com'}
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="glass-gold w-full py-4 rounded-full text-sm font-semibold tracking-[0.12em] uppercase text-white hover:scale-[1.01] transition-transform duration-500 mt-2"
            >
              {sent ? 'Poruka poslata ✓' : 'Pošaljite poruku'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
