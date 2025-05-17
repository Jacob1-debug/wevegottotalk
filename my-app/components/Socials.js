import React from "react";
import {
	FaPodcast,
	FaYoutube,
	FaTwitter,
	FaInstagram,
	FaTiktok,
	FaSpotify,
	FaFacebook,
} from "react-icons/fa";

const MediaSection = () => {
	return (
		<div className="w-full p-4 pb-8 bg-gradient-to-r from-gray-200 via-pink-100 to-white">
			<div className="flex flex-col md:flex-row w-full md:gap-10">
				{/* Left Card */}
				<div className="w-full md:w-[55%] bg-gradient-to-br from-gray-100 via-gray-300 to-gray-400 rounded-r-full rounded-l-xl p-6 shadow-lg border border-gray-300 flex flex-col gap-4 items-center justify-between">
					
					{/* YouTube Section */}
					<a
						href="https://youtube.com/@wehavegottotalkwithannaelisha?si=Dfh6xbbP6BsCtw7h"
						target="_blank"
						rel="noreferrer"
						className="flex items-center gap-4 hover:underline"
					>
						<div className="bg-white p-3 rounded-full shadow-md border border-gray-200">
							<FaYoutube className="text-red-600 text-3xl" />
						</div>
						<h3 className="text-xl md:text-2xl font-bold text-gray-800">
							Watch us on YouTube
						</h3>
					</a>

					{/* Socials Group */}
					<div className="flex flex-col gap-4 mt-4">
						<p className="text-base md:text-lg text-gray-700 font-medium">
							Follow us on our socials
						</p>

						{/* Top Row: Instagram + TikTok */}
						<div className="flex flex-wrap gap-6 md:gap-28 justify-between items-center">
							<div className="flex items-center gap-4 bg-white px-6 py-3 rounded-full border border-gray-200 shadow-sm w-fit">
								<a
									href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE4Mzc0OTcyNjE0MTA5MTU5?igsh=emI4OXd4bGt5c2Rn"
									className="p-1 rounded-full hover:bg-pink-100 transition"
									aria-label="Instagram"
								>
									<FaInstagram className="text-pink-600 text-2xl" />
								</a>
								<a
									href="https://www.tiktok.com/@we.have.got.to.talk?_t=ZT-8v9HGjrPiL0&_r=1"
									className="p-1 rounded-full hover:bg-gray-100 transition"
									aria-label="TikTok"
								>
									<FaTiktok className="text-gray-800 text-2xl" />
								</a>
							</div>

							{/* Twitter */}
							<a
								href="https://x.com/WeHaveGOTT9116"
								target="_blank"
								rel="noreferrer"
								className="flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-gray-200 shadow-sm w-fit hover:bg-blue-50 transition"
								aria-label="Twitter"
							>
								<FaTwitter className="text-blue-600 text-2xl" />
							</a>
						</div>

						{/* Facebook */}
						<div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-gray-200 shadow-sm w-fit hover:bg-blue-100 transition mt-4">
							<a
								href="https://m.facebook.com/groups/506231078631920/?ref=share&mibextid=wwXIfr"
								target="_blank"
								rel="noreferrer"
								className="flex items-center gap-3"
								aria-label="Facebook"
							>
								<FaFacebook className="text-blue-700 text-2xl" />
							</a>
						</div>
					</div>
				</div>

				{/* Right Card */}
				<div className="w-full md:w-[45%] bg-white rounded-l-xl p-6 shadow-lg border border-gray-300 flex flex-col items-center gap-4 mt-6 md:mt-0 text-center">
					
					{/* Podcast Header */}
					<div className="flex items-center gap-4 justify-center">
						<div className="bg-white p-3 rounded-full shadow-md border border-gray-200">
							<FaPodcast className="text-indigo-600 text-3xl" />
						</div>
						<h3 className="text-xl md:text-2xl font-bold text-gray-800">
							Listen to our Podcast
						</h3>
					</div>

					{/* Episode Info */}
					<div className="flex flex-col gap-2 items-center">
						<p className="text-base text-gray-700 font-medium">
							Introductory Episode: Innovator's Episode 1
						</p>
						<a
							href="https://open.spotify.com/episode/5uSdR7xGNvCkpBVE2qKFP8"
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-3 hover:underline"
						>
							<div className="bg-white p-2 rounded-full border border-gray-200 shadow-sm">
								<FaSpotify className="text-green-500 text-xl" />
							</div>
							<span className="text-sm md:text-base text-gray-700">
								Widarecontinuable
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MediaSection;
