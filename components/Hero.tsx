// components/Hero.tsx
import Link from "next/link";
import PreviewCarousel from "@/components/PreviewCarousel";

export default function Hero() {
  return (
    <section className="pt-12 md:pt-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1.2fr,1fr] gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-50">
            Turn your market outlook into{" "}
            <span className="text-blue-300">
              client conversations.
            </span>
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/80 max-w-xl">
            Quiet Pitch gives financial advisors a clean, branded market page they can share 
            instantly—no logins or signups—complete with charts, multi-currency views, and a 
            built-in “Contact Advisor” button that turns interest into leads.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/early-access"
              className="inline-flex items-center justify-center rounded-xl bg-blue-500 hover:bg-blue-400 text-sm font-semibold px-5 py-2.5"
            >
              Join early access
            </Link>
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 text-sm font-semibold px-5 py-2.5 hover:border-white/60 text-white"
            >
              Watch demo
            </a>
          </div>
          <p className="mt-3 text-xs text-white/60">
            Pre-launch preview. No credit card. We’ll email you before we open subscriptions.
          </p>
        </div>
        <div className="hidden md:block">
          <PreviewCarousel />
        </div>
      </div>
    </section>
  );
}
