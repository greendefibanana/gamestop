const PHRASES = [
  "APES TOGETHER STRONG",
  "DIAMOND HANDS",
  "TO THE MOON",
  "HODL THE LINE",
  "BUY THE DIP",
  "NOT FINANCIAL ADVICE",
  "WE LIKE THE COIN",
]

function Strip() {
  return (
    <div className="flex shrink-0 items-center" aria-hidden="true">
      {PHRASES.map((p, i) => (
        <span key={i} className="flex items-center gap-6 px-6">
          <span className="font-sans text-3xl font-bold uppercase tracking-tight sm:text-5xl">
            {p}
          </span>
          <span className="text-2xl text-accent sm:text-4xl">✦</span>
        </span>
      ))}
    </div>
  )
}

export function MemeBanner() {
  return (
    <div className="relative overflow-hidden border-y border-border bg-primary py-4 text-primary-foreground">
      <div className="flex animate-marquee-slow whitespace-nowrap">
        <Strip />
        <Strip />
      </div>
    </div>
  )
}
