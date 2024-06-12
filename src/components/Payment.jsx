import React from "react";

export default function Payment() {
  return (
    <>
      <div>
        <p>
          {" "}
          <b>You pay $X ($X + $X tip)</b>
        </p>
      </div>

      <div>
        <button>Reset</button>
      </div>
    </>
  );
}
