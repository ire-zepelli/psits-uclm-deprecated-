import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const Events = () => {
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

  const getEvents = () => {
    return axios
      .get("http://localhost:3000/api/events")
      .then((res) => res.data);
  };

  const {
    status,
    error,
    data: events,
  } = useQuery({ queryKey: ["events"], queryFn: getEvents });

  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;
  if (!Array.isArray(events) || events.length === 0)
    return <h1>No events found.</h1>;

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col">
        <Link
          to={`/events/${events[0].id}`}
          className="w-full h-80 bg-white rounded-b-[4rem] overflow-hidden absolute top-0 "
        >
          <img
            src={events[0].image}
            alt="recent event"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-30 z-20"></div>

          <div className="absolute inset-0 z-30 flex items-start justify-end px-4 pb-10 flex-col">
            <span className="bg-[#C89900] px-2 text-xs  rounded-xl">
              {events[0].status}
            </span>
            <h1 className="text-white text-3xl font-bold">{events[0].title}</h1>
            <div className="flex gap-2 text-xs mt-2 text-gray-300 items-center">
              <p>Learn More</p>
              <ArrowForwardIcon />
            </div>
          </div>
        </Link>
        <div className="mt-70 p-4 z-0 flex flex-col gap-4">
          {/* Items */}
          <Link
            to={`/events/${events[1].id}`}
            className="w-full bg-white rounded-xl p-7 text-black"
          >
            <div className="w-full h-50 bg-black rounded-lg overflow-hidden">
              <img
                src={events[1].image}
                alt="event image"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="text-[#C89900] font-bold mt-2 mb-1">
              {events[1].status}
            </p>
            <h1 className="text-xl font-bold mb-1">{events[1].title}</h1>
            <p className="mb-2 line-clamp-1">{events[1].description}</p>
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <h1>
                <CalendarTodayIcon fontSize="small" />
                {formatDateTime(events[1].date_time)}
              </h1>
              |
              <h1>
                <LocationOnIcon fontSize="small" />
                {events[1].location}
              </h1>
            </div>
          </Link>

          {/* Items */}
          <Link
            to={`/events/${events[2].id}`}
            className="w-full bg-white rounded-xl p-7 text-black"
          >
            <div className="w-full h-50 bg-black rounded-lg overflow-hidden">
              <img
                src={events[2].image}
                alt="event image"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="text-[#C89900] font-bold mt-2 mb-1">
              {events[2].status}
            </p>
            <h1 className="text-xl font-bold mb-1">{events[2].title}</h1>
            <p className="mb-2 line-clamp-1">{events[2].description}</p>
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <h1>
                <CalendarTodayIcon fontSize="small" />
                {formatDateTime(events[2].date_time)}
              </h1>
              |
              <h1>
                <LocationOnIcon fontSize="small" />
                {events[2].location}
              </h1>
            </div>
          </Link>

          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold mb-4">All Events</h1>

            {events.map((event) => (
              <Link
                key={event.id}
                to={`/events/${event.id}`}
                className="w-full p-4 bg-white rounded-xl text-black flex gap-4"
              >
                {/* Items */}
                <div className="w-25 h-25 bg-black rounded-lg overflow-hidden">
                  <img
                    src={event.image}
                    alt="event image"
                    className="w-full h-full object-cover object-center "
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[#C89900] font-bold mt-2 mb-1 text-sm">
                    {event.status}
                  </p>
                  <h1 className="text-xl font-bold mb-1">{event.title}</h1>
                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <CalendarTodayIcon fontSize="small" />
                    <h1>{formatDateTime(event.date_time)}</h1>
                    <LocationOnIcon fontSize="small" />
                    <h1>{event.location}</h1>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
