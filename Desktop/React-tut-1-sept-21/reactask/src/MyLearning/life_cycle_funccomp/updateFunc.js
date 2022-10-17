import React, { useState } from "react";

import MountFun from "./mountFunc";

function UpdateFun() {
  const [mount, setMount] = useState(false);

  return (
    <div>
      <h3>Functionl Comp LifeCycle</h3>
      <button className="btn btn-info mx-2" onClick={() => setMount(true)}>
        Mount Counter
      </button>
      <button className="btn btn-primary mx-2" onClick={() => setMount(false)}>
        unMount Counter
      </button>
      <br />
      {mount ? <MountFun /> : null}
    </div>
  );
}

export default UpdateFun;
