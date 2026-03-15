// components/EarlyAccessForm.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function EarlyAccessForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [handleStatus, setHandleStatus] = useState<"idle" | "checking" | "available" | "taken">("idle");

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
        regulatoryStatus: data.regulatoryStatus as string
      };

      const res = await fetch("/api/early-access",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        const message = await res.text();

      if (message.includes("Handle already taken")) {
        setHandleStatus("taken");
        setStatus("idle");
        return;
      }

      throw new Error(message);
    }

      form.reset();
      setStatus("done");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  async function checkHandle(handle: string) {
  if (!handle) return;

  setHandleStatus("checking");

  try {
    const res = await fetch(`/api/check-handle?handle=${handle}`);
    const data = await res.json();

    setHandleStatus(data.available ? "available" : "taken");
  } catch {
    setHandleStatus("idle");
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
          pattern="[a-z0-9-]+"
          onBlur={(e) => checkHandle(e.target.value)}
          className="w-full rounded-lg bg-black/30 border border-white/20 px-3 py-2 text-sm text-slate-100 outline-none focus:border-blue-400"
        />
        <p className="mt-1 text-[11px] text-slate-400">
          Your public page address (example: quietpitch.com/oakbridge). Use lowercase letters, numbers, and hyphens only.
        </p>

        {handleStatus === "checking" && (
          <p className="text-[11px] text-slate-400 mt-1">Checking handle...</p>
        )}

        {handleStatus === "available" && (
          <p className="text-[11px] text-emerald-400 mt-1">Handle available</p>
        )}

        {handleStatus === "taken" && (
          <p className="text-[11px] text-red-400 mt-1">Handle already taken</p>
        )}
      </div>

      <div>
        <label className="block text-xs mb-1 text-slate-100" htmlFor="firmName">
          Firm (optional)
        </label>
        <input
          id="firmName"
          name="firmName"
          className="w-full rounded-lg bg-black/30 border border-white/20 px-3 py-2 text-sm text-slate-100 outline-none focus:border-blue-400"
        />
      </div>

      <label className="block text-xs mb-1 text-slate-100" htmlFor="handlee">Regulatory Status</label>
      <select
        name="regulatoryStatus"
        required
        defaultValue=""
        className="w-full rounded-xl border border-white/20 bg-black/20 px-5 py-4 text-white appearance-none"
      >
        <option value="">Select...</option>
        <option value="Not registered / Educational">Not registered / Educational</option>
        <option value="RIA (Registered Investment Adviser)">RIA (Registered Investment Adviser)</option>
        <option value="Broker-Dealer">Broker-Dealer</option>
        <option value="Dual Registration">Dual Registration</option>
      </select>

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