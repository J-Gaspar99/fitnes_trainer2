import { motion } from 'framer-motion'
import { fadeUpChild } from './motion'

const base =
  'inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-[0.12em] uppercase rounded-full transition-all duration-500'

const variants = {
  primary: `${base} glass-gold text-white hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(212,175,55,0.15)]`,
  secondary: `${base} glass text-white/90 border border-white/15 hover:border-white/30 hover:bg-white/5`,
}

export default function Button({ variant = 'primary', href, children, className = '', ...props }) {
  const classes = `${variants[variant]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        variants={fadeUpChild}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type="button"
      className={classes}
      variants={fadeUpChild}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
