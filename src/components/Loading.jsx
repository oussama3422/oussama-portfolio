import ClipLoader from "react-spinners/ClipLoader";
import styled, { keyframes } from "styled-components";

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
  background-color: #1d1d1d; /* Dark background color */
  color: #ffffff; /* Text color */
  animation: ${slideIn} 0.5s forwards; /* Slide in effect */
`;

function Loading({loading,color}) {
  return (
    <LoadingContainer>
          <ClipLoader
            color={color}
            loading={loading}
            size={150} // Size of the spinner
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <h2>Loading...</h2>
     
    </LoadingContainer>
  );
}

export default Loading;
