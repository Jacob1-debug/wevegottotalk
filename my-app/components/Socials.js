import React from 'react';
import { FaPodcast, FaYoutube, FaTwitter, FaEnvelope, FaInstagram, FaTiktok, FaSpotify } from 'react-icons/fa';

const MediaSection = () => {
  return (
    <div className="min-h-0 w-full p-4 pb-8 bg-gradient-to-br from-white to-rose-50"> {/* White to light maroon gradient */}
      {/* Container with gap between cards */}
      <div className="flex flex-col md:flex-row w-full gap-6">
        
        {/* Left Card - Gray Gradient */}
        <div className="w-full md:w-[55%] bg-gradient-to-br from-gray-100 to-gray-200 rounded-r-full rounded-l-xl p-6 shadow-lg border border-gray-300">
        <div className="flex flex-col h-full">
            <div className="flex items-start space-x-4 mb-4">
              <div className="bg-white p-3 rounded-lg shadow-md border border-gray-200">
                <FaYoutube className="text-red-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Watch us on YouTube</h3>
            </div>
            
            <div className="pl-16 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-lg text-gray-700">Follow us on - Our socials</p>
                <div className="flex space-x-3">
                  <a href="#" className="bg-white p-2 rounded-full border border-gray-200 shadow-sm hover:bg-pink-50 transition-all">
                    <FaInstagram className="text-pink-600 text-xl" />
                  </a>
                  <a href="#" className="bg-white p-2 rounded-full border border-gray-200 shadow-sm hover:bg-gray-100 transition-all">
                    <FaTiktok className="text-gray-800 text-xl" />
                  </a>
                  <a href="#" className="bg-white p-2 rounded-full border border-gray-200 shadow-sm hover:bg-green-50 transition-all">
                    <FaSpotify className="text-green-500 text-xl" />
                  </a>
                </div>
              </div>
              <div className="flex items-center text-lg text-gray-700">
                <div className="bg-white p-2 rounded-full mr-2 border border-gray-200 shadow-sm">
                  <FaEnvelope className="text-gray-600 text-xl" />
                </div>
                <span>or Email LS</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Card - Pure Gray */}
        <div className="w-full md:w-[45%] bg-gray-200 rounded-l-xl p-6 shadow-lg border border-gray-300">
        <div className="flex items-start space-x-4">
            <div className="bg-white p-3 rounded-xl shadow-md border border-gray-200">
              <FaPodcast className="text-indigo-600 text-3xl" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Listen to our Podcast</h3>
              <div className="space-y-3">
                <p className="text-lg text-gray-700">Innovator's Episode 1</p>
                <div className="flex items-center space-x-3">
                  <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                    <FaTwitter className="text-blue-400 text-2xl" />
                  </div>
                  <span className="text-lg text-gray-700">Widarecontinuable Twitter</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSection;