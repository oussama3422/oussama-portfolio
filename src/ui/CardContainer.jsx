import styled from "styled-components";  

export const CardContainer = styled.div`  
  display: flex; /* Use flexbox to lay out children */  
  flex-wrap: wrap; /* Allow wrapping of cards */  
  justify-content: center; /* Center the cards */  
  gap: 20px; /* Space between cards */  
  padding: 0 20px; /* Add padding to the left and right */  

  @media (max-width: 900px) { /* Adjust for tablet size */  
    flex-direction: column; /* Stack cards vertically on tablets */  
    align-items: center; /* Center align cards */  
  }  


`;