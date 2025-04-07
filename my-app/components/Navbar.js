
// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[#910068] text-white px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0">
      <div className="text-2xl font-bold text-center sm:text-left">Wehavegottotalk</div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/episodes" className="hover:underline">Episodes</Link>
        <Link href="/events" className="hover:underline">Events</Link>
        <a
          href="https://spotify.com"
          target="_blank"
          rel="noreferrer"
          className="bg-white text-[#910068] px-4 py-1 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          🎧 Listen
        </a>
      </div>
    </nav>
  );
}
