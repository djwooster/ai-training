import Link from "next/link"

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
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-heading text-lg font-normal tracking-tight text-zinc-900"
            >
              AI at Work
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">
              {/* TODO: Finalize brand tagline */}
              Practical AI training built for real teams doing real work.
            </p>
          </div>

          {Object.entries(footerLinks).map(([group, items]) => (
            <div key={group}>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                {group}
              </p>
              <ul className="mt-4 space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-zinc-200 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-zinc-400">
            {/* TODO: Update company name */}
            &copy; {new Date().getFullYear()} AI at Work, Inc. All rights reserved.
          </p>
          <p className="text-xs text-zinc-400">
            Built for the age of AI.
          </p>
        </div>
      </div>
    </footer>
  )
}
