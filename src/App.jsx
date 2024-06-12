import React from "react";
import Bill from "./components/Bill";
import ServiceOne from "./components/ServiceOne";
import ServiceTwo from "./components/ServiceTwo";
import Payment from "./components/Payment";

export default function App() {
  return (
    <div>
      <Bill />
      <ServiceOne />
      <ServiceTwo />
      <Payment />
    </div>
  );
}
