import React, { useState } from "react";
import RenderDefferVal from "./useDefferedValue";

function UseDeffVal() {
  const [change, setChange] = useState("");
  //   let handleChange = (e) => {
  //     ;
  //   };

  return (
    <div>
      <h4>UseDeferedValue</h4>
      <input
        type="text"
        // value={change}
        onChange={(e) => setChange(e.target.value)}
      />
      <h4>Looped Here to Check Responsive Speed</h4>
      <h2>&darr;</h2>
      <RenderDefferVal input={change} />
    </div>
  );
}

export default UseDeffVal;
