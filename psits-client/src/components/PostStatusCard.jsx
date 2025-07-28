import React from "react";

export default function PostStatus({ level }) {
  const statusMap = {
    0: { label: "Published", bg: "bg-green-200", border: "border-green-400" },
    1: { label: "Draft", bg: "bg-gray-200", border: "border-gray-400" },
    2: { label: "Archive", bg: "bg-orange-200", border: "border-orange-400" },
  };

  const status = statusMap[level];

  if (!status) return null;

  return (
    <div
      className={`rounded-full ${status.bg} w-fit px-6 text-black font-bold border border-[1px] ${status.border}`}
    >
      {status.label}
    </div>
  );
}
