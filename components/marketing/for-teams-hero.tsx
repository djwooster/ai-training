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
    <section className="relative overflow-hidden bg-[#0a0a0a] pt-16 pb-20 lg:pt-24 lg:pb-28">
      {/* Background image — always-dark section, fixed color */}
      <div className="absolute inset-0">
        {/* TODO: Replace with a more contextual brand photo */}
        <Image
          src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Team in a workshop session"
          fill
          className="object-cover opacity-[0.08]"
          priority
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
        <div className="max-w-2xl">
          {/* Content block — one animation */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
              For L&D and IT leaders
            </span>

            <h1 className="mt-6 text-[2.75rem] font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Turn AI adoption from a liability into a program.
            </h1>

            <p className="mt-5 text-base leading-relaxed text-white/60">
              {/* TODO: Finalize L&D buyer copy */}
              AI at Work gives you a structured, trackable way to upskill your
              entire organization — without spinning up a custom curriculum or
              hiring an AI consultant.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-medium text-[#0a0a0a] hover:bg-white/90 transition-colors duration-150"
              >
                Request a demo
                <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-2.5 text-sm font-medium text-white/80 hover:border-white/40 hover:text-white transition-colors duration-150"
              >
                See pricing
              </Link>
            </div>
          </motion.div>

          {/* Trust badges — second animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-6"
          >
            {badges.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2 text-sm text-white/40"
              >
                <b.icon size={14} strokeWidth={1.5} className="shrink-0 text-white/30" />
                {b.label}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
