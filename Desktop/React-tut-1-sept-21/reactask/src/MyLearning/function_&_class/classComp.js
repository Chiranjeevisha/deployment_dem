import React from "react";

class IncreAndDecreClass extends React.Component {
  state = {
    count: 1,
  };

  //   incrementing
  Increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  //   decrementing
  Decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button className="btn btn-success mx-2" onClick={this.Increment}>
          {" "}
          +{" "}
        </button>
        <button className="btn btn-success mx-2" onClick={this.Decrement}>
          {" "}
          -{" "}
        </button>
      </div>
    );
  }
}

export default IncreAndDecreClass;
