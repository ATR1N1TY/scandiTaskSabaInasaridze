import React, { Component } from "react";
import { StyledList } from "./index.style";

export default class ProductListPage extends Component {
  render() {
    const { children } = this.props;

    return <StyledList>{children}</StyledList>;
  }
}
