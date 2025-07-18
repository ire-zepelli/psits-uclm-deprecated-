import React from "react";
import StudentLayout from "./StudentLayout";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import image from "/hero_image.JPG";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";

export const Events = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col">
        <div className="w-full h-80 bg-white rounded-b-[4rem] overflow-hidden absolute top-0 ">
          <img
            src={image}
            alt="recent event"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-30 z-20"></div>

          <div className="absolute inset-0 z-30 flex items-start justify-end px-4 pb-10 flex-col">
            <span className="bg-[#C89900] px-2 text-xs  rounded-xl">
              Upcoming
            </span>
            <h1 className="text-white text-3xl font-bold">Event Title</h1>
            <Link
              to={"/events/:id"}
              className="flex gap-2 text-xs mt-2 text-gray-300 items-center"
            >
              <p>Learn More</p>
              <ArrowForwardIcon />
            </Link>
          </div>
        </div>
        <div className="mt-70 p-4 z-0 flex flex-col gap-4">
          {/* Items */}
          <div className="w-full bg-white rounded-xl p-7 text-black">
            <div className="w-full h-50 bg-black rounded-lg overflow-hidden">
              <img
                src={image}
                alt="event image"
                className="w-full h-full object-cover object-cented"
              />
            </div>
            <p className="text-[#C89900] font-bold mt-2 mb-1">Ongoing</p>
            <h1 className="text-xl font-bold mb-1">Event Title</h1>
            <p className="mb-2">Desc</p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <h1>
                <CalendarTodayIcon fontSize="small" />
                Date
              </h1>
              |
              <h1>
                <LocationOnIcon fontSize="small" />
                Location
              </h1>
            </div>
          </div>

          {/* item */}
          <div className="w-full bg-white rounded-xl p-7 text-black">
            <div className="w-full h-50 bg-black rounded-lg overflow-hidden">
              <img
                src={image}
                alt="event image"
                className="w-full h-full object-cover object-cented"
              />
            </div>
            <p className="text-[#C89900] font-bold mt-2 mb-1">Ongoing</p>
            <h1 className="text-xl font-bold mb-1">Event Title</h1>
            <p className="mb-2">Desc</p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <h1>
                <CalendarTodayIcon fontSize="small" />
                Date
              </h1>
              |
              <h1>
                <LocationOnIcon fontSize="small" />
                Location
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold mb-4">All Events</h1>

            <div className="w-full p-4 bg-white rounded-xl text-black flex gap-4">
              {/* Items */}
              <div className="w-25 h-25 bg-black rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt="event image"
                  className="w-full h-full object-cover object-cented"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-[#C89900] font-bold mt-2 mb-1 text-sm">
                  Ongoing
                </p>
                <h1 className="text-xl font-bold mb-1">Event Title</h1>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <h1>
                    <CalendarTodayIcon fontSize="small" />
                    Date
                  </h1>
                  |
                  <h1>
                    <LocationOnIcon fontSize="small" />
                    Location
                  </h1>
                </div>
              </div>
            </div>

            <div className="w-full p-4 bg-white rounded-xl text-black flex gap-4">
              {/* Items */}
              <div className="w-25 h-25 bg-black rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt="event image"
                  className="w-full h-full object-cover object-cented"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-[#C89900] font-bold mt-2 mb-1 text-sm">
                  Ongoing
                </p>
                <h1 className="text-xl font-bold mb-1">Event Title</h1>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <h1>
                    <CalendarTodayIcon fontSize="small" />
                    Date
                  </h1>
                  |
                  <h1>
                    <LocationOnIcon fontSize="small" />
                    Location
                  </h1>
                </div>
              </div>
            </div>

            <div className="w-full p-4 bg-white rounded-xl text-black flex gap-4">
              {/* Items */}
              <div className="w-25 h-25 bg-black rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt="event image"
                  className="w-full h-full object-cover object-cented"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-[#C89900] font-bold mt-2 mb-1 text-sm">
                  Ongoing
                </p>
                <h1 className="text-xl font-bold mb-1">Event Title</h1>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <h1>
                    <CalendarTodayIcon fontSize="small" />
                    Date
                  </h1>
                  |
                  <h1>
                    <LocationOnIcon fontSize="small" />
                    Location
                  </h1>
                </div>
              </div>
            </div>

            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
