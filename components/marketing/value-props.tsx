"use client"

import { Clock, TrendingDown, CheckCircle2 } from "lucide-react"

// TODO: Update copy and numbers once internal data is confirmed
const props = [
  {
    icon: Clock,
    headline: "Save 3–5 hrs per employee per week",
    body: "Your team is already using AI — often badly. Structured training turns ad-hoc experiments into reliable, repeatable habits that compound over time.",
  },
  {
    icon: TrendingDown,
    headline: "Cut wasted AI spend",
    body: "Most teams pay for AI tools that 80% of employees never learn to use well. Better training means better utilization — and a cleaner budget conversation.",
  },
  {
    icon: CheckCircle2,
    headline: "Better output, less rework",
    body: "When people know how to prompt well and catch AI mistakes, quality goes up and the editing loop shrinks. Ship faster without cutting corners.",
  },
]

export function ValueProps() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-14 max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Why AI at Work pays for itself.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            The ROI is not about AI doing your job. It is about your team doing
            their job better, faster, and with less wasted effort.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {props.map((p) => (
            <div
              key={p.headline}
              className="rounded-xl border border-border bg-background p-6 hover:border-foreground/20 transition-colors duration-150"
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-md border border-border bg-muted">
                <p.icon size={16} strokeWidth={1.5} className="text-foreground" />
              </div>
              <h3 className="text-base font-semibold tracking-tight text-foreground">
                {p.headline}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
