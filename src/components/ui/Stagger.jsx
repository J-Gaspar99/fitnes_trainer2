import { motion } from 'framer-motion'
import { staggerContainer, viewportOnce } from './motion'

export default function Stagger({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  )
}
