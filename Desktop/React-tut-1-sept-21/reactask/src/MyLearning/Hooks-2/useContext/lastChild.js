import React, { useContext } from "react";
import { SendChild } from "./useContext";

function LastChild() {
  let LstChld = useContext(SendChild);
  return (
    <div>
      <h4>{LstChld}Hii Im From Last Child</h4>
    </div>
  );
}

export default LastChild;
