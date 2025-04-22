import React from "react"
import {
	FaPodcast,
	FaYoutube,
	FaTwitter,
	FaFacebook,
	FaInstagram,
	FaTiktok,
	FaSpotify,
} from "react-icons/fa"

const MediaSection = () => {
	return (
		<div className="min-h-0 w-full p-4 pb-8 bg-gradient-to-r from-gray-200 via-pink-100 to-white">
			{" "}
			{/* White to light maroon gradient */}
			{/* Container with gap between cards */}
			<div className="flex flex-col md:flex-row w-full md:gap-50">
				{/* Left Card - Gray Gradient */}
				<div className="w-full md:w-[55%] bg-gradient-to-br from-gray-100 via-gray-300 to-gray-400 rounded-r-full rounded-l-xl p-6 shadow-lg border border-gray-300">
					<div className="flex flex-col h-full">
						<div className="flex items-start space-x-4 mb-4">
							<div className="bg-white p-3 rounded-lg shadow-md border border-gray-200">
								<FaYoutube className="text-red-600 text-3xl" />
							</div>
							<h3 className="text-2xl font-bold text-gray-800">
								Watch us on YouTube
							</h3>
						</div>

						<div className="pl-16 space-y-4">
							<div className="flex items-center justify-between">
								<p className="text-lg text-gray-700">
									Follow us on - Our socials
								</p>
								<div className="flex space-x-3">
									<a
										href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE4Mzc0OTcyNjE0MTA5MTU5?igsh=emI4OXd4bGt5c2Rn"
										className="bg-white p-2 rounded-full border border-gray-200 shadow-sm hover:bg-pink-50 transition-all"
									>
										<FaInstagram className="text-pink-600 text-xl" />
									</a>
									<a
										href="https://www.tiktok.com/@we.have.got.to.talk?_t=ZT-8v9HGjrPiL0&_r=1"
										className="bg-white p-2 rounded-full border border-gray-200 shadow-sm hover:bg-gray-100 transition-all"
									>
										<FaTiktok className="text-gray-800 text-xl" />
									</a>
								</div>
							</div>
							<div className="flex items-center text-lg text-gray-700">
								<div className="bg-white p-2 rounded-full mr-2 border border-gray-200 shadow-sm">
									<FaTwitter className="text-blue-600 text-xl" />
								</div>
								<span>Find us on Twitter @WeHaveGOTT9116</span>
							</div>
						</div>
					</div>
				</div>

				{/* Right Card - Pure Gray */}
				<div className="w-full md:w-[45%] bg-white rounded-l-xl p-6 shadow-lg border border-gray-300">
					<div className="flex items-start space-x-4">
						<div className="bg-white p-3 rounded-xl shadow-md border border-gray-200">
							<FaPodcast className="text-indigo-600 text-3xl" />
						</div>
						<div className="flex-1">
							<h3 className="text-2xl font-bold text-gray-800 mb-3">
								Listen to our Podcast
							</h3>
							<div className="space-y-3">
								<p className="text-lg text-gray-700">
									Innovator's Episode 1
								</p>
								<div className="flex items-center space-x-3">
									<div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
										<FaSpotify className="text-green-500 text-xl" />
									</div>
									<span className="text-lg text-gray-700">
										Widarecontinuable
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MediaSection
