// components/EarlyAccessForm.tsx
"use client";

import { useState } from "react";

export default function EarlyAccessForm() {
  const [status, setStatus] = useState<"idle"|"submitting"|"done"|"error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    setStatus("submitting");

    try {
    const payload = {
      name: data.name as string,
      email: data.email as string,
      firm: (data.firm as string) || "",
      notes: (data.notes as string) || "",
      licensedProfessional: data.licensedProfessional === "on",
    };

    // Call our API route
    const res = await fetch("/api/early-access", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error("Request failed");
    }

    form.reset();
    setStatus("done");
  } catch (err) {
    console.error("Submit failed:", err);
    setStatus("error");
  }
}

  return (
    <form onSubmit={handleSubmit} className="space-y-3 mt-6 max-w-md">
      <div>
        <label className="block text-xs mb-1 text-slate-100" htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-lg bg-black/30 border border-white/20 px-3 py-2 text-sm text-slate-100 outline-none focus:border-blue-400"
          placeholder="Jane Advisor"
        />
      </div>
      <div>
        <label className="block text-xs mb-1 text-slate-100" htmlFor="email">Work email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg bg-black/30 border border-white/20 px-3 py-2 text-sm text-slate-100 outline-none focus:border-blue-400"
          placeholder="you@firm.com"
        />
      </div>
      <div>
        <label className="block text-xs mb-1 text-slate-100" htmlFor="firm">Firm (optional)</label>
        <input
          id="firm"
          name="firm"
          className="w-full rounded-lg bg-black/30 border border-white/20 px-3 py-2 text-sm text-slate-100 outline-none focus:border-blue-400"
          placeholder="Oakbridge Wealth Management"
        />
      </div>
      <div>
        <label className="block text-xs mb-1 text-slate-100" htmlFor="notes">What interests you about Quiet Pitch?</label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          className="w-full rounded-lg bg-black/30 border border-white/20 px-3 py-2 text-sm text-slate-100 outline-none focus:border-blue-400"
          placeholder="e.g. Better way to share my market outlook with prospects..."
        />
      </div>
        <div className="pt-1">
    <label className="flex items-start gap-2 text-xs text-slate-200">
      <input
        type="checkbox"
        name="licensedProfessional"
        required
        className="mt-0.5"
      />
      <span>
        I certify that I am a licensed or registered financial professional,
        or the equivalent in my jurisdiction.
      </span>
    </label>
    <p className="mt-1 text-[11px] text-slate-400">
      Quiet Pitch is designed for regulated financial professionals only.
    </p>
  </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-xl bg-blue-500 hover:bg-blue-400 disabled:opacity-60 text-sm font-semibold px-5 py-2.5"
      >
        {status === "submitting" ? "Submitting..." : "Join early access"}
      </button>
      {status === "done" && (
        <p className="text-xs text-emerald-300 mt-1">
          Thanks! We&apos;ll email you as soon as Quiet Pitch is ready for private beta.
        </p>
      )}
      {status === "error" && (
        <p className="text-xs text-red-300 mt-1">
          Something went wrong. You can also email us directly at contact@quietpitch.com.
        </p>
      )}
    </form>
  );
}
