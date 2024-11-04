import { Routes, Route, useLocation } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header"; // Add your header component
import Footer from "./components/Footer"; // Add your footer component
import AppLayout from "./components/AppLayout"; // Optional layout wrapper
import ProjectDetail from "./components/ProjectDetail";
import Services from "./components/Services";
import PortfolioTitle from "./ui/PortfolioTitle";
import ContactButton from "./ui/ContactButton";
import { useEffect, useRef, useState } from "react";
import Loading from "./components/Loading";
import MouseFollower from "./ui/MouseMotion";
import ContactSection from "./components/Contact";
import { LanguageProvider } from "./context/LanguageContext";
// import GlobalStyle from "./assets/GlobalStyle";
const App = () => {
  const contactRef = useRef(null); // Create a ref for the Contact section
  const [loading, setLoading] = useState(true); // State to manage loading
  const [color, setColor] = useState("#ffffff"); // Default loader color
  const location = useLocation(); // Get the current location  

  // Simulate loading duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Simulate loading finished after 3 seconds
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading color={color} loading={loading} />; // Render the loading component while loading
  }

  return (
    <LanguageProvider>
      <AppLayout>
        <MouseFollower />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Services />
                <PortfolioTitle />
                <Portfolio />
                <ContactSection ref={contactRef} />
              </>
            }
          />
          <Route path="/project/:name" element={<ProjectDetail />} />
        </Routes>
        {location.pathname === "/" && (  
          <ContactButton  
            onClick={() =>  
              contactRef.current.scrollIntoView({ behavior: "smooth" })  
            }  
          />  
        )}  

        <Footer />
      </AppLayout>
    </LanguageProvider>
  );
};

export default App;
