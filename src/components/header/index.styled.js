import styled from "styled-components";

export const Styledheader = styled.header`
  width: 100vw;
  height: 80px;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid red; */
  position: relative;

  li {
    text-transform: uppercase;
  }

  .options {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .currencyLogo {
    margin: 1rem;
  }

  .cart {
    margin: 1rem;
  }

  .currencyLogo {
    font-size: 1rem;
    font-weight: 800;
    display: flex;
    gap: 0.5rem;
  }

  .currencyLogo:hover {
    cursor: pointer;
  }

  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
