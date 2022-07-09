import styled from "styled-components";

export const StyledOptions = styled.div`
  .sizeOptions {
    display: flex;
    flex-direction: row;
  }

  .sizeOption {
    margin: 0.3rem;
    /* padding: 1rem; */
    width: 65px;
    height: 45px;
    border: 2px solid black;
    text-transform: uppercase;
    /* position: relative; */
    /* top: 50%; */
    /* left: 50%; */

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sizeOption:hover,
  .colorOption:hover {
    cursor: pointer;
  }

  .sizeOption.active {
    color: white;
    background-color: black;
  }

  .size p,
  .color p {
    font-weight: 800;
    text-transform: uppercase;
  }

  .colorOptions {
    display: flex;
    flex-direction: row;
  }

  .colorOption {
    width: 32px;
    height: 32px;
    margin: 0.3rem;
    padding: 0.9rem;
  }

  .colorOption.active {
    border: 1px solid white;
    outline: 2px solid #5ece7b;
  }

  .colorOption:nth-child(1) {
    background-color: gray;
  }
  .colorOption:nth-child(2) {
    background-color: black;
  }
  .colorOption:nth-child(3) {
    background-color: #0f6450;
  }
`;
