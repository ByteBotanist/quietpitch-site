// components/Features.tsx
const features = [
  {
    title: "Multi-currency FX with clear refresh badges",
    body: "Let clients see markets in the currency that matters to them—USD, GBP, EUR and more. Free and Basic plans include a small ‘Daily FX’ badge for transparency. Pro and Enterprise refresh FX hourly or by the minute and remove the badge for a cleaner, real-time experience.",
  },
  {
    title: "What-if tools that make returns feel real",
    body: "Quiet Pitch shows more than lines on a chart. Visitors can plug in a dollar amount and timeframe so prospects see what a real investment could have looked like over that period.",
  },
  {
    title: "Private investments alongside public markets",
    body: "Highlight private funds, deals, or models with your own return history. Private market data sits right next to stocks, ETFs, and crypto so clients see the full picture of how you allocate.",
  },
  {
    title: "Simple to share, easy to understand",
    body: "Use your Quiet Pitch link in emails, newsletters, webinars, or social posts to spark conversations with prospects—without sending them to a noisy third-party site.",
  },
];

export default function Features() {
  return (
    <section className="mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-sky-100">
          Built for advisors who want to explain, not overwhelm.
        </h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl bg-white/5 border border-white/10 p-4"
            >
              <h3 className="text-sm font-semibold text-sky-100">{f.title}</h3>
              <p className="mt-2 text-xs text-white/75">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
