import React from "react";

export default function Button({ icon, styles, handleClick, children }) {
  return (
    <button className={"btn btn-blue " + styles} onClick={handleClick}>
      {icon}
      {children}
    </button>
  );
}
