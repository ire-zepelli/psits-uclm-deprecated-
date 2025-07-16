import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";

export default function EventBanner({
  id,
  status,
  title,
  date_time,
  location,
  image,
}) {
  return (
    <Link to={`/events/${id}`}>
      <div className="bg-white w-full h-40 rounded-2xl flex p-3 gap-4 transition-transform duration-300 ease-in-out hover:scale-105">
        <div className="h-full w-35 flex-shrink-0">
          <img
            src={image}
            className="w-full h-full object-cover object-center rounded-lg"
            alt="event"
          />
        </div>
        <div className="w-full pt-5">
          <p className="text-sm text-[#C89900]">{status}</p>
          <h1 className="font-bold text-3xl mb-7">{title}</h1>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <CalendarMonthIcon fontSize="medium" />
              <p className="text-sm">{date_time}</p>
            </div>
            <div className="flex items-center gap-2">
              <LocationOnIcon fontSize="medium" />
              <p className="text-sm">{location}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
