import React, { useContext } from "react";
import { nameContext } from "../App";

function B() {
  const nameData = useContext(nameContext);
  return (
    <div>
      <h2>B Component </h2>
      <h2>Your name= {nameData}</h2>
    </div>
  );
}

export default B;
