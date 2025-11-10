import Link from 'next/link';

export default function Header() {
  return (
    <header className="backdrop-blur-sm bg-black/30 border-b border-white/6">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-neon/90 to-gold/80 flex items-center justify-center text-black font-bold">N</div>
            <div>
              <div className="text-white font-semibold">NeonStream</div>
              <div className="text-xs text-white/60 -mt-0.5">premium & playful</div>
            </div>
          </a>
        </Link>

        <nav className="flex items-center gap-4">
          <Link href="/"><a className="text-sm text-white/90">Home</a></Link>
          <Link href="/browse"><a className="text-sm text-white/70">Browse</a></Link>
          <Link href="/profile"><a className="text-sm text-white/70">Profile</a></Link>
          <button className="ml-4 px-3 py-2 rounded-md bg-neon text-black font-semibold">Sign in</button>
        </nav>
      </div>
    </header>
  );
}
