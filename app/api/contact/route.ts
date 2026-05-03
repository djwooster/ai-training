import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const body = await req.json()
  // TODO: Wire up to real CRM / email service (e.g. HubSpot, Resend)
  console.log("[contact form submission]", body)
  return NextResponse.json({ ok: true })
}
