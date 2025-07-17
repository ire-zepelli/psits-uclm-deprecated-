import React from "react";

export default function AnnouncementCard({ title, image }) {
  return (
    <div className="flex items-center flex-col gap-4">
      <div className="bg-white h-30 w-30 outline-2 outline-offset-3 outline-blue-500 rounded-full overflow-hidden">
        <img
          src={image}
          alt="announcement"
          className="w-full h-full object-center object-cover"
        />
      </div>
      <h1 className="max-w-30 truncate text-center">{title}</h1>
    </div>
  );
}
