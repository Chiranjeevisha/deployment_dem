import React, { useEffect, useMemo, useState } from "react";

function Callback() {
  const [value1, setValue1] = useState(0);
  const [color, setColor] = useState(false);

  let doubleNmbr = useMemo(() => {
    return SlowFun(value1);
  }, [value1]);

  let bgColor = useMemo(() => {
    return {
      background: color ? "red" : "white",
      color: color ? "white" : "black",
      display: color ? "inline-flex" : "inline-flex",
    };
  }, [color]);

  // let bgColor = {
  //   background: color ? "red" : "white",
  //   color: color ? "white" : "black",
  //   display: color ? "inline-flex" : "inline-flex",
  // };

  useEffect(() => {
    console.log("updated");
  }, [bgColor]);

  return (
    <div>
      <h2>useCallBack Hook</h2>
      <input
        type={"number"}
        value={value1}
        onChange={(e) => {
          setValue1(e.target.value);
        }}
      />
      <button
        className="btn btn-danger"
        onClick={() => setColor((bgChange) => !bgChange)}
      >
        ChangeBGD
      </button>
      <br />
      <h5 style={bgColor}>{doubleNmbr}</h5>
    </div>
  );

  function SlowFun(num) {
    return num * 2;
  }
}
export default Callback;
