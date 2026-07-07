import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from './motion'

export default function Reveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
  once = true,
}) {
  const Component = motion[as] || motion.div
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.12 }}
      variants={fadeUp}
      custom={delay}
    >
      {children}
    </Component>
  )
}
