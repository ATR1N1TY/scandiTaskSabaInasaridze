import styled from "styled-components";

export const StyledQuantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50px;
  /* height: 100%; */
  /* position: relative; */
  font-size: 2rem;
  margin-right: 1rem;

  .increment,
  .decrement {
    width: 45px;
    height: 45px;
    border: 1px solid rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .logo {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .line {
    background-color: black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 15px;
    height: 1px;
  }
  .line:nth-child(1) {
    /* transform-origin: 7px 7px; */
    transform: rotate(90deg);
    background-color: red;
    /* position: relative; */
    /* top: 50%; */
    /* left: 50%; */
  }
`;
