import Link from "next/link"
import { Check, Minus } from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

// TODO: Confirm final pricing before launch
export const tiers = [
  {
    id: "individual",
    name: "Individual",
    price: "$29",
    cadence: "/ month",
    description: "For solo learners who want to move fast and build lasting habits.",
    cta: "Get started",
    ctaHref: "/sign-in",
    featured: false,
    features: [
      "Full access to all 5 modules",
      "32 video lessons",
      "Downloadable prompt templates",
      "Progress tracking",
      "Certificate of completion",
      "Community access",
    ],
    missing: ["Team dashboard", "Admin controls", "Priority support"],
  },
  {
    id: "team",
    name: "Team",
    price: "$22",
    cadence: "/ seat / month",
    note: "Billed annually · 5 seat minimum",
    description: "For managers rolling out AI training across a department.",
    cta: "Start team trial",
    ctaHref: "/sign-in",
    featured: true,
    features: [
      "Everything in Individual",
      "Team dashboard & reporting",
      "Admin controls",
      "Bulk seat management",
      "Onboarding call",
      "Priority email support",
    ],
    missing: ["Custom content", "Dedicated CSM"],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    description: "For org-wide rollouts with compliance, SSO, and a dedicated team.",
    cta: "Talk to sales",
    ctaHref: "/for-teams#contact",
    featured: false,
    features: [
      "Everything in Team",
      "Custom content & branding",
      "SSO / SAML",
      "LMS integration",
      "Dedicated CSM",
      "SLA-backed support",
    ],
    missing: [],
  },
]

export function PricingSection({ detailed = false }: { detailed?: boolean }) {
  return (
    <section id="pricing" className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-14 max-w-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Pricing
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Simple, transparent pricing.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            No per-lesson charges. No usage caps. One flat rate that covers
            your entire team from day one.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.id}
              className={
                tier.featured
                  ? "relative border-foreground ring-0"
                  : ""
              }
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-md bg-foreground px-3 py-1 text-xs font-medium text-background">
                    Most popular
                  </span>
                </div>
              )}

              <CardHeader className="border-b border-border pb-0 pt-6">
                <CardTitle className="text-base font-semibold text-foreground">
                  {tier.name}
                </CardTitle>
                <CardDescription className="mt-1 text-sm text-muted-foreground">
                  {tier.description}
                </CardDescription>
                <div className="mt-4 pb-5">
                  <span className="font-mono text-4xl font-semibold tracking-tight text-foreground">
                    {tier.price}
                  </span>
                  {tier.cadence && (
                    <span className="ml-1 text-sm text-muted-foreground">
                      {tier.cadence}
                    </span>
                  )}
                  {tier.note && (
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      {tier.note}
                    </p>
                  )}
                </div>
              </CardHeader>

              <CardContent className="pt-5">
                <ul className="space-y-2.5">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-foreground"
                    >
                      <Check
                        size={14}
                        strokeWidth={2}
                        className="mt-0.5 shrink-0 text-brand"
                      />
                      {f}
                    </li>
                  ))}
                  {detailed &&
                    tier.missing.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <Minus
                          size={14}
                          strokeWidth={1.5}
                          className="mt-0.5 shrink-0 text-border"
                        />
                        {f}
                      </li>
                    ))}
                </ul>
              </CardContent>

              <CardFooter className="pb-5">
                <Link
                  href={tier.ctaHref}
                  className={`block w-full rounded-md py-2.5 text-center text-sm font-medium transition-colors duration-150 ${
                    tier.featured
                      ? "bg-foreground text-background hover:bg-foreground/90"
                      : "border border-border text-foreground hover:bg-muted"
                  }`}
                >
                  {tier.cta}
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {detailed && (
          <p className="mt-8 text-center text-sm text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.{" "}
            {/* TODO: Confirm trial policy */}
          </p>
        )}
      </div>
    </section>
  )
}
