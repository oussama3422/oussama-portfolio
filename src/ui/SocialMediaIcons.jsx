import styled from 'styled-components';  
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';  
import { IconLink } from './IconLink';

const SocialIcons = styled.div`  
  display: flex; /* Align icons in a row */  
  gap: 15px; /* Space between icons */  
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