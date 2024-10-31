import styled from "styled-components";
import Profile from '../assets/images/profile.png';



// Styled components
const Container = styled.div`
  display: flex; /* Align items in a row */
  align-items: center; /* Center vertically */
  padding: 20px; /* Add some padding */
`;

const LeftColumn = styled.div`
  flex: 1; /* Take up all available space */
  padding-right: 20px; /* Space between text and image */
`;

const RightColumn = styled.div`
  display: flex; /* Use flex to center image */
  justify-content: center; /* Center image horizontally */
`;

const CircleContainer = styled.div`
  width: 300px; /* Set width */
  height: 300px; /* Set height */
  border-radius: 10%; /* Make it circular */
  overflow: hidden; /* Hide overflow */
  border: 2px solid #ccc; /* Optional: border around the circle */
  display: flex; /* Use flex to center the image */
  align-items: center; /* Center the image vertically */
  justify-content: center; /* Center the image horizontally */
`;

const ProfileImage = styled.img`
  width: 50%; /* Let the image take the full width of the container */
  object-fit: contain; /* Ensure the entire image is visible without cropping */
`;

const Title = styled.h2`
  margin: 0; /* Remove default margin */
`;

const Description = styled.p`
  margin: 10px 0; /* Add space above and below */
`;

const DownloadButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  color: white; /* Text color */
  background-color: orange; /* Button background color */
  text-decoration: none; /* No underline */
  border-radius: 5px; /* Rounded corners */
  transition: background-color 0.3s; /* Add transition for hover effect */

  &:hover {
    background-color: darkorange; /* Darker orange on hover */
  }
`;

const ProfileSection = () => {
  return (
    <Container>
      <LeftColumn>
        <Title>Hi, I'm Oussama Rhayrhay,</Title>
        <Title>Software Developer</Title>
        <Description>
          I'm a software developer with a passion for building web applications
          and exploring new technologies.
        </Description>
        <DownloadButton href="" download>
          Download Resume
        </DownloadButton>
      </LeftColumn>
      <RightColumn>
        {/* <CircleContainer> */}
        <ProfileImage src={Profile} alt="Profile" />
        {/* </CircleContainer> */}
      </RightColumn>
    </Container>
  );
};

export default ProfileSection;
