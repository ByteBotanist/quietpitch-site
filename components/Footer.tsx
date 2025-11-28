// components/Footer.tsx
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-white/60 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <span>© {year} Quiet Pitch. All rights reserved.</span>
        <span className="space-x-3">
          <a href="/privacy" className="hover:text-blue-200">Privacy</a>
          <a href="/terms" className="hover:text-blue-200">Terms</a>
        </span>
      </div>
    </footer>
  );
}
