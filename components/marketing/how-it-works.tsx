"use client"

import { UserPlus, PlayCircle, Sparkles } from "lucide-react"

// TODO: Update steps to match final onboarding flow
const steps = [
  {
    icon: UserPlus,
    title: "Sign up",
    body: "Create your account in under a minute. Team admins get a shared dashboard to track progress across everyone.",
  },
  {
    icon: PlayCircle,
    title: "Watch lessons",
    body: "Short, focused videos you can watch during lunch, between meetings, or in a dedicated learning block. No fluff.",
  },
  {
    icon: Sparkles,
    title: "Apply to your work",
    body: "Every lesson ends with a practical exercise tied to your actual job. You won't just understand AI — you'll use it.",
  },
]

export function HowItWorks() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-14 max-w-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            How it works
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            From signup to fluent in three steps.
          </h2>
        </div>

        <div className="relative grid gap-10 sm:grid-cols-3">
          {/* Connector line (desktop only) */}
          <div className="absolute top-5 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] hidden h-px bg-border sm:block" />

          {steps.map((step, i) => (
            <div key={step.title} className="relative flex flex-col gap-4">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background">
                <step.icon size={16} strokeWidth={1.5} className="text-foreground" />
                <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-sm bg-foreground font-mono text-[9px] font-semibold text-background">
                  {i + 1}
                </span>
              </div>
              <div>
                <h3 className="text-base font-semibold tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
