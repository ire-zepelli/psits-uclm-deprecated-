import React from "react";

export default function Card({ children }) {
  return (
    <div className="border border-gray-300 rounded-lg p-6 flex-1">
      {children}
    </div>
  );
}
