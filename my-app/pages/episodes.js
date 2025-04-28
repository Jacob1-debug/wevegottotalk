import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { sanityClient } from "@/lib/sanity";
import { motion } from "framer-motion";

// Fetch videos at build time
export async function getStaticProps() {
  const query = `*[_type == "video"] | order(_createdAt asc){
    _id,
    title,
    description,
    "thumbnailUrl": thumbnail.asset->url,
    "videoUrl": videoFile.asset->url
  }`; // ✅ ORDER by asc (earliest first)
  
  const videos = await sanityClient.fetch(query);

  return {
    props: {
      videos,
    },
    revalidate: 60, 
  };
}

export default function Episodes({ videos }) {
  return (
    <>
      <section className="relative min-h-screen w-full text-white font-['Playfair_Display']">
        {/* Background SVG */}
        <img
          src="/animated2.svg"
          alt="Abstract Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col items-center px-6 pt-24 pb-20 text-center">
          {/* Heading */}
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Some of our Episodes
          </motion.h2>

          {/* Intro */}
          <motion.p
            className="text-lg md:text-xl max-w-3xl mb-16 text-[#ffeef5]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Join Anna and Elisha as they talk about life, laughter, and learning. Dive into stories from real people, wild conversations, and unfiltered moments. It’s the podcast you didn’t know you needed.
          </motion.p>

          {/* Episodes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-6xl">
            {videos.map((ep, i) => (
              <motion.div
                key={ep._id}
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <h3 className="text-xl text-white font-semibold">{ep.title}</h3>

                {/* Video Frame */}
                {ep.videoUrl && (
                  <div className="relative w-full h-[300px] overflow-hidden rounded-xl shadow-lg">
                    <video
                      controls
                      poster={ep.thumbnailUrl}
                      className="object-cover w-full h-full rounded-xl"
                    >
                      <source src={ep.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}

                <p className="text-[#ffeef5] text-sm md:text-base">{ep.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a
              href="https://open.spotify.com/episode/5uSdR7xGNvCkpBVE2qKFP8"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-[#e5e5e5] text-[#910068] font-semibold text-lg px-6 py-2 rounded-full shadow hover:bg-white hover:scale-105 transition-all"
            >
              See More episodes!
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
