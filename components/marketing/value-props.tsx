"use client"

import { Clock, TrendingDown, CheckCircle2 } from "lucide-react"
import { FadeIn } from "./fade-in"

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
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <FadeIn className="mb-14 max-w-xl">
          <h2 className="font-heading text-3xl tracking-tight text-zinc-900 sm:text-4xl">
            Why AI at Work pays for itself.
          </h2>
          <p className="mt-4 text-zinc-500 leading-relaxed">
            The ROI is not about AI doing your job. It is about your team{" "}
            doing their job better, faster, and with less wasted effort.
          </p>
        </FadeIn>

        <div className="grid gap-8 sm:grid-cols-3">
          {props.map((p, i) => (
            <FadeIn key={p.headline} delay={i * 0.08}>
              <div className="group relative rounded-xl border border-zinc-200 bg-white p-6 hover:border-zinc-300 hover:shadow-sm transition-all">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-sage-50 ring-1 ring-sage/20">
                  <p.icon size={18} className="text-sage" strokeWidth={1.75} />
                </div>
                <h3 className="font-heading text-xl leading-snug tracking-tight text-zinc-900">
                  {p.headline}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                  {p.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
