// components/Features.tsx
const features = [
  {
    title: "Multi-currency views with built-in transparency",
    body: "Let clients see markets in the currency that matters to them—USD, GBP, EUR, and more. Refresh badges clearly show when FX data was last updated, building trust without clutter.",
  },
  {
    title: "What-if tools that turn charts into conversations",
    body: "Prospects can plug in a dollar amount and timeframe to see what a real investment could have looked like—helping you explain outcomes instead of defending numbers.",
  },
  {
    title: "Default positions that reflect your strategy",
    body: "Decide what appears first—no empty charts, no generic tickers. Every visitor sees markets through your lens, not a default watchlist, letting you control the narrative from the first second.",
  },
  {
    title: "Designed to share, built to generate interest",
    body: "Share your Quiet Pitch link in emails, newsletters, webinars, or social posts. Prospects explore your thinking without being sent to noisy third-party sites.",
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
