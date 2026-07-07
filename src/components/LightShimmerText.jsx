export default function LightShimmerText({
  children,
  as: Tag = 'span',
  className = '',
  variant = 'title',
}) {
  return (
    <Tag className={`light-shimmer light-shimmer--${variant} ${className}`.trim()}>
      <span className="light-shimmer__base">{children}</span>
      <span className="light-shimmer__shine" aria-hidden="true">
        {children}
      </span>
    </Tag>
  )
}
