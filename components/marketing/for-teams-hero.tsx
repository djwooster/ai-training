"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Shield, Users, BarChart3 } from "lucide-react"

const ease = [0.22, 1, 0.36, 1] as const

// TODO: Update badges with accurate numbers
const badges = [
  { icon: Users, label: "500+ companies enrolled" },
  { icon: Shield, label: "SOC 2 compliant" },
  { icon: BarChart3, label: "Avg. 4.8/5 team rating" },
]

export function ForTeamsHero() {
  return (
    <section className="relative overflow-hidden bg-zinc-900 pt-16 pb-20 lg:pt-24 lg:pb-28">
      {/* Background image */}
      <div className="absolute inset-0">
        {/* TODO: Replace with a more contextual brand photo */}
        <Image
          src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Team in a workshop session"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/80 to-zinc-900" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sage/20 px-3 py-1 text-xs font-medium text-sage ring-1 ring-sage/30">
              For L&D and IT leaders
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.08 }}
            className="mt-6 font-heading text-[2.75rem] leading-[1.1] tracking-tight text-white sm:text-5xl"
          >
            Turn AI adoption from a{" "}
            <span className="italic text-sage">liability</span> into a program.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.16 }}
            className="mt-5 text-lg leading-relaxed text-zinc-400"
          >
            {/* TODO: Finalize L&D buyer copy */}
            AI at Work gives you a structured, trackable way to upskill your
            entire organization — without spinning up a custom curriculum or
            hiring an AI consultant.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-sage px-5 py-3 text-sm font-medium text-white shadow-lg shadow-sage/20 hover:bg-sage-hover transition-colors"
            >
              Request a demo
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-md border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors"
            >
              See pricing
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-5"
          >
            {badges.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2 text-sm text-zinc-500"
              >
                <b.icon size={14} className="shrink-0 text-zinc-600" />
                {b.label}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
