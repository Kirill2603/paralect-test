import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: Inter, sans-serif;
  }
  #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`
