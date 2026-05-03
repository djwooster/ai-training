import { Nav } from "./nav"
import { Footer } from "./footer"

export function MarketingShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}
