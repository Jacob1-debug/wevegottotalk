import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Events() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden font-['Playfair_Display']">
      
      {/* Background Image (not clickable) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/events_1.svg"
          alt="Decorative Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Invisible Button on top */}
      <div
        onClick={() =>
          window.open(
            "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4Mzc0OTcyNjE0MTA5MTU5?igsh=emI4OXd4bGt5c2Rn",
            "_blank"
          )
        }
        className="absolute inset-0 w-full h-full z-10 cursor-pointer"
      >
        {/* You can even add hover effect if you want */}
      </div>

      {/* Actual Content */}
      <div className="relative z-20 flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 py-16 gap-10 mt-10">
        
        {/* Left (Image of the event) */}
        <motion.div
          className="w-full md:w-[40%] flex flex-col items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/resources/events.jpeg"
            alt="Latest Event"
            width={400}
            height={400}
            className="rounded-2xl shadow-2xl"
          />
         <div className="flex flex-col items-center mt-4">
  {/* Text */}
  <p className="text-white text-center text-lg leading-snug mb-4">
    Check out our <br /> <strong>Latest Event</strong>
  </p>

  {/* Button */}
  <a
    href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE4Mzc0OTcyNjE0MTA5MTU5?igsh=emI4OXd4bGt5c2Rn"
    target="_blank"
    rel="noreferrer"
    className="inline-block bg-white text-[#910068] font-semibold text-sm md:text-base px-6 py-2 rounded-full shadow-md hover:bg-pink-100 transition-all"
  >
    📸 Click here to view the event
  </a>
</div>

        </motion.div>

        {/* Right (Text Content) */}
        <motion.div
          className="text-white w-full md:w-[60%] p-6 md:p-10 rounded-2xl backdrop-blur-sm bg-white/10"
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
