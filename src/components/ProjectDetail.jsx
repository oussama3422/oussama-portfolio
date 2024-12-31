import { Link as RouterLink, useParams } from "react-router-dom";
import styled from "styled-components";
import Logo from "../ui/Logo";
import { HiCodeBracket } from "react-icons/hi2";
import {
  IoGlobeOutline,
  IoListOutline,
  IoReturnDownForward,
} from "react-icons/io5";
import { projects } from "../assets/data/projects";
// import { motion } from "framer-motion";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { FaChevronUp } from "react-icons/fa";

const ProjectDetail = () => {
  const [loading, setLoading] = useState(false); // State to manage loading
  const { name } = useParams();
  const { language, translations } = useLanguage(); // Get current language and translations
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300); // Show button after scrolling down 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return <Loading />;
  }

  const project = projects.find(
    (proj) => proj.name === decodeURIComponent(name)
  );

  if (!project) {
    return <Container>Project not found.</Container>;
  }

  const projectKey = project.name;

  // Get the translation for the current language
  const projectTranslation = translations[language]?.projects[projectKey];

  // Handle case where translation might not exist
  const description =
    projectTranslation?.description || "Description not available.";
  const categoriesTranslated =
    projectTranslation?.categories || "Category not specified.";
  const categoryTitle = translations[language]?.categoryTitle;
  const sourceCodeTitle = translations[language]?.sourceCodeTitle;
  const websiteTitle = translations[language]?.websiteTitle;
  const toolsAndTechnologiesTitle =
    translations[language]?.toolsAndTechnologiesTitle;

  const { githubLink, image, toolsAndTechnologies, images } = project;

  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <ProjectImage src={image} alt={decodeURIComponent(name)} />
      <ContentContainer>
        <TextContainer>
          <H1>{decodeURIComponent(name)}</H1>
          <Description>{description}</Description>
          <ToolsContainer>
            <DetailTitle>{toolsAndTechnologiesTitle}:</DetailTitle>
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
              <DetailTitle>{categoryTitle}</DetailTitle>
              <DetailText>{categoriesTranslated}</DetailText>
            </DetailContent>
          </DetailItem>
          <DetailItem>
            <Icon>
              <HiCodeBracket />
            </Icon>
            <DetailContent>
              <DetailTitle>{sourceCodeTitle}</DetailTitle>
              <DetailText>
                {githubLink ? (
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
              <DetailTitle>{websiteTitle}</DetailTitle>
              <DetailText>
                {project.websiteLink ? (
                  <SiteLink
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.websiteLink}
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
              key={index}
              src={img}
              alt={`Project image ${index + 1}`}
            />
          ))}
        </ImagesContainer>
      )}

      <BackToTopButton show={showBackToTop} onClick={scrollToTop}>
        <FaChevronUp />
      </BackToTopButton>
    </Container>
  );
};

const BackToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: grey;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s, color 0.3s;
  z-index: 1000;
  &:hover {
    opacity: 1;
    color: grey;
    background-color: white;
  }

  display: ${(props) =>
    props.show ? "block" : "none"}; /* Show or hide based on state */
  font-size: 24px; /* Size of the icon */
`;

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
  flex-direction: column;
  margin-right: 20px;
  text-align: left;
  flex: 1;
`;
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1d1d1d;
  border: 1px solid #6f7376;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-top: 15px;
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
  margin-right: 10px;
  color: #ffffff;
`;

const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailTitle = styled.span`
  font-weight: bold;
  color: #ffffff;
  font-size: 1rem;
`;

const DetailText = styled.span`
  color: white;
  margin-top: 5px;
`;
const GitHubLink = styled(RouterLink)`
  color: #6f7376;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
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
