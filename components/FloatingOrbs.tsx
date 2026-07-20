// Ambient background for the hero: soft, abstract color blooms in the
// brand's agricultural palette. Deliberately NOT literal fruit renders —
// abstract color reads as premium/professional, whereas a fake-3D fruit
// icon reads as a cheap illustration. Contained by the hero's own
// `relative overflow-hidden`, so it never escapes onto other content.

export default function FloatingOrbs() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -top-24 -left-16 h-[26rem] w-[26rem] rounded-full bg-forest/18 blur-[100px] animate-drift1" />
      <div className="absolute top-1/4 -right-20 h-[24rem] w-[24rem] rounded-full bg-gold/22 blur-[100px] animate-drift2" />
      <div className="absolute bottom-[-6rem] left-1/5 h-80 w-80 rounded-full bg-plum/16 blur-[90px] animate-drift3" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-clay/18 blur-[90px] animate-drift2" />
    </div>
  );
}
