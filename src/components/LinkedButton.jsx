import React from "react";
import { Link } from "react-router-dom";

export default function LinkedButton({ content, path }) {
  return (
    <Link
      to={path}
      className="
        inline-flex
        items-center
        justify-center
        gap-2
        px-7 py-3
        rounded-xl
        font-semibold
        text-neon-green
        bg-gradient-to-r from-green-700 via-green-800 to-green-900
        border-2 border-green-600
        shadow-[0_4px_15px_rgba(52,179,83,0.7)]
        transition
        duration-300
        hover:from-green-600 hover:via-green-700 hover:to-green-800
        hover:text-white
        hover:shadow-[0_0_20px_6px_rgba(34,245,123,0.9)]
        focus:outline-none
        focus:ring-4
        focus:ring-neon-green/70
        active:scale-95
        select-none
        text-lg
        tracking-wide
        font-sans
        cursor-pointer
        will-change-transform
      "
    >
      <span>{content}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-neon-green transition-colors duration-300 group-hover:text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
}
