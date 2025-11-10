import Link from 'next/link';
import Image from 'next/image';

export default function PosterCard({ item }: { item: { id: string; title: string; poster: string } }) {
  return (
    <Link href={`/watch/${item.id}`}>
      <a className="block group">
        <div className="relative overflow-hidden rounded-md shadow-lg">
          <div className="aspect-[2/3] w-full bg-gradient-to-b from-white/4 to-black/0">
            <Image src={item.poster} alt={item.title} fill className="object-cover" />
          </div>

          <div className="p-2 mt-2">
            <h3 className="text-sm font-semibold text-white truncate">{item.title}</h3>
          </div>
        </div>
      </a>
    </Link>
  );
}
