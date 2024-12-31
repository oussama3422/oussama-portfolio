// // src/components/OptimizedMouseFollower.js
// import  { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const OptimizedMouseFollower = () => {
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

// export default OptimizedMouseFollower;

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const OptimizedMouseFollower = ({ isHovering }) => {  // Accept the isHovering prop
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

// export default OptimizedMouseFollower;
// import { useEffect, useRef } from "react";

// const OptimizedMouseFollower = ({ isHovering }) => {
//   const followerRef = useRef(null);
//   const position = useRef({ x: -100, y: -100 }); // Initial off-screen position

//   useEffect(() => {
//     const follower = followerRef.current;
//     let animationFrameId = null;

//     const handleMouseMove = ({ clientX, clientY }) => {
//       // Avoid recalculations if movement is minimal
//       if (
//         Math.abs(clientX - position.current.x) < 2 &&
//         Math.abs(clientY - position.current.y) < 2
//       ) {
//         return;
//       }

//       position.current = { x: clientX, y: clientY };

//       // Use requestAnimationFrame for smooth updates
//       if (!animationFrameId) {
//         animationFrameId = requestAnimationFrame(() => {
//           follower.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;

//           animationFrameId = null;
//         });
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       if (animationFrameId) cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <div
//       ref={followerRef}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         pointerEvents: "none",
//         borderRadius: "50%",
//         backgroundColor: "rgba(255, 255, 255, 0.7)",
//         width: isHovering ? "40px" : "10px",
//         height: isHovering ? "40px" : "10px",
//         transform: "translate(-100px, -100px)", // Initial off-screen position
//         transition: "width 0.2s ease, height 0.2s ease", // GPU-accelerated transitions
//         willChange: "transform", // Optimize GPU usage
//       }}
//     />
//   );
// };

// export default OptimizedMouseFollower;

// import { useEffect, useRef } from "react";

// const MouseFollowerOptimized = ({ isHovering }) => {
//   const followerRef = useRef(null);
//   const position = useRef({ x: -100, y: -100 }); // Initial off-screen position
//   let lastUpdateTime = useRef(0);

//   useEffect(() => {
//     const follower = followerRef.current;
//     let animationFrameId = null;

//     const handleMouseMove = ({ clientX, clientY }) => {
//       const now = performance.now();

//       // Process at 60 FPS (~16ms intervals)
//       if (now - lastUpdateTime.current < 16) return;
//       lastUpdateTime.current = now;

//       position.current = { x: clientX, y: clientY };

//       // Optimize updates via requestAnimationFrame
//       if (!animationFrameId) {
//         animationFrameId = requestAnimationFrame(() => {
//           follower.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;
//           animationFrameId = null;
//         });
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       if (animationFrameId) cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <div
//       ref={followerRef}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         pointerEvents: "none",
//         borderRadius: "50%",
//         backgroundColor: "rgba(255, 255, 255, 0.7)",
//         width: isHovering ? "40px" : "10px",
//         height: isHovering ? "40px" : "10px",
//         transform: "translate(-100px, -100px)", // Initial off-screen position
//         transition: "width 0.2s ease, height 0.2s ease", // GPU-accelerated transitions
//         willChange: "transform", // Optimize GPU usage
//       }}
//     />
//   );
// };

// export default MouseFollowerOptimized;
import { useEffect, useRef } from "react";

const MouseFollowerOptimized = ({ isHovering }) => {
  const followerRef = useRef(null);
  const position = useRef({ x: -100, y: -100 });
  let lastUpdateTime = useRef(0);

  useEffect(() => {
    const follower = followerRef.current;
    let animationFrameId = null;

    const handleMouseMove = ({ clientX, clientY }) => {
      const now = performance.now();

      // Throttle updates to ~60 FPS (16ms intervals)
      if (now - lastUpdateTime.current < 16) return;
      lastUpdateTime.current = now;

      position.current = { x: clientX, y: clientY };

      // Optimize updates using requestAnimationFrame
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(() => {
          follower.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;
          animationFrameId = null;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        borderRadius: "50%",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        width: isHovering ? "40px" : "10px",
        height: isHovering ? "40px" : "10px",
        transform: "translate(-100px, -100px)",
        transition: "transform 0.1s ease-in-out", // Minimize transition duration
        willChange: "transform", // Leverage GPU optimization
      }}
    />
  );
};

export default MouseFollowerOptimized;
