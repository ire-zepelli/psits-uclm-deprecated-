import React from "react";
import psits_logo from "/psits logo.png";

export default function PostCard({
  title,
  date,
  category,
  author,
  content,
  image,
}) {
  const formatCategory = (category) => {
    switch (category) {
      case 0:
        return "Announcements";
      case 1:
        return "Blog";
      case 2:
        return "Featured";

      default:
        return null;
    }
  };

  const formatDate = (date) => {
    const formatted = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return formatted;
  };

  return (
    <div className="bg-white w-full flex flex-col px-9 py-10 rounded-xl justify-start gap-4">
      <div className="flex gap-4">
        <div className="rounded-full w-15 h-15 overflow-hidden outline-2 outline-blue-700 outline-offset-1">
          <img
            src={psits_logo}
            alt="psits logo"
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="flex flex-col ">
          <h1 className="font-bold text-2xl">{author}</h1>
          <p className="text-gray-600 text-sm">{formatDate(new Date(date))}</p>
        </div>
        <div className="w-fit h-fit px-4 py-1 rounded-full mb-2 bg-[#C89900] text-white font-bold">
          <p className="text-sm">{formatCategory(category)}</p>
        </div>
      </div>
      <h2 className="font-bold text-xl">{title}</h2>
      <p>{content}</p>

      <div className="bg-black w-full h-140 rounded-2xl overflow-hidden">
        <img
          src={image}
          alt="image"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
}
