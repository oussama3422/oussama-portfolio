import { useParams } from "react-router-dom";
import styled from "styled-components";
import Logo from "../ui/Logo";
import { HiCodeBracket } from "react-icons/hi2";
import {
  IoGlobeOutline,
  IoListOutline,
  IoReturnDownForward,
} from "react-icons/io5";
import { projects } from "../assets/data/projects";
import { motion } from "framer-motion";
import Loading from "./Loading";
import { useEffect, useState } from "react";

const ProjectDetail = () => {
  const [loading, setLoading] = useState(true); // State to manage loading
  const { name } = useParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />; // Render the loading component while loading
  }
  const project = projects.find(
    (proj) => proj.name === decodeURIComponent(name)
  );

  if (!project) {
    return <Container>Project not found.</Container>;
  }

  const {
    description,
    categories,
    githubLink,
    websiteLink,
    image,
    images,
    toolsAndTechnologies,
  } = project;

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <ProjectImage src={image} alt={decodeURIComponent(name)} />
      <ContentContainer>
        <TextContainer>
          <H1>{decodeURIComponent(name)}</H1>
          <Description>{description}</Description>
          <ToolsContainer>
            <DetailTitle>Tools & Technologies:</DetailTitle>
            <ToolsList>
              {toolsAndTechnologies.map((tool, index) => (
                <ToolItem key={index}>
                  <IoReturnDownForward style={{ margin: "7px" }} />
                  {tool}
                </ToolItem>
              ))}
            </ToolsList>
          </ToolsContainer>
        </TextContainer>

        <DetailsContainer>
          <DetailItem>
            <Icon>
              <IoListOutline />
            </Icon>
            <DetailContent>
              <DetailTitle>Categories:</DetailTitle>
              <DetailText>{categories}</DetailText>
            </DetailContent>
          </DetailItem>
          <DetailItem>
            <Icon>
              <HiCodeBracket />
            </Icon>
            <DetailContent>
              <DetailTitle>Source Code:</DetailTitle>
              <DetailText>
                {githubLink !== null ? (
                  <GitHubLink
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </GitHubLink>
                ) : (
                  "Private Project"
                )}
              </DetailText>
            </DetailContent>
          </DetailItem>
          <DetailItem>
            <Icon>
              <IoGlobeOutline />
            </Icon>
            <DetailContent>
              <DetailTitle>Website:</DetailTitle>
              <DetailText>
                {websiteLink ? (
                  <SiteLink
                    href={websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {websiteLink}
                  </SiteLink>
                ) : (
                  "Private Project"
                )}
              </DetailText>
            </DetailContent>
          </DetailItem>
        </DetailsContainer>
      </ContentContainer>
      {images && (
        <ImagesContainer>
          {images.map((img, index) => (
            <ImageItem
              as={motion.img}
              key={index}
              src={img}
              alt={`Project image ${index + 1}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Delay for staggered effect
            />
          ))}
        </ImagesContainer>
      )}
    </Container>
  );
};

// Styled Components
const H1 = styled.h1`
  color: white;
  font-size: 30px;
  font-weight: 500;
  line-height: 1.2;
`;

const Description = styled.p`
  color: white;
  margin: 10px 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const LogoContainer = styled.div`
  margin-bottom: 20px;
`;

const ProjectImage = styled.img`
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  & > div {
    flex: 1;
    margin: 0 10px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column; /* Stack title and description vertically */
  margin-right: 20px; /* Space between text and details */
  text-align: left; /* Left-align text */
  flex: 1; /* Allow to take available space */
`;
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column; /* Stack detail items vertically */
  background-color: #1d1d1d; /* Dark background */
  border: 1px solid #6f7376; /* Border */
  padding: 10px; /* Inner padding */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow */
  border-radius: 8px; /* Rounded corners */
  margin-top: 15px; /* Space above the details container */
`;

const DetailItem = styled.div`
  display: flex;
  align-items: start;
  margin: 10px 0;
  padding: 10px;
  border-radius: 4px;
  background-color: #1d1d1d;
`;

const Icon = styled.div`
  margin-right: 10px; /* Space between icon and text */
  color: #ffffff; /* White color for icons */
`;

const DetailContent = styled.div`
  display: flex;
  flex-direction: column; /* Stack title and text vertically */
`;

const DetailTitle = styled.span`
  font-weight: bold; /* Bold for titles */
  color: #ffffff; /* White color for the titles */
  font-size: 1rem;
`;

const DetailText = styled.span`
  color: white; /* Text color */
  margin-top: 5px; /* Space between title and text */
`;

const GitHubLink = styled.a`
  color: #6f7376;
  text-decoration: none;
`;

const SiteLink = styled.a`
  color: #6f7376;
  text-decoration: none;
`;

// Tools container
const ToolsContainer = styled.div`
  margin-top: 15px;
`;

const ToolsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ToolItem = styled.li`
  color: white;
  margin: 10px;
  display: flex;
  align-items: center;
`;

// New Image Containers
const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to the next line */
  justify-content: center; /* Center images horizontally */
  margin-top: 30px;
  width: 100%; /* Full width container */
`;

const ImageItem = styled.img`
  width: 100%; /* Responsive width */
  max-width: 30rem; /* Max width for each image */
  margin: 10px; /* Space between images */
  border-radius: 5px; /* Optional: rounded corners for images */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Optional: shadow effect */
`;

export default ProjectDetail;
