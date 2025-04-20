import Image from "next/image"
import { motion } from "framer-motion"
import GallerySlider from "./GallerySlider"

export default function HomeSection2() {
  return (
    <section className="bg-gradient-to-r from-gray-200 via-pink-100 to-white py-16 px-6 font-['Playfair_Display'] overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          More About Us – Anna and Elisha
        </motion.h2>

        {/* Vertical Stack Layout */}
        <div className="space-y-12">
          
          {/* Anna - Top Block */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Image
                src="/resources/Anna.png"
                alt="Anna"
                width={160}
                height={160}
                className="rounded-full border-4 border-pink-200 flex-shrink-0"
              />
              {/* Divider Line - Pink Gradient */}
              <div className="hidden md:block h-64 w-0.5 bg-gradient-to-b from-pink-300 to-pink-100 mx-4"></div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Anna is the voice of calm in the chaos.
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Hi everyone, my name is Anna Siveter and I am the cohost of we have got to talk. I was born
                  and raised in New Jersey. I am first generation American from Italian descent, my parents came
                  to America from Italy through Ellis Island over 60 years ago. I currently live in Buck County
                  PA with my amazing husband And four children. I have two sets of twins, twins girls and a set
                  of boy-girl twins. I know that sounds crazy and I get a lot of reactions from people when I
                  tell them, but it's all true. We also have a cute toy poodle named Milo. Our family is a
                  little chaotic and busy, but I wouldn't want it any other way. I'm enjoying this new chapter of
                  my life as my children are getting older and are in their teenage years and my husband and
                  I learning to explore and do different things together. I am currently training to be in my
                  first Fitness competition. I've always had a passion for working out and training, but this is
                  pushing me to a whole other level. I am so excited for what's to come and I can't wait for
                  you all to be on this journey with me. I also enjoying dancing, going to the beach,
                  traveling to new places, and spending time with my friends and family. Creating this podcast
                  with my best friend, Elisha has been a wonderful journey this far. We have so much to say and
                  decided doing this podcast would be a great way to get our voices heard.
                </p>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="anna-fact"
                    className="mt-1 w-5 h-5 border-2 border-pink-300 rounded-sm accent-pink-500"
                  />
                  <label htmlFor="anna-fact" className="text-gray-600 italic">
                    Fun Fact: Anna has a secret love for organizing pantries and watching reality TV with zero guilt.
                  </label>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Elisha - Bottom Block */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8 md:flex-row-reverse">
              <Image
                src="/resources/elisha.png"
                alt="Elisha"
                width={160}
                height={160}
                className="rounded-full border-4 border-pink-200 flex-shrink-0"
              />
              {/* Divider Line - Pink Gradient */}
              <div className="hidden md:block h-64 w-0.5 bg-gradient-to-b from-pink-300 to-pink-100 mx-4"></div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Elisha is the friend who always says what you're thinking — out loud.
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Elisha grew up in a small town in Pennsylvania called Newtown Tripoli. She grew up on a farm,
                  very simple life raised by her father and three brothers. Elisha moved to Philadelphia
                  area and then Bucks County post college. She has enjoyed a successful career in college
                  admissions and rose to the position of director of admissions prior to retiring when she got
                  pregnant with her first child. Elisha has three beautiful children, has been married for over
                  20 years to her college sweetheart, and has spent most of her children's lives as a stay at
                  home mom. Now that her kids are older, She has begun to teach dance at Newtown Athletic Club
                  as well as cofounded this podcast with her longtime best friend Anna. This allows her to blend
                  her family life, and her beautiful friendship and share her unique perspective with the world.
                </p>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="elisha-fact"
                    className="mt-1 w-5 h-5 border-2 border-pink-300 rounded-sm accent-pink-500"
                  />
                  <label htmlFor="elisha-fact" className="text-gray-600 italic">
                    Fun Fact: Elisha once live-commented an entire awards show on Instagram... and gained 100 new followers overnight.
                  </label>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <GallerySlider/>
    </section>
  )
}