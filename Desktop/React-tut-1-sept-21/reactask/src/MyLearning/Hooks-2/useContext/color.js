import React, { useContext } from "react";
import LastChild from "./lastChild";
import { SendChild } from "./useContext";

function ColorChild() {
  let hello = useContext(SendChild);
  return (
    <div>
      <h4>{hello}</h4>
      <LastChild />
    </div>
  );
}

export default ColorChild;
