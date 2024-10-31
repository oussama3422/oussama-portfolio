import styled from "styled-components";

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
`;
// const sizes = {
//   small: css`
//     font-size: 1.2rem;
//     padding: 0.4rem 0.8rem;
//     text-transform: uppercase;
//     font-weight: 600;
//     text-align: center;
//   `,
//   medium: css`
//     font-size: 1.4rem;
//     padding: 1.2rem 1.6rem;
//     font-weight: 500;
//   `,
//   large: css`
//     font-size: 1.6rem;
//     padding: 1.2rem 2.4rem;
//     font-weight: 500;
//   `,
// };

const Email = styled.a`
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 8px;
  transition: background-color 0.3s ease;
  display: block;
`;
const Button = styled.a`
  border: 2px solid white;
  background-color: white;
  color: black;
  padding: 8px 20px; /* Adjusted the padding for a smaller height */
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;
  min-height: 40px; /* Reduced the min-height */
  min-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(255, 255, 255, 0.3);

  &:hover {
    background-color: white;
    color: black;
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  @media (max-width: 768px) {
    overflow: hidden;
    justify-content: space-between;
  }
`;

function AppBar() {
  return (
    <TopBar>
      <ButtonContainer>
        <Button href="https://wa.me/+212659158079">FREE CONSULTATION</Button>
        <Email href="mailto:oussamaazubi@gmail.com">
          OUSSAMAAZUBI@GMAIL.COM
        </Email>
      </ButtonContainer>
    </TopBar>
  );
}

export default AppBar;
