import HomeSection2 from '@/components/HomeSection2';
import Socials from "@/components/Socials";
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <div className={`${styles.fullScreenWrapper} overflow-hidden`}>
        <img
          src="/decoded_image.svg"
          alt="Stylized Network Background"
          className={styles.fullScreenImage}
        />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 gap-7 md:gap-20 w-full mt-10 overflow-hidden max-w-screen-xl">
          
          {/* Text Block with Animation */}
          <motion.div
            className="text-white max-w-2xl text-left space-y-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <h1 className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">
              Hi, we’re <span className="underline decoration-yellow-400">WeHaveGotTalk.</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed">
              Meet <strong>Anna and Elisha</strong> — two besties who turned their daily convos into a mic-drop moment. From motherhood chaos to pop culture tea, we spill it all.
            </p>

            <p className="text-lg md:text-xl italic leading-relaxed">
              It’s bold, it’s funny, sometimes <strong>surprisingly deep</strong> — always real and unapologetically us.
            </p>

            <motion.p
              className="font-semibold text-lg md:text-xl text-yellow-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              🎙️ New episodes coming soon on Spotify. Stay tuned for our juicy intro drop!
            </motion.p>

            {/* Added Creative Button */}
            <motion.a
              href="https://open.spotify.com/episode/5uSdR7xGNvCkpBVE2qKFP8"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-6 bg-[#e5e5e5] text-[#910068] font-semibold text-lg px-6 py-3 rounded-full shadow hover:bg-white hover:scale-105 transition-all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              🎧 Listen Now
            </motion.a>
          </motion.div>

          {/* Animated Image */}
          <motion.div
            className="w-[300px] md:w-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4 }}
          >
            <Image
              src="/resources/home_bg.png"
              alt="Two women podcast illustration"
              width={450}
              height={450}
              className=""
              priority
            />
          </motion.div>
          <motion.div
  className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
  initial={{ opacity: 0, y: 0 }}
  animate={{ opacity: 1, y: [0, 10, 0] }}
  transition={{ repeat: Infinity, duration: 2 }}
>
  <a href="#socials" aria-label="Scroll down">
    <svg
      className="w-8 h-8 text-yellow-300"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </a>
</motion.div>

        </div>
      </div>

      {/* Social Icons and About Section */}
      <Socials />
      <p className="text-center text-gray-600 italic my-6">
        Follow our journey and join the conversation 🌟
      </p>
      <HomeSection2 />
    </>
  );
}
