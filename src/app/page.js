// src/app/page.js
"use client";

import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Footer from "../components/footer";
import Vision from "../components/vision"
import Contact from "../components/contact"

export default function HomePage() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Navbar />
      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="vision"><Vision /></section>
        <section id="contact"><Contact/></section>
      </main>
      <Footer />
    </div>
  );
}
