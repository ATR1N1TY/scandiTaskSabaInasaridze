import React, { Component } from "react";
import { StyledQuantity } from "./index.style";

export default class Quantity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  decrement() {
    this.setState((prevState) =>
      prevState.count <= 0
        ? { count: prevState.count }
        : { count: prevState.count - 1 }
    );
  }

  componentDidMount() {}

  render() {
    const { count } = this.state;
    // console.log(count);

    return (
      <StyledQuantity>
        <div className="increment" onClick={() => this.increment()}>
          +
        </div>
        <div className="count">{count}</div>
        <div className="decrement" onClick={() => this.decrement()}>
          -
        </div>
      </StyledQuantity>
    );
  }
}
