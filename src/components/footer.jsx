'use client'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        {/* Social Icons */}
        {/* Divider */}
        {/* Footer Text */}
        <p className="text-sm text-center">
          © {new Date().getFullYear()} Lt Col (Retd) Muhammad Arif — All rights reserved.
        </p>
        <p className="text-sm text-center">
          Designed by: <a href="sarmadweb.netlify.app" className='text-blue-700 underline'>Sarmad Ali</a>
        </p>
      </div>
    </footer>
  )
}
