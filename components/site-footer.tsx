import { Rocket, Send, BarChart2 } from "lucide-react"

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"

const DEXSCREENER = "https://dexscreener.com/robinhood/0x90c8C09dD4A6Bf3b0A2DCF179c72a2C8C6e09FeE"
const BUY_LINK = DEXSCREENER

const SOCIALS = [
  {
    label: "Twitter / X",
    href: "https://x.com/gamestoponrh",
    icon: XIcon,
  },
  {
    label: "Telegram",
    href: "https://t.co/jrTk6FBTJ3",
    icon: Send,
  },
  {
    label: "DEXScreener",
    href: DEXSCREENER,
    icon: BarChart2,
  },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      {/* final CTA */}
      <div className="relative isolate px-4 py-20 sm:px-6">
        <div className="pointer-events-none absolute inset-0 -z-10 trippy-grid opacity-40" />
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-sans text-4xl font-bold uppercase leading-[0.95] tracking-tighter sm:text-6xl">
            Don&apos;t fade
            <br />
            <span className="text-primary">the meme</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty font-mono text-muted-foreground">
            The squeeze is a state of mind. Grab your bag before liftoff.
          </p>
          <Button
            size="lg"
            className="mt-8 gap-2 bg-primary font-mono text-base font-bold text-primary-foreground hover:bg-primary/90"
            nativeButton={false}
            render={<a href={BUY_LINK} target="_blank" rel="noopener noreferrer" />}
          >
            <Rocket className="size-5" />
            Ape In Now
          </Button>
        </Reveal>
      </div>

      {/* bottom bar */}
      <div className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <a href="#top" className="flex items-center gap-2">
              <span className="grid size-9 place-items-center rounded-md bg-primary font-mono text-lg font-bold text-primary-foreground">
                G
              </span>
              <span className="font-mono text-lg font-bold tracking-tight">$GME</span>
            </a>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    <s.icon className="size-3.5" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-pretty font-mono text-xs leading-relaxed text-muted-foreground">
            <span className="font-bold text-foreground">Disclaimer:</span> $GME is a
            community meme coin with no intrinsic value or expectation of financial
            return. There is no formal team or roadmap obligation. This site is for
            entertainment purposes only and is not affiliated with GameStop Corp.,
            Robinhood Markets, or any exchange. Nothing here is financial advice. Crypto
            is risky — only ape in what you can afford to lose.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} $GME on Robinhood Chain. Apes together strong.
          </p>
        </div>
      </div>
    </footer>
  )
}
