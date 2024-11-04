import { createContext, useContext, useEffect, useState } from "react";  
import translations from "../assets/data/translation"; // Ensure the path is correct  

const LanguageContext = createContext();  

function LanguageProvider({ children }) {  
  // Check localStorage for saved language preference  
  const savedLanguage = localStorage.getItem("language") || "en";  
  const [language, setLanguage] = useState(savedLanguage);  

  useEffect(() => {  
    // Save the current language to localStorage whenever it changes  
    localStorage.setItem("language", language);  
  }, [language]);  

  const switchLanguage = (lang) => {  
    setLanguage(lang);  
  };  

  return (  
    <LanguageContext.Provider  
      value={{ language, switchLanguage, translations }}  
    >  
      {children}  
    </LanguageContext.Provider>  
  );  
}  

function useLanguage() {  
  const context = useContext(LanguageContext);  
  if (context === undefined) {  
    throw new Error("useLanguage must be used within a LanguageProvider");  
  }  
  return context;  
}  

export { LanguageProvider, useLanguage };