import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement, onDecrement, counters } =
      this.props;
    return (
      <div>
        <button type="button" className="btn btn-danger m-10" onClick={onReset}>
          Reset All Items
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          >
            <p>Item #{counter.id}</p>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
