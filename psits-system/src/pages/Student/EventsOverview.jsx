import React from "react";
import EventCard from "../../components/EventCard";
import image from "/hero.png";

export default function EventsOverview() {
  return (
    <div>
      <div className="p-10 flex flex-col items-center">
        <p className="text-white text-2xl w-[70vw]">EVENTS: April</p>
        <div className="flex flex-col gap-4">
          <EventCard title="12th ICT CONGRESS 2025" image={image} />
          <EventCard title="12th ICT CONGRESS 2025" image={image} />
          <EventCard title="12th ICT CONGRESS 2025" image={image} />
        </div>
      </div>
      <div className="p-10 flex flex-col items-center">
        <p className="text-white text-2xl w-[70vw]">EVENTS: April</p>
        <div className="flex flex-col gap-4">
          <EventCard title="12th ICT CONGRESS 2025" image={image} />
          <EventCard title="12th ICT CONGRESS 2025" image={image} />
          <EventCard title="12th ICT CONGRESS 2025" image={image} />
        </div>
      </div>
    </div>
  );
}
