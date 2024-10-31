import styled, { keyframes } from 'styled-components';  

// Keyframes for spinning animation  
const spin = keyframes`  
  0% { transform: rotate(0deg); }  
  100% { transform: rotate(360deg); }  
`;  

const LoadingContainer = styled.div`  
  display: flex;  
  flex-direction: column;  
  justify-content: center;  
  align-items: center;  
  height: 100vh; // Full height of the viewport  
  background-color: #282c34; // Background color  
  color: white; // Text color  
  font-size: 24px; // Font size  
`;  

const Spinner = styled.div`  
  border: 8px solid rgba(255, 255, 255, 0.3);  
  border-left-color: #8aa51d; // You can change the color here  
  border-radius: 50%;  
  width: 50px; // Size of the spinner  
  height: 50px; // Size of the spinner  
  animation: ${spin} 1s linear infinite; // Animation for the spinner  
  margin-bottom: 20px; // Space between spinner and text  
`;  

const Loading = () => {  
  return (  
    <LoadingContainer>  
      <Spinner />  
      Loading...  
    </LoadingContainer>  
  );  
};  

export default Loading;