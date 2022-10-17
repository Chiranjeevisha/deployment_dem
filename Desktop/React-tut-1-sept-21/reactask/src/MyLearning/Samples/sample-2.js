import React, { useState } from "react";

function AddTodo() {
  let [value, getValue] = useState("");
  // let [calculate, getCalculate] = useState(0);
  let SubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div>
        <h1>sample</h1>
        <div>
          <form className="todoForm" onSubmit={SubmitForm}>
            <input
              value={value}
              className=" pb-2 rounded-2"
              placeholder="Add Todo.."
              onChange={(eve) => {
                getValue(eve.target.value);
              }}
            />
            <button className="btn btn-warning">Add Todo</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
