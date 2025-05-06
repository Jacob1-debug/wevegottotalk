import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const router = useRouter();
  const currentPath = router.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/episodes", label: "Episodes" },
    { href: "/events", label: "Events" },
  ];

  return (
    <header
      className="text-white font-['Playfair_Display'] px-6 py-4 z-50 fixed top-0 left-0 shadow-sm w-full"
      style={{
        background: "linear-gradient(135deg, #ec008c 0%, #6a00f4 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link  href="/" className="text-5xl font-bold">Wehavegottotalk</Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center text-lg">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative transition-all duration-300 pb-1
                ${currentPath === href ? "before:w-full" : "before:w-0"}
                before:content-[''] before:absolute before:top-0 before:left-0
                before:h-[3px] before:bg-yellow-300 before:transition-all before:duration-300
                hover:before:w-full
              `}
            >
              {label}
            </Link>
          ))}

          <a
            href="https://open.spotify.com/episode/5uSdR7xGNvCkpBVE2qKFP8"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-[#910068] px-4 py-1 rounded-full font-semibold text-base hover:bg-gray-100 transition"
          >
            🎧 Listen to Podcast
          </a>
        </nav>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-black/60 rounded-xl p-4 text-white text-center backdrop-blur-md">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`relative transition-all duration-300 pb-1
                ${currentPath === href ? "before:w-full" : "before:w-0"}
                before:content-[''] before:absolute before:top-0 before:left-0
                before:h-[3px] before:bg-yellow-300 before:transition-all before:duration-300
                hover:before:w-full
              `}
            >
              {label}
            </Link>
          ))}

          <a
            href="https://open.spotify.com/episode/5uSdR7xGNvCkpBVE2qKFP8"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-[#910068] px-4 py-2 rounded-full font-semibold text-base hover:bg-gray-100 transition"
          >
            🎧 Listen to Podcast
          </a>
        </div>
      )}
    </header>
  );
}
