import React, { Component } from "react";
import { StyledDetails } from "./index.style";
import SelectOptions from "../selectOptions";

export default class Details extends Component {
  render() {
    return (
      <StyledDetails>
        <h1 className="title">
          Apollo <br /> <span> Running Shoes</span>
        </h1>

        <SelectOptions />

        {/* select component */}
        <div className="price">
          <h2>
            price: <br /> $50.00
          </h2>
        </div>

        <button className="addToCart">Add to Cart</button>

        <div className="description">
          <p>
            Find stunning women's cocktail dresses and party dresses. Stand out
            in lace and metallic cocktail dresses and party dresses from all
            your favorite brands.
          </p>
        </div>
      </StyledDetails>
    );
  }
}
