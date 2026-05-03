// NOTE: This file serves / to avoid a Next.js route conflict with app/(marketing)/page.tsx.
// The (marketing)/layout.tsx handles /pricing and /for-teams via the shared MarketingShell.
// To move this into the route group: delete this file, then create app/(marketing)/page.tsx
// with the same content (the rest of the file is identical either way).

import { MarketingShell } from "@/components/marketing/marketing-shell"
import { Hero } from "@/components/marketing/hero"
import { LogoStrip } from "@/components/marketing/logo-strip"
import { ValueProps } from "@/components/marketing/value-props"
import { CurriculumSection } from "@/components/marketing/curriculum-section"
import { HowItWorks } from "@/components/marketing/how-it-works"
import { PricingSection } from "@/components/marketing/pricing-section"
import { FaqSection } from "@/components/marketing/faq-section"
import { CtaBand } from "@/components/marketing/cta-band"

export default function HomePage() {
  return (
    <MarketingShell>
      <Hero />
      <LogoStrip />
      <ValueProps />
      <CurriculumSection />
      <HowItWorks />
      <PricingSection />
      <FaqSection />
      <CtaBand />
    </MarketingShell>
  )
}
