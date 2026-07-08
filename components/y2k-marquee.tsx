import Image from "next/image"

const ITEMS = [
  "FAIR LAUNCH LIVE",
  "COMMUNITY OWNED",
  "100% APE",
  "NO PRESALE",
  "NO TEAM TOKENS",
  "POWER TO THE PLAYERS",
  "ON ROBINHOOD CHAIN",
]

function Strip({ tint }: { tint: "green" | "red" }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden="true">
      {ITEMS.map((t, i) => (
        <span key={i} className="flex items-center gap-3 px-4 sm:gap-4 sm:px-6">
          <Image
            src="/gamestop-logo.png"
            alt=""
            width={72}
            height={24}
            className="h-5 w-auto rounded-[3px] sm:h-6"
          />
          <span
            className={`font-sans text-lg font-extrabold uppercase tracking-tight sm:text-2xl ${
              tint === "red" ? "text-primary-foreground" : "text-accent-foreground"
            }`}
          >
            {t}
          </span>
          <span className="animate-blink text-xl sm:text-2xl">★</span>
        </span>
      ))}
    </div>
  )
}

export function Y2kMarquee({ tint = "green" }: { tint?: "green" | "red" }) {
  return (
    <div
      className={`relative flex w-full overflow-hidden border-y-2 py-2.5 ${
        tint === "red"
          ? "border-primary-foreground/30 bg-primary text-primary-foreground"
          : "border-accent-foreground/30 bg-accent text-accent-foreground"
      }`}
      style={{
        boxShadow:
          "inset 0 2px 0 oklch(1 0 0 / 0.35), inset 0 -6px 12px oklch(0 0 0 / 0.3)",
      }}
    >
      <div className="flex animate-marquee-fast whitespace-nowrap">
        <Strip tint={tint} />
        <Strip tint={tint} />
      </div>
    </div>
  )
}
