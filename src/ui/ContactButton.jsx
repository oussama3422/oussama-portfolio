import styled from "styled-components";

// const ButtonContainer = styled.div`
//   position: fixed;
//   left: 20px; // Change from right to left
//   bottom: 30%;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;

const Button = styled.button`
  position: fixed;
  left: 8px;
  bottom: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 20px 10px;
  border: 2px solid #aaacae;
  border-radius: 5px;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.3s;
  width: 120px;
  height: 50px;
  transform: rotate(90deg);
  transform-origin: left bottom;
  margin-bottom: 80px;
  &:hover {
    transform: translateY(-5px) rotate(90deg);
  }
`;

const ContactButton = ({ onClick }) => {
  return <Button onClick={onClick}>Contact Me</Button>;
};

export default ContactButton;
