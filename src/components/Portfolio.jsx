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
  display: flex;
  flex-wrap: wrap;
  justify-content: center; // Center the projects
  max-width: 1200px; // Optional: limit the maximum width of the container
  margin: 0 auto; // Center the container itself
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
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    border: 2px solid #8aa51d;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    flex: 1 0 100%; // Allow only one item per line on tablets and phones
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
  margin: 10px;
  font-size: 17px;
  color: #ffffff;
  border: 1px solid transparent;
  padding: 5px;
  width: 200px;
  font-weight: 300;
  transition: background-color 0.3s ease, color 0.3s ease;
  border-radius: 15px;

  ${CardContainer}:hover & {
    background-color: #8aa51d;
    color: black;
  }
`;

const ProjectName = styled.p`
  margin: 0 10px 10px;
  font-size: 16px;
  color: #ffffff;
  font-weight: 300;
`;

export default Portfolio;

// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import { projects } from "../assets/data/projects";
// import { motion } from "framer-motion"; // Import framer motion

// const Portfolio = () => {
//   return (
//     <ProjectContainer>
//       {projects.map((project, index) => (
//         <ProjectWrapper key={index}>
//           <ProjectCard
//             projectName={project.name}
//             projectImage={project.image}
//             categories={project.categories}
//             index={index} // Pass index for animation delay
//           />
//         </ProjectWrapper>
//       ))}
//     </ProjectContainer>
//   );
// };

// const ProjectContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center; // Center the projects
//   max-width: 1200px; // Optional: limit the maximum width of the container
//   margin: 0 auto; // Center the container itself
// `;

// const ProjectWrapper = styled.div`
//   flex: 1 0 45%; // Allow two items in the center
//   @media (max-width: 768px) {
//     flex: 1 0 100%; // Allow only one item per line on tablets and phones
//   }

//   // If the index indicates that it's the third item in a group of projects
//   &:nth-child(3n) {
//     /* For screens larger than defined breakpoint */
//     display: flex;
//     justify-content: center; // Center the item
//     flex-basis: 100%; // Make it span the full width
//   }
// `;

// const ProjectCard = ({ projectName, projectImage, categories, index }) => {
//   return (
//     <CardContainer
//       as={motion.div} // Convert CardContainer to a motion component
//       initial={{ opacity: 0, y: 20 }} // Start from hidden and slightly below
//       animate={{ opacity: 1, y: 0 }} // Animate to fully visible and in place
//       exit={{ opacity: 0, y: 20 }} // Exit animation
//       transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered effect
//     >
//       <Link
//         to={`/project/${encodeURIComponent(projectName)}`}
//         style={{ textDecoration: "none" }}
//       >
//         <ProjectImage src={projectImage} alt={projectName} loading="lazy" />
//         <TechName>{categories.join(', ')}</TechName>
//         <ProjectName>{projectName}</ProjectName>
//       </Link>
//     </CardContainer>
//   );
// };

// const CardContainer = styled(motion.div)`
//   border-radius: 10px;
//   overflow: hidden;
//   transition: transform 0.3s;
//   max-width: 400px; // Fixed size for the cards
//   margin: 10px; // Adjust margin for spacing

//   &:hover {
//     border: 2px solid #8aa51d;
//     transform: scale(1.05);
//   }

//   // Responsive design for small devices
//   @media (max-width: 768px) {
//     max-width: none; // Remove fixed size for better responsiveness
//   }
// `;

// const ProjectImage = styled.img`
//   width: 90%;
//   height: 300px;
//   object-fit: cover;
//   transition: opacity 0.3s ease;

//   ${CardContainer}:hover & {
//     opacity: 0.7;
//   }
// `;

// const TechName = styled.h3`
//   margin: 10px;
//   font-size: 17px;
//   color: #ffffff;
//   border: 1px solid transparent;
//   padding: 5px;
//   width: 200px;
//   font-weight: 300;
//   transition: background-color 0.3s ease, color 0.3s ease;
//   border-radius: 15px;

//   ${CardContainer}:hover & {
//     background-color: #8aa51d;
//     color: black;
//   }
// `;

// const ProjectName = styled.p`
//   margin: 0 10px 10px;
//   font-size: 16px;
//   color: #ffffff;
//   font-weight: 300;
// `;

// export default Portfolio;
