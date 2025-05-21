import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: light;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.fonts.body};
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }

  button {
    font-family: inherit;
    background: none;
    border: none;
    cursor: pointer;
  }

  input, textarea, select {
    font: inherit;
    background-color: transparent;
    border: none;
    outline: none;
  }

  img, svg {
    display: block;
    max-width: 100%;
  }
`;
