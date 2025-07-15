import React, { useEffect, useState } from "react";
import StudentLayout from "./StudentLayout";
import axios from "axios";

export default function Events() {
  const [events, setEvents] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/events/recent"
      );

      console.log("events: ", response.data);

      setEvents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StudentLayout>
      <div className="h-32 flex justify-center items-center text-white text-5xl font-bold pt-40">
        Events Page
      </div>
      <ul className="text-white text-4xl">
        {events.length === 0 ? (
          <p className="text-white text-center">No events available.</p>
        ) : (
          <ul className="text-white text-4xl">
            {events.map((event) => (
              <li key={event.id}>{event.title}</li>
            ))}
          </ul>
        )}
      </ul>
    </StudentLayout>
  );
}
