// LanguageSwitcher.js
import styled from "styled-components";
import GER from "../assets/images/GE.png"; // Ensure correct file extensions
import EN from "../assets/images/en.png"; // Ensure correct file extensions
import { useLanguage } from "../context/LanguageContext";

const SwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

const LanguageButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 5px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledImage = styled.img`
  width: 24px;
  height: auto;
  transition: opacity 0.3s ease, transform 0.3s ease;

  &:hover {
    opacity: 0.8;
    transform: translateY(-2px);
  }
`;

const LanguageSwitcher = () => {
  const { language, switchLanguage } = useLanguage(); 

  return (
    <SwitcherContainer>
      <LanguageButton
        onClick={() => switchLanguage("en")}
        disabled={language === "en"}
      >
        <StyledImage src={EN} alt="English" />
      </LanguageButton>
      <LanguageButton
        onClick={() => switchLanguage("de")}
        disabled={language === "de"}
      >
        <StyledImage src={GER} alt="German" />
      </LanguageButton>
    </SwitcherContainer>
  );
};
export default LanguageSwitcher;
