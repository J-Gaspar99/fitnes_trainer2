export default function GoldBeamTitle({ children, as: Tag = 'h1', className = '' }) {
  return (
    <Tag className={`gold-beam-wrap relative ${className}`}>
      <span className="relative z-[1] block text-white">{children}</span>
      <span
        className={`gold-beam-shine absolute inset-0 z-[2] pointer-events-none block ${className}`}
        aria-hidden="true"
      >
        {children}
      </span>
    </Tag>
  )
}
