import React from "react";

export default function ServiceOne() {
  return (
    <div>
      <span>How did you like the service?</span>
      <select>
        <option value=""> Dissatisfied (0%)</option>
        <option value=""> It was okay (5%)</option>
        <option value=""> It was good (10%)</option>
        <option value=""> Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}