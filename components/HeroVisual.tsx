'use client';

// Replaces the Three.js "photos-as-flat-planes-in-3D" hero scene. Real
// photography doesn't read as 3D no matter how you rotate the plane — it
// just looks like a cutout. This is a straightforward layered collage
// instead: staggered framed photos with shadow-based depth, a slow
// independent float per card, and a single cohesive parallax tilt on the
// whole group when the pointer moves. No WebGL, no fake rotation.

import { useRef, useState } from 'react';

const CARDS = [
  { src: '/products/mango.png', className: 'left-[2%] top-[8%] w-[42%] rotate-[-6deg] z-10', delay: '0s' },
  { src: '/products/onion.png', className: 'left-[30%] top-0 w-[46%] rotate-[3deg] z-20', delay: '0.6s' },
  { src: '/products/tomato.png', className: 'left-[56%] top-[14%] w-[42%] rotate-[7deg] z-10', delay: '1.1s' },
];

export default function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 8 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-full w-full"
      style={{ perspective: '1200px' }}
    >
      {/* Soft ambient wash behind the photos, purely for depth — not an
          "orb", just a static gradient glow contained to this box. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,rgba(215,168,74,0.16),transparent_65%)]"
      />

      <div
        className="relative h-full w-full transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {CARDS.map((card) => (
          <div
            key={card.src}
            className={`absolute aspect-[4/5] overflow-hidden rounded-2xl border-[6px] border-white bg-white shadow-[0_25px_50px_-15px_rgba(30,52,36,0.35)] animate-photoFloat ${card.className}`}
            style={{ animationDelay: card.delay }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={card.src} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
