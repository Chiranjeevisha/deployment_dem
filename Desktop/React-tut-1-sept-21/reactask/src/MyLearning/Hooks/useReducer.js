import React, { useEffect, useState } from "react";

function Callback() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [color, setColor] = useState(false);

  useEffect(() => {
    setValue2(value1 * 2);
  }, [value1]);

  let bgColor = {
    background: color ? "blue" : "white",
    color: color ? "white" : "black",
    display: color ? "inline-flex" : "inline-flex",
  };

  return (
    <div>
      <h2>CallBack Function</h2>
      <input
        type={"number"}
        value={value1}
        onChange={(e) => {
          setValue1(e.target.value);
        }}
      />
      <button onClick={() => setColor((bgChange) => !bgChange)}>
        ChangeBG
      </button>
      <br />
      <h5 style={bgColor}>{value2}</h5>
    </div>
  );
}

export default Callback;
