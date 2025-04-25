import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <motion.div
        className="w-16 h-16 border-4 border-pink-300 border-t-[#910068] rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 1,
        }}
      />
      <p className="mt-4 text-[#910068] font-semibold tracking-wide text-lg">Loading...</p>
    </div>
  );
}
