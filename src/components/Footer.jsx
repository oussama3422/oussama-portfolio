// import React from "react";
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
  return (
    <FooterContainer>
      <FooterText>
        &copy; {new Date().getFullYear()}{" "}
        <CustomLink href="https://www.github.com/oussama3422">Oussama Rhayrhay </CustomLink>
        . All rights reserved.
      </FooterText>
      {/* <FooterText>
        <FooterLink href="#privacy">Privacy Policy</FooterLink>
        <FooterLink href="#terms">Terms of Service</FooterLink>
        <FooterLink href="#contact">Contact Us</FooterLink>
      </FooterText> */}
    </FooterContainer>
  );
};

export default Footer;
