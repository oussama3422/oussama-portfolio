import styled from "styled-components";  
import { Link } from "react-router-dom";   
import { projects } from "../assets/data/projects";   
import MouseFollower from "../ui/MouseMotion";   

const Portfolio = () => {  
  return (  
    <ProjectContainer>  
      {projects.map((project, index) => (  
        <ProjectCard  
          key={index}  
          projectName={project.name}  
          projectImage={project.image}  
          categories={project.categories}  
        />  
      ))}  
      <MouseFollower />  
    </ProjectContainer>  
  );  
};  

const ProjectContainer = styled.div`  
  display: flex;  
  flex-wrap: wrap;  
  justify-content: flex-start;  
  text-align: start;  
  max-width: 1200px;  
  margin: 0 auto;  
`;  

const ProjectCard = ({ projectName, projectImage, categories }) => {  
  return (  
    <CardContainer>  
      <Link to={`/project/${encodeURIComponent(projectName)}`} style={{ textDecoration: "none" }}>  
        <ProjectImage src={projectImage} alt={projectName} loading="lazy" />  
        <TechName>{categories.join(", ")}</TechName>  
        <ProjectName>{projectName}</ProjectName>  
      </Link>  
    </CardContainer>  
  );  
};  

const CardContainer = styled.div`  
  flex: 1 0 45%;  
  margin: 10px;  
  border-radius: 10px;  
  overflow: hidden;  

  &:hover {  
    transform: scale(1.03);  
  }  
`;  

const ProjectImage = styled.img`  
  width: 100%;  
  height: 300px;  
  object-fit: cover;  
  transition: opacity 0.3s;  

  ${CardContainer}:hover & {  
    opacity: 0.7;  
  }  
`;  

const TechName = styled.h3`  
  border: 1px solid grey;  
  margin: 10px;  
  font-size: 17px;  
  color: #ffffff;  
  padding: 5px 15px;  
  border-radius: 10rem;  
  background: transparent;  
  transition: background-color 0.3s;  

  ${CardContainer}:hover & {  
    background-color: #8aa51d;  
    color: black;  
  }  
`;  

const ProjectName = styled.p`  
  margin: 0 10px;  
  font-size: 16px;  
  color: #ffffff;  
`;  

export default Portfolio;