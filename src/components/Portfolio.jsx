import styled from "styled-components";
import { Link } from "react-router-dom";
import { projects } from "../assets/data/projects";
import { useState } from "react"; // Import useState for managing hover state
import MouseFollower from "../ui/MouseMotion"; // Import MouseFollower to use in Portfolio

function Portfolio() {
  const [isHovering, setIsHovering] = useState(false); // State to track if any ProjectCard is hovered over

  return (
    <ProjectContainer>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          projectName={project.name}
          projectImage={project.image}
          categories={project.categories}
          onMouseEnter={() => setIsHovering(true)} // Set hover state to true when mouse enters
          onMouseLeave={() => setIsHovering(false)} // Set hover state to false when mouse leaves
        />
      ))}
      <MouseFollower isHovering={isHovering} />{" "}
      {/* Pass the hovering state to MouseFollower */}
    </ProjectContainer>
  );
}

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  text-align: start;
  max-width: 1200px;
  margin: 0 auto;
`;

function ProjectCard({
  projectName,
  projectImage,
  categories,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <CardContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Link
        to={`/project/${encodeURIComponent(projectName)}`}
        style={{ textDecoration: "none" }}
      >
        <ProjectImage src={projectImage} alt={projectName} loading="lazy" />
        <TechName>{categories}</TechName>
        <ProjectName>{projectName}</ProjectName>
      </Link>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  flex: 1 0 45%;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s;
  margin: 10px;

  @media (max-width: 768px) {
    flex: 1 0 100%;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: opacity 0.3s ease;

  ${CardContainer}:hover & {
    opacity: 0.7;
  }
`;

const TechName = styled.h3`
  border: 1px solid grey;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 180px;
  margin-right: 10px;
  font-size: 17px;
  color: #ffffff;
  border-radius: 10rem;
  padding: 5px 15px;
  font-weight: 300;
  transition: background-color 0.3s ease, color 0.3s ease,
    border-color 0.3s ease;

  ${CardContainer}:hover & {
    background-color: #8aa51d;
    color: black;
    border-color: transparent;
  }
`;

const ProjectName = styled.p`
  margin: 0 10px 10px;
  font-size: 16px;
  color: #ffffff;
  font-weight: 300;
`;

export default Portfolio;
