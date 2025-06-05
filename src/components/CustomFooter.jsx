import React from "react";

export default function CustomFooter() {
  return (
    <footer className="bg-dark-header bg-gradient-to-tr from-dark-header via-dark-neon-green to-dark-header shadow-neon text-neon-green">
      <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-lg font-semibold tracking-wider drop-shadow-[0_0_10px_#22f57b] bg-gradient-to-r from-lime-300 via-green-400 to-green-600 bg-clip-text text-transparent select-none">
          &copy; {new Date().getFullYear()} Arbi. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="/privacy"
            className="text-neon-green hover:text-white transition-colors duration-200 font-medium drop-shadow-[0_0_8px_#22f57b]"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-neon-green hover:text-white transition-colors duration-200 font-medium drop-shadow-[0_0_8px_#22f57b]"
          >
            Terms of Service
          </a>
          <a
            href="/contact"
            className="text-neon-green hover:text-white transition-colors duration-200 font-medium drop-shadow-[0_0_8px_#22f57b]"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
