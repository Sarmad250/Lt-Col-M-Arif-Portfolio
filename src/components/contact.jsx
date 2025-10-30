"use client";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactPage() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-end bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/principal.jpg')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contact Form */}
      <div className="relative z-10 bg-white/90 backdrop-blur-sm shadow-xl rounded-xl max-w-lg w-full mr-10 my-16 p-12 border border-gray-200">
        <h2 className="text-3xl text-center font-bold mb-2 text-red-800">
          Message Arif
        </h2>
        <p className="text-gray-600 text-center mb-8 text-sm">
          Feel free to share your views, feedback, or suggestions below.
        </p>

        {/* 👇 FORM CONNECTED TO GETFORM.IO */}
        <form
          action="https://getform.io/f/abcd1234-ef56-7890-gh12-ijk345lmn678"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label className="block font-semibold mb-2 text-base text-gray-800">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg p-3 text-base focus:outline-none focus:ring-1 focus:ring-gray-400"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-base text-gray-800">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-3 text-base focus:outline-none focus:ring-1 focus:ring-gray-400"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-base text-gray-800">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message..."
              className="w-full h-32 border border-gray-300 rounded-lg p-3 text-base resize-none focus:outline-none focus:ring-1 focus:ring-gray-400"
              required
            ></textarea>
          </div>

          <div className="flex justify-center">
            <ReCAPTCHA sitekey="6LfA1PsrAAAAANbXJhh08L9u2hDHx0vQC5tmhBGy" />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="mt-4 bg-gray-800 text-white text-sm font-medium px-10 py-3 rounded-lg hover:bg-gray-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
