import styled from "styled-components";

export const ButtonCard = styled.a`
  border: 2px solid white; /* Add a border with your desired color */
  background-color: transparent; /* Transparent background */
  color: white; /* Button text color */
  padding: 10px 20px; /* Padding for button */
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  justify-content: center;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease,
  box-shadow 0.3s ease; /* Smooth transition for hover */
  min-height: 20px; /* Set minimum height for uniformity */
  box-shadow: 0 2px 5px rgba(255, 255, 255, 0.3); /* Soft shadow for depth */
  &:hover {
    background-color: white; /* Change the background on hover */
    color: black; /* Change text color to black on hover */
    transform: scale(1.05); /* Slightly enlarge the button on hover */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Deeper shadow on hover */
  }
`;