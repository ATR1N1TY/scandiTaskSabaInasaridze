import React, { Component } from "react";
import { StyledGallery } from "./index.style";

import image1 from "../../assets/dumbPhotos/Product B.jpg";
import image2 from "../../assets/dumbPhotos/Product C.jpg";
import image3 from "../../assets/dumbPhotos/Product D.jpg";

export default class Gallery extends Component {
  render() {
    return (
      <StyledGallery>
        <div className="imageOptions">
          <img src={image1} alt="prodimage" />
          <img src={image2} alt="prodimage" />
          <img src={image3} alt="prodimage" />
        </div>

        <div className="imageView">
          <img src={image1} alt="prodImage" />
        </div>
      </StyledGallery>
    );
  }
}
