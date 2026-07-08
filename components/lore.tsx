import Image from "next/image"
import { Reveal } from "@/components/reveal"

export function Lore() {
  return (
    <section id="lore" className="relative overflow-hidden px-4 py-20 sm:px-6">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/2 size-96 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </div>
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-widest text-accent">
            The Lore
          </p>
          <h2 className="mt-2 text-balance font-sans text-4xl font-bold uppercase leading-[0.95] tracking-tighter sm:text-6xl">
            Once a stock.
            <br />
            <span className="text-primary">Now a movement.</span>
          </h2>
          <div className="mt-6 space-y-4 font-mono text-base leading-relaxed text-muted-foreground">
            <p>
              {"In the winter of the great squeeze, a band of apes taught Wall Street a lesson it would never forget. The suits panicked. The charts went vertical. History was made."}
            </p>
            <p>
              {"Now the legend is reborn on RoboChain as $GME — a fully community-owned meme coin with no VCs, no gatekeepers, and no chill. Just diamond hands and pure, uncut nostalgia."}
            </p>
            <p className="font-bold text-foreground">
              {"The revolution was tokenized. Welcome home, ape."}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex justify-center">
          <div className="animate-float">
            <Image
              src="/to-the-moon.png"
              alt="A retro rocket blasting toward the moon over green candlestick trails"
              width={520}
              height={520}
              className="h-auto w-full max-w-md drop-shadow-[0_0_50px_oklch(0.78_0.22_145/0.35)]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
