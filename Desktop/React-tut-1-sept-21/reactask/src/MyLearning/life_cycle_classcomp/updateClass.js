import React, { Component } from "react";
import MountCycle from "./mountClass";

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true,
      ignoreProp: 0,
    };
    this.mountCounter = () => this.setState({ mount: true });
    this.unmountCounter = () => this.setState({ mount: false });
  }

  render() {
    return (
      <div>
        <h3>Class Comp LifeCycle</h3>
        <button className="btn btn-info mx-2" onClick={this.mountCounter}>
          Mount Counter
        </button>
        <button className="btn btn-primary mx-2" onClick={this.unmountCounter}>
          unMount Counter
        </button>
        <br />
        {/* <MountCycle /> */}
        {this.state.mount ? <MountCycle /> : null}
      </div>
    );
  }
}

export default Update;
