import { Reveal } from "@/components/reveal"

const PHASES = [
  {
    tag: "Phase 1",
    title: "Liftoff",
    done: true,
    items: ["Token launch on Robinhood Chain", "Liquidity locked", "First 10k apes onboard", "Meme arsenal deployed"],
  },
  {
    tag: "Phase 2",
    title: "Orbit",
    done: true,
    items: ["CoinGecko + CMC listings", "DEX volume goes brrr", "Community mod squad", "Trending on Crypto Twitter"],
  },
  {
    tag: "Phase 3",
    title: "Deep Space",
    done: false,
    items: ["CEX listings", "$GME merch drop", "NFT diamond-hand passes", "100k holders"],
  },
  {
    tag: "Phase 4",
    title: "The Moon",
    done: false,
    items: ["Global ape domination", "Charity burn events", "IRL meetups", "Ascension. Not financial advice."],
  },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <Reveal className="max-w-2xl">
        <p className="font-mono text-sm uppercase tracking-widest text-accent">
          The Flight Plan
        </p>
        <h2 className="mt-2 text-balance font-sans text-4xl font-bold uppercase tracking-tighter sm:text-6xl">
          Roadmap to the moon
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {PHASES.map((p, i) => (
          <Reveal key={p.tag} delay={i * 0.08}>
            <div
              className={`h-full rounded-xl border p-5 ${
                p.done
                  ? "border-accent/40 bg-accent/5"
                  : "border-border bg-card"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {p.tag}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 font-mono text-[10px] font-bold uppercase ${
                    p.done
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {p.done ? "Done" : "Soon"}
                </span>
              </div>
              <h3 className="mt-3 font-sans text-2xl font-bold uppercase tracking-tight">
                {p.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {p.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-2 font-mono text-sm text-muted-foreground"
                  >
                    <span className={p.done ? "text-accent" : "text-primary"}>
                      {p.done ? "✓" : "→"}
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
