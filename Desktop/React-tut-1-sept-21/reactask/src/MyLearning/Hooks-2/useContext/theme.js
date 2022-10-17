import React, { createContext } from "react";
import ColorChild from "./color";

export let Parent = createContext();

function ThemeParent() {
  return (
    <div>
      <h3>Hellooo Frnd</h3>
      <ColorChild />
    </div>
  );
}

export default ThemeParent;
