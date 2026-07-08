"use client"

import { useState } from "react"
import { Check, Copy, ShieldCheck, Users, Flame, Lock } from "lucide-react"
import { Reveal } from "@/components/reveal"

const FACTS = [
  {
    icon: Users,
    title: "Community Takeover",
    body: "No founder, no CEO, no suits. $GME was seized by the apes and belongs 100% to the people who believe.",
  },
  {
    icon: ShieldCheck,
    title: "Fair Launched",
    body: "No presale. No private round. No sneaky team allocation. Everyone apes in on the exact same candle.",
  },
  {
    icon: Lock,
    title: "Liquidity Locked",
    body: "LP tokens are burned and locked forever. The rug was thrown in the incinerator. Only diamonds remain.",
  },
  {
    icon: Flame,
    title: "Zero Tax",
    body: "Buy it, hold it, meme it. No buy tax, no sell tax, no nonsense. Just pure degenerate freedom.",
  },
]

const CONTRACT = "0x7e86381A763F0Ecca2bDF27C54eAC403ddD48123"

export function FairLaunch() {
  const [copied, setCopied] = useState(false)

  function copy() {
    navigator.clipboard?.writeText(CONTRACT)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <section id="about" className="relative overflow-hidden px-4 py-20 sm:px-6">
      <div className="pointer-events-none absolute inset-0 -z-10 y2k-stars opacity-40" />
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-sm uppercase tracking-widest text-accent">
            No Tokenomics. No Gatekeepers.
          </p>
          <h2 className="mt-2 text-balance font-sans text-4xl font-black uppercase tracking-tighter sm:text-6xl">
            A true <span className="text-primary">community</span> takeover
          </h2>
          <p className="mt-4 text-pretty font-mono text-muted-foreground">
            $GME wasn&apos;t minted in a boardroom. It was fair launched on Robinhood
            Chain and handed straight to the apes. This is finance for the people.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FACTS.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="y2k-panel h-full rounded-xl bg-card p-5">
                <div className="mb-4 grid size-12 place-items-center rounded-lg bg-accent text-accent-foreground">
                  <f.icon className="size-6" />
                </div>
                <h3 className="font-sans text-xl font-bold">{f.title}</h3>
                <p className="mt-2 font-mono text-sm leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="y2k-panel rounded-xl bg-card p-4 sm:p-5">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Official Contract Address
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <code className="min-w-0 flex-1 truncate rounded-md bg-background px-3 py-2.5 font-mono text-sm text-accent">
                  {CONTRACT}
                </code>
                <button
                  onClick={copy}
                  className="y2k-btn inline-flex items-center justify-center gap-2 px-5 py-2.5 font-mono text-sm font-bold text-accent-foreground"
                >
                  {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              <p className="mt-3 font-mono text-xs text-muted-foreground">
                Always verify the contract before you ape. Screenshots lie, blockchains
                don&apos;t.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
