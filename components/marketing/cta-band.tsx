import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CtaBand() {
  return (
    <section className="bg-[#0a0a0a] py-20 dark:bg-[#111111]">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Ready to roll out AI to your team?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/60">
          {/* TODO: Finalize CTA band copy */}
          Join thousands of professionals who&apos;ve already made AI a daily advantage.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/sign-in"
            className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-2.5 text-sm font-medium text-[#0a0a0a] hover:bg-white/90 transition-colors duration-150"
          >
            Start for free
            <ArrowRight size={14} strokeWidth={1.5} className="shrink-0" />
          </Link>
          <Link
            href="/for-teams#contact"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-2.5 text-sm font-medium text-white/80 hover:border-white/40 hover:text-white transition-colors duration-150"
          >
            Talk to sales
          </Link>
        </div>
      </div>
    </section>
  )
}
