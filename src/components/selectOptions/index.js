import React, { Component } from "react";
import { StyledOptions } from "./index.style";

export default class SelectOptions extends Component {
  render() {
    return (
      <StyledOptions>
        <div className="size">
          <p>size:</p>
          <div className="sizeOptions">
            <div className="sizeOption">xs</div>
            <div className="sizeOption active">s</div>
            <div className="sizeOption">m</div>
            <div className="sizeOption">l</div>
          </div>
        </div>

        <div className="color">
          <p>color:</p>
          <div className="colorOptions">
            <div className="colorOption active"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
          </div>
        </div>
      </StyledOptions>
    );
  }
}
