import React from "react";
// import { useState } from "react";

export default function SelectPercentage({ children, value, onChange }) {
  return (
    <div>
      <span>{children}</span>
      <select value={value} onChange={onChange}>
        <option value="0"> Dissatisfied (0%)</option>
        <option value="5"> It was okay (5%)</option>
        <option value="10"> It was good (10%)</option>
        <option value="20"> Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}
