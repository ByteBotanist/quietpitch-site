// components/EarlyAccessForm.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function EarlyAccessForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");

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
        handle: data.handle as string,
        firmName: (data.firmName as string) || "",
      };

      const res = await fetch(
        "https://quietpitch-funcapp-axfccbhygagpbkdw.eastus-01.azurewebsites.net/api/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        throw new Error("Signup failed");
      }

      form.reset();
      setStatus("done");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6 max-w-md">
      <div>
        <label className="block text-xs mb-1 text-slate-100" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-lg bg-black/30 border border-white/20 px-3 py-2 text-sm text-slate-100 outline-none focus:border-blue-400"
          placeholder="Jane Advisor"
        />
      </div>

      <div>
        <label className="block text-xs mb-1 text-slate-100" htmlFor="email">
          Work email
        </label>
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
        <label className="block text-xs mb-1 text-slate-100" htmlFor="handle">
          Profile handle
        </label>
        <input
          id="handle"
          name="handle"
          required
          pattern="[a-zA-Z0-9-]+"
          className="w-full rounded-lg bg-black/30 border border-white/20 px-3 py-2 text-sm text-slate-100 outline-none focus:border-blue-400"
        />
        <p className="mt-1 text-[11px] text-slate-400">
          This becomes your Quiet Pitch page address.
        </p>
      </div>

      <div>
        <label className="block text-xs mb-1 text-slate-100" htmlFor="firmName">
          Firm (optional)
        </label>
        <input
          id="firmName"
          name="firmName"
          className="w-full rounded-lg bg-black/30 border border-white/20 px-3 py-2 text-sm text-slate-100 outline-none focus:border-blue-400"
          placeholder="Oakbridge Wealth Management"
        />
      </div>

      <div className="pt-1">
        <label className="flex items-start gap-2 text-xs text-slate-200">
          <input type="checkbox" required className="mt-0.5" />
          <span>
            I agree to the{" "}
            <Link href="/platform-agreement" className="text-blue-300 underline">
              Platform Agreement
            </Link>
            .
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-xl bg-blue-500 hover:bg-blue-400 disabled:opacity-60 text-sm font-semibold px-5 py-2.5"
      >
        {status === "submitting" ? "Submitting..." : "Request access"}
      </button>

      {status === "done" && (
        <p className="text-xs text-emerald-300 mt-1">
          Thanks — check your email to confirm your Quiet Pitch profile.
        </p>
      )}

      {status === "error" && (
        <p className="text-xs text-red-300 mt-1">
          Something went wrong. Please try again. If error continues reachout to contact@quietpitch.com
        </p>
      )}
    </form>
  );
}