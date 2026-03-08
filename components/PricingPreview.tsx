// components/PricingPreview.tsx
import Link from "next/link";

const tiers = [
  {
    name: "Free Access",
    title: "Currently free",
    subtitle: "Use Quiet Pitch now while features continue to improve.",
    items: [
      "Create your public advisor page",
      "Use real market data",
      "Receive inbound interest",
      "No payment required",
    ],
    highlight: false,
  },
  {
    name: "Help Shape Quiet Pitch",
    title: "Your feedback matters",
    subtitle: "Early users help determine what gets built next.",
    items: [
      "Suggest features",
      "Share advisor workflow needs",
      "Influence roadmap decisions",
    ],
    highlight: false,
  },
  {
    name: "Founding Access",
    title: "Reserved early benefits",
    subtitle: "Early adopters will receive priority as Quiet Pitch evolves.",
    items: [
      "Priority feature access",
      "Founding-user consideration",
      "Future pricing priority",
    ],
    highlight: false,
  },
];


export default function PricingPreview() {
  return (
    <section className="mt-16" id="pricing-preview">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-sky-100">
          Early access while Quiet Pitch evolves.
        </h2>
        <p className="mt-2 text-xs md:text-sm text-white/70 max-w-2xl">
          Quiet Pitch is currently free while I work directly with early users,
          learn what advisors and market professionals actually need,
          and refine the product before broader launch.
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
              <p className="mt-2 text-xl font-semibold text-sky-50">{t.title}</p>
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
      </div>
    </section>
  );
}
