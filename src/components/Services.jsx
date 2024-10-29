import CustomCard from "../ui/Card";
import { CardContainer } from "../ui/CardContainer";
import Service from "../ui/Service";
import FirstImg from '../assets/images/1.png'
import SecondImg from '../assets/images/2.png'
const Services = () => {
  return (
    <>
      <Service />
      <CardContainer>
        <CustomCard
          imageSrc={FirstImg}
          title="WEB DEVELOPMENT"
          description="Offering top-notch web development services tailored to your needs. Let's bring your digital vision to life."
        />
        <CustomCard
          imageSrc={SecondImg}
          title="UI / UX DESIGN"
          description="Crafting intuitive user interfaces and engaging experiences. Elevate your digital presence with our UI/UX design expertise."
        />
      </CardContainer>
    </>
  );
};

export default Services;
