"use client";

import { useState } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", company: "", budget: "", message: "" });
    } catch {
      setErrorMsg("Could not reach the server. Check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-gold/40 bg-ink2 rounded-sm p-10">
        <h3 className="font-display text-2xl text-cream mb-2">Message sent.</h3>
        <p className="text-slate text-sm">
          We read every inquiry. Expect a reply from the team within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Name" required>
          <input
            type="text"
            required
            value={form.name}
            onChange={update("name")}
            className="field-input"
          />
        </Field>
        <Field label="Email" required>
          <input
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            className="field-input"
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Company">
          <input
            type="text"
            value={form.company}
            onChange={update("company")}
            className="field-input"
          />
        </Field>
        <Field label="Monthly budget">
          <select value={form.budget} onChange={update("budget")} className="field-input">
            <option value="">Select a range</option>
            <option value="<5k">Under $5k</option>
            <option value="5k-15k">$5k – $15k</option>
            <option value="15k-50k">$15k – $50k</option>
            <option value="50k+">$50k+</option>
          </select>
        </Field>
      </div>

      <Field label="What are you trying to move?" required>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          className="field-input resize-none"
        />
      </Field>

      {status === "error" && (
        <p className="text-sm text-red-400" role="alert">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-2 px-6 py-3.5 bg-gold-fade text-ink font-semibold rounded-sm hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            Sending <Loader2 size={18} className="animate-spin" />
          </>
        ) : (
          <>
            Send message <ArrowUpRight size={18} />
          </>
        )}
      </button>
    </form>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wide text-slate mb-2 block">
        {label} {required && <span className="text-gold">*</span>}
      </span>
      {children}
    </label>
  );
}
