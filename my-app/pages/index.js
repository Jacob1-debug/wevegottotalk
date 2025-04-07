import HomeSection2 from '@/components/HomeSection2';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <div className={styles.fullScreenWrapper}>
        <img
          src="/decoded_image.svg"
          alt="Stylized Network Background"
          className={styles.fullScreenImage}
        />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 z-10 gap-10 md:gap-20 ">
          
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
        </div>
      </div>

      {/* Section 2 */}
      <HomeSection2 />
    </>
  );
}
