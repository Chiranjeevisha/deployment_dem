import React, { createContext, useState } from "react";
import ThemeParent from "./theme";

export let SendChild = createContext();
function Context() {
  const [data, setData] = useState(true);
  let backgroundStyle = {
    background: data ? "none" : "red",
  };
  return (
    <div>
      <SendChild.Provider value={"hello, im From Parent Component"}>
        <h3 style={backgroundStyle}>useContext Hook</h3>
        <button className="btn btn-warning" onClick={() => setData(!data)}>
          Toggle Theme
        </button>
        <ThemeParent />
      </SendChild.Provider>
    </div>
  );
}

export default Context;
