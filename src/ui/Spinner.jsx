import styled, { keyframes } from "styled-components";

// Spinner Styles  
export const spin = keyframes`  
  0% { transform: rotate(0deg); }  
  100% { transform: rotate(360deg); }  
`;  

export const Spinner = styled.div`  
  border: 8px solid #f3f3f3; /* Light grey */  
  border-top: 8px solid #3498db; /* Blue */  
  border-radius: 50%;  
  width: 60px;  
  height: 60px;  
  animation: ${spin} 2s linear infinite;  
  position: absolute;  
  top: 50%;  
  left: 50%;  
  transform: translate(-50%, -50%); /* Center the spinner */  
`; 