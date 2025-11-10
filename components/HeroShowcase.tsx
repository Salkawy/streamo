import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  tagline?: string;
  backdrop: string;
  ctaHref?: string;
};

export default function HeroShowcase({ title, tagline, backdrop, ctaHref = '/watch/demo-movie' }: Props) {
  return (
    <section className="relative h-[60vh] md:h-[75vh] bg-gradient-to-b from-transparent to-black">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={backdrop}
          alt={title}
          fill
          className="object-cover object-center transform scale-105 brightness-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/85"></div>
        <div className="hero-glow left-[15%] top-[15%] w-[650px] h-[350px]" style={{background: 'radial-gradient(circle, rgba(255,45,149,0.28) 0%, transparent 40%)'}} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 flex flex-col justify-end h-full">
        <h1 className="text-4xl md:text-6xl font-display tracking-tight text-white drop-shadow-lg">{title}</h1>
        {tagline && <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">{tagline}</p>}

        <div className="mt-6 flex gap-4">
          <Link href={ctaHref}>
            <a className="inline-flex items-center gap-3 px-5 py-3 rounded-md bg-gradient-to-r from-neon to-gold text-black font-semibold shadow-lg">
              ▶ Watch now
            </a>
          </Link>
          <button className="inline-flex items-center gap-2 px-4 py-3 rounded-md border border-white/10 text-white/90">
            + Add to list
          </button>
        </div>
      </div>
    </section>
  );
}
