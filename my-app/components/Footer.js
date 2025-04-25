import {
	Instagram,
	Music,
	Mail,
	Link,
  } from "lucide-react"; // Lucide icons only
  import { FaTiktok } from "react-icons/fa"; // TikTok is not in Lucide
  
  export default function Footer() {
	return (
	  <footer className="bg-gradient-to-b from-[#fff] to-[#f9e1f0] text-[#333] font-['Playfair_Display'] pt-12 pb-6 px-6">
		<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
		  {/* Column 1: Logo + Description */}
		  <div>
			<h2 className="text-2xl font-extrabold tracking-wide mb-3 text-[#910068]">
			  Wehavegottotalk
			</h2>
			<p className="text-sm leading-relaxed text-gray-700 max-w-xs">
			  Two besties bringing you honest, funny, and deep conversations —
			  from real life, to your ears.
			</p>
		  </div>
  
		  {/* Column 2: Navigation */}
		  <div className="text-sm flex flex-col md:justify-center md:items-center">
			<h3 className="text-lg font-semibold mb-3 text-[#910068]">
			  Explore
			</h3>
			<ul className="flex flex-wrap gap-4 text-center">
			  <li>
				<a href="/" className="hover:text-[#910068] transition">
				  Home
				</a>
			  </li>
			  <li>
				<a href="/about" className="hover:text-[#910068] transition">
				  About
				</a>
			  </li>
			  <li>
				<a href="/episodes" className="hover:text-[#910068] transition">
				  Episodes
				</a>
			  </li>
			  <li>
				<a href="/events" className="hover:text-[#910068] transition">
				  Events
				</a>
			  </li>
			</ul>
		  </div>
  
		  {/* Column 3: Socials + CTA */}
		  <div className="text-sm md:text-right">
			<h3 className="text-lg font-semibold mb-3 text-[#910068]">
			  Connect With Us
			</h3>
			<div className="flex md:justify-end gap-4 mb-3 flex-wrap">
			  <a
				href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE4Mzc0OTcyNjE0MTA5MTU5?igsh=emI4OXd4bGt5c2Rn"
				className="bg-white p-2 rounded-full border border-gray-200 shadow-sm hover:bg-pink-50 transition-all"
				target="_blank"
				rel="noreferrer"
				aria-label="Instagram"
			  >
				<Instagram className="text-pink-600 w-5 h-5" />
			  </a>
			  <a
				href="https://www.tiktok.com/@we.have.got.to.talk?_t=ZT-8v9HGjrPiL0&_r=1"
				className="bg-white p-2 rounded-full border border-gray-200 shadow-sm hover:bg-gray-100 transition-all"
				target="_blank"
				rel="noreferrer"
				aria-label="TikTok"
			  >
				<FaTiktok className="text-gray-800 w-5 h-5" />
			  </a>
			  <a
				href="https://open.spotify.com/episode/5uSdR7xGNvCkpBVE2qKFP8"
				className="bg-white p-2 rounded-full border border-gray-200 shadow-sm hover:bg-green-100 transition-all"
				target="_blank"
				rel="noreferrer"
				aria-label="Spotify Episode"
			  >
				<Music className="text-green-600 w-5 h-5" />
			  </a>
			</div>
			<p className="text-xs text-gray-500">
			  New drops every week. Stay tuned, stay loud 💬
			</p>
		  </div>
		</div>
  
		{/* Bottom Line */}
		<div className="border-t border-gray-200 mt-4 pt-4 text-center text-xs text-gray-600">
		  © {new Date().getFullYear()} Wehavegottotalk. All rights reserved.
		</div>
	  </footer>
	);
  }
  