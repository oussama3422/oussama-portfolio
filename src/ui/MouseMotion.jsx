// // src/components/MouseFollower.js
// import  { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const MouseFollower = () => {
//   const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       setMousePosition({ x: event.clientX, y: event.clientY });
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   // Function to handle click on the follower
//   const handleFollowerClick = () => {
//     window.location.href = "https://www.example.com"; // Replace with your target URL
//   };

//   return (
//     <motion.div
//       onClick={handleFollowerClick} // Add click handler
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "10px",  // Adjusted size
//         height: "10px", // Adjusted size
//         borderRadius: "50%",
//         backgroundColor: "rgba(255, 255, 255, 0.7)", // White color
//         pointerEvents: "auto", // Allows click events
//         // Position directly under the mouse
//         transform: `translate(${mousePosition.x - 5}px, ${mousePosition.y + 10}px)`, // Center on x and position below on y
//       }}
//       initial={{
//         x: mousePosition.x,
//         y: mousePosition.y,
//       }}
//       animate={{
//         x: mousePosition.x - 5, // Center horizontally
//         y: mousePosition.y + 10, // Position below the cursor
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 500, // Increased stiffness for quicker response
//         damping: 10, // Decreased damping for more responsiveness
//       }}
//     />
//   );
// };

// export default MouseFollower;

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const MouseFollower = ({ isHovering }) => {  // Accept the isHovering prop
//   const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       setMousePosition({ x: event.clientX, y: event.clientY });
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   const handleFollowerClick = () => {
//     window.location.href = "https://www.example.com"; // Replace with your target URL
//   };

//   return (
//     <motion.div
//       onClick={handleFollowerClick}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: isHovering ? "40px" : "10px",  // Change size based on hover state
//         height: isHovering ? "40px" : "10px", // Change size based on hover state
//         borderRadius: "50%",
//         backgroundColor: "rgba(255, 255, 255, 0.7)",
//         pointerEvents: "auto",
//         transform: `translate(${mousePosition.x - (isHovering ? 10 : 5)}px, ${mousePosition.y + (isHovering ? 10 : 10)}px)`, // Center on x and position below on y
//       }}
//       initial={{
//         x: mousePosition.x,
//         y: mousePosition.y,
//       }}
//       animate={{
//         x: mousePosition.x - (isHovering ? 10 : 5), // Center horizontally with dynamic size
//         y: mousePosition.y + (isHovering ? 10 : 10), // Position below the cursor
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 500,
//         damping: 10,
//       }}
//     />
//   );
// };

// export default MouseFollower;
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MouseFollower = ({ isHovering }) => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (event) => {
      const updatePosition = () => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      };
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleFollowerClick = () => {
    window.location.href = "https://www.example.com"; // Replace with your target URL
  };

  return (
    <motion.div
      onClick={handleFollowerClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: isHovering ? "40px" : "10px",
        height: isHovering ? "40px" : "10px",
        borderRadius: "50%",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        pointerEvents: "auto",
        transform: `translate(${mousePosition.x - (isHovering ? 10 : 5)}px, ${
          mousePosition.y + (isHovering ? 10 : 10)
        }px)`,
      }}
      initial={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      animate={{
        x: mousePosition.x - (isHovering ? 10 : 5),
        y: mousePosition.y + (isHovering ? 10 : 10),
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 10,
      }}
    />
  );
};

export default MouseFollower;
