import styled from "styled-components";

export const StyledGallery = styled.div`
  display: flex;
  margin-right: 5rem;

  .imageOptions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    margin-right: 3rem;
  }

  .imageOptions > img {
    width: 150px;
    height: 150px;
  }

  .imageView > img {
    width: 660px;
    height: 660px;
  }
`;
