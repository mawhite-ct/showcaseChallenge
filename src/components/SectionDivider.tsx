interface SectionDividerProps {
  variant?: 'teal' | 'pink'
}

export default function SectionDivider({ variant = 'teal' }: SectionDividerProps) {
  const gradientClass =
    variant === 'pink'
      ? 'from-transparent via-nba-pink/30 to-transparent'
      : 'from-transparent via-accent/30 to-transparent'

  return (
    <div className="flex justify-center px-6">
      <div className={`h-px w-full max-w-md bg-gradient-to-r ${gradientClass}`} />
    </div>
  )
}
