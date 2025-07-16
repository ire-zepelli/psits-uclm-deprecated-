import React, { useEffect, useState } from "react";
import StudentLayout from "./StudentLayout";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import axios from "axios";
import Loading from "../../components/Loading";
import EventBanner from "./EventBanner";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/events/");

      console.log("events: ", response.data);
      setIsLoading(false);

      setEvents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  function formatDateTime(dateStr) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };

    return new Date(dateStr).toLocaleString("en-US", options);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <StudentLayout>
      <section className="h-screen flex flex-wrap justify-between items-center px-30 py-10">
        {/* BIG LEFT */}
        <div
          className="w-[40vw] h-[80%] rounded-2xl relative text-white bg-center bg-no-repeat bg-cover bg-gray-600 bg-blend-overlay transition-transform duration-300 ease-in-out hover:scale-105"
          style={{
            backgroundImage: `url(${events[0].image})`,
          }}
        >
          <div className="absolute bottom-0 h-[58%] px-15 w-full">
            <div className="w-fit px-4 py-1 rounded-full mb-2 bg-[#C89900] text-white font-bold">
              <p className="">{events[0].status}</p>
            </div>
            <h1 className="text-5xl font-bold mb-4">{events[0].title}</h1>
            <h1 className="text-base line-clamp-3 mb-4">
              {events[0].description}
            </h1>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <CalendarMonthIcon fontSize="medium" />
                <p>{formatDateTime(events[0].date_time)}</p>
              </div>
              <div className="flex items-center gap-2">
                <LocationOnIcon fontSize="medium" />
                <p>{events[0].location}</p>
              </div>
            </div>
          </div>
        </div>
        {/* BIG RIGHT */}
        <div className="w-[40vw] h-[80%] rounded-2xl flex flex-col gap-4">
          {/* Items*/}
          {events.length == 0 ? (
            <h1>Add events</h1>
          ) : (
            events.map(
              (event, index) =>
                index > 0 &&
                index < 4 && (
                  <EventBanner
                    key={event.id}
                    image={event.image}
                    status={event.status}
                    title={event.title}
                    location={event.location}
                    date_time={formatDateTime(event.date_time)}
                  />
                )
            )
          )}
        </div>
      </section>
      <main className="text-white mx-30">
        <h1 className="text-5xl font-bold mb-10">All Events</h1>
        <div className="flex flex-wrap justify-between items-start gap-4">
          {events.length == 0 ? (
            <h1>No Events Currently.</h1>
          ) : (
            events.map((event) => (
              <div className="bg-white w-[25rem] rounded-xl" key={event.id}>
                <div className="overflow-hidden rounded-t-xl h-90">
                  <img
                    src={event.image}
                    className="w-full h-full object-cover object-center  transition-transform duration-300 ease-in-out hover:scale-105"
                    alt="event"
                  />
                </div>
                <div className="flex flex-col py-10 px-5 text-black">
                  <div className="w-fit px-4 py-1 rounded-full mb-2 bg-[#C89900] text-white font-bold mb-5">
                    <p className="">{event.status}</p>
                  </div>
                  <h1 className="font-bold text-3xl mb-2">{event.title}</h1>
                  <h1 className="text-base line-clamp-3 text-gray-500 text-sm">
                    {event.description}
                  </h1>
                  <div className="flex gap-4 text-xs font-bold mt-5">
                    <div className="flex items-center gap-3">
                      <CalendarMonthIcon fontSize="medium" />
                      <p>{formatDateTime(event.date_time)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <LocationOnIcon fontSize="medium" />
                      <p>{event.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </StudentLayout>
  );
}
