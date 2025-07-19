import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import image from "/hero_image.JPG";
import { useNavigate, useParams } from "react-router-dom";

export default function Event() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="p-4">
      <button
        className="btn btn-[#C89900] text-xs p-2 bg-[#C89900] text-white border-none"
        onClick={handleBack}
      >{`<- Back`}</button>

      <div className="flex flex-col justify-center items-center gap-2 mb-4">
        <p className="border-b text-[#C89900] font-bold">Event</p>
        <h1 className="text-2xl">Event Title</h1>
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
        <span className="bg-[#C89900] px-2 text-xs rounded-xl">Upcoming</span>
      </div>

      <div className="w-full h-full flex flex-col">
        <div className="w-full h-50 overflow-hidden">
          <img
            src={image}
            alt="hero"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <p className="text-start first-letter:text-4xl first-letter:text-[#C89900] text-sm p-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          amet esse unde non eius ad iste. Blanditiis ad nisi numquam possimus
          sed quas incidunt suscipit voluptatem porro reiciendis, repellendus
          odio.
        </p>
      </div>
    </div>
  );
}
