import styled from "styled-components";

export const StyledDetails = styled.div`
  /* border: 2px solid orangered; */

  max-width: 300px;

  span {
    font-weight: 400;
  }

  h2 {
    text-transform: uppercase;
  }

  .addToCart {
    text-transform: uppercase;
    width: 100%;
    border: none;
    border-radius: 0;
    background-color: #5ece7b;
    color: white;
    padding: 1rem;
    font-weight: 600;
  }

  .addToCart:hover {
    cursor: pointer;
  }
`;
