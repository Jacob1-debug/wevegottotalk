import {
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react"; // You can replace this with your own icons or Heroicons.

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#fff] to-[#f9e1f0] text-[#333] font-['Playfair_Display'] pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        
        {/* Column 1: Logo + Description */}
        <div>
          <h2 className="text-2xl font-extrabold tracking-wide mb-3 text-[#910068]">Wehavegottotalk</h2>
          <p className="text-sm leading-relaxed text-gray-700 max-w-xs">
            Two besties bringing you honest, funny, and deep conversations — from real life, to your ears.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div className="text-sm">
          <h3 className="text-lg font-semibold mb-3 text-[#910068]">Explore</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-[#910068] transition">Home</a></li>
            <li><a href="/about" className="hover:text-[#910068] transition">About</a></li>
            <li><a href="/episodes" className="hover:text-[#910068] transition">Episodes</a></li>
            <li><a href="/events" className="hover:text-[#910068] transition">Events</a></li>
          </ul>
        </div>

        {/* Column 3: Social + Call to Action */}
        <div className="text-sm md:text-right">
          <h3 className="text-lg font-semibold mb-3 text-[#910068]">Follow Us</h3>
          <div className="flex md:justify-end gap-4 text-[#333]">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram className="w-6 h-6 hover:text-pink-600 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 hover:text-blue-600 transition" />
            </a>
            <a href="mailto:hello@wehavegottotalk.com" aria-label="Email">
              <Mail className="w-6 h-6 hover:text-gray-700 transition" />
            </a>
          </div>
          <p className="mt-3 text-xs text-gray-500">Madelyn Torff © 2021</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-200 mt-10 pt-4 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} WeHaveGotTalk. All rights reserved.
      </div>
    </footer>
  );
}
