// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-white/60 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <span>© {year} Quiet Pitch. All rights reserved.</span>
        <span className="space-x-3">
          <Link href="/privacy" className="hover:text-blue-200 transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-blue-200 transition-colors">Terms</Link>
          <Link href="/disclaimer" className="hover:text-blue-200 transition-colors">Disclaimer</Link>
          <Link href="/platform-agreement" className="hover:text-blue-200 transition-colors">Platform Agreement</Link>
        </span>
      </div>
    </footer>
  );
}
