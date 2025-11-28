// components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="border-b border-white/10 backdrop-blur bg-slate-950/70">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-2">
          {/* Replace /quietpitch-logo.png with your real file in /public */}
          <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden">
            <Image
              src="/QuietPitch-AltLogo.png"
              alt="Quiet Pitch"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <span className="font-semibold tracking-tight text-white/90">
            Quiet Pitch
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm text-white/70">
          <a href="/#pricing-preview" className="hover:text-blue-200">Pricing</a>
          <Link href="/early-access" className="hover:text-blue-200">Early access</Link>
          <a href="/#demo" className="hidden md:inline-block hover:text-blue-200">
            Watch demo
          </a>
        </nav>
      </div>
    </header>
  );
}
