import LightShimmerText from './LightShimmerText'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiPlay, HiX, HiPhotograph, HiVideoCamera } from 'react-icons/hi'
import { siteContent } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('images')
  const [lightboxImage, setLightboxImage] = useState(null)
  const [activeVideo, setActiveVideo] = useState(null)
  const headerRef = useScrollReveal()

  const { gallery } = siteContent

  return (
    <section id="galerija" className="section gallery">
      <div className="container">
        <div className="section-header scroll-reveal" ref={headerRef}>
          <span className="section-label">Portfolio</span>
          <LightShimmerText as="h2" variant="title" className="section-title">
            {gallery.title}
          </LightShimmerText>
          <LightShimmerText as="p" variant="subtitle" className="section-subtitle">
            {gallery.subtitle}
          </LightShimmerText>
        </div>

        <div className="gallery__tabs">
          <button
            className={`gallery__tab ${activeTab === 'images' ? 'gallery__tab--active' : ''}`}
            onClick={() => setActiveTab('images')}
          >
            <HiPhotograph />
            Slike
          </button>
          <button
            className={`gallery__tab ${activeTab === 'videos' ? 'gallery__tab--active' : ''}`}
            onClick={() => setActiveTab('videos')}
          >
            <HiVideoCamera />
            Video snimci
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'images' ? (
            <motion.div
              key="images"
              className="gallery__grid gallery__grid--images"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {gallery.images.map((image, i) => (
                <GalleryImage
                  key={image.src}
                  image={image}
                  index={i}
                  onClick={() => setLightboxImage(image)}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="videos"
              className="gallery__grid gallery__grid--videos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {gallery.videos.map((video, i) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  index={i}
                  onPlay={() => setActiveVideo(video)}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      <AnimatePresence>
        {lightboxImage && (
          <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeVideo && (
          <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

function GalleryImage({ image, index, onClick }) {
  const ref = useScrollReveal(0.1)

  return (
    <motion.div
      className="gallery-item scroll-reveal"
      ref={ref}
      style={{ transitionDelay: `${index * 0.1}s` }}
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <img src={image.src} alt={image.alt} loading="lazy" />
      <div className="gallery-item__overlay">
        <span className="gallery-item__caption">{image.caption}</span>
      </div>
      <div className="gallery-item__border" />
    </motion.div>
  )
}

function VideoCard({ video, index, onPlay }) {
  const ref = useScrollReveal(0.1)

  return (
    <motion.div
      className="video-card scroll-reveal"
      ref={ref}
      style={{ transitionDelay: `${index * 0.1}s` }}
      whileHover={{ y: -6 }}
    >
      <div className="video-card__thumb" onClick={onPlay} role="button" tabIndex={0}>
        <img src={video.thumbnail} alt={video.title} loading="lazy" />
        <div className="video-card__play">
          <HiPlay />
        </div>
      </div>
      <div className="video-card__info">
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </div>
    </motion.div>
  )
}

function Lightbox({ image, onClose }) {
  return (
    <motion.div
      className="lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button className="lightbox__close" onClick={onClose} aria-label="Zatvori">
        <HiX />
      </button>
      <motion.img
        src={image.src}
        alt={image.alt}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
      />
      <p className="lightbox__caption">{image.caption}</p>
    </motion.div>
  )
}

function VideoModal({ video, onClose }) {
  return (
    <motion.div
      className="video-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="video-modal__backdrop" onClick={onClose} />
      <motion.div
        className="video-modal__content"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <button className="video-modal__close" onClick={onClose} aria-label="Zatvori">
          <HiX />
        </button>
        <div className="video-modal__player">
          <iframe
            src={`${video.embedUrl}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <h3>{video.title}</h3>
      </motion.div>
    </motion.div>
  )
}
