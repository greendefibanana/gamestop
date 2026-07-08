import { TrendingDown, TrendingUp } from "lucide-react"

const TICKERS = [
  { sym: "GME", price: "0.4269", change: "+420.69%", up: true },
  { sym: "MOON", price: "1.0000", change: "+69.00%", up: true },
  { sym: "APE", price: "0.0888", change: "+12.34%", up: true },
  { sym: "HODL", price: "9.9999", change: "-4.20%", up: false },
  { sym: "DMND", price: "0.1337", change: "+88.88%", up: true },
  { sym: "SHRT", price: "0.0013", change: "-96.90%", up: false },
  { sym: "HOOD", price: "3.1400", change: "+15.90%", up: true },
  { sym: "TNDY", price: "0.0420", change: "+34.20%", up: true },
]

function Row() {
  return (
    <div className="flex shrink-0 items-center" aria-hidden="true">
      {TICKERS.map((t, i) => (
        <div key={i} className="flex items-center gap-2 px-6 py-2">
          <span className="font-mono text-sm font-bold tracking-widest">${t.sym}</span>
          <span className="font-mono text-sm text-muted-foreground">{t.price}</span>
          <span
            className={`flex items-center gap-1 font-mono text-xs font-bold ${
              t.up ? "text-gain" : "text-loss"
            }`}
          >
            {t.up ? <TrendingUp className="size-3" /> : <TrendingDown className="size-3" />}
            {t.change}
          </span>
        </div>
      ))}
    </div>
  )
}

export function TickerTape() {
  return (
    <div className="relative flex w-full overflow-hidden border-b border-border bg-card">
      <div className="flex animate-marquee">
        <Row />
        <Row />
      </div>
    </div>
  )
}
