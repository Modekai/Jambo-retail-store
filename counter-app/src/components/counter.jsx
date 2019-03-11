import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    const classes = "badge m2 badge-";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";

    return (
      <span>
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </span>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
