"use client"

import { useState } from "react"
import { BarChart2, ExternalLink, Maximize2 } from "lucide-react"
import { Reveal } from "@/components/reveal"

const PAIR = "0x90c8C09dD4A6Bf3b0A2DCF179c72a2C8C6e09FeE"
const DEX_LINK = `https://dexscreener.com/robinhood/${PAIR}`

const INTERVALS = ["5", "15", "60", "240"] as const
type Interval = (typeof INTERVALS)[number]

const INTERVAL_LABELS: Record<Interval, string> = {
  "5": "5m",
  "15": "15m",
  "60": "1h",
  "240": "4h",
}

export function DexChart() {
  const [interval, setInterval] = useState<Interval>("15")

  const src = `${DEX_LINK}?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=1&chartType=usd&interval=${interval}`

  return (
    <section id="chart" className="relative overflow-hidden px-4 py-20 sm:px-6">
      {/* subtle backdrop glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-widest text-accent">
            Live Chart
          </p>
          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-balance font-sans text-4xl font-bold uppercase tracking-tighter sm:text-6xl">
              $GME <span className="text-primary">Price</span>
            </h2>

            <div className="flex items-center gap-2">
              {/* Interval selector */}
              <div className="flex items-center gap-1 rounded-lg border border-border bg-card p-1">
                {INTERVALS.map((iv) => (
                  <button
                    key={iv}
                    onClick={() => setInterval(iv)}
                    className={`rounded-md px-3 py-1.5 font-mono text-xs font-bold uppercase transition-colors ${
                      interval === iv
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {INTERVAL_LABELS[iv]}
                  </button>
                ))}
              </div>

              <a
                href={DEX_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 font-mono text-xs font-bold text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent"
              >
                <Maximize2 className="size-3.5" />
                Full
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
            {/* retro window bar */}
            <div className="flex items-center justify-between border-b border-border bg-secondary px-4 py-2">
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-loss" />
                <span className="size-2.5 rounded-full bg-hype" />
                <span className="size-2.5 rounded-full bg-gain" />
                <span className="ml-2 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  <BarChart2 className="size-3" />
                  gme_chart.exe — DEXScreener
                </span>
              </div>
              <a
                href={DEX_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-mono text-[10px] text-muted-foreground transition-colors hover:text-accent"
              >
                <ExternalLink className="size-3" />
                Open DEXScreener
              </a>
            </div>

            <iframe
              key={interval}
              src={src}
              title="$GME DEXScreener Chart"
              className="w-full h-[360px] sm:h-[500px]"
              style={{ border: "none" }}
              allow="clipboard-write"
              loading="lazy"
            />
          </div>
        </Reveal>

        {/* Buy CTA below chart */}
        <Reveal delay={0.15}>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={DEX_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="y2k-btn inline-flex items-center gap-2 px-8 py-3 font-mono text-sm font-bold uppercase tracking-tight text-accent-foreground"
            >
              🚀 Buy $GME on DEXScreener
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
