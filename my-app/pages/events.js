// pages/events.js
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Events() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden font-[Playfair_Display]">
      {/* Background */}
      <img
        src="/events_1.svg"
        alt="Decorative Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 py-16 gap-10 mt-10">
        {/* Left (Image) - Visible on all screens but smaller on mobile */}
        <motion.div
          className="w-full md:w-[40%] flex flex-col items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/resources/events.png"
            alt="Latest Event"
            width={400}
            height={400}
            className="rounded-2xl shadow-2xl"
          />
          <p className="text-white text-center mt-4 text-lg leading-snug">
            Check out our <br /> <strong>Latest Event</strong>
          </p>
        </motion.div>

        {/* Right (Text) */}
        <motion.div
          className=" text-white w-full md:w-[60%] p-6 md:p-10 rounded-2xl backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center md:text-left">
            Yes, we’re stepping out from behind the mic!
          </h1>
          <p className="text-lg md:text-xl mb-4 leading-relaxed">
            At <strong>WeHaveGotTalk</strong>, the conversations don’t stop at Spotify — they spill into real life.
            Whether it’s a cozy live recording session, a <em>“Mom’s Night Out”</em> meetup, or a pop-up panel at your local coffee shop,
            we love connecting with our listeners face-to-face. From heart-to-hearts to hilarious hot takes,
            our events are all about:
          </p>
          <ul className="list-disc list-inside text-lg space-y-2 mb-6">
            <li><strong>Real talk</strong> in real spaces</li>
            <li><strong>Laughter</strong> that makes your cheeks hurt</li>
            <li><strong>Community</strong> that feels like your group chat in person</li>
          </ul>
          <p className="text-lg md:text-xl font-semibold text-center md:text-left">
            📷 Follow us on Instagram for behind-the-scenes fun and upcoming events!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
