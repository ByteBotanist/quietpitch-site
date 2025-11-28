// components/PricingPreview.tsx
import Link from "next/link";

const tiers = [
  {
    name: "Free trial (14 days)",
    price: "$0",
    subtitle: "Start with a single advisor page and real market data before you decide.",
    items: [
      "1 advisor page",
      "Up to 10 leads total",
      "Up to 1,000 page views",
      "No payment information required.",
    ],
    highlight: false,
  },
  {
    name: "Basic",
    price: "$19/mo*",
    subtitle: "For solo advisors testing digital outreach.",
    items: [
      "1–2 pages (slugs)",
      "Up to 25 leads / month",
      "Up to 2,000 page views",
      "Daily FX refresh badge",
      "Email support only",
    ],
    highlight: true,
  },
  {
    name: "Pro / Enterprise",
    price: "Coming soon",
    subtitle: "For teams that need higher limits and white-labeling.",
    items: [
      "More pages & leads",
      "Higher monthly page views",
      "Hourly / minute-by-minute FX (no badge)",
      "Priority and dedicated support options",
    ],
    highlight: false,
  },
];


export default function PricingPreview() {
  return (
    <section className="mt-16" id="pricing-preview">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-sky-100">
          Pricing that grows with your practice.
        </h2>
        <p className="mt-2 text-xs md:text-sm text-white/70 max-w-2xl">
          We’re finalizing plans for launch. During early access, you’ll lock in founding-member 
          pricing and the chance to use Quiet Pitch before anyone else. You’ll be part of the private 
          beta and receive exclusive benefits—even if you unenroll and come back later, you’ll still 
          be treated as a founding member.”
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl border p-4 bg-white/5 border-white/10 ${
                t.highlight ? "ring-1 ring-blue-400/60" : ""
              }`}
            >
              <h3 className="text-sm font-semibold text-slate-300">{t.name}</h3>
              <p className="mt-2 text-xl font-semibold text-sky-50">{t.price}</p>
              <p className="mt-1 text-xs text-white/70">{t.subtitle}</p>
              <ul className="mt-4 space-y-1 text-xs text-white/75">
                {t.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <Link
                href="/early-access"
                className="mt-5 inline-flex items-center justify-center rounded-xl bg-blue-500 hover:bg-blue-400 text-xs font-semibold px-4 py-2"
              >
                Join early access
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[11px] text-white/60">
          *Indicative pricing. Final pricing and limits may be adjusted before launch.
        </p>
      </div>
    </section>
  );
}
