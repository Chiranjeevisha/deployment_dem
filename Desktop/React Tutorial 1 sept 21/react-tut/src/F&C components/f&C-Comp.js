import React, { Component } from "react";

// class Comp
class ClassComp extends Component {
  render() {
    return (
      <div>
        <FunComp />
      </div>
    );
  }
}

export default ClassComp;

// functional Comp
const FunComp = () => {
  return (
    <div>
      <table>
        <h3 className="ps-5 ms-5">Table</h3>
        <tr>
          <th className="pe-1">My first Top</th>
          <th className="pe-1">My Second Top</th>
        </tr>
        <tr>
          <td>1</td>
          <td>My Second Cont</td>
        </tr>
        <tr>
          <td>2</td>
          <td>My Second Cont</td>
        </tr>
      </table>
    </div>
  );
};
