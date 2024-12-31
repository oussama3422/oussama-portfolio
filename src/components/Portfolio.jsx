// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import { projects } from "../assets/data/projects";
// import OptimizedMouseFollower from "../ui/MouseMotion";
// import { useState } from "react";

// function Portfolio() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <ProjectContainer>
//       {projects.map((project, index) => (
//         <ProjectCard
//           key={index}
//           projectName={project.name}
//           projectImage={project.image}
//           categories={project.categories}
//           isHovered={hoveredIndex === index}
//           onMouseEnter={() => setHoveredIndex(index)}
//           onMouseLeave={() => setHoveredIndex(null)}
//         />
//       ))}
//       <OptimizedMouseFollower isHovering={hoveredIndex !== null} />
//     </ProjectContainer>
//   );
// }

// const ProjectContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: flex-start;
//   text-align: start;
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// function ProjectCard({
//   projectName,
//   projectImage,
//   categories,
//   onMouseEnter,
//   onMouseLeave,
//   isHovered,
// }) {
//   return (
//     <CardContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
//       <Link
//         to={`/project/${encodeURIComponent(projectName)}`}
//         style={{ textDecoration: "none" }}
//       >
//         <ProjectImage src={projectImage} alt={projectName} loading="lazy" isHovered={isHovered} />
//         <TechName isHovered={isHovered}>{categories}</TechName>
//         <ProjectName>{projectName}</ProjectName>
//       </Link>
//     </CardContainer>
//   );
// }

// const CardContainer = styled.div`
//   flex: 1 0 45%;
//   border-radius: 10px;
//   overflow: hidden;
//   transition: transform 0.3s;
//   margin: 10px;
//   cursor: pointer; // Helpful for indicating that it is interactive

//   @media (max-width: 768px) {
//     flex: 1 0 100%;
//   }
// `;

// const ProjectImage = styled.img`
//   width: 90%;
//   height: 300px;
//   object-fit: cover;
//   transition: opacity 0.3s ease;
//   opacity: ${(props) => (props.isHovered ? 0.7 : 1)};
// `;

// const TechName = styled.h3`
//   border: 1px solid grey;
//   margin-top: 10px;
//   margin-bottom: 10px;
//   width: 180px;
//   margin-right: 10px;
//   font-size: 17px;
//   color: #ffffff;
//   border-radius: 10rem;
//   padding: 5px 15px;
//   font-weight: 300;
//   transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
//   background-color: ${(props) => (props.isHovered ? '#8aa51d' : 'transparent')};
//   color: ${(props) => (props.isHovered ? 'black' : '#ffffff')};
//   border-color: ${(props) => (props.isHovered ? 'transparent' : 'grey')};
// `;

// const ProjectName = styled.p`
//   margin: 0 10px 10px;
//   font-size: 16px;
//   color: #ffffff;
//   font-weight: 300;
// `;

// export default Portfolio;

import styled from "styled-components";
import { Link } from "react-router-dom";
import { projects } from "../assets/data/projects";
import OptimizedMouseFollower from "../ui/MouseMotion";

function Portfolio() {
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
      <OptimizedMouseFollower isHovering={false} />
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

function ProjectCard({ projectName, projectImage, categories }) {
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
}

const CardContainer = styled.div`
  flex: 1 0 45%;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
  cursor: pointer; // Helpful for indicating that it is interactive
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.03); // Subtle scale effect on hover
  }
`;

const ProjectImage = styled.img`
  width: 90%;
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
