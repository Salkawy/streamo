import HeroShowcase from '../components/HeroShowcase';
import PosterCard from '../components/PosterCard';
import { getDemoCatalog } from '../lib/demo';
import Image from 'next/image';

export default async function HomePage() {
  const catalog = await getDemoCatalog();

  return (
    <div className="pb-20">
      <HeroShowcase
        title="Neon Nights"
        tagline="A premium collection of films & shows for curious viewers."
        backdrop="/placeholder-backdrop.jpg"
        ctaHref="/watch/demo-movie"
      />

      <section className="max-w-7xl mx-auto px-6 mt-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Trending Now</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {catalog.map((m) => (
            <PosterCard key={m.id} item={m} />
          ))}
        </div>
      </section>
    </div>
  );
}
