import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FlagIcon from "@mui/icons-material/Flag";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import InfoIcon from "@mui/icons-material/Info";

export default function Drawer({ onClose, isOpen }) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-50 visible" : "opacity-0 invisible"
        } z-20`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#1F0D1D] text-white p-8 flex flex-col transition-transform duration-300 z-30 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="self-end cursor-pointer" onClick={onClose}>
          <CloseIcon
            fontSize="large"
            className="text-[20rem] hover:text-[#C89900] transition-colors duration-200"
          />
        </div>
        <ul className="pt-10 flex flex-col gap-4">
          <li className="flex items-center border-b gap-5 hover:border-[#C89900] hover:pl-[10px] hover:text-[#C89900] transition-all duration-200">
            <LoginIcon fontSize="" className="text-[2rem] " />
            <Link to="/login" className="text-[25px]">
              Login
            </Link>
          </li>
          <li className="flex items-center border-b gap-5 hover:border-[#C89900] hover:pl-[10px] hover:text-[#C89900] transition-all duration-200">
            <DashboardIcon fontSize="" className="text-[2rem] " />
            <Link to="/" className="text-[25px]">
              Dashboard
            </Link>
          </li>
          <li className="flex items-center border-b gap-5 hover:border-[#C89900] hover:pl-[10px] hover:text-[#C89900] transition-all duration-200">
            <InfoIcon fontSize="" className="text-[2rem] " />
            <Link to="/about" className="text-[25px]">
              About
            </Link>
          </li>
          <li className="flex items-center border-b gap-5 hover:border-[#C89900] hover:pl-[10px] hover:text-[#C89900] transition-all duration-200">
            <EmojiEventsIcon fontSize="" className="text-[2rem] " />
            <Link to="/events" className="text-[25px]">
              Events
            </Link>
          </li>
          <li className="flex items-center border-b gap-5 hover:border-[#C89900] hover:pl-[10px] hover:text-[#C89900] transition-all duration-200">
            <FlagIcon fontSize="" className="text-[2rem] " />
            <Link to="/reports" className="text-[25px]">
              Report An Issue
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
