export function DesignPlaceholder({
  caption = 'headshot.jpg',
  fill = '#64748b',
  bg = '#94a3b8',
}: {
  caption?: string
  fill?: string
  bg?: string
}) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: `repeating-linear-gradient(45deg, ${fill}28 0, ${fill}28 10px, transparent 10px, transparent 20px), ${bg}40`,
        display: 'flex',
        alignItems: 'flex-end',
        padding: '10px 12px',
      }}
    >
      <span
        style={{
          fontFamily: 'ui-monospace, Menlo, monospace',
          fontSize: 10,
          color: fill,
          lineHeight: 1.3,
          opacity: 0.8,
        }}
      >
        {caption}
      </span>
    </div>
  )
}
