import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext";

const Button = styled.a`
  position: fixed;
  left: 8px;
  bottom: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: white;
  padding: 2px 10px;
  border: 2px solid white;
  border-radius: 5px;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.3s;
  height: 50px;
  transform: rotate(90deg);
  transform-origin: left bottom;
  margin-bottom: 80px;
  min-height: 20px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px) rotate(90deg);
  }
`;

const ContactButton = ({ onClick }) => {
  const { language, translations } = useLanguage();

  return (
    <Button onClick={onClick}>{translations[language].buttonContactMe}</Button>
  );
};

export default ContactButton;
