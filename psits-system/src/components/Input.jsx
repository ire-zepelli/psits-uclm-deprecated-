import React from "react";

export default function Input({ title }) {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">{title}</legend>
      <input type="text" className="input" placeholder="Type here" />
      <p className="label">Optional</p>
    </fieldset>
  );
}
