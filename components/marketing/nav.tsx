"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { href: "/#curriculum", label: "Course" },
  { href: "/pricing", label: "Pricing" },
  { href: "/for-teams", label: "For Teams" },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-lg font-normal tracking-tight text-zinc-900 hover:text-zinc-700 transition-colors"
        >
          AI at Work
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/sign-in"
            className="text-sm font-medium text-zinc-900 hover:text-zinc-700 transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/#pricing"
            className="rounded-md bg-sage px-4 py-2 text-sm font-medium text-sage-foreground hover:bg-sage-hover transition-colors"
          >
            Get started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex items-center justify-center rounded-md p-2 text-zinc-600 hover:text-zinc-900 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-zinc-100 bg-white px-4 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-zinc-700 hover:text-zinc-900 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/sign-in"
              onClick={() => setOpen(false)}
              className="text-sm text-zinc-700 hover:text-zinc-900 transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/#pricing"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex rounded-md bg-sage px-4 py-2.5 text-sm font-medium text-sage-foreground hover:bg-sage-hover transition-colors"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
