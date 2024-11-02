// GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`  
  * {  
    margin: 0;  
    padding: 0;  
    box-sizing: border-box;  
  }  

  /* styles.css */  
body {  
  margin: 0;  
  padding: 0;  
  height: 100vh; /* Full height */  
  background-color: #f0f0f0; /* Light background color */  
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px);  
  background-size: 40px 100%; /* Width of the lines and height */  
}  

.container {  
  display: flex;  
  justify-content: center;  
  align-items: center;  
  height: 100%; /* Full height of the body */  
}

  a {  
    text-decoration: none; /* Remove underline from links */  
    color: inherit; /* Inherit color from parent */  
  }  
`;

export default GlobalStyle;
