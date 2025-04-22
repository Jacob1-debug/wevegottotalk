import Image from 'next/image';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { useState } from 'react';


function GallerySlider() {
    const galleryImages = [
        '/images/image1.png',
        '/images/image2.png',
        '/images/image3.png',
        '/images/image6.png',
        '/images/image5.png',
        '/images/image6.png',
        '/images/image7.png',
        '/images/image8.png',
        '/images/image9.png',
        '/images/image10.png',
      ];
        const [selectedImage, setSelectedImage] = useState(null);

  return <div className=' mt-20'>
    
        {/* Gallery Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Gallery!
        </motion.h2>

        {/* Responsive Grid Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg aspect-[3/2] cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {galleryImages.slice(0, 5).map((_, i) => (
            <span key={i} className="w-3 h-3 rounded-full bg-black inline-block" />
          ))}
        </div>

        {/* Modal Lightbox */}
        <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)} className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <Dialog.Panel className="max-w-4xl w-full mx-4">
            {selectedImage && (
              <div className="relative w-full h-[80vh]">
                <Image src={selectedImage} alt="Full View" fill className="object-contain rounded-lg" />
                <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 text-white text-2xl font-bold">&times;</button>
              </div>
            )}
          </Dialog.Panel>
        </Dialog>
  </div>;
}

export default GallerySlider;
