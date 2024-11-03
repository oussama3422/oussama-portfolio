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
  display: flex;  
  flex-direction: column;  
  justify-content: center;  
  align-items: center;  
  height: 100vh; // Full height of the viewport  
  background-color: #333; // Optional: Light background color for loading screen  
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px);  
  background-size: 40px 100%; // Width of the lines and height  
  color: black; // Text color, changed to black for visibility against lighter background  
  font-size: 36px; // Increased font size for loading text  
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
