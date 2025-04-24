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

    return (
        <div className='mt-20 px-4 max-w-6xl mx-auto'>
            {/* Gallery Title - Simplified but kept your animation */}
            <motion.h2
                className="text-4xl md:text-5xl font-bold text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Gallery!
            </motion.h2>

            {/* Horizontal Divider from design */}
            <hr className="border-t border-gray-300 w-full mb-12" />

            {/* Your Image Grid - Kept all functionality */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
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
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                ))}
            </div>

            {/* "STEP INTO YOU" Section from design */}
            <div className="text-center mt-16">
                <h3 className="text-2xl font-bold mb-4">STEP INTO YOU</h3>
                <ul className="space-y-2 font-medium">
                    <li>SODYBO</li>
                    <li>POP</li>
                    <li>BOX</li>
                </ul>
            </div>

            {/* Your Lightbox Modal - Kept all functionality */}
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
                                className="object-contain rounded-lg"
                                priority
                            />
                            <button 
                                onClick={() => setSelectedImage(null)} 
                                className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-300 transition-colors"
                            >
                                &times;
                            </button>
                        </div>
                    )}
                </Dialog.Panel>
            </Dialog>
        </div>
    );
}

export default GallerySlider;