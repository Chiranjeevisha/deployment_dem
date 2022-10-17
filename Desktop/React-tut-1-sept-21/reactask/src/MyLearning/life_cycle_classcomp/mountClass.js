import React from "react";

class MountCycle extends React.Component {
  constructor(props) {
    console.log("Constructor Initiated");
    super(props);

    this.state = {
      count: 0,
    };
    this.Increment = () => {
      this.setState({ count: this.state.count + 1 });
    };
    this.Decrement = () => {
      this.setState({ count: this.state.count - 1 });
    };
  }
  componentDidMount() {
    console.log("ComponentDidMount Initiated");
  }
  render() {
    console.log("Render Phase Initiated");
    return (
      <div>
        <h4>Update Phase</h4>
        <h2>Counter: {this.state.count}</h2>
        <button className="btn btn-warning mx-2" onClick={this.Increment}>
          +
        </button>
        <button className="btn btn-danger mx-2" onClick={this.Decrement}>
          -
        </button>
        <br />
      </div>
    );
  }
  componentDidUpdate(prevProps, PrevState, snapShhot) {
    console.log("ComponentDidUpdate Exexcuted");
  }

  // Unmount Phase
  componentWillUnmount() {
    console.log("Components Unmounted");
  }
}

export default MountCycle;
