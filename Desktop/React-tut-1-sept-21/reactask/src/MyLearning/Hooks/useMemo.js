import React, { useState } from "react";
// useMemo,
function Memo() {
  const [value1, setValue1] = useState(0);
  const [color, setColor] = useState(false);

  let doubleNmbr = SlowFun(value1);

  // let doubleNmbr = useMemo(() => {
  //   return SlowFun(value1);
  // }, [value1]);

  let bgColor = {
    background: color ? "green" : "white",
    color: color ? "white" : "black",
    display: color ? "inline-flex" : "inline-flex",
  };

  return (
    <div>
      <h2>useMemo Hook</h2>
      <input
        type={"number"}
        value={value1}
        onChange={(e) => {
          setValue1(e.target.value);
        }}
      />
      <button
        className="btn btn-success"
        onClick={() => setColor((bgChange) => !bgChange)}
      >
        ChangeBG
      </button>
      <br />
      <h5 style={bgColor}>{doubleNmbr}</h5>
    </div>
  );

  function SlowFun(num) {
    return num * 2;
  }
}

export default Memo;
