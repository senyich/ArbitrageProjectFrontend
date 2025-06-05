import React from "react"

export default function CustomFooter() {
  return (
    <footer className="bg-green-900 bg-gradient-to-tr from-green-800 via-emerald-600 to-lime-400 shadow-[0_0_40px_5px_rgba(34,245,123,0.6)] text-lime-200">
      <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-lg font-semibold tracking-wider drop-shadow-[0_0_8px_#22f57b]">
          &copy; {new Date().getFullYear()} Arbi. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="/privacy"
            className="text-lime-300 hover:text-white transition-colors duration-200 font-medium neon-link"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-lime-300 hover:text-white transition-colors duration-200 font-medium neon-link"
          >
            Terms of Service
          </a>
          <a
            href="/contact"
            className="text-lime-300 hover:text-white transition-colors duration-200 font-medium neon-link"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  )
}
