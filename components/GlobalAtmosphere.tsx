'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function GlobalAtmosphere() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    let raf = 0;

    function onScroll() {
      cancelAnimationFrame(raf);
      raf = window.requestAnimationFrame(() => {
        setScroll(window.scrollY);
      });
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const drift = Math.min(scroll * 0.06, 120);
  const lift = Math.min(scroll * 0.03, 80);

  const orbs = [
    {
      className: 'absolute -top-20 left-[-8rem] h-[27rem] w-[27rem]',
      accent: 'from-forest/50 via-leaf/18 to-transparent',
      ring: 'border-forest/18',
      image: '/products/mango.svg',
      label: 'Mango orb',
      transform: `translate3d(0, ${drift * -0.35}px, 0)`,
      offset: 'translate3d(-12px, 0, 0)',
    },
    {
      className: 'absolute top-12 right-[-6rem] h-[29rem] w-[29rem]',
      accent: 'from-gold/48 via-soil/18 to-transparent',
      ring: 'border-gold/18',
      image: '/products/pomegranate.svg',
      label: 'Pomegranate orb',
      transform: `translate3d(${drift * 0.22}px, ${lift * 0.18}px, 0)`,
      offset: 'translate3d(10px, -2px, 0)',
    },
    {
      className: 'absolute bottom-[-11rem] left-[10%] h-[28rem] w-[28rem]',
      accent: 'from-plum/45 via-parchment/18 to-transparent',
      ring: 'border-plum/16',
      image: '/products/grape.svg',
      label: 'Grape orb',
      transform: `translate3d(${-drift * 0.18}px, ${lift * -0.08}px, 0)`,
      offset: 'translate3d(-8px, 10px, 0)',
    },
    {
      className: 'absolute top-[58%] right-[10%] h-[22rem] w-[22rem]',
      accent: 'from-clay/42 via-cream/18 to-transparent',
      ring: 'border-clay/18',
      image: '/products/tomato.svg',
      label: 'Tomato orb',
      transform: `translate3d(${drift * 0.15}px, ${lift * 0.14}px, 0)`,
      offset: 'translate3d(6px, -6px, 0)',
    },
  ] as const;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden mix-blend-multiply">
      {orbs.map((orb, index) => (
        <div key={orb.className} className={`${orb.className} ${index % 2 === 0 ? 'animate-drift1' : 'animate-drift2'}`} style={{ transform: orb.transform }}>
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${orb.accent} opacity-90 blur-[78px]`} />
          <div className={`absolute inset-[10%] rounded-full border ${orb.ring} bg-white/24 shadow-[inset_0_0_48px_rgba(255,255,255,0.28)] backdrop-blur-md`} />
          <div className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle_at_30%_26%,rgba(255,255,255,0.82),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.06))] opacity-85" />
          <div className="absolute inset-[15%] rounded-full overflow-hidden border border-white/32 bg-white/30 shadow-[0_24px_70px_-35px_rgba(31,91,55,0.5)]">
            <Image src={orb.image} alt={orb.label} fill sizes="20vw" className="object-contain p-[10%] drop-shadow-[0_16px_24px_rgba(0,0,0,0.12)]" />
          </div>
          <div className="absolute left-1/2 top-[6%] h-[12%] w-[16%] -translate-x-1/2 rounded-full bg-forest/55 blur-[10px]" style={{ transform: orb.offset }} />
          <div className="absolute left-[18%] top-[18%] h-[9%] w-[9%] rounded-full bg-white/82 blur-[10px]" />
          <div className="absolute inset-[18%] rounded-full border border-white/18 bg-[conic-gradient(from_180deg,rgba(255,255,255,0.2),transparent_24%,rgba(255,255,255,0.08)_52%,transparent_78%,rgba(255,255,255,0.2))] opacity-55 animate-[spin_42s_linear_infinite]" />
        </div>
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.78),transparent_34%),radial-gradient(circle_at_bottom,rgba(245,252,241,0.58),transparent_42%)]" />
      <div className="absolute inset-0 soft-grid opacity-[0.18]" />
      <div className="absolute left-0 top-1/4 h-px w-[45vw] bg-[linear-gradient(90deg,transparent,rgba(31,91,55,0.18),transparent)]" style={{ transform: `translate3d(${drift * 0.25}px, 0, 0)` }} />
      <div className="absolute right-0 bottom-1/4 h-px w-[38vw] bg-[linear-gradient(90deg,transparent,rgba(215,168,74,0.18),transparent)]" style={{ transform: `translate3d(${-drift * 0.2}px, 0, 0)` }} />
      <div className="absolute left-1/2 top-[12%] h-24 w-24 -translate-x-1/2 rounded-full border border-forest/12 bg-ink/12 blur-[1px] animate-leafSway" />
    </div>
  );
}
