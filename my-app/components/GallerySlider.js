import Image from 'next/image';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { useState } from 'react';

function GallerySlider() {
  const galleryImages = [
    '/images/image11.jpg',
    '/images/image12.jpg',
    '/images/hugging.jpeg',
    '/images/image14.jpg',
    '/images/image5.png',
    '/images/image6.png',
    '/images/image7.png',
    '/images/image8.png',
    '/images/image9.png',
    '/images/image10.png',
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="mt-24 px-4 py-12 bg-gradient-to-b from-white to-pink-50">
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-[#910068] mb-4 font-['Playfair_Display']"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Gallery!
      </motion.h2>

      {/* Catchy Subheading */}
      <motion.p
        className="text-center text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 font-light"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Snapshots of the laughter, the chaos, and the moments that define us.  
        Because behind every mic, there's a memory worth keeping.

        <p className='font-style: italic'>(Scroll to see more pictures!)</p>
      </motion.p>

 {/* Horizontal Scrollable Gallery */}
<div className="overflow-x-auto w-full px-4">
  <div className="flex gap-6 pb-2 max-w-full">
    {galleryImages.map((src, index) => (
      <motion.div
        key={index}
        className="relative flex-shrink-0 w-56 h-56 rounded-xl shadow-md overflow-hidden cursor-pointer"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        onClick={() => setSelectedImage(src)}
      >
        <Image
          src={src}
          alt={`Gallery ${index + 1}`}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </motion.div>
    ))}
  </div>
</div>

      {/* Light prompt */}
      <p className="text-center text-sm mt-6 text-gray-500 italic">
        Click on any photo to view it full screen
      </p>

      {/* Modal Lightbox */}
      <Dialog
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
      >
        <Dialog.Panel className="max-w-4xl w-full mx-4">
          {selectedImage && (
            <div className="relative w-full h-[80vh]">
              <Image
                src={selectedImage}
                alt="Full View"
                fill
                className="object-contain rounded-lg border-[6px] border-pink-200 shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-2xl font-bold"
              >
                &times;
              </button>
            </div>
          )}
        </Dialog.Panel>
      </Dialog>
    </section>
  );
}

export default GallerySlider;
