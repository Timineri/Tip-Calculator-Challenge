import React from "react";

export default function Output({ setBill, setService, setFriend }) {
  function handleReset() {
    setBill(0);
    setService(0);
    setFriend(0);
  }
  return (
    <div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
