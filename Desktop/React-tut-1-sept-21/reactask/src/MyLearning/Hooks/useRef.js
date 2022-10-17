import React, { useEffect, useRef, useState } from "react";

function UseRef() {
  const [word, setWord] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div>
      <h4>UseRef Hook</h4>
      <input
        onChange={(eve) => {
          setWord(eve.target.value);
        }}
      />
      <h4>Enter Here {word}</h4>
      <h5>I rendered {renderCount.current} times</h5>
    </div>
  );
}

export default UseRef;
