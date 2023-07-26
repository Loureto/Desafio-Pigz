import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    font-family: Poppins, sans-serif, Arial, Helvetica;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.colors.white};
  }

  button {
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
