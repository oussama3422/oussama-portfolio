import styled from 'styled-components';  
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';  

const SocialIcons = styled.div`  
  display: flex; /* Align icons in a row */  
  gap: 15px; /* Space between icons */  
`;  

const IconLink = styled.a`  
  font-size: 24px; /* Size of the icons */  
  color: #fff; /* Initial color of the icons */  
  transition: color 0.3s, border 0.3s; /* Smooth transitions for color and border */  
  display: inline-block; /* Ensure the anchor behaves like a block for border */  
  padding: 10px; /* Add some padding to create space for border */  
  border: 2px solid transparent; /* Initially set border to transparent */  
  
  // Hover effect  
  &:hover {  
    color: #f0f0f0; /* Change icon color on hover */  
    border-color: white; /* Change border color on hover */  
  }  
`;  

const SocialMediaLinks = () => {  
  return (  
    <SocialIcons>  
      <IconLink href="https://github.com/oussama3422" target="_blank" rel="noopener noreferrer">  
        <FaGithub />  
      </IconLink>  
      <IconLink href="https://www.linkedin.com/in/oussama-ghayghay-608907207/" target="_blank" rel="noopener noreferrer">  
        <FaLinkedin />  
      </IconLink>  
      <IconLink href="https://wa.me/+212659158079" target="_blank" rel="noopener noreferrer">  
        <FaWhatsapp />  
      </IconLink>  
    </SocialIcons>  
  );  
};  

export default SocialMediaLinks;  