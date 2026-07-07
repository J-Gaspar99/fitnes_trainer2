import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiPlay, HiX, HiPhotograph, HiVideoCamera } from 'react-icons/hi'
import { site } from '../../data/content'
import SectionHeader from '../ui/SectionHeader'
import Stagger from '../ui/Stagger'
import { fadeUpChild } from '../ui/motion'

export default function Gallery() {
  const { gallery } = site
  const [tab, setTab] = useState('images')
  const [lightbox, setLightbox] = useState(null)
  const [video, setVideo] = useState(null)

  return (
    <section id="galerija" className="section-purple relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader label={gallery.label} title={gallery.title} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center gap-3 mb-12"
        >
          {[
            { id: 'images', icon: HiPhotograph, label: 'Slike' },
            { id: 'videos', icon: HiVideoCamera, label: 'Video' },
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs tracking-widest uppercase transition-all duration-500 ${
                tab === id
                  ? 'glass-gold text-white'
                  : 'glass text-white/50 hover:text-white/80'
              }`}
            >
              <Icon /> {label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {tab === 'images' ? (
            <Stagger key="img" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.images.map((img) => (
                <motion.button
                  key={img.src}
                  variants={fadeUpChild}
                  onClick={() => setLightbox(img)}
                  className="group relative aspect-[3/4] rounded-2xl overflow-hidden glass-gold text-left"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.04] group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-[#1a0a2e]/50 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-opacity duration-500 flex items-end p-6">
                    <span className="font-display text-white italic">{img.caption}</span>
                  </div>
                </motion.button>
              ))}
            </Stagger>
          ) : (
            <Stagger key="vid" className="grid md:grid-cols-2 gap-6">
              {gallery.videos.map((v) => (
                <motion.div
                  key={v.id}
                  variants={fadeUpChild}
                  className="glass-gold rounded-2xl overflow-hidden group cursor-pointer"
                  onClick={() => setVideo(v)}
                >
                  <div className="relative aspect-video">
                    <img src={v.thumbnail} alt={v.title} loading="lazy" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                      <span className="w-14 h-14 rounded-full glass-gold flex items-center justify-center text-white">
                        <HiPlay size={22} />
                      </span>
                    </div>
                  </div>
                  <p className="p-5 font-display text-white">{v.title}</p>
                </motion.div>
              ))}
            </Stagger>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-md p-6"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-white text-3xl" onClick={() => setLightbox(null)}>
              <HiX />
            </button>
            <motion.img
              src={lightbox.src}
              alt={lightbox.alt}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="max-h-[85vh] rounded-2xl border border-[#d4af37]/20"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {video && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-md p-6"
          >
            <div className="relative w-full max-w-4xl">
              <button className="absolute -top-12 right-0 text-white text-3xl" onClick={() => setVideo(null)}>
                <HiX />
              </button>
              <div className="aspect-video rounded-2xl overflow-hidden border border-[#d4af37]/20">
                <iframe
                  src={`${video.embedUrl}?autoplay=1`}
                  title={video.title}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
