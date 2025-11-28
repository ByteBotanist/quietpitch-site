// components/Background.tsx
export default function Background({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Main gradient – adjust to match your admin look */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-blue-900" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Glow blobs */}
      <div className="absolute -top-40 -left-40 h-128 w-lg rounded-full blur-3xl opacity-25 bg-blue-500" />
      <div className="absolute -bottom-40 -right-40 h-128 w-lg rounded-full blur-3xl opacity-20 bg-emerald-500" />
      </div>

      <div className="relative">
        {children}
      </div>
    </div>
  );
}
