import React, { useState, useTransition } from "react";

function UseTrans() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState();
  console.log(list);
  let listSize = 20000;

  function handleChanges(eve) {
    setInput(eve.target.value);
    startTransition(() => {
      let x = "";
      for (let i = 0; i < listSize; i++) {
        x += eve.target.value;
      }
      setList(x);
    });
  }

  return (
    <div>
      <h4>UseTransition Hook</h4>
      <input type="text" value={input} onChange={handleChanges} />
      <br />
      <p>{isPending ? <h4>Loading...</h4> : list}</p>
      <h4>Looped Here to Check Responsive Speed</h4>
      <h1>&darr;</h1>
    </div>
  );
}

export default UseTrans;
