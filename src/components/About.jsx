import LightShimmerText from './LightShimmerText'
import { motion } from 'framer-motion'
import { siteContent } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const headerRef = useScrollReveal()
  const imageRef = useScrollReveal()
  const textRef = useScrollReveal()

  return (
    <section id="o-meni" className="section about">
      <div className="container">
        <div className="section-header scroll-reveal" ref={headerRef}>
          <span className="section-label">Upoznaj me</span>
          <LightShimmerText as="h2" variant="title" className="section-title">
            {siteContent.about.title}
          </LightShimmerText>
          <LightShimmerText as="p" variant="subtitle" className="section-subtitle">
            {siteContent.about.subtitle}
          </LightShimmerText>
        </div>

        <div className="about__grid">
          <motion.div
            className="about__image-wrap scroll-reveal"
            ref={imageRef}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <div className="about__image-frame">
              <img
                src="/images/about.png"
                alt="Marija Đorđević na treningu"
                className="about__image"
              />
              <div className="about__image-overlay" />
            </div>
            <div className="about__experience">
              <span className="about__experience-number">13+</span>
              <span className="about__experience-text">godina<br />atletike</span>
            </div>
          </motion.div>

          <div className="about__content scroll-reveal" ref={textRef}>
            {siteContent.about.paragraphs.map((p, i) => (
              <p key={i} className="about__text">{p}</p>
            ))}

            <div className="about__highlights">
              {siteContent.about.highlights.map((item) => (
                <div key={item} className="about__highlight">
                  <span className="about__highlight-dot" />
                  {item}
                </div>
              ))}
            </div>

            <a href="#kontakt" className="btn btn--purple">
              Započni transformaciju
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
