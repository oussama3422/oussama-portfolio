import styled from "styled-components";
import SocialMediaLinks from "../ui/SocialMediaIcons";
import AppBar from "../ui/TopBar";
import { Description } from "../ui/Globals";
import Profile from '../assets/images/profile.png'
const HeaderContainer = styled.header`
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
  color: #8aa51d; /* Set the name color here */
`;

const ButtonCard = styled.a`
  border: 2px solid white; /* Add a border with your desired color */
  background-color: transparent; /* Transparent background */
  color: white; /* Button text color */
  padding: 10px 20px; /* Padding for button */
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  justify-content: center;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease; /* Smooth transition for hover */
  min-height: 40px; /* Set minimum height for uniformity */
  box-shadow: 0 2px 5px rgba(255, 255, 255, 0.3); /* Soft shadow for depth */
  &:hover {
    background-color: white; /* Change the background on hover */
    color: black; /* Change text color to black on hover */
    transform: scale(1.05); /* Slightly enlarge the button on hover */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Deeper shadow on hover */
  }
`;

const ProfileCard = styled.div`
  border: none; /* Remove border from this specific profile card */
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
  border: none; /* Remove border from this specific profile card */
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

const ProfileImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  border-radius: 10%;
  border: none;
  margin-bottom: 20px;
`;

const WorkType = styled.p`
  margin: 5px 0;
  text-align: center;
`;

const Experience = styled.h3`
  margin: 10px 0;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <AppBar />
      <ProfileCardsContainer>
        <ProfileCard>
          <ProfileImage src={Profile} alt="Oussama's Profile" />
          <Name>Oussama Rhayrhay</Name>
          <WorkType>AVAILABLE FOR WORK</WorkType>
          <SocialMediaLinks />
        </ProfileCard>
        <SecondCard>
          <Description>
            Hello, I’m{" "}
            <span style={{ color: "#8aa51d", fontSize: "44px" }}>
              Oussama Rhayrhay{" "}
            </span>
            , Full Stack Developer.
          </Description>
          <RowCard>
            <Experience>
              <span style={{ color: "#8aa51d", fontSize: "30px" }}>3 </span>
              Years of Experience
            </Experience>
            <ButtonCard href="mailto:hamza.hamani@example.com">
              CONTACT ME
            </ButtonCard>
          </RowCard>
        </SecondCard>
      </ProfileCardsContainer>
    </HeaderContainer>
  );
};

export default Header;
