import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import image from "/hero_image.JPG";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function Event() {
  const { id } = useParams();
  const navigate = useNavigate();

  const getEvent = () => {
    return axios
      .get(`http://localhost:3000/api/events/${id}`)
      .then((res) => res.data);
  };

  const {
    status,
    error,
    data: event,
  } = useQuery({ queryKey: ["post"], queryFn: getEvent });

  const handleBack = () => {
    navigate(-1);
  };

  function formatDateTime(isoString) {
    const date = new Date(isoString);

    return date.toLocaleString("en-PH", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  }

  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;
  if (!Array.isArray(event) || event.length === 0)
    return <h1>Event not found.</h1>;

  return (
    <div className="p-4">
      <button
        className="btn btn-[#C89900] text-xs p-2 bg-[#C89900] text-white border-none"
        onClick={handleBack}
      >{`<- Back`}</button>

      <div className="flex flex-col justify-center items-center gap-2 mb-4">
        <p className="border-b text-[#C89900] font-bold">Event</p>
        <h1 className="text-2xl">{event[0].title}</h1>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <CalendarTodayIcon fontSize="small" />
          <h1>{formatDateTime(event[0].date_time)}</h1>
          |
          <LocationOnIcon fontSize="small" />
          <h1>{event[0].location}</h1>
        </div>
        <span className="bg-[#C89900] px-2 text-xs rounded-xl">
          {event[0].status}
        </span>
      </div>

      <div className="w-full h-full flex flex-col">
        <div className="w-full h-50 overflow-hidden">
          <img
            src={event[0].image}
            alt="hero"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <p className="text-justify text-sm leading-relaxed p-5 first-letter:text-4xl first-letter:font-bold first-letter:text-[#C89900] first-letter:mr-2 first-letter:float-left">
          {event[0].description
            .split(/\n+/) // Split on one or more newlines
            .map((para, index) => (
              <p
                key={index}
                className={`text-justify text-sm leading-relaxed p-4 ${
                  index === 0
                    ? "first-letter:text-4xl first-letter:font-bold first-letter:text-[#C89900] first-letter:mr-2 first-letter:float-left"
                    : ""
                }`}
              >
                {para}
              </p>
            ))}
        </p>
      </div>
    </div>
  );
}
