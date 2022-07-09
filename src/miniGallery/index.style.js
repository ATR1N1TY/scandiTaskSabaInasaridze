import styled from "styled-components";

export const StyledMiniGallery = styled.div`
  position: relative;

  .imageView {
    width: 250px;
    overflow: hidden;
    /* margin-right: 4rem; */
    /* height: auto; */
  }

  .prev,
  .next {
    width: 24px;
    height: 24px;
    background-color: rgba(0, 0, 0, 0.8);
    margin: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .prev:hover,
  .next:hover {
    cursor: pointer;
  }

  .next img {
    transform: rotate(180deg);
  }

  .controls {
    position: absolute;
    display: flex;
    right: 20px;
    bottom: 20px;
  }
`;
