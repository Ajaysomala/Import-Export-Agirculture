'use client';

// Wrapper so `ssr: false` dynamic import is inside a Client Component,
// which Next 16 requires (Server Components can't opt out of SSR directly).
import dynamic from 'next/dynamic';

const HeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => <div className="h-full w-full rounded-[2rem] bg-forest/5" aria-hidden="true" />,
});

export default function HeroSceneClient() {
  return <HeroScene />;
}
