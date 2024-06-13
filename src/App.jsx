import React from "react";
import { useState } from "react";
import Bill from "./components/Bill";

import Output from "./components/Output";
import SelectPercentage from "./components/SelectPercentage";

export default function App() {
  const [service, setService] = useState(0);
  const [friend, setFriend] = useState(0);
  const [bill, setBill] = useState(0);

  function handleService(e) {
    setService(e.target.value);
  }
  function handleFriendService(e) {
    setFriend(e.target.value);
  }
  function handleBill(e) {
    setBill(Number(e.target.value));
  }

  return (
    <div>
      <Bill bill={bill} onBill={handleBill} />
      <SelectPercentage
        service={service}
        onService={handleService}
        value={service}
        onChange={handleService}
      >
        <span>How did you like the service?</span>
      </SelectPercentage>
      <SelectPercentage
        friend={friend}
        onFriendService={handleFriendService}
        value={friend}
        onChange={handleFriendService}
      >
        <span>How did your friend like the service?</span>
      </SelectPercentage>

      <Output
        bill={bill}
        service={service}
        friend={friend}
        setBill={setBill}
        setService={setService}
        setFriend={setFriend}
      />
    </div>
  );
}
