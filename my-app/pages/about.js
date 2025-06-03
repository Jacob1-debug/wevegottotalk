import { motion } from "framer-motion";
import Image from "next/image";
import '../public/images/decodded_image.png'

export default function About() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden font-['Playfair_Display'] text-white">
      {/* Animated SVG Background */}

    

      {/* Overlay Content */}
      <div className="relative z-10 flex items-center justify-center px-6 py-20 md:py-32 text-center">
        <motion.div
          className="max-w-5xl space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
                {/* About Us Title with Image */}
      <div className="flex items-center justify-center gap-6 mb-8 flex-wrap lg:flex-nowrap">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-200">
          About Us
        </h1>
        {/* Image next to title (visible only on large screens) */}
        <div className="hidden lg:block">
          <Image
            src="/images/decodded_image.png"
            alt="Anna and Elisha together"
            width={100}
            height={100}
            className="rounded-full object-cover border-4 border-white shadow-md"
          />
        </div>
      </div>


          <p className="text-lg md:text-xl leading-relaxed font-semibold">
            Welcome to <span className="text-pink-300">WeHaveGotTalk</span> —
            the podcast where unfiltered conversations, messy mom moments, and
            laugh-out-loud tangents come to life.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            Hosted by <strong>Anna and Elisha</strong>, two best friends who decided
            to stop talking just to each other and start sharing their wild, wonderful,
            and sometimes weird chats with the world.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            We’re two women navigating motherhood, marriage, pop culture, and
            real life with humor, honesty, and zero filter. Whether we're talking
            about that awkward PTA meeting, the latest celebrity drama, or the mental
            gymnastics of trying to have a social life with toddlers —
            <strong className="text-yellow-300"> we say what everyone else is thinking.</strong>
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            This podcast is for: Moms who need a break (and maybe a glass of wine);
            women who crave connection without perfection; and listeners who love to
            <span className="italic"> laugh, relate, and feel seen.</span>
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            And hey — <strong className="text-yellow-300">guys are welcome too!</strong> Whether you're
            a partner trying to understand the chaos, or just someone who loves honest,
            hilarious talk — there's a seat at the table for everyone.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-teal-300 font-medium">
            We also do Business Promotions. <span className="text-white font-bold">Welcome All!</span>
          </p>

          <p className="text-lg md:text-xl leading-relaxed font-semibold text-pink-200">
            💌 Got feedback, questions, or want to collaborate? Email us at:{" "}
            <a href="mailto:wehavegottotalk@gmail.com" className="underline text-yellow-100">
              wehavegottotalk@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
