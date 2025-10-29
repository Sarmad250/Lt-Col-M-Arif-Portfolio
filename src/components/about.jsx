"use client";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <section className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 py-16 md:py-24">
      {/* Heading on top */}
      <h2
        className="font-bold font-sora text-center text-gray-800 mb-12 text-3xl md:text-5xl">
        About <span className="text-green-800">Muhammad Arif</span>
        {/* Blue bar */}
        <div className="mt-3 w-20 h-1 bg-red-700 mx-auto rounded-full"></div>
      </h2>

      {/* Content section */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        {/* Left side — image */}
        <div className="md:w-1/2 w-full flex justify-center mb-10 md:mb-0">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-md overflow-hidden">
            <Image
              src="/images/principal.jpg"
              alt="Political Leader"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right side — text and icons */}
        <div className="md:w-1/2 w-full text-center md:text-left space-y-5">
          {/* Social Icons */}
          <div className="mt-6">
            <p className="font-bold text-red-700 mb-3">Follow M. Arif:</p>
            <div className="flex justify-center md:justify-start gap-5 text-2xl text-gray-700">
              <a
                href="#"
                className="hover:text-blue-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="hover:text-sky-500 transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="hover:text-pink-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="hover:text-blue-800 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Accomplished Army service as Infantry Officer for initial 6 years and then as Intelligence Officer for next two decades in different supreme intelligence agencies of Pakistan which include ISI, MI, SPD and FS Wing Rangers. Performed duties pertaining to  ‘Security ’, ‘Risk management’, ‘Investigation’, ‘detection of embezzlements & pilferage of revenue, violations of SOP, incident reporting, negotiations, counter-intelligence operations, apprehension of hardcore criminals & terrorists, administration, coordination with Law Enforcing Agencies and other departments, supporting military leadership in ops matters etc.
          </p>

          <button className="mt-4 bg-red-700 font-bold text-white px-6 py-3 rounded-full shadow hover:bg-black transition-colors duration-300">
            Read My Vision
          </button>


        </div>
      </div>
    </section>
  );
}
