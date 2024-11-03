import styled from "styled-components";  
import { Link } from "react-router-dom";  
import { projects } from "../assets/data/projects";  

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
    </ProjectContainer>  
  );  
};  

const ProjectContainer = styled.div`  
  display: flex;            /* Use flexbox for layout */  
  flex-wrap: wrap;         /* Allow items to wrap */  
  justify-content: flex-start; /* Align items to the start */  
  text-align: start;  
  max-width: 1200px;  
  margin: 0 auto;  
`;  

const ProjectCard = ({ projectName, projectImage, categories }) => {  
  return (  
    <CardContainer>  
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
};  

const CardContainer = styled.div`  
  flex: 1 0 45%; // Allow two items in the center  
  border-radius: 10px;  
  overflow: hidden;  
  transition: transform 0.3s;  
  margin: 10px; // Add margin for spacing  

  @media (max-width: 768px) {  
    flex: 1 0 100%; // Allow only one item per line on tablets and phones  
  }  
`;  

const ProjectImage = styled.img`  
  width: 100%; // Fill the width of the parent container  
  height: 300px; // Fixed height for the image  
  object-fit: cover;  
  transition: opacity 0.3s ease;  

  ${CardContainer}:hover & {  
    opacity: 0.7; // Opacity change on hover  
  }  
`;  

const TechName = styled.h3`  
  border: 1px solid grey; /* Grey border when not hovered */  
  margin-top: 10px;  
  margin-bottom: 10px;  
  width: 180px; // Fixed width to maintain layout  
  margin-right: 10px;  
  font-size: 17px;  
  color: #ffffff; /* Keep text color white */  
  border-radius: 10rem; /* Circular shape */  
  padding: 5px 15px; /* Add padding for visual appeal */  
  font-weight: 300;  
  transition: background-color 0.3s ease, color 0.3s ease,  
    border-color 0.3s ease;  

  ${CardContainer}:hover & {  
    background-color: #8aa51d; /* Change background color on hover */  
    color: black; /* Change text color on hover */  
    border-color: transparent; /* Remove border color on hover */  
  }  
`;  

const ProjectName = styled.p`  
  margin: 0 10px 10px;  
  font-size: 16px;  
  color: #ffffff;  
  font-weight: 300;  
`;  

export default Portfolio;