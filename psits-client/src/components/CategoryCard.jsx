import React from "react";

export default function CategoryCard({ level }) {
  const categories = ["Announcements", "Blog", "Featured"];
  const label = categories[level] || "Unknown";

  return (
    <div className="rounded-full bg-white w-fit px-5 text-black font-bold border border-[1px] border-gray-400">
      {label}
    </div>
  );
}
