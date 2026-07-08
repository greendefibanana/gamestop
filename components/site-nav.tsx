"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const DEX_LINK = "https://dexscreener.com/robinhood/0x90c8C09dD4A6Bf3b0A2DCF179c72a2C8C6e09FeE"

const LINKS = [
  { label: "The Lore", href: "#lore" },
  { label: "The Takeover", href: "#about" },
  { label: "How To Ape In", href: "#buy" },
  { label: "Chart", href: "#chart" },
  { label: "Roadmap", href: "#roadmap" },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/gamestop-logo.png"
            alt="GameStop"
            width={132}
            height={44}
            priority
            className="h-8 w-auto rounded-[4px] sm:h-9"
          />
          <span className="font-sans text-lg font-black tracking-tight">$GME</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-md px-3 py-2 font-mono text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={DEX_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="y2k-btn inline-flex items-center px-6 py-2.5 font-sans text-sm font-black uppercase tracking-tight text-accent-foreground"
          >
            Buy $GME
          </a>
        </div>

        <button
          className="grid size-10 place-items-center rounded-md border border-border md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col p-4">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 font-mono text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href={DEX_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="y2k-btn flex w-full items-center justify-center px-6 py-3 font-sans text-sm font-black uppercase tracking-tight text-accent-foreground"
              >
                Buy $GME
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
