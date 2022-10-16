import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    text-decoration: none;
  }
  
  html, body, #root { 
    height: 100vh;
  } 
`;
