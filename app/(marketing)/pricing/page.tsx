import type { Metadata } from "next"
import { PricingSection } from "@/components/marketing/pricing-section"
import { FaqSection } from "@/components/marketing/faq-section"
import { CtaBand } from "@/components/marketing/cta-band"
import { tiers } from "@/components/marketing/pricing-section"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing — AI at Work",
  description:
    "Simple, transparent pricing for individuals, teams, and enterprises. No per-lesson charges, no usage caps.",
}

// Full comparison table for the dedicated pricing page
function ComparisonTable() {
  const allFeatures = [
    "All 5 modules, 32 lessons",
    "Downloadable prompt templates",
    "Progress tracking",
    "Certificate of completion",
    "Community access",
    "Team dashboard & reporting",
    "Admin controls",
    "Bulk seat management",
    "Onboarding call",
    "Priority email support",
    "Custom content & branding",
    "SSO / SAML",
    "LMS integration",
    "Dedicated CSM",
    "SLA-backed support",
  ]

  const included: Record<string, string[]> = {
    individual: tiers[0].features,
    team: tiers[1].features,
    enterprise: tiers[2].features,
  }

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <h2 className="mb-10 font-heading text-2xl tracking-tight text-zinc-900">
          Full feature comparison
        </h2>
        <div className="overflow-x-auto rounded-xl border border-zinc-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50">
                <th className="px-5 py-4 text-left font-medium text-zinc-500">
                  Feature
                </th>
                {tiers.map((t) => (
                  <th
                    key={t.id}
                    className="px-5 py-4 text-center font-medium text-zinc-900"
                  >
                    {t.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allFeatures.map((feature, i) => (
                <tr
                  key={feature}
                  className={i % 2 === 0 ? "bg-white" : "bg-zinc-50/50"}
                >
                  <td className="px-5 py-3.5 text-zinc-700">{feature}</td>
                  {tiers.map((tier) => {
                    const has = included[tier.id]?.some((f) =>
                      f.toLowerCase().includes(feature.toLowerCase().slice(0, 12))
                    )
                    return (
                      <td key={tier.id} className="px-5 py-3.5 text-center">
                        {has ? (
                          <Check
                            size={15}
                            className="mx-auto text-sage"
                            strokeWidth={2.5}
                          />
                        ) : (
                          <span className="text-zinc-300">—</span>
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-zinc-400">
          {/* TODO: Add money-back guarantee copy once confirmed */}
          All plans include a 14-day money-back guarantee.
        </p>
      </div>
    </section>
  )
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-16 pb-2">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="max-w-xl">
            <h1 className="font-heading text-4xl tracking-tight text-zinc-900 sm:text-5xl">
              Pricing that scales with your team.
            </h1>
            <p className="mt-4 text-lg text-zinc-500 leading-relaxed">
              {/* TODO: Update with accurate numbers */}
              Start free, upgrade when your team is ready. No hidden fees, no
              per-lesson charges, no surprises on your invoice.
            </p>
          </div>
        </div>
      </section>

      <PricingSection detailed />
      <ComparisonTable />
      <FaqSection />
      <CtaBand />
    </>
  )
}
