import Image from "next/image";
import { motion } from "framer-motion";
import GallerySlider from "./GallerySlider";
import Anna from "../public/resources/Annapic.jpg";
import Elisha from "../public/resources/Elishapic.jpg";

export default function HomeSection2() {
  return (
    <section className="bg-gradient-to-r from-gray-200 via-pink-100 to-white py-16 px-6 font-['Playfair_Display'] overflow-hidden">
      <div className="max-w-4xl mx-auto">

        {/* Section Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#910068]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          More About Us – Anna and Elisha
        </motion.h2>

        {/* Catchy Subtitle */}
        <motion.p
          className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Two best friends. Two stories. One passion for life, laughter, and raw conversations. Meet Anna and Elisha.
        </motion.p>

        {/* Vertical Stack Layout */}
        <div className="space-y-16">

          {/* Anna - Top Block */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Image
                src={Anna}
                alt="Anna"
                width={160}
                height={160}
                className="rounded-full border-4 border-pink-200 flex-shrink-0"
              />
          <div className="hidden md:block h-64 w-1.5 bg-gradient-to-b from-pink-300 to-pink-100 mx-4" />

              <div className="space-y-4 text-gray-900 leading-relaxed">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  Anna is the voice of calm in the chaos.
                </h3>
                <p>
                  Hi everyone, my name is <strong>Anna Siveter</strong> and I am the cohost of <em>We Have Got to Talk</em>. Born and raised in New Jersey, I’m a proud first-generation American with deep Italian roots.
                </p>
                <p>
                  Today, I live in Bucks County, PA with my wonderful husband and our four incredible kids — yes, two sets of twins! Life is busy and beautiful, filled with love, laughter, and a little bit of chaos, especially with our toy poodle Milo.
                </p>
                <p>
                  Currently, I’m training for my first fitness competition, a challenge that pushes my limits and fuels my passion. Outside of training, I love dancing, the beach, traveling, and living every moment with my family and friends.
                </p>
                <p>
                  Creating this podcast with my best friend Elisha has been a dream come true. It's a space to share real conversations from the heart.
                </p>

                {/* Fun Fact */}
                <div className="flex items-start gap-3 hover:scale-105 transition-transform duration-300 mt-4">
                  <input
                    id="anna-fact"
                    className="mt-1 w-5 h-5 rounded-sm accent-pink-500"
                  />
                  <label htmlFor="anna-fact" className="text-gray-600 italic">
                    Fun Fact: Anna has a secret love for organizing pantries and watching reality TV with zero guilt.
                  </label>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Elisha - Bottom Block */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8 md:flex-row-reverse">
              <Image
                src={Elisha}
                alt="Elisha"
                width={160}
                height={160}
                className="rounded-full border-4 border-pink-200 flex-shrink-0"
              />
              <div className="hidden md:block h-64 w-1.5 bg-gradient-to-b from-pink-300 to-pink-100 mx-4"></div>

              <div className="space-y-4 text-gray-900 leading-relaxed">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  Elisha is the friend who always says what you're thinking — out loud.
                </h3>
                <p>
                  Raised in the small farming town of Newtown Tripoli, Pennsylvania, Elisha grew up with her dad and three brothers, living a beautifully simple life that shaped her strength and spirit.
                </p>
                <p>
                  After college, she built a career in college admissions, rising to Director of Admissions, before retiring to raise her family full-time. She’s been married to her college sweetheart for over 20 years and is a proud mom of three.
                </p>
                <p>
                  Today, she teaches dance at the Newtown Athletic Club and co-founded this podcast to give voice to the shared laughter, wisdom, and messiness of life.
                </p>

                {/* Fun Fact */}
                <div className="flex items-start gap-3 hover:scale-105 transition-transform duration-300 mt-4">
                  <input
                    id="elisha-fact"
                    className="mt-1 w-5 h-5rounded-sm accent-pink-500"
                  />
                  <label htmlFor="elisha-fact" className="text-gray-600 italic">
                    Fun Fact: Elisha once live-commented an entire awards show on Instagram... and gained 100 new followers overnight.
                  </label>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gallery Section with Soft Entrance */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <GallerySlider />
      </motion.div>
    </section>
  );
}
