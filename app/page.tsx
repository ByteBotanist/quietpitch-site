// app/page.tsx
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PricingPreview from "@/components/PricingPreview";

export default function Home() {
  return (
    <Background>
      <Navbar />
      <main className="pb-16">
        <Hero />
        <Features />

        {/* Demo section – you’ll embed your video here later */}
        <section id="demo" className="mt-16">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1.2fr,1fr] gap-8 items-start">
            <div>
              <h2 className="text-2xl font-semibold text-slate-300">See Quiet Pitch in action.</h2>
              <p className="mt-2 text-sm text-white/75 max-w-xl">
                This short demo walks through the advisor page, the client
                experience, and the daily lead summary you receive by email.
              </p>
              {/* You can plug in more copy or bullets here */}
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40 aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/0qoHcZjX9ls"
                title="Quiet Pitch Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <PricingPreview />
      </main>
      <Footer />
    </Background>
  );
}
