import React from "react";
import Reset from "./Reset";

export default function Output({
  bill,
  service,
  friend,
  setBill,
  setService,
  setFriend,
}) {
  const tip = (Number(friend) + Number(service)) / 2;
  return (
    <div>
      {bill !== 0 || friend !== 0 || service !== 0 ? (
        <div>
          <p>
            <b>
              You pay ${bill + tip} (${bill} + ${tip} tip)
            </b>
          </p>
          <Reset
            setBill={setBill}
            setService={setService}
            setFriend={setFriend}
          />
        </div>
      ) : null}
    </div>
  );
}
