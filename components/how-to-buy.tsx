import { Wallet, Coins, ArrowLeftRight, PartyPopper } from "lucide-react"
import { Reveal } from "@/components/reveal"

const STEPS = [
  {
    icon: Wallet,
    title: "Get a Wallet",
    body: "Download Robinhood Wallet or MetaMask. Backup your seed phrase safely.",
  },
  {
    icon: Coins,
    title: "Bridge Funds",
    body: "Bridge ETH or USDC to Robinhood Chain (use the official bridge or Uniswap).",
  },
  {
    icon: ArrowLeftRight,
    title: "Swap for $GME",
    body: "Go to Uniswap on Robinhood Chain. Copy the official $GME contract address from our website, paste it in Uniswap, and swap WETH for $GME.",
  },
  {
    icon: PartyPopper,
    title: "Diamond Hands",
    body: "Hold strong. This is not financial advice.",
  },
]

export function HowToBuy() {
  return (
    <section id="buy" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <Reveal className="max-w-2xl">
        <p className="font-mono text-sm uppercase tracking-widest text-accent">
          4 Easy Steps
        </p>
        <h2 className="mt-2 text-balance font-sans text-4xl font-bold uppercase tracking-tighter sm:text-6xl">
          How to Buy $GME on Robinhood Chain
        </h2>
        <p className="mt-4 text-pretty font-mono text-muted-foreground">
          Even your smooth-brained cousin can do it. Follow along.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <div className="group h-full overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-accent/50">
              {/* retro window bar */}
              <div className="flex items-center gap-1.5 border-b border-border bg-secondary px-3 py-2">
                <span className="size-2.5 rounded-full bg-loss" />
                <span className="size-2.5 rounded-full bg-hype" />
                <span className="size-2.5 rounded-full bg-gain" />
                <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  step_{i + 1}.exe
                </span>
              </div>
              <div className="p-5">
                <div className="mb-4 grid size-12 place-items-center rounded-lg bg-accent/10 text-accent transition-transform group-hover:scale-110">
                  <s.icon className="size-6" />
                </div>
                <h3 className="font-sans text-xl font-bold">{s.title}</h3>
                <p className="mt-2 font-mono text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
