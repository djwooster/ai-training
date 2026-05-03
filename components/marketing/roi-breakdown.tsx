"use client"

import { FadeIn } from "./fade-in"

// TODO: Replace with customer-validated ROI data
const metrics = [
  {
    figure: "3–5 hrs",
    label: "saved per employee per week",
    context: "Based on self-reported time savings from 400+ survey respondents.",
  },
  {
    figure: "6 weeks",
    label: "average time to full team deployment",
    context: "From kickoff call to 80% lesson completion across the cohort.",
  },
  {
    figure: "73%",
    label: "of employees improve output quality",
    context:
      "Measured by manager review of AI-assisted work before and after training.",
  },
  {
    figure: "2.4×",
    label: "ROI in the first quarter",
    context: "Estimated across cost of training vs. productivity gains recovered.",
  },
]

const enterpriseFeatures = [
  {
    title: "SSO & SAML",
    body: "Connect directly to your identity provider. Employees access the course using their existing company credentials.",
  },
  {
    title: "LMS Integration",
    body: "Sync with your existing learning management system via SCORM or xAPI. Progress and completions flow back automatically.",
  },
  {
    title: "Custom Content",
    body: "Add company-specific lessons, style guides, and approved tool lists alongside the core curriculum.",
  },
  {
    title: "Dedicated CSM",
    body: "A customer success manager is assigned to your account from kickoff through renewal — not just support tickets.",
  },
  {
    title: "Progress Reporting",
    body: "Real-time dashboards for L&D leaders with completion rates, time-on-task, and assessment scores by team.",
  },
  {
    title: "SLA-Backed Support",
    body: "Priority support with guaranteed response times and a named escalation contact for enterprise accounts.",
  },
]

export function RoiBreakdown() {
  return (
    <>
      {/* Metrics */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <FadeIn className="mb-14 max-w-xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-sage">
              The ROI case
            </p>
            <h2 className="font-heading text-3xl tracking-tight text-zinc-900 sm:text-4xl">
              The numbers that move budgets.
            </h2>
            <p className="mt-4 text-zinc-500 leading-relaxed">
              Real outcomes from teams that completed AI at Work. Use these in
              your business case — or ask us for the full dataset.
            </p>
          </FadeIn>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m, i) => (
              <FadeIn key={m.label} delay={i * 0.07}>
                <div className="flex flex-col gap-2">
                  <p className="font-heading text-4xl leading-none tracking-tight text-zinc-900">
                    {m.figure}
                  </p>
                  <p className="text-sm font-medium text-zinc-700">{m.label}</p>
                  <p className="text-xs leading-relaxed text-zinc-400">{m.context}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise features grid */}
      <section className="bg-zinc-50 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <FadeIn className="mb-14 max-w-xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-sage">
              Enterprise features
            </p>
            <h2 className="font-heading text-3xl tracking-tight text-zinc-900 sm:text-4xl">
              Built for IT and L&D requirements.
            </h2>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {enterpriseFeatures.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.06}>
                <div className="rounded-xl border border-zinc-200 bg-white p-6">
                  <h3 className="font-heading text-lg tracking-tight text-zinc-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                    {f.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
