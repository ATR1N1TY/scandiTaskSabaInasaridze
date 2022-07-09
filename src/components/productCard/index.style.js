import styled from "styled-components";

export const StyledProductCard = styled.article`
  padding: 1rem;
  position: relative;
  transition: all 0.3s;

  .details {
    margin: 1rem 0;
  }

  .details > div {
    margin: 0.5rem 0;
  }

  .price {
    font-weight: 800;
  }

  .addToCartBtn {
    background-color: #5ece7b;
    width: 52px;
    height: 52px;
    border-radius: 50%;

    display: none;
    align-items: center;
    justify-content: center;
    color: white;

    position: absolute;

    right: 1.8rem;
    bottom: 70px;

    cursor: pointer;
  }

  &:hover > .addToCartBtn {
    display: flex;
  }

  &:hover {
    box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.1);
  }
`;
