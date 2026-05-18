"use client";
import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `[Portfolio] ${data.get("subject") || "Project inquiry"} — ${data.get("name") || ""}`
    );
    const body = encodeURIComponent(
      `From: ${data.get("name") || ""} <${data.get("email") || ""}>\n\n${data.get("message") || ""}`
    );
    window.location.href = `mailto:hello@ravi.dev?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-4xl border border-ink/10 bg-cream-100 p-10 shadow-soft">
      <Field id="name" label="Your name" type="text" autoComplete="name" required />
      <Field id="email" label="Email" type="email" autoComplete="email" required />
      <Field id="subject" label="What are you building?" type="text" placeholder="One-sentence summary" />
      <FieldTextarea id="message" label="Tell me more" placeholder="Scope, timeline, anything I should know." required />
      <button type="submit" className="btn btn-primary w-full justify-center">
        {sent ? "Email opened — thanks." : "Send message"}
        <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
          <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <p className="mt-4 text-center text-xs text-ink-400">
        Opens your mail client with the message pre-filled.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  type,
  autoComplete,
  required,
  placeholder,
}: {
  id: string;
  label: string;
  type: string;
  autoComplete?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="mb-2 block font-mono text-[0.74rem] uppercase tracking-[0.1em] text-ink-400">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-ink/10 bg-cream-200 px-4 py-3.5 transition-colors focus:border-ink focus:bg-cream-100 focus:outline-none"
      />
    </div>
  );
}

function FieldTextarea({
  id,
  label,
  required,
  placeholder,
}: {
  id: string;
  label: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="mb-2 block font-mono text-[0.74rem] uppercase tracking-[0.1em] text-ink-400">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        rows={5}
        required={required}
        placeholder={placeholder}
        className="min-h-[140px] w-full resize-y rounded-xl border border-ink/10 bg-cream-200 px-4 py-3.5 transition-colors focus:border-ink focus:bg-cream-100 focus:outline-none"
      />
    </div>
  );
}
