import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

const footerLinks = {
  Product: [
    { href: "/#curriculum", label: "Curriculum" },
    { href: "/pricing", label: "Pricing" },
    { href: "/for-teams", label: "For Teams" },
  ],
  Company: [
    // TODO: Add real pages for About, Blog, Careers
    { href: "#", label: "About" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Careers" },
  ],
  Legal: [
    // TODO: Add real pages for Privacy, Terms
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="text-sm font-semibold tracking-tight text-foreground"
            >
              AI at Work
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {/* TODO: Finalize brand tagline */}
              Practical AI training built for real teams doing real work.
            </p>
          </div>

          {Object.entries(footerLinks).map(([group, items]) => (
            <div key={group}>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
                {group}
              </p>
              <ul className="mt-4 space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            {/* TODO: Update company name */}
            &copy; {new Date().getFullYear()} AI at Work, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <p className="text-xs text-muted-foreground">Built for the age of AI.</p>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}
