'use client';

// Uses real product photography as textured cards in 3D space, arranged
// around a wooden crate. This replaces the earlier flat-color-sphere
// placeholder now that real photos exist — genuinely better fidelity
// without needing sculpted/licensed 3D models.

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Image as DreiImage, RoundedBox, Float } from '@react-three/drei';
import * as THREE from 'three';

const CARD_PRODUCTS = [
  { src: '/products/mango.png', position: [-0.75, 0.45, 0.4] as [number, number, number], rotation: [0, 0.3, 0] as [number, number, number] },
  { src: '/products/tomato.png', position: [0.7, 0.35, -0.15] as [number, number, number], rotation: [0, -0.35, 0] as [number, number, number] },
  { src: '/products/onion.png', position: [0.1, 0.65, 0.55] as [number, number, number], rotation: [0, -0.1, 0] as [number, number, number] },
];

function Crate({ scrollY }: { scrollY: number }) {
  const group = useRef<THREE.Group>(null);
  const ambient = useRef(0);

  useFrame((_, delta) => {
    if (!group.current) return;
    ambient.current += delta * 0.15; // slow constant ambient spin
    // Scroll adds a bounded tilt on top of the ambient spin — this is an
    // ASSIGNMENT each frame, not an accumulation, so it can never run away
    // regardless of scroll position or how long the page has been open.
    const scrollTilt = THREE.MathUtils.clamp(scrollY * 0.0006, -0.6, 0.6);
    group.current.rotation.y = ambient.current + scrollTilt;
  });

  return (
    <group ref={group}>
      <RoundedBox args={[2.2, 1.0, 2.2]} radius={0.05} smoothness={4} position={[0, -0.6, 0]}>
        <meshStandardMaterial color="#8B5E34" roughness={0.75} metalness={0.05} />
      </RoundedBox>

      {CARD_PRODUCTS.map((card) => (
        <Float key={card.src} speed={1.2} rotationIntensity={0.15} floatIntensity={0.5}>
          <group position={card.position} rotation={card.rotation}>
            <DreiImage url={card.src} transparent scale={[0.85, 0.85]} />
          </group>
        </Float>
      ))}

      <mesh position={[-0.2, -0.05, -0.5]} rotation={[0, 0.4, 0.1]}>
        <cylinderGeometry args={[0.3, 0.36, 0.65, 16]} />
        <meshStandardMaterial color="#F3E7C9" roughness={0.9} />
      </mesh>
    </group>
  );
}

function Scene({ scrollY }: { scrollY: number }) {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 4, 2]} intensity={1.3} />
      <directionalLight position={[-3, 2, -2]} intensity={0.35} color="#8FB84F" />
      <Crate scrollY={scrollY} />
    </>
  );
}

export default function HeroScene() {
  const [scrollY, setScrollY] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!ready) {
    return <div className="h-full w-full rounded-[2rem] bg-forest/5" aria-hidden="true" />;
  }

  return (
    <Canvas
      camera={{ position: [2.2, 1.5, 3.0], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true }}
      aria-label="Rotating 3D display of export produce"
    >
      <Scene scrollY={scrollY} />
    </Canvas>
  );
}
