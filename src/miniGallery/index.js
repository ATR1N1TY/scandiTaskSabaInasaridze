import React, { Component } from "react";
import { StyledMiniGallery } from "./index.style";
import image from "../assets/dumbPhotos/Product D.jpg";
import arrow from "../assets/icons/Arrow.svg";

export default class MiniGallery extends Component {
  render() {
    return (
      <StyledMiniGallery>
        <div className="imageView">
          <img src={image} alt="img" />
        </div>

        <div className="controls">
          <div className="prev">
            <img src={arrow} alt="arrowLeft" />
          </div>
          <div className="next">
            <img src={arrow} alt="arrowLeft" />
          </div>
        </div>
      </StyledMiniGallery>
    );
  }
}
