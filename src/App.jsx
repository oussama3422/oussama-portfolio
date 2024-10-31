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
import { useRef } from "react";

const App = () => {
  const contactRef = useRef(null); // Create a ref for the Contact section

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
