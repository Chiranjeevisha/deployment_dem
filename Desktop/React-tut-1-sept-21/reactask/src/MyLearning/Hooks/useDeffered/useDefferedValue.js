import React, { useDeferredValue, useMemo } from "react";

function RenderDefferVal({ input }) {
  let size = 20000;
  let defferedInput = useDeferredValue(input);
  let list = useMemo(() => {
    let l = [];
    for (let i = 0; i < size; i++) {
      l.push(<div>{input}</div>);
    }
    return l;
  }, [defferedInput]);

  return <div>{list}</div>;
}

export default RenderDefferVal;
