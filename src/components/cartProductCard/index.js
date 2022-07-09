import React, { Component } from "react";
import { StyledCard } from "./index.style";
import SelectOptions from "../selectOptions";
import MiniGalery from "../../miniGallery";
import Quantity from "../../quantity";

export default class CartProductCard extends Component {
  render() {
    return (
      <StyledCard>
        <div className="details">
          <h1 className="title">
            Apollo <br />
            <span> Running Shoes</span>
          </h1>
          <h2 className="price">$50.00</h2>

          <SelectOptions />
        </div>

        <div className="right">
          <Quantity />
          <MiniGalery />
        </div>
      </StyledCard>
    );
  }
}
