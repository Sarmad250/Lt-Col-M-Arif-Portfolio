// src/components/Navbar.jsx
"use client";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Who am I", to: "whoami" },
    { name: "Vision", to: "vision" },
    { name: "Achievements", to: "achievements" },
    { name: "Meet Arif", to: "meet" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#122238] z-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Left - Name (desktop) / Flag (mobile) */}
        <div className="flex items-center">
          {/* Desktop Name */}
          <div className="hidden md:block text-xl font-bold text-white cursor-pointer hover:text-green-500 transition-colors duration-300">
            Muhammad Arif
          </div>

          {/* Mobile Flag */}
          <div className="block md:hidden">
            <img
              src="/images/pakistan.png"
              alt="Pakistan Flag"
              className="h-8 w-auto"
            />
          </div>
        </div>

        {/* Center - Nav Items */}
        <ul className="hidden md:flex gap-8 text-white">
          {navItems.map((item) => (
            <li
              key={item.to}
              className="cursor-pointer transition-colors duration-300 hover:text-green-500"
            >
              <Link to={item.to} smooth={true} duration={500}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right - Flag (desktop) */}
        <div className="hidden md:block">
          <img
            src="/images/pakistan.png"
            alt="Pakistan Flag"
            className="h-8 w-auto"
          />
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-white cursor-pointer text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col items-center gap-4 bg-[#122238] h-screen py-4 text-white md:hidden transition-all duration-300">
          {navItems.map((item) => (
            <li
              key={item.to}
              className="cursor-pointer hover:text-green-500 transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              <Link to={item.to} smooth={true} duration={500}>
                {item.name}
              </Link>
            </li>
          ))}
         
        </ul>
      )}
    </nav>
  );
}
