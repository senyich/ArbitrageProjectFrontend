import React from "react"
import { Link } from 'react-router-dom';

export default function LinkedButton({ content, path }) {
  return (
    <Link
      to={path}
      className="
        inline-block
        px-6 py-2
        rounded-lg
        font-semibold
        text-neon-green
        bg-green-800/80
        shadow-neon
        border border-green-700
        transition
        duration-200
        hover:bg-green-900
        hover:text-white
        hover:shadow-[0_0_16px_4px_#22f57b]
        focus:outline-none
        focus:ring-2
        focus:ring-neon-green
        active:scale-95
        select-none
        text-base
        tracking-wide
      "
    >
      {content}
    </Link>
  );
}
