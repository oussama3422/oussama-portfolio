import styled, { keyframes } from "styled-components";

// Keyframes for color change effect
const animateGradient = keyframes`  
  0% {  
    background-position: 0% 50%;  
  }  
  50% {  
    background-position: 100% 50%;  
  }  
  100% {  
    background-position: 0% 50%;  
  }  
`;

// Keyframes for sliding in effect
const slideIn = keyframes`  
  from {  
    transform: translateY(100%);  
    opacity: 0;  
  }  
  to {  
    transform: translateY(0);  
    opacity: 1;  
  }  
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full height of the viewport */
  background: linear-gradient(
    135deg,
    #1d1d1d,
    #1d1d1d
  ); /* Dark gradient background */
  animation: ${slideIn} 0.5s forwards; /* Slide in effect */
  text-align: center; /* Center text */
`;

const LoadingText = styled.h2`
  font-size: 3rem; /* Size of loading text */
  font-weight: 600; /* Bold weight */
  letter-spacing: 0.2rem; /* Increased space between letters */
  text-transform: uppercase; /* Capitalize all letters */
  background: linear-gradient(270deg, #ff416c, #ff4b2b, #ffd200, #ff416c);
  background-size: 400%; /* Make the gradient larger for animation */
  -webkit-background-clip: text; /* Make the background clip to text */
  -webkit-text-fill-color: transparent; /* Remove text fill color */
  animation: ${animateGradient} 3s ease infinite; /* Animate the gradient */
  margin: 0; /* Remove default margin */
`;

function Loading() {
  return (
    <LoadingContainer>
      <LoadingText>LOADING</LoadingText>
    </LoadingContainer>
  );
}

export default Loading;
