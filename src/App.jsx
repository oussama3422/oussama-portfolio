import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import Loading from "./components/Loading";
import OptimizedMouseFollower from "./ui/MouseMotion";
import ContactButton from "./ui/ContactButton";
import AppLayout from "./components/AppLayout";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Portfolio = lazy(() => import("./components/Portfolio"));
const ProjectDetail = lazy(() => import("./components/ProjectDetail"));
const Services = lazy(() => import("./components/Services"));
const ContactSection = lazy(() => import("./components/Contact"));
const PortfolioTitle = lazy(() => import("./ui/PortfolioTitle"));

const App = () => {
  const contactRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <LanguageProvider>
      <AppLayout>
        <OptimizedMouseFollower />
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Suspense fallback={<Loading />}>
                  <Services />
                  <PortfolioTitle />
                  <Portfolio />
                  <ContactSection ref={contactRef} />
                </Suspense>
              </>
            }
          />
          <Route
            path="/project/:name"
            element={
              <Suspense fallback={<Loading />}>
                <ProjectDetail />
              </Suspense>
            }
          />
        </Routes>
        {location.pathname === "/" && (
          <ContactButton onClick={() => contactRef.current.scrollIntoView({ behavior: "smooth" })} />
        )}
        <Footer />
      </AppLayout>
    </LanguageProvider>
  );
};

export default App;
