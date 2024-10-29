// GlobalStyle.js  
import { createGlobalStyle } from 'styled-components';  

const GlobalStyle = createGlobalStyle`  
  * {  
    margin: 0;  
    padding: 0;  
    box-sizing: border-box;  
  }  

  body {  
    background-color: #1D1D1D;  
    color: white;  
    font-family: Arial, Helvetica, sans-serif; /* or any font of your choice */  
  }  

  a {  
    text-decoration: none; /* Remove underline from links */  
    color: inherit; /* Inherit color from parent */  
  }  
`;  

export default GlobalStyle;