// app/early-access/page.tsx
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EarlyAccessForm from "@/components/EarlyAccessForm";

export default function EarlyAccessPage() {
  return (
    <Background>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 pt-12 pb-16">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-sky-100">
          Request access to Quiet Pitch.
        </h1>
        <p className="mt-3 text-sm text-white/80 max-w-2xl">
          Quiet Pitch is currently being shared with a small group of early users
          to refine the product, gather feedback, and understand how market professionals
          want to use it before broader launch.

          Request access if you would like early use, product updates,
          and an opportunity to help shape what Quiet Pitch becomes.
        </p>
        <EarlyAccessForm />
      </main>
      <Footer />
    </Background>
  );
}
