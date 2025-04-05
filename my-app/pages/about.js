// pages/about.js
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      {/* <Header /> */}

      {/* Full screen section with background image */}
      <section className="relative w-full min-h-screen overflow-hidden">
        {/* SVG Background */}
        <img
          src="/animated.svg"
          alt="Animated Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white bg-black/60 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Welcome to our world. We're passionate about sharing stories,
            connecting with real people, and creating something meaningful.
            Dive into the behind-the-scenes with us!
          </p>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}
