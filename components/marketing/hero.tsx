"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { PlayCircle, ArrowRight } from "lucide-react"

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-28">
      {/* Subtle background texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.97_0.015_152),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Left: Copy */}
          <div>
            {/* Tag chip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sage-50 px-3 py-1 text-xs font-medium text-sage ring-1 ring-sage/20">
                {/* TODO: Update with launch info or current cohort */}
                Enterprise AI Training &nbsp;·&nbsp; 32 lessons
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.08 }}
              className="mt-6 font-heading text-[2.75rem] leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.25rem]"
            >
              The fastest way to make{" "}
              <span className="italic text-sage">your whole team</span> AI-fluent.
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.16 }}
              className="mt-5 text-lg leading-relaxed text-zinc-500"
            >
              {/* TODO: Finalize value prop copy */}
              AI at Work is a practical, self-paced course that turns AI from a curiosity into a competitive advantage — for every role, not just technical ones.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.24 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                href="#free-lesson"
                className="inline-flex items-center gap-2 rounded-md bg-sage px-5 py-3 text-sm font-medium text-sage-foreground shadow-sm hover:bg-sage-hover transition-colors"
              >
                <PlayCircle size={16} className="shrink-0" />
                Watch a free lesson
              </Link>
              <Link
                href="/for-teams#contact"
                className="inline-flex items-center gap-2 rounded-md border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-700 hover:border-zinc-400 hover:text-zinc-900 transition-colors"
              >
                Talk to sales
                <ArrowRight size={14} className="shrink-0" />
              </Link>
            </motion.div>

            {/* Social proof line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-xs text-zinc-400"
            >
              {/* TODO: Replace with real numbers once available */}
              Trusted by 2,400+ professionals at companies like Acme, Meridian, and Vantage.
            </motion.p>
          </div>

          {/* Right: Video placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl bg-zinc-100 shadow-xl shadow-zinc-200/60 ring-1 ring-zinc-200">
              {/* TODO: Replace with actual course trailer / preview thumbnail */}
              <div className="aspect-[16/10]">
                <Image
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Team learning AI together"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-zinc-900/30" />
              </div>

              {/* Play button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <button
                  aria-label="Watch course preview"
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-transform hover:scale-105 active:scale-100"
                >
                  <PlayCircle size={32} className="text-sage ml-0.5" />
                </button>
                <span className="rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  2 min preview
                </span>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-4 -left-4 hidden rounded-xl bg-white px-4 py-3 shadow-lg ring-1 ring-zinc-200 sm:block">
              <p className="text-xs font-semibold text-zinc-900">3–5 hrs</p>
              <p className="text-xs text-zinc-500">saved per employee/week</p>
            </div>
            {/* Floating module count */}
            <div className="absolute -top-4 -right-4 hidden rounded-xl bg-white px-4 py-3 shadow-lg ring-1 ring-zinc-200 sm:block">
              <p className="text-xs font-semibold text-zinc-900">5 modules</p>
              <p className="text-xs text-zinc-500">32 lessons total</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
