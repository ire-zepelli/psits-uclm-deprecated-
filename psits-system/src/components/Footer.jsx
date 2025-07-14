import React from "react";
import gmail from "/gmail-icon.png";
import facebook from "/facebook-icon.png";

export default function Footer() {
  return (
    <footer className="bg-[1f0d1d] flex flex-col items-start justify-center p-30">
      <h1 className="text-white text-[5rem] font-bold">PSITS</h1>
      <div className="w-[70vw] flex justify-between">
        <div>
          <h1 className="text-gray-400 font-bold">
            We are absolutely batshit insane if you mess with us
          </h1>
          <div className="flex gap-4 my-4">
            <img src={gmail} alt="gmail" />
            <img src={facebook} alt="facebook" />
          </div>
        </div>
        <div className="flex flex-col gap-10 font-bold">
          <h1 className="text-white">More of PSITS</h1>
          <ul className="text-[#C89900]">
            <li>Media</li>
            <li>Events</li>
            <li>Programs</li>
            <li>Spaces</li>
            <li>Newsletters</li>
            <li>Deals</li>
          </ul>
        </div>
        <div className="flex flex-col gap-10 font-bold">
          <h1 className="text-white">More of PSITS</h1>
          <ul className="text-[#C89900]">
            <li>Media</li>
            <li>Events</li>
            <li>Programs</li>
            <li>Spaces</li>
            <li>Newsletters</li>
            <li>Deals</li>
          </ul>
        </div>
      </div>
      <hr className="mt-20 bg-gray-400 w-full h-[2px] " />
      <p className="text-gray-400 font-bold w-full text-center p-5">
        © UCLM - PSITS Dev Team 2025
      </p>
    </footer>
  );
}
