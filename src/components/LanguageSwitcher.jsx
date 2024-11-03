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
  margin: 0 5px; // Space between buttons
  transition: transform 0.3s ease; // Smooth transform transition

  &:hover {
    transform: scale(1.1); // Scale up on hover for effect
  }
`;

const StyledImage = styled.img`
  width: 24px; // Set the desired width
  height: auto; // Maintain aspect ratio
  transition: opacity 0.3s ease, transform 0.3s ease; // Smooth transition effects

  &:hover {
    opacity: 0.8; // Slightly fade the image on hover
    transform: translateY(-2px); // Lift effect on hover
  }
`;

const LanguageSwitcher = () => {
  const { switchLanguage } = useLanguage(); // Access switchLanguage function from context

  return (
    <SwitcherContainer>
      <LanguageButton onClick={() => switchLanguage("en")}>
        <StyledImage src={EN} alt="English" /> {/* English flag image */}
      </LanguageButton>
      <LanguageButton onClick={() => switchLanguage("de")}>
        <StyledImage src={GER} alt="German" /> {/* German flag image */}
      </LanguageButton>
    </SwitcherContainer>
  );
};

export default LanguageSwitcher;
