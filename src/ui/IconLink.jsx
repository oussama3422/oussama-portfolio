import styled from "styled-components";

export const IconLink = styled.a`  
  font-size: 24px; /* Size of the icons */  
  color: #fff; /* Initial color of the icons */  
  transition: color 0.3s, border 0.3s; /* Smooth transitions for color and border */  
  display: inline-block; /* Ensure the anchor behaves like a block for border */  
  padding: 10px; /* Add some padding to create space for border */  
  border: 2px solid transparent; /* Initially set border to transparent */  
  
  // Hover effect  
  &:hover {  
    color: #f0f0f0; /* Change icon color on hover */  
    border-color: white; /* Change border color on hover */  
  }  
`;  