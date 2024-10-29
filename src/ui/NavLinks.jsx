// src/components/NavLinks.js
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end; 
  gap: 5rem; 
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 16px; 
`;

const NavLinks = () => {
  return (
    <NavContainer>
      <NavLink href="#services">Services</NavLink>
      <NavLink href="#portfolio">Portfolio</NavLink>
      <NavLink href="#testimonials">Contact</NavLink>
    </NavContainer>
  );
};

export default NavLinks;
