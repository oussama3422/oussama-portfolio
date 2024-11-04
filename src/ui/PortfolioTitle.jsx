import { useLanguage } from "../context/LanguageContext"; // Import useLanguage  
import styled from "styled-components";  

const NamePortfolio = styled.h2`  
  font-weight: 100;  
  font-size: 19px;  
  margin-top: 2rem;  
  margin-bottom: 2rem;  
  text-align: center;  
  color: #686865;  
`;  

const ContainerDescription = styled.div`  
  display: flex;  
  flex-direction: column; /* Stack items vertically by default */  
  align-items: center; /* Center horizontally */  
  text-align: center; /* Center text in each line */  
  margin-top: 2rem;  
  margin-bottom: 2rem;  
  @media (max-width: 600px) {  
    flex-direction: row; /* Change to row on smaller screens */  
    justify-content: start; /* Center the items horizontally */  
    flex-wrap: wrap; /* Allow wrapping if needed */  
  }  
`;  

const DescriptionText = styled.p`  
  font-size: 44px;  
  margin: 0; /* Remove default margin */  
`;  

const ActionableInsights = styled.span`  
  color: #9fc01d;  
  font-size: 44px;  
`;  

function PortfolioTitle() {  
  const { language, translations } = useLanguage(); // Get current language and translations  

  return (  
    <>  
      <NamePortfolio>{translations[language].portfolio.title}</NamePortfolio> {/* Use translated title */}  
      <ContainerDescription>  
        <DescriptionText>{translations[language].portfolio.description1}</DescriptionText> {/* Use translated text */}  
        <DescriptionText>  
          {translations[language].portfolio.description2}{" "}  
          <ActionableInsights>{translations[language].portfolio.actionableInsights}</ActionableInsights> {/* Use translated text */}  
        </DescriptionText>  
      </ContainerDescription>  
    </>  
  );  
}  

export default PortfolioTitle;