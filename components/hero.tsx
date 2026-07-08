"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { ArrowUpRight, Rocket, Sparkles, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

const PAIR = "0x90c8C09dD4A6Bf3b0A2DCF179c72a2C8C6e09FeE"
const DEX_API = `https://api.dexscreener.com/latest/dex/pairs/robinhood/${PAIR}`
const DEX_LINK = `https://dexscreener.com/robinhood/${PAIR}`

type PairData = {
  priceUsd: string
  priceChange: { h24: number }
  volume: { h24: number }
  fdv: number
  txns?: { h24: { buys: number; sells: number } }
}

function fmt(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`
  if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}K`
  return `$${n.toFixed(2)}`
}

function fmtPrice(s: string) {
  const n = parseFloat(s)
  if (n < 0.0001) return `$${n.toExponential(2)}`
  if (n < 1) return `$${n.toFixed(6)}`
  return `$${n.toFixed(4)}`
}

function fmtChange(n: number) {
  const sign = n >= 0 ? "+" : ""
  return `${sign}${n.toFixed(2)}%`
}

export function Hero() {
  const [pair, setPair] = useState<PairData | null>(null)
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  const fetchPair = useCallback(async () => {
    try {
      const res = await fetch(DEX_API, { cache: "no-store" })
      const json = await res.json()
      const p: PairData = json.pairs?.[0] ?? json.pair
      if (p) {
        setPair(p)
        setLastUpdated(new Date())
      }
    } catch {
      // silently fall back to placeholder
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPair()
    const id = setInterval(fetchPair, 30_000) // refresh every 30 s
    return () => clearInterval(id)
  }, [fetchPair])

  const stats = pair
    ? [
        { k: "Price", v: fmtPrice(pair.priceUsd) },
        {
          k: "24h",
          v: fmtChange(pair.priceChange.h24),
          accent: true,
          up: pair.priceChange.h24 >= 0,
        },
        { k: "Volume 24h", v: fmt(pair.volume.h24) },
        { k: "Market Cap", v: fmt(pair.fdv) },
      ]
    : [
        { k: "Price", v: "—" },
        { k: "24h", v: "—", accent: true, up: true },
        { k: "Volume 24h", v: "—" },
        { k: "Market Cap", v: "—" },
      ]

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pt-24"
    >
      {/* trippy animated backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 animate-trip">
        <div className="absolute inset-0 trippy-grid opacity-60" />
        <div className="absolute left-1/2 top-1/3 size-[36rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute right-10 top-10 size-72 rounded-full bg-accent/25 blur-[100px]" />
        <div className="absolute bottom-0 left-10 size-72 rounded-full bg-hype/20 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          animate={{ y: [0, -16, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="mx-auto mb-6 w-full max-w-[20rem] sm:max-w-[28rem] px-4"
        >
          <Image
            src="/gamestopweb.svg"
            alt="GameStop Web Illustration"
            width={480}
            height={480}
            priority
            className="h-auto w-full drop-shadow-[0_0_40px_oklch(0.58_0.24_27/0.5)]"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-glitch text-balance font-sans text-6xl font-bold uppercase leading-[0.9] tracking-tighter sm:text-8xl"
        >
          Diamond hands
          <br />
          <span className="text-primary">to the moon</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-pretty font-mono text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {"$GME is the meme that broke Wall Street, reborn on-chain. Half finance, half fever dream, 100% degen. Apes together strong. This is not financial advice."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button
            size="lg"
            className="group w-full gap-2 bg-primary font-mono text-base font-bold text-primary-foreground hover:bg-primary/90 sm:w-auto"
            nativeButton={false}
            render={<a href={DEX_LINK} target="_blank" rel="noopener noreferrer" />}
          >
            <Rocket className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            Ape In Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group w-full gap-2 border-accent/50 bg-transparent font-mono text-base font-bold text-accent hover:bg-accent/10 hover:text-accent sm:w-auto"
            nativeButton={false}
            render={<a href={DEX_LINK} target="_blank" rel="noopener noreferrer" />}
          >
            View Chart
            <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.k}
              className="rounded-lg border border-border bg-card/60 px-4 py-3 backdrop-blur"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {s.k}
              </div>
              <div
                className={`font-mono text-lg font-bold ${
                  s.accent
                    ? s.up
                      ? "text-gain"
                      : "text-loss"
                    : "text-foreground"
                } ${loading ? "animate-pulse opacity-50" : ""}`}
              >
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>

        {lastUpdated && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-3 flex items-center justify-center gap-1.5"
          >
            <button
              onClick={fetchPair}
              className="flex items-center gap-1 font-mono text-[10px] text-muted-foreground/60 transition-colors hover:text-muted-foreground"
            >
              <RefreshCw className="size-3" />
              Live · updates every 30s
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
