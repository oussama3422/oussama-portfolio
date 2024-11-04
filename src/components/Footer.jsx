import { useLanguage } from "../context/LanguageContext"; // Import useLanguage  
import styled from "styled-components";  

const FooterContainer = styled.footer`  
  padding: 20px; /* Padding for the footer */  
  text-align: center; /* Center text */  
`;  

const FooterText = styled.p`  
  margin: 0; /* Remove default margin */  
  color: #6c757d; /* Text color */  
`;  

const CustomLink = styled.a`  
  color: #8aa51d;  
`;  

const Footer = () => {  
  const { language, translations } = useLanguage(); // Get current language and translations  

  return (  
    <FooterContainer>  
    <FooterText>  
      &copy; {new Date().getFullYear()}{" "}  
      <CustomLink href="https://www.github.com/oussama3422">{translations[language].footerLink}</CustomLink> {/* Use translated link text */}  
      . {translations[language].rightsReserved} {/* Use translated "All rights reserved." text */}  
    </FooterText>  
  </FooterContainer>  
  );  
};  

export default Footer;