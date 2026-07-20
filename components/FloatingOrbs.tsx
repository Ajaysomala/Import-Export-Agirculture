// Ambient background: soft glowing orbs in agricultural colours that sit
// behind the hero without fighting the white background.

import Image from 'next/image';

export default function FloatingOrbs() {
  const orbs = [
    {
      className: '-top-16 -left-12 h-[26rem] w-[26rem]',
      accent: 'from-forest/52 via-leaf/20 to-transparent',
      ring: 'border-forest/18',
      image: '/products/mango.svg',
      label: 'Mango orb',
      rotation: 'animate-[spin_36s_linear_infinite]',
    },
    {
      className: 'top-1/4 -right-16 h-[25rem] w-[25rem]',
      accent: 'from-soil/58 via-gold/18 to-transparent',
      ring: 'border-gold/18',
      image: '/products/pomegranate.svg',
      label: 'Pomegranate orb',
      rotation: 'animate-[spin_28s_linear_infinite]',
    },
    {
      className: 'bottom-[-5rem] left-1/5 h-[22rem] w-[22rem]',
      accent: 'from-plum/52 via-parchment/18 to-transparent',
      ring: 'border-plum/16',
      image: '/products/grape.svg',
      label: 'Grape orb',
      rotation: 'animate-[spin_42s_linear_infinite]',
    },
    {
      className: 'bottom-4 right-1/4 h-[20rem] w-[20rem]',
      accent: 'from-clay/48 via-cream/18 to-transparent',
      ring: 'border-clay/18',
      image: '/products/tomato.svg',
      label: 'Tomato orb',
      rotation: 'animate-[spin_30s_linear_infinite]',
    },
    {
      className: 'top-1/2 left-1/2 h-[18rem] w-[18rem] -translate-x-1/2',
      accent: 'from-ink/40 via-lime/14 to-transparent',
      ring: 'border-soil/18',
      image: '/products/banana.svg',
      label: 'Banana orb',
      rotation: 'animate-[spin_46s_linear_infinite]',
    },
  ] as const;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden mix-blend-screen"
    >
      {orbs.map((orb, index) => (
        <div key={orb.className} className={`absolute ${orb.className} ${index % 2 === 0 ? 'animate-drift1' : 'animate-drift2'}`}>
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${orb.accent} blur-[76px] opacity-95`} />
          <div className={`absolute inset-[12%] rounded-full border ${orb.ring} bg-white/18 shadow-[inset_0_0_42px_rgba(255,255,255,0.22)] backdrop-blur-md`} />
          <div className="absolute inset-[14%] rounded-full bg-[radial-gradient(circle_at_30%_26%,rgba(255,255,255,0.8),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))] opacity-85" />
          <div className="absolute inset-[17%] rounded-full overflow-hidden border border-white/28 bg-white/30 shadow-[0_20px_60px_-30px_rgba(31,91,55,0.46)]">
            <Image src={orb.image} alt={orb.label} fill sizes="18vw" className="object-contain p-[11%] drop-shadow-[0_14px_22px_rgba(0,0,0,0.12)]" />
          </div>
          <div className={`absolute inset-[20%] rounded-full border border-white/18 bg-[conic-gradient(from_180deg,rgba(255,255,255,0.22),transparent_24%,rgba(255,255,255,0.08)_50%,transparent_76%,rgba(255,255,255,0.22))] opacity-65 ${orb.rotation}`} />
          <div className="absolute left-[18%] top-[18%] h-[11%] w-[11%] rounded-full bg-white/82 blur-[12px]" />
          <div className="absolute right-[20%] bottom-[22%] h-[8%] w-[8%] rounded-full bg-white/38 blur-[10px]" />
        </div>
      ))}
    </div>
  );
}
