"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "./fade-in"

export function CtaBand() {
  return (
    <section className="bg-zinc-900 py-20">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <FadeIn>
          <h2 className="font-heading text-3xl tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Ready to roll out AI to your team?
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            {/* TODO: Finalize CTA band copy */}
            Join thousands of professionals who've already made AI a daily advantage.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/sign-in"
              className="inline-flex items-center gap-2 rounded-md bg-sage px-6 py-3 text-sm font-medium text-white shadow-lg shadow-sage/20 hover:bg-sage-hover transition-colors"
            >
              Start for free
              <ArrowRight size={14} className="shrink-0" />
            </Link>
            <Link
              href="/for-teams#contact"
              className="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-transparent px-6 py-3 text-sm font-medium text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors"
            >
              Talk to sales
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
