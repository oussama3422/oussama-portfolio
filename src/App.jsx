import { Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header"; // Add your header component
import Footer from "./components/Footer"; // Add your footer component
import AppLayout from "./components/AppLayout"; // Optional layout wrapper
import ProjectDetail from "./components/ProjectDetail";
import Services from "./components/Services";
import PortfolioTitle from "./ui/PortfolioTitle";
import ContactButton from "./ui/ContactButton";
import Contact from "./components/Contact";
import { useEffect, useRef, useState } from "react";
import Loading from "./components/Loading";
const App = () => {
  const contactRef = useRef(null); // Create a ref for the Contact section
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    // Simulate loading time with a timeout
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (loading) {
    return <Loading />; // Render the loading component while loading
  }

  return (
    <AppLayout>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Services />
              <PortfolioTitle />
              <Portfolio />
              <Contact ref={contactRef} />
            </>
          }
        />
        <Route path="/project/:name" element={<ProjectDetail />} />
      </Routes>
      <ContactButton
        onClick={() =>
          contactRef.current.scrollIntoView({ behavior: "smooth" })
        }
      />
      <Footer />
    </AppLayout>
  );
};

export default App;
