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
          Be a founding member of Quiet Pitch.
        </h1>
        <p className="mt-3 text-sm text-white/80 max-w-2xl">
          Quiet Pitch is currently in pre-launch. We’re working with a small
          group of advisors to refine the product before opening subscriptions.
          Join early access to be a part of this founding members group and receive 
          your Quiet Pitch trial before we make it publicly available. After release, 
          members of this group will also be entitled to grandfathered pricing and other exclusive benefits. 
        </p>
        <EarlyAccessForm />
      </main>
      <Footer />
    </Background>
  );
}
