import Image from 'next/image';
import { motion } from 'framer-motion';
import GallerySlider from '@/components/GallerySlider'

export default function HomeSection2() {
 


  return (
    <section className="bg-gradient-to-r from-gray-200 via-pink-100 to-white py-16 px-6 font-['Playfair_Display'] overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          More About Us - Anna and Elisha
        </motion.h2>

     {/* Bio Cards */}
      <div className="flex flex-col md:flex-row gap-8 mb-16">
        {/* Anna - Left Aligned */}
        <motion.div
          className="bg-white p-8 rounded-xl shadow-md flex-1 flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/resources/Anna.png"
            alt="Anna"
            width={140}
            height={140}
            className="rounded-full border-4 border-gray-100 flex-shrink-0"
          />
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Anna is the voice of calm in the chaos.</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              A mom, a wife, and a natural storyteller, Anna brings heart and humor to everyday life. 
              Whether she's sharing a parenting hack that accidentally worked or reflecting on the highs 
              and lows of motherhood, she keeps it honest and real. With a sharp eye for trends and a 
              love for late-night chats, she brings balance, warmth, and wisdom to WeHaveGotTalk.
            </p>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-5 h-5" />
              <span className="text-gray-600 italic">
                Fun Fact: Anna has a secret love for organizing pantries and watching reality TV with zero guilt.
              </span>
            </div>
          </div>
        </motion.div>

        {/* Elisha - Right Aligned */}
        <motion.div
          className="bg-white p-8 rounded-xl shadow-md flex-1 flex flex-col md:flex-row items-center gap-8 md:flex-row-reverse"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/resources/elisha.png"
            alt="Elisha"
            width={140}
            height={140}
            className="rounded-full border-4 border-gray-100 flex-shrink-0"
          />
          <div className="md:text-right">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Elisha is the friend who always says what you're thinking — out loud.</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Bold, hilarious, and full of energy, Elisha is all about keeping it raw and unfiltered. 
                A mom, pop culture junkie, and proud chaos coordinator, she adds spice to every episode 
                of WeHaveGotTalk. From celebrity drama to deep dives on marriage and mom life, Elisha 
                brings the laughs — and the unexpected wisdom that sneaks up on you.
              </p>
              <div className="flex items-start gap-3 md:justify-end">
                <input type="checkbox" className="mt-1 w-5 h-5" />
                <span className="text-gray-600 italic">
                  Fun Fact: Elisha once live-commented an entire awards show on Instagram… and gained 100 new followers overnight.
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <GallerySlider/>
      </div>
    </section>
  );
}
