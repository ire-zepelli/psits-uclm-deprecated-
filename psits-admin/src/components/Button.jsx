import React from "react";

export default function Button({ icon, styles, handleClick, children }) {
  return (
    <button className={"btn " + styles} onClick={handleClick}>
      {icon}
      {children}
    </button>
  );
}
