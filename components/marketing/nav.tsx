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
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground hover:text-foreground/80 transition-colors duration-150"
        >
          AI at Work
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/sign-in"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
          >
            Sign in
          </Link>
          <Link
            href="/#pricing"
            className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90 transition-colors duration-150"
          >
            Get started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex items-center justify-center rounded-md p-1.5 text-muted-foreground hover:text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X size={20} strokeWidth={1.5} />
          ) : (
            <Menu size={20} strokeWidth={1.5} />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background px-4 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/sign-in"
              onClick={() => setOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
            >
              Sign in
            </Link>
            <Link
              href="/#pricing"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background hover:bg-foreground/90 transition-colors duration-150"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
