import CustomCard from "../ui/Card";  
import { CardContainer } from "../ui/CardContainer";  
import Service from "../ui/Service";  
import FirstImg from '../assets/images/1.png'  
import SecondImg from '../assets/images/2.png'  
import { useLanguage } from "../context/LanguageContext"; // Import useLanguage  

const Services = () => {  
  const { language, translations } = useLanguage(); // Get current language and translations  

  return (  
    <>  
      <Service />  
      <CardContainer>  
        <CustomCard  
          imageSrc={FirstImg}  
          title={translations[language].services.webDevTitle} // Use translated title  
          description={translations[language].services.webDevDescription} // Use translated description  
        />  
        <CustomCard  
          imageSrc={SecondImg}  
          title={translations[language].services.uiuxTitle} // Use translated title  
          description={translations[language].services.uiuxDescription} // Use translated description  
        />  
      </CardContainer>  
    </>  
  );  
};  

export default Services;