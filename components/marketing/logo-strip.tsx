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
    <section className="border-y border-zinc-100 bg-zinc-50 py-10">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-zinc-400">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {placeholderLogos.map((name) => (
            <span
              key={name}
              className="font-heading text-xl font-normal tracking-tight text-zinc-300 select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
