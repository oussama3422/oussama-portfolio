import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";

// const ButtonContainer = styled.div`
//   position: fixed;
//   left: 20px; // Change from right to left
//   bottom: 30%;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;

const Button = styled.a`
  position: fixed;
  left: 8px;
  bottom: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent; /* Transparent background */
  color: white;
  padding: 2px 10px;
  border: 2px solid white;
  border-radius: 5px;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.3s;
  /* width: 200px; */
  height: 50px;
  transform: rotate(90deg);
  transform-origin: left bottom;
  margin-bottom: 80px;
  min-height: 20px; /* Set minimum height for uniformity */
  &:hover {
    background-color: white; /* Change the background on hover */
    color: black; /* Change text color to black on hover */
    transform: scale(1.05); /* Slightly enlarge the button on hover */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Deeper shadow on hover */
    transform: translateY(-5px) rotate(90deg);
  }
`;

const ContactButton = ({ onClick }) => {
  const { language, translations } = useLanguage(); // Get current language and translations

  return (
    <Button onClick={onClick}>{translations[language].buttonContactMe} </Button>
  );
};

export default ContactButton;
