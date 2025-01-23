import styled from "styled-components";  
import SocialMediaLinks from "../ui/SocialMediaIcons";  
import { Description } from "../ui/Globals";  
import Profile from "../assets/images/profile1.jpg";  
import { motion } from "framer-motion";  
import LanguageSwitcher from "./LanguageSwitcher";  
import { ButtonCard } from "../ui/ButtonCard";  
import { useLanguage } from "../context/LanguageContext";  

const HeaderContainer = styled(motion.header)`  
  background-color: #1d1d1d;  
  color: white;  
  padding: 20px;  
`;  

const ProfileCardsContainer = styled.div`  
  display: flex;  
  flex-direction: row; /* Row layout for larger screens */  
  justify-content: space-between; /* Space between cards */  
  gap: 20px;  

  @media (max-width: 768px) {  
    flex-direction: column; /* Stack cards vertically on small screens */  
    width: 100%; /* Ensure cards take full width */  
  }  
`;  

const Name = styled.h2`  
  margin: 10px 0;  
  text-align: center;  
  color: #8aa51d;  
`;  

const ProfileCard = styled.div`  
  border: none;  
  border-radius: 10px;  
  padding: 20px;  
  display: flex;  
  flex-direction: column; /* Stacked layout */  
  align-items: center;  
  width: 100%; /* Full width within the container */  
  max-width: 600px; /* Optional: maximum width */  
  margin: 0 auto; /* Center the card */  
`;  

const SecondCard = styled.div`  
  border: none;  
  border-radius: 10px;  
  padding: 20px;  
  display: flex;  
  flex-direction: column; /* Stacked layout */  
  align-items: center;  
  justify-content: center;  
  width: 100%; /* Full width within the container */  
  max-width: 600px; /* Optional: maximum width */  
  margin: 0 auto; /* Center the card */  
`;  

const RowCard = styled.div`  
  display: flex;  
  flex-direction: row; /* Row by default */  
  gap: 20px;  
  margin-top: 45px;  

  @media (max-width: 768px) {  
    flex-direction: column; /* Column layout on small screens */  
    align-items: center; /* Center items in column layout */  
  }  
`;  

const ProfileImage = styled(motion.img)`  
  width: 100%;  
  max-width: 200px;  
  height: auto;  
  border-radius: 10%;  
  margin-bottom: 20px;  

  &:hover {  
    transform: scale(1.1);  
    transition: transform 0.3s ease; /* Smooth transition for hover */  
  }  
`;  

const WorkType = styled.p`  
  margin: 5px 0;  
  text-align: center;  
`;  

const Experience = styled.h3`  
  margin: 10px 0;  
  text-align: center;  
`;  

// Define the animation for the header  
const headerAnimation = {  
  initial: {  
    opacity: 0,  
    y: -50,  
  },  
  animate: {  
    opacity: 1,  
    y: 0,  
    transition: {  
      duration: 0.5,  
      type: "spring",  
      stiffness: 100,  
    },  
  },  
};  

const Header = () => {  
  const { language, translations } = useLanguage();  

  return (  
    <HeaderContainer {...headerAnimation}>  
      <LanguageSwitcher />  
      <ProfileCardsContainer>  
        <ProfileCard>  
          <ProfileImage src={Profile} alt="Oussama's Profile" />  
          <Name>{translations[language].name}</Name>  
          <WorkType>{translations[language].workType}</WorkType>  
          <SocialMediaLinks />  
        </ProfileCard>  
        <SecondCard>  
          <Description>  
            {translations[language].greeting}{" "}  
            <span style={{ color: "#8aa51d", fontSize: "44px" }}>  
              {translations[language].name}  
            </span>{" "}  
            , {translations[language].jobTitle} {/* Use translated job title */}  
          </Description>  
          <RowCard>  
            <Experience>  
              <span style={{ color: "#8aa51d", fontSize: "30px" }}>2 </span>  
              {translations[language].yearsOfExperience}  
            </Experience>  
            <ButtonCard href="mailto:oussamaazubi@gmail.com">  
              {translations[language].buttonContactMe}  
            </ButtonCard>  
          </RowCard>  
        </SecondCard>  
      </ProfileCardsContainer>  
    </HeaderContainer>  
  );  
};  

export default Header;