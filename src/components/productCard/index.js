import React, { Component } from "react";
import { StyledProductCard } from "./index.style";
import placeholder from "../../assets/dumbPhotos/Product D.jpg";
import cartLogo from "../../assets/icons/Empty Cart White.svg";

export default class ProductCard extends Component {
  render() {
    return (
      <StyledProductCard>
        <div className="imgcontainer">
          <img src={placeholder} alt="productImage" />
        </div>

        <div className="details">
          <div className="title">Apollo Running Short</div>
          <div className="price">$50.00</div>
        </div>

        <div className="addToCartBtn">
          <img src={cartLogo} alt="add" />
        </div>
      </StyledProductCard>
    );
  }
}
