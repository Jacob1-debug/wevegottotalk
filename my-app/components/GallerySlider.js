import Image from 'next/image';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function GallerySlider() {
  const galleryImages = [
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
    <section className="mt-24 px-4 py-16 bg-gradient-to-b from-white to-pink-50">
      {/* Section Title */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold text-center text-[#910068] mb-6 font-['Playfair_Display']"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Gallery!
      </motion.h2>

      {/* Catchy Subheading */}
      <motion.p
        className="text-center text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto mb-12 font-medium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Snapshots of the laughter, the chaos, and the moments that define us.  
        Because behind every mic, there's a memory worth keeping.
        <span className="block italic mt-2 text-pink-600">(Swipe to see more pictures!)</span>
      </motion.p>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={24}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.5 },
        }}
        className="px-2 pb-10"
      >
        {galleryImages.map((src, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="relative h-80 rounded-2xl shadow-xl overflow-hidden cursor-pointer border-4 border-pink-200"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal Lightbox */}
      <Dialog
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
      >
        <Dialog.Panel className="max-w-5xl w-full mx-4">
          {selectedImage && (
            <div className="relative w-full h-[85vh]">
              <Image
                src={selectedImage}
                alt="Full View"
                fill
                className="object-contain rounded-lg border-[6px] border-pink-300 shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-3xl font-bold"
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
