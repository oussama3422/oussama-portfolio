import styled from "styled-components";
import logoImage from "../assets/images/logo.png";

function Logo() {
  return (
    <LogoContainer>
      <LogoImg src={logoImage} alt="Logo" />
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const LogoImg = styled.img`
  width: 70px;
  height: auto;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default Logo;
