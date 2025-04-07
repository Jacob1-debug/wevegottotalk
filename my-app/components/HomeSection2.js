import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HomeSection2() {
  const galleryImages = [
    '/images/image1.png',
    '/images/image2.png',
    '/images/image3.png',
    '/images/image6.png',
    '/images/image5.png',
  ];

  return (
    <section className="bg-gradient-to-r from-gray-200 via-pink-100 to-white py-16 px-6 font-['Playfair_Display']">
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
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Anna */}
          <motion.div
            className="bg-gray-100 p-6 rounded-xl shadow-lg flex items-center gap-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/resources/Anna.png"
              alt="Anna"
              width={110}
              height={110}
              className="rounded-full border-4 border-white"
            />
            <div>
              <h3 className="text-xl font-bold mb-2">Anna is the voice of calm in the chaos.</h3>
              <p className="text-sm italic">
                🎧 Fun Fact: She loves organizing pantries and reality TV.
              </p>
            </div>
          </motion.div>

          {/* Elisha */}
          <motion.div
            className="bg-gray-100 p-6 rounded-xl shadow-lg flex items-center gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/resources/elisha.png"
              alt="Elisha"
              width={110}
              height={110}
              className="rounded-full border-4 border-white"
            />
            <div>
              <h3 className="text-xl font-bold mb-2">Elisha is the friend who says what you're thinking — out loud.</h3>
              <p className="text-sm italic">
                🎧 Fun Fact: Live-commented an awards show and gained 100 followers overnight.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Gallery Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Gallery!
        </motion.h2>
        <p className="text-center font-playball text-xl mb-6 italic">Scroll Sideways For More!</p>

        {/* Gallery Scroll */}
        <motion.div
          className="overflow-x-auto flex gap-4 pb-6 scrollbar-hide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {galleryImages.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Gallery ${index + 1}`}
              width={300}
              height={200}
              className="rounded-lg flex-shrink-0 object-cover hover:scale-105 transition-transform duration-300"
            />
          ))}
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {galleryImages.map((_, i) => (
            <span
              key={i}
              className="w-3 h-3 rounded-full bg-black inline-block"
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
