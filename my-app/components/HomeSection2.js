import Image from 'next/image';

export default function HomeSection2() {
  const galleryImages = [
    '/images/image1.png',
    '/images/image2.png'
  //   '/images/image3.png',
  //   '/images/image4.png',
  //   '/images/image5.png'
  // ];
  ]

  return (
    <section className="bg-[conic-gradient(at_center,_#ffffff,_#808080_100deg,_#ffc0cb_300deg,_#ffffff)] border border-black py-12 px-4 min-h-screen font-['Playfair_Display']">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">More About Us - Anna and Elisha</h2>

        {/* Bio Blocks */}
        <div className="flex flex-col md:flex-row gap-10 mb-16">
          <div className="flex-[1.2] bg-gray-300 p-6 rounded-xl min-h-[250px]">
            <p className="text-lg font-['Podkova']">
              <strong>Anna is the voice of calm in the chaos.</strong> A mom, a wife, and a natural storyteller, Anna brings heart and humor to everyday life...
            </p>
            <p className="mt-2 italic font-['Podkova']">🎧 Fun Fact: She loves organizing pantries and reality TV.</p>
          </div>
          <div className="flex-1 bg-gray-300 p-6 rounded-xl min-h-[250px]">
            <p className="text-lg font-['Podkova']">
              <strong>Elisha is the friend who says what you're thinking — out loud.</strong> Bold, hilarious, and full of energy...
            </p>
            <p className="mt-2 italic font-['Podkova']">🎧 Fun Fact: Live-commented an awards show and gained 100 followers overnight.</p>
          </div>
        </div>

        {/* Gallery */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Gallery!</h2>
        <p className="text-center font-['Playball'] text-2xl mb-4">Scroll Sideways For More!</p>

        <div className="overflow-x-auto whitespace-nowrap scroll-smooth scroll-px-4 flex gap-4 pb-4">
          {galleryImages.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Gallery ${index + 1}`}
              width={300}
              height={200}
              className="rounded-lg flex-shrink-0 object-cover"
            />
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {galleryImages.map((_, i) => (
            <span key={i} className="w-4 h-4 rounded-full bg-black inline-block"></span>
          ))}
        </div>
      </div>
    </section>
  );
}
