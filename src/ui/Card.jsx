import styled from "styled-components";

const Card = styled.div`
  background: transparent;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  position: relative;
  text-align: start;
  width: 40%;
  margin-top: 2rem;
  &:hover {
    border-bottom: 2px solid #8aa51d;
  }
  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid rgba(128, 128, 128, 0.5);
    border-radius: 8px;
    z-index: -1;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`;

// Styled image component
const CardImage = styled.img`
  width: 10%;
  border-radius: 8px;
  margin-bottom: 15px;
`;

// Styled text components
const Title = styled.h3`
  /* font-size: 28px; */
  margin: 10px 0;
  color: #d6d6d6;
  font-family: "Arial", sans-serif;
`;

const Description = styled.p`
  font-size: 16px;
  color: #d6d6d6;
  margin: 0;
  line-height: 1.5;
`;

const CustomCard = ({ imageSrc, title, description }) => {
  return (
    <Card>
      <CardImage src={imageSrc} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};
export default CustomCard;
