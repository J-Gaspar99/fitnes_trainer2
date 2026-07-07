import LightShimmerText from './LightShimmerText'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaInstagram } from 'react-icons/fa'
import { siteContent } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const headerRef = useScrollReveal()
  const formRef = useScrollReveal()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  const { contact } = siteContent

  return (
    <section id="kontakt" className="section contact">
      <div className="contact__bg" />

      <div className="container">
        <div className="section-header scroll-reveal" ref={headerRef}>
          <span className="section-label">Kontakt</span>
          <LightShimmerText as="h2" variant="title" className="section-title">
            Zakaži konsultaciju
          </LightShimmerText>
          <LightShimmerText as="p" variant="subtitle" className="section-subtitle">
            Prvi korak ka transformaciji — pošalji poruku i javiću ti se u roku od 24h
          </LightShimmerText>
        </div>

        <div className="contact__grid">
          <div className="contact__info scroll-reveal">
            <div className="contact__card">
              <HiMail className="contact__icon" />
              <div>
                <span className="contact__label">Email</span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            </div>
            <div className="contact__card">
              <HiPhone className="contact__icon" />
              <div>
                <span className="contact__label">Telefon</span>
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
              </div>
            </div>
            <div className="contact__card">
              <FaInstagram className="contact__icon" />
              <div>
                <span className="contact__label">Instagram</span>
                <a
                  href={`https://instagram.com/${contact.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.instagram}
                </a>
              </div>
            </div>
            <div className="contact__card">
              <HiLocationMarker className="contact__icon" />
              <div>
                <span className="contact__label">Lokacija</span>
                <span>{contact.location}</span>
              </div>
            </div>
          </div>

          <motion.form
            className="contact__form scroll-reveal"
            ref={formRef}
            onSubmit={handleSubmit}
            initial={false}
            animate={submitted ? { scale: [1, 1.02, 1] } : {}}
          >
            <div className="form-group">
              <label htmlFor="name">Ime i prezime</label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Tvoje ime"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="tvoj@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Poruka</label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Opiši svoje ciljeve..."
              />
            </div>
            <button type="submit" className="btn btn--gold btn--lg btn--full">
              {submitted ? 'Poruka poslata ✓' : 'Pošalji poruku'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
