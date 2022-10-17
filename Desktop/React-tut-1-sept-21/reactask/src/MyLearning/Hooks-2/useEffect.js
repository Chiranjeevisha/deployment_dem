import React, { useState, useEffect } from "react";

function EffectUse() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("ddf");
  }, []);

  let increment = () => {
    setCount(count + 1);
  };
  let decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h4>UseEffect</h4>
      <button className="btn btn-primary" onClick={increment}>
        +
      </button>
      <h4>{count}</h4>
      <button className="btn btn-danger" onClick={decrement}>
        -
      </button>
    </div>
  );
}

export default EffectUse;
