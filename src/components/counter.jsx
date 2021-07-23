import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontWeight: "bold",
    fontSize: 15,
  };
  render() {
    return (
      <div>
        <h4>Item : {this.props.counter.id}</h4>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          type="button"
          onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
          className="btn btn-success m-2"
        >
          Increment
        </button>

        <button
          type="button"
          className="btn m-2 btn-warning"
          onClick={() => {
            this.props.onDecrement(this.props.counter);
          }}
        >
          Decrement
        </button>

        <button
          type="button"
          onClick={() => {
            this.props.onDelete(this.props.counter.id);
          }}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "secondary" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
