"use client"

import { UserPlus, PlayCircle, Sparkles } from "lucide-react"
import { FadeIn } from "./fade-in"

// TODO: Update steps to match final onboarding flow
const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Sign up",
    body: "Create your account in under a minute. Team admins get a shared dashboard to track progress across everyone.",
  },
  {
    icon: PlayCircle,
    number: "02",
    title: "Watch lessons",
    body: "Short, focused videos you can watch during lunch, between meetings, or in a dedicated learning block. No fluff.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Apply to your work",
    body: "Every lesson ends with a practical exercise tied to your actual job. You won't just understand AI — you'll use it.",
  },
]

export function HowItWorks() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <FadeIn className="mb-14 max-w-xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-sage">
            How it works
          </p>
          <h2 className="font-heading text-3xl tracking-tight text-zinc-900 sm:text-4xl">
            From signup to fluent in three steps.
          </h2>
        </FadeIn>

        <div className="relative grid gap-10 sm:grid-cols-3">
          {/* Connector line (desktop only) */}
          <div className="absolute top-6 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] hidden h-px bg-zinc-200 sm:block" />

          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <div className="relative flex flex-col gap-4">
                {/* Icon circle */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white ring-1 ring-zinc-200 shadow-sm">
                  <step.icon size={20} className="text-sage" strokeWidth={1.5} />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-sage text-[10px] font-bold text-white">
                    {i + 1}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-xl tracking-tight text-zinc-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                    {step.body}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
