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
  flex-direction: column;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 600px) {
    flex-direction: row;
    justify-content: start;
    flex-wrap: wrap;
  }
`;

const DescriptionText = styled.p`
  font-size: 44px;
  margin: 0;
`;

const ActionableInsights = styled.span`
  color: #9fc01d;
  font-size: 44px;
`;

function PortfolioTitle() {
  const { language, translations } = useLanguage();

  return (
    <>
      <NamePortfolio>{translations[language].portfolio.title}</NamePortfolio>{" "}
      <ContainerDescription>
        <DescriptionText>
          {translations[language].portfolio.description1}
        </DescriptionText>{" "}
        <DescriptionText>
          {translations[language].portfolio.description2}{" "}
          <ActionableInsights>
            {translations[language].portfolio.actionableInsights}
          </ActionableInsights>{" "}
        </DescriptionText>
      </ContainerDescription>
    </>
  );
}

export default PortfolioTitle;
