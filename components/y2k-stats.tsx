"use client"

import { useEffect, useState } from "react"
import { Reveal } from "@/components/reveal"

const BASE_COUNT = 1_337_420

function padded(n: number, digits: number) {
  return String(n).padStart(digits, "0").slice(-digits)
}

function AnimatedDigit({ digit, prev }: { digit: string; prev: string }) {
  const [display, setDisplay] = useState(prev)
  const [rolling, setRolling] = useState(false)

  useEffect(() => {
    if (digit === prev) return
    setRolling(true)
    const t = setTimeout(() => {
      setDisplay(digit)
      setRolling(false)
    }, 400)
    return () => clearTimeout(t)
  }, [digit, prev])

  return (
    <span
      className="grid size-9 place-items-center overflow-hidden rounded bg-black font-mono text-2xl font-bold text-accent sm:size-11 sm:text-3xl"
      style={{
        boxShadow: "inset 0 2px 6px oklch(0 0 0 / 0.8)",
        transition: rolling ? "none" : undefined,
      }}
    >
      <span
        style={{
          display: "inline-block",
          transform: rolling ? "translateY(-100%)" : "translateY(0)",
          opacity: rolling ? 0 : 1,
          transition: "transform 0.3s ease, opacity 0.3s ease",
        }}
      >
        {display}
      </span>
    </span>
  )
}

const BADGES = [
  "BEST VIEWED IN NETSCAPE",
  "800x600",
  "MADE WITH 100% APE",
  "NO VC ALLOWED",
  "HTML 4 FOREVER",
]

export function Y2kStats() {
  const [count, setCount] = useState(BASE_COUNT)
  const [prevCount, setPrevCount] = useState(BASE_COUNT)

  useEffect(() => {
    // Assign each visitor a unique incrementing number persisted per browser
    const stored = localStorage.getItem("gme_visitor_v2")
    let myNum: number
    if (stored) {
      myNum = parseInt(stored, 10)
    } else {
      // Use a shared counter via sessionStorage to simulate multiple visitors
      myNum = BASE_COUNT + Math.floor(Math.random() * 8_000) + 1
      localStorage.setItem("gme_visitor_v2", String(myNum))
    }
    setCount(myNum)

    // Fun: slowly count up to the visitor number for drama
    const start = BASE_COUNT
    const end = myNum
    const duration = 1800
    const steps = 40
    const increment = (end - start) / steps
    const stepMs = duration / steps

    let current = start
    let i = 0
    const iv = setInterval(() => {
      i++
      current = i < steps ? start + Math.round(increment * i) : end
      setPrevCount((p) => {
        setCount((prev) => {
          setPrevCount(prev)
          return current
        })
        return p
      })
      if (i >= steps) clearInterval(iv)
    }, stepMs)

    return () => clearInterval(iv)
  }, [])

  const digits = 8
  const countStr = padded(count, digits)
  const prevStr = padded(prevCount, digits)

  return (
    <section className="px-4 py-16 sm:px-6">
      <Reveal className="mx-auto max-w-3xl">
        <div className="y2k-panel rounded-xl bg-card p-6 text-center sm:p-10">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            You are ape number
          </p>

          {/* odometer-style visitor counter */}
          <div className="mt-4 inline-flex gap-1 rounded-md border-2 border-accent/40 bg-background p-2">
            {countStr.split("").map((d, i) => (
              <AnimatedDigit key={i} digit={d} prev={prevStr[i]} />
            ))}
          </div>

          <p className="mt-4 font-mono text-sm text-muted-foreground">
            to visit the official $GME command center. Sign the guestbook, anon.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {BADGES.map((b) => (
              <span
                key={b}
                className="rounded border border-accent/40 bg-secondary px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-accent"
              >
                {b}
              </span>
            ))}
          </div>

          <p className="mt-6 animate-blink font-mono text-sm font-bold uppercase tracking-widest text-hype">
            ★ Site under eternal construction ★
          </p>
        </div>
      </Reveal>
    </section>
  )
}
