import Image from 'next/image';
import { motion } from 'framer-motion';

function GallerySlider() {
    const galleryImages = [
        '/images/image1.png',
        '/images/image2.png',
        '/images/image3.png',
        '/images/image6.png',
        '/images/image5.png',
      ];
  return <div>
    
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
  </div>;
}

export default GallerySlider;
