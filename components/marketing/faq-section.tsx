"use client"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { FadeIn } from "./fade-in"

// TODO: Review and finalize FAQ copy with legal / product
const faqs = [
  {
    q: "What's actually included in the course?",
    a: "AI at Work includes 32 video lessons across 5 modules, covering AI fundamentals, prompting techniques, tool walkthroughs, workflow automation, and team strategy. Every lesson comes with a practical exercise and downloadable resources.",
  },
  {
    q: "How long does it take to complete?",
    a: "Most learners finish a module per week, putting the full course at about 5 weeks. Individual lessons are 6–12 minutes long, so you can fit them between meetings. There's no deadline — you keep access for as long as you're subscribed.",
  },
  {
    q: "Is it really self-paced?",
    a: "Yes. Watch on your schedule, pause mid-lesson, and come back whenever works for you. The course is designed to be consumed in short bursts, not marathon sessions.",
  },
  {
    q: "What AI tools does it cover?",
    a: "We cover the leading general-purpose AI assistants (ChatGPT, Claude, Gemini), plus tool-specific lessons on AI in Google Workspace, Microsoft 365, Notion, and popular automation platforms. The principles apply to any AI tool you use.",
    // TODO: Keep tool list up to date as tools evolve
  },
  {
    q: "Do you offer a refund?",
    a: "Yes. If you're not satisfied within the first 14 days, contact us and we'll refund your payment in full — no questions asked.",
    // TODO: Confirm refund policy with legal
  },
  {
    q: "Can I use this for my whole team?",
    a: "Absolutely — that's what the Team and Enterprise plans are designed for. Team admins get a dashboard to track progress, assign lessons, and pull reports. Reach out on the For Teams page if you'd like a walkthrough.",
  },
]

export function FaqSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <FadeIn className="mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-sage">
            FAQ
          </p>
          <h2 className="font-heading text-3xl tracking-tight text-zinc-900 sm:text-4xl">
            Common questions.
          </h2>
        </FadeIn>

        <FadeIn delay={0.08}>
          <Accordion multiple={false}>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={String(i)}>
                <AccordionTrigger className="py-5 text-base font-medium text-zinc-900 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pb-1 text-sm leading-relaxed text-zinc-500">
                    {faq.a}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  )
}
