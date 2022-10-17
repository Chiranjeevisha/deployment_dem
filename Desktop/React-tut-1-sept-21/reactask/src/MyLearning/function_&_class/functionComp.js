// import React, { useState } from "react";

// export default function IncreAndDecreFunction() {
//   const [Count, setcount] = useState(0);

//   let Increment = () => {
//     setcount(Count + 1);
//   };
//   let Decrement = () => {
//     setcount(Count - 1);
//   };

//   return (
//     <div>
//       <h1>{Count}</h1>
//       <button className="btn btn-primary mx-2" onClick={Increment}>
//         +
//       </button>
//       <button className="btn btn-primary mx-2" onClick={Decrement}>
//         -
//       </button>
//     </div>
//   );
// }
import React, { useState } from "react";

export default function IncreAndDecreFunction() {
  const [Count, setcount] = useState(0);

  let Increment = () => {
    setcount(Count + 1);
  };
  let Decrement = () => {
    setcount(Count - 1);
  };

  return (
    <div>
      <h1>{Count}</h1>
      <button className="btn btn-primary mx-2" onClick={Increment}>
        +
      </button>
      <button className="btn btn-primary mx-2" onClick={Decrement}>
        -
      </button>
    </div>
  );
}
