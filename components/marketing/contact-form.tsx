"use client"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"

type FormState = "idle" | "loading" | "success" | "error"

// TODO: Add form validation library (e.g. zod + react-hook-form) for production
export function ContactForm() {
  const [state, setState] = useState<FormState>("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState("loading")

    const data = Object.fromEntries(new FormData(e.currentTarget))

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error("Request failed")
      setState("success")
    } catch {
      setState("error")
    }
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center">
        <CheckCircle size={40} className="text-sage" strokeWidth={1.5} />
        <h3 className="font-heading text-2xl tracking-tight text-zinc-900">
          Message received.
        </h3>
        <p className="max-w-sm text-sm text-zinc-500">
          Someone from our team will be in touch within one business day.
          {/* TODO: Set accurate response SLA */}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="firstName" className="text-xs font-medium text-zinc-700">
            First name <span className="text-red-400">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder="Ada"
            className="rounded-md border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20 transition"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="lastName" className="text-xs font-medium text-zinc-700">
            Last name <span className="text-red-400">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            placeholder="Lovelace"
            className="rounded-md border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20 transition"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs font-medium text-zinc-700">
          Work email <span className="text-red-400">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="ada@company.com"
          className="rounded-md border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20 transition"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="company" className="text-xs font-medium text-zinc-700">
          Company <span className="text-red-400">*</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          placeholder="Acme Corp"
          className="rounded-md border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20 transition"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="teamSize" className="text-xs font-medium text-zinc-700">
          Team size <span className="text-red-400">*</span>
        </label>
        <select
          id="teamSize"
          name="teamSize"
          required
          defaultValue=""
          className="rounded-md border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20 transition"
        >
          <option value="" disabled>
            Select team size
          </option>
          {/* TODO: Confirm tier thresholds with sales */}
          <option value="10-50">10 – 50</option>
          <option value="51-200">51 – 200</option>
          <option value="201-1000">201 – 1,000</option>
          <option value="1000+">1,000+</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-medium text-zinc-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your team, timeline, or any questions you have."
          className="rounded-md border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20 transition resize-none"
        />
      </div>

      {state === "error" && (
        <p className="text-sm text-red-500">
          Something went wrong. Please try again or email us directly.
          {/* TODO: Add direct contact email */}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-md bg-sage px-5 py-3 text-sm font-medium text-white hover:bg-sage-hover disabled:opacity-50 transition-colors"
      >
        {state === "loading" ? (
          "Sending…"
        ) : (
          <>
            <Send size={14} />
            Send message
          </>
        )}
      </button>
    </form>
  )
}
