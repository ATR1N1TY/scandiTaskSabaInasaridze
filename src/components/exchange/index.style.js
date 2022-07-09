import styled from "styled-components";

export const StyledExchange = styled.div`
  z-index: 10;
  .dropbtn {
    color: white;
    font-size: 16px;
    border: none;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    min-width: 120px;
    font-weight: 600;
  }

  .dropdown-content p {
    color: black;
    padding: 12px 16px;
  }

  .dropdown-content p:hover {
    background-color: #eeeeee;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown:hover .dropbtn {
    background-color: #3e8e41;
  }
`;
