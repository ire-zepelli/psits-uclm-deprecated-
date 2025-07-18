import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import EventIcon from "@mui/icons-material/Event";
import BookIcon from "@mui/icons-material/Book";
import InfoIcon from "@mui/icons-material/Info";

const Drawer = ({ isOpen, onClose }) => {
  return (
    <div
      className={`p-10 fixed inset-0 bg-[#1f0d1d] transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col items-end gap-4 h-full">
        <div className="flex justify-end">
          <button onClick={onClose}>
            <CloseIcon className="mb-2 border rounded-full" fontSize="large" />
          </button>
        </div>
        <ul className="flex flex-col gap-4 w-full">
          <li onClick={onClose}>
            <Link
              to={"/about"}
              className="flex font-bold text-2xl w-full border-b pb-2"
            >
              <InfoIcon className="mx-3" fontSize="large" />
              About
            </Link>
          </li>
          <li onClick={onClose}>
            <Link
              to={"/blog"}
              className="flex font-bold text-2xl w-full border-b pb-2"
            >
              <BookIcon className="mx-3" fontSize="large" />
              Blog
            </Link>
          </li>
          <li onClick={onClose}>
            <Link
              to={"/events"}
              className="flex font-bold text-2xl w-full border-b pb-2"
            >
              <EventIcon className="mx-3" fontSize="large" />
              Events
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
