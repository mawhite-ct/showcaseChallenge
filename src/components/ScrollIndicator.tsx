export default function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center gap-3 py-16 opacity-60">
      <p className="text-xs font-medium uppercase tracking-widest text-text-secondary">
        Keep scrolling
      </p>
      <div className="animate-bounce">
        <svg
          className="h-6 w-6 text-nba-pink/70"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  )
}
