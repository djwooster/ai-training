import type { Metadata } from "next"
import { ForTeamsHero } from "@/components/marketing/for-teams-hero"
import { RoiBreakdown } from "@/components/marketing/roi-breakdown"
import { ContactForm } from "@/components/marketing/contact-form"
import { CtaBand } from "@/components/marketing/cta-band"

export const metadata: Metadata = {
  title: "AI at Work for Teams — Enterprise AI Training",
  description:
    "Roll out structured AI training across your organization. Built for L&D and IT teams with SSO, LMS integration, and a dedicated CSM.",
}

export default function ForTeamsPage() {
  return (
    <>
      <ForTeamsHero />
      <RoiBreakdown />

      {/* Contact / demo form */}
      <section id="contact" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Left: copy */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-sage">
                Get in touch
              </p>
              <h2 className="font-heading text-3xl tracking-tight text-zinc-900 sm:text-4xl">
                Let&apos;s talk about your team.
              </h2>
              <p className="mt-4 text-zinc-500 leading-relaxed">
                {/* TODO: Update contact copy with team size / industry specifics */}
                Whether you're planning a pilot or rolling out to 5,000 people,
                we can tailor a plan that fits. Fill in the form and we'll be in
                touch within one business day.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  ["Typical response time", "Under 1 business day"],
                  ["Onboarding timeline", "2 weeks from contract to launch"],
                  ["Minimum team size", "5 seats (Team plan)"],
                ].map(([label, value]) => (
                  <div key={label} className="flex flex-col gap-0.5">
                    <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">
                      {label}
                    </span>
                    <span className="text-sm font-medium text-zinc-800">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
