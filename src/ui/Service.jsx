import styled from "styled-components";

const Name = styled.h2`
  margin: 10px 0;
  font-weight: 100;
  font-size: 19px;
  text-align: center;
  color: #686865;
`;

const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column; /* Stack items vertically by default */
  align-items: center; /* Center horizontally */
  text-align: center; /* Center text in each line */

  @media (max-width: 600px) {
    flex-direction: row; /* Change to row on smaller screens */
    justify-content: center; /* Center the items horizontally */
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

function Service() {
  return (
    <>
      <Name>SERVICES</Name>
      <ContainerDescription>
        <DescriptionText>Turn Information</DescriptionText>
        <DescriptionText>
          Into <ActionableInsights>Actionable Insights</ActionableInsights>
        </DescriptionText>
      </ContainerDescription>
    </>
  );
}

export default Service;
