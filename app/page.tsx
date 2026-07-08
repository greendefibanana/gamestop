import { TickerTape } from "@/components/ticker-tape"
import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { MemeBanner } from "@/components/meme-banner"
import { Y2kMarquee } from "@/components/y2k-marquee"
import { Lore } from "@/components/lore"
import { FairLaunch } from "@/components/fair-launch"
import { HowToBuy } from "@/components/how-to-buy"
import { DexChart } from "@/components/dex-chart"
import { Roadmap } from "@/components/roadmap"
import { Y2kStats } from "@/components/y2k-stats"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <TickerTape />
      <SiteNav />
      <Hero />
      <Y2kMarquee />
      <Lore />
      <FairLaunch />
      <MemeBanner />
      <HowToBuy />
      <Y2kMarquee tint="red" />
      <DexChart />
      <Roadmap />
      <Y2kStats />
      <SiteFooter />
    </main>
  )
}
