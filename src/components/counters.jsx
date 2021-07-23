import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleDelete = (counterID) => {
    const counters = this.state.counters.filter((c) => c.id !== counterID);
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-danger m-10"
          onClick={this.handleReset}
        >
          Reset All Items
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          >
            <p>Item #{counter.id}</p>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
