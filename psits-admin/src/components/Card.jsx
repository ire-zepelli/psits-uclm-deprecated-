import React from "react";

export default function Card({ children, className }) {
  return (
    <div
      className={"border border-gray-300 rounded-lg p-6 flex-1 " + className}
    >
      {children}
    </div>
  );
}
