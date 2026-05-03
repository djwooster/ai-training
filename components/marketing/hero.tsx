"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { PlayCircle, ArrowRight } from "lucide-react"

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section className="bg-background pt-16 pb-24 lg:pt-20 lg:pb-32">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: entire column fades in as one unit */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {/* TODO: Update with current cohort or launch state */}
              Enterprise AI Training &nbsp;·&nbsp; 32 lessons
            </p>

            <h1 className="mt-5 text-5xl font-semibold leading-tight tracking-tight text-foreground sm:text-[3.25rem]">
              The fastest way to make your whole team AI-fluent.
            </h1>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {/* TODO: Finalize value prop copy */}
              AI at Work is a practical, self-paced course that turns AI from a
              curiosity into a competitive advantage — for every role, not just
              technical ones.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#free-lesson"
                className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-foreground/90 transition-colors duration-150"
              >
                <PlayCircle size={16} strokeWidth={1.5} className="shrink-0" />
                Watch a free lesson
              </Link>
              <Link
                href="/for-teams#contact"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors duration-150"
              >
                Talk to sales
                <ArrowRight size={14} strokeWidth={1.5} className="shrink-0" />
              </Link>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              {/* TODO: Replace with real numbers once available */}
              Trusted by 2,400+ professionals at companies like Acme, Meridian, and Vantage.
            </p>
          </motion.div>

          {/* Right: video placeholder — second animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-xl border border-border bg-muted">
              {/* TODO: Replace with actual course trailer / preview thumbnail */}
              <div className="aspect-[16/10]">
                <Image
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Team learning AI together"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-foreground/25" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <button
                  aria-label="Watch course preview"
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-border/40 bg-background/90 hover:bg-background transition-colors duration-150"
                >
                  <PlayCircle
                    size={28}
                    strokeWidth={1.5}
                    className="ml-0.5 text-foreground"
                  />
                </button>
                <span className="rounded-md bg-foreground/50 px-3 py-1 text-xs font-medium text-background backdrop-blur-sm">
                  2 min preview
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
