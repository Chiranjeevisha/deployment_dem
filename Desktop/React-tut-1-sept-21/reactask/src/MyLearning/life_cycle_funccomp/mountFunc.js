import React, { useState, useEffect } from "react";

function MountFun() {
  const [calc, setCalc] = useState(0);

  useEffect(() => {
    console.log("The Component Mounted");
    return () => {
      console.log("The Component Unmounted");
    };
  }, []);

  let Increase = () => {
    setCalc(calc + 1);
  };
  let Decrease = () => {
    setCalc(calc - 1);
  };
  return (
    <div>
      <h4>Updating Phase</h4>

      <h2>Counter:{calc}</h2>
      <button className="btn btn-success mx-2" onClick={Increase}>
        +
      </button>
      <button className="btn btn-dark mx-2" onClick={Decrease}>
        -
      </button>
      <br />
    </div>
  );
}

export default MountFun;
