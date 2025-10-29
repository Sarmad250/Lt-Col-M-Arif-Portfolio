"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const words = ["Leader", "Visionary", "Patriot"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    const typingSpeed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row items-center justify-center md:justify-between w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden pt-24 md:pt-28"
      style={{
        backgroundImage: "url('/images/parliament.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/90"></div>

      {/* Left: Text */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-gray-800 px-8 md:px-20 max-w-xl text-center md:text-left flex flex-col items-center md:items-start"
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-1">
          <span className="text-red-700">Lt Col</span>{" "}
          <span className="text-green-800">Muhammad Arif</span>
          <br />
          <span className="text-3xl">(Retd)</span>
        </h1>

        <p className="text-lg leading-relaxed text-gray-700 mb-2">
          Let's have political reforms
        </p>

        <img
          src="/images/signature.png"
          className="h-12 md:h-14 mb-4"
          alt="signature"
        />

        {/* On mobile, place image here */}
        <div className="md:hidden flex justify-center mt-0">
          <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-green-600 shadow-lg">
            <img
              src="/images/principal.jpg"
              alt="Muhammad Arif"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* On desktop, image stays on right */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="hidden md:flex relative z-10 md:mr-20"
      >
        <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-green-600 shadow-lg">
          <img
            src="/images/principal.jpg"
            alt="Muhammad Arif"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Cursor blink animation */}
      <style jsx>{`
        .blinking-cursor {
          animation: blink 0.8s infinite;
        }
        @keyframes blink {
          0%, 50%, 100% {
            opacity: 1;
          }
          25%, 75% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
