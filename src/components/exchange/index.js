import React, { Component } from "react";
import { StyledExchange } from "./index.style";

export default class Exchange extends Component {
  render() {
    return (
      <StyledExchange>
        <div className="changeCurrency dropdown">
          <div className="currencyLogo dropBtn">
            <p>$</p>
            <p>&#709;</p>
          </div>
          <div className="dropdown-content">
            <p>$ USD</p>
            <p>€ EUR</p>
            <p>¥ JPY</p>
          </div>
        </div>
      </StyledExchange>
    );
  }
}
