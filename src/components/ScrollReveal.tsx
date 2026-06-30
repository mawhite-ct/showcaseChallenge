import { useEffect, useRef, useState, type ReactNode } from 'react'

interface ScrollRevealProps {
  children: (progress: number) => ReactNode
  height?: string // e.g. "200vh", "300vh"
}

export default function ScrollReveal({ children, height = '200vh' }: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const scrollableHeight = el.offsetHeight - window.innerHeight
      if (scrollableHeight <= 0) return
      const scrolled = -rect.top
      const p = Math.max(0, Math.min(1, scrolled / scrollableHeight))
      setProgress(p)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="relative" style={{ height }}>
      <div className="sticky top-0 flex h-screen items-center justify-center px-6">
        {children(progress)}
      </div>
    </div>
  )
}

// Helper: returns opacity and transform for a given step threshold
export function reveal(progress: number, threshold: number) {
  const visible = progress >= threshold
  return {
    opacity: visible ? 1 : 0,
    transform: `translateY(${visible ? 0 : 20}px)`,
  }
}

export function revealScale(progress: number, threshold: number) {
  const visible = progress >= threshold
  return {
    opacity: visible ? 1 : 0,
    transform: `scale(${visible ? 1 : 0})`,
  }
}
