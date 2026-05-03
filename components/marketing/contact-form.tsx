"use client"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"

type FormState = "idle" | "loading" | "success" | "error"

const inputClass =
  "rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition duration-150"

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
        <CheckCircle size={32} strokeWidth={1.5} className="text-success" />
        <h3 className="text-xl font-semibold tracking-tight text-foreground">
          Message received.
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Someone from our team will be in touch within one business day.
          {/* TODO: Set accurate response SLA */}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="firstName" className="text-xs font-medium text-foreground">
            First name <span className="text-error">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder="Ada"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="lastName" className="text-xs font-medium text-foreground">
            Last name <span className="text-error">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            placeholder="Lovelace"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs font-medium text-foreground">
          Work email <span className="text-error">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="ada@company.com"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="company" className="text-xs font-medium text-foreground">
          Company <span className="text-error">*</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          placeholder="Acme Corp"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="teamSize" className="text-xs font-medium text-foreground">
          Team size <span className="text-error">*</span>
        </label>
        <select
          id="teamSize"
          name="teamSize"
          required
          defaultValue=""
          className={inputClass}
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
        <label htmlFor="message" className="text-xs font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your team, timeline, or any questions you have."
          className={`${inputClass} resize-none`}
        />
      </div>

      {state === "error" && (
        <p className="text-sm text-error">
          Something went wrong. Please try again or email us directly.
          {/* TODO: Add direct contact email */}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-foreground/90 disabled:opacity-50 transition-colors duration-150"
      >
        {state === "loading" ? (
          "Sending…"
        ) : (
          <>
            <Send size={14} strokeWidth={1.5} />
            Send message
          </>
        )}
      </button>
    </form>
  )
}
