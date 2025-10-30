"use client";
import { motion } from "framer-motion";
import { FaLightbulb } from "react-icons/fa";

export default function VisionSection() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-green-100 py-24 px-6 md:px-16 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-200/40 via-transparent to-yellow-100/30 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="flex justify-center mb-4">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <FaLightbulb className="text-6xl text-amber-500 drop-shadow-lg" />
            </motion.div>
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold text-green-800 mb-6 tracking-tight">
            Vision <span className="text-amber-500">2025</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Building a **prosperous, just, and united Pakistan** — 
            where every citizen has access to opportunity, dignity, and hope.  
            A nation guided by honesty, innovation, and compassion.
          </p>
        </motion.div>

        {/* Vision cards */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="mt-16 grid md:grid-cols-3 gap-10"
        >
          {[
            {
              title: "Empowered Youth",
              desc: "Investing in education, technology, and leadership programs to prepare our youth to shape the future with confidence and creativity.",
              icon: "👨‍🎓",
            },
            {
              title: "Transparent Governance",
              desc: "A corruption-free system where every action serves the people — built on integrity, trust, and accountability.",
              icon: "⚖️",
            },
            {
              title: "Economic Growth",
              desc: "Encouraging entrepreneurship, supporting small businesses, and creating jobs for sustainable national progress.",
              icon: "💼",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/80 backdrop-blur-md shadow-xl hover:shadow-2xl border border-green-100 rounded-3xl p-10 transform transition duration-300"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-2xl font-bold text-green-800 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20"
        >
          <p className="text-lg italic text-gray-600">
            “True leadership is not about power — it’s about service, vision, and the courage to uplift every heart.”
          </p>
          <div className="h-1 w-24 bg-amber-400 mx-auto mt-4 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
}
