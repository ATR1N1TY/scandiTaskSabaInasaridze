import styled from "styled-components";

export const StyledList = styled.main`
  width: 90vw;
  height: calc(100vh - 80px);

  margin: 0 auto;
  padding: 1rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 1rem;

  place-items: center;
`;
