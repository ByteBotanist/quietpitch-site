"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/previews/advisor-chart-light.png",
    caption: "Advisor page — chart view (light mode)",
  },
  {
    src: "/previews/advisor-summary-dark.png",
    caption: "Advisor page — summary table (dark mode)",
  },
  {
    src: "/previews/admin-branding.png",
    caption: "Admin dashboard — branding controls",
  },
  {
    src: "/previews/admin-notes.png",
    caption: "Admin dashboard — advisor notes editor",
  },
];

export default function PreviewCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl">

      {/* Image */}
      <div className="relative h-[400px] md:h-[550px]">
        <Image
          src={slides[index].src}
          alt="Quiet Pitch preview"
          fill
          className="object-cover"
        />
      </div>

      {/* Caption */}
      <div className="text-center py-3 text-white/80 text-sm bg-black/20 backdrop-blur">
        {slides[index].caption}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
