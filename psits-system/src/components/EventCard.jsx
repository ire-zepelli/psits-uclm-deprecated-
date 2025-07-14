import React from "react";

export default function EventCard({ image, title }) {
  return (
    <div className="relative w-[80vw] h-40 rounded-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Side gradient overlay (left to right) */}
      <div className="w-1/2 absolute inset-0 bg-gradient-to-r from-[#C89900]/90 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 px-20 flex items-center h-full">
        <h1 className="font-bold text-white text-[4rem] drop-shadow-md">
          {title}
        </h1>
      </div>
    </div>
  );
}
