// TODO: Replace placeholder company names with real client logos (SVG or Image)
const placeholderLogos = [
  "Acme Corp",
  "Meridian",
  "Vantage",
  "Northlight",
  "Crestwood",
]

export function LogoStrip() {
  return (
    <section className="border-y border-border bg-muted py-10">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {placeholderLogos.map((name) => (
            <span
              key={name}
              className="font-mono text-base tracking-tight text-border select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
