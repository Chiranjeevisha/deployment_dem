import React, { useState } from "react";

function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = weight / (height / 100) ** 2;
      setBmi(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage(<h1>You are underweight</h1>);
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage(<h1>You are Healthy</h1>);
      } else {
        setMessage(<h1>OverWeight</h1>);
      }
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="center">BMI Calculator</h1>
        <form onSubmit={calcBmi}>
          <h3>Weight (kg)</h3>
          <input
            value={weight}
            placeholder={"Enter Weight"}
            onChange={(e) => setWeight(e.target.value)}
          />

          <h3>Height (cm)</h3>
          <input
            value={height}
            placeholder={"Enter Height"}
            onChange={(event) => setHeight(event.target.value)}
          />
          <br />
          <button className="btn btn-warning mt-4" type="submit">
            Submit
          </button>
        </form>

        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default BmiCalculator;
