// import { useState, forwardRef } from "react";
// import styled from "styled-components";

// const ContactSection = styled.section`
//   max-width: 600px; /* Set a maximum width */
//   margin: 2rem auto; /* Center the section */
//   padding: 1rem;
//   background-color: rgba(44, 44, 44, 0.7); /* Transparent background */
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   color: white;

//   h2 {
//     text-align: center;
//     margin-bottom: 1.5rem;
//   }

//   @media (max-width: 768px) {
//     padding: 1rem;
//     margin: 2rem; /* Center the section */
//   }
// `;

// const InputField = styled.input`
//   width: 95%;
//   padding: 12px;
//   margin-bottom: 1rem;
//   border: none;
//   border-radius: 4px;
//   background-color: #3c3c3c; /* Input background color */
//   color: white;

//   &:focus {
//     outline: none;
//     background-color: #4c4c4c; /* Darker color on focus */
//     box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
//   }

//   &::placeholder {
//     color: #b0b0b0; /* Placeholder color */
//   }
// `;

// const TextArea = styled.textarea`
//   width: 95%;
//   padding: 12px;
//   margin-bottom: 1rem;
//   border: none;
//   border-radius: 4px;
//   background-color: #3c3c3c; /* Textarea background color */
//   color: white;
//   resize: none; /* Disable resizing */
//   min-height: 100px; /* Minimum height */

//   &:focus {
//     outline: none;
//     background-color: #4c4c4c; /* Darker color on focus */
//     box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
//   }

//   &::placeholder {
//     color: #b0b0b0; /* Placeholder color */
//   }
// `;

// const SubmitButton = styled.button`
//   position: relative; /* Allow positioning of the pseudo-element */
//   width: 100%;
//   padding: 12px;
//   border: none;
//   border-radius: 4px;
//   background-color: transparent; /* Transparent background */
//   color: white;
//   font-size: 16px;
//   cursor: pointer;
//   overflow: hidden; /* Hide overflow for pseudo-element */

//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: -100%; /* Start off-screen */
//     width: 100%;
//     height: 100%;
//     transition: left 0.3s ease; /* Animate the movement */
//   }
//   &:hover {
//     left: 0; /* Move into view */
//     color: white;
//     background-color: #60615bff; /* Green color */
//   }

//   &:active {
//     transform: scale(0.95); /* Scale down on click */
//   }
// `;

// // eslint-disable-next-line react/display-name
// const Contact = forwardRef((props, ref) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   return (
//     <ContactSection ref={ref}>
//       <h2>GET IN TOUCH</h2>
//       <form onSubmit={() => {}}>
//         <InputField
//           type="text"
//           placeholder="Your Name"
//           required
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <InputField
//           type="email"
//           placeholder="Your Email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <TextArea
//           placeholder="Your Message"
//           required
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         ></TextArea>
//         <SubmitButton type="submit">SEND A MESSAGE</SubmitButton>
//       </form>
//     </ContactSection>
//   );
// });

// export default Contact;

import { forwardRef, useState } from "react";
import styled from "styled-components";
import { useLanguage } from "../context/LanguageContext"; // Import useLanguage
import emailjs from "emailjs-com"; // Import EmailJS

// eslint-disable-next-line react/display-name
const Contact = forwardRef((_props, ref) => {
  const { language, translations } = useLanguage(); // Get current language and translations
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [snackbarVisible, setSnackbarVisible] = useState(false); // Snackbar visibility state
  const [snackbarVisible2, setSnackbarVisible2] = useState(false); // Snackbar visibility state

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      subject,
      message,
    };

    // Call EmailJS service here
    emailjs
      .send(
        "service_0z6fk87",
        "template_k1za8r8",
        templateParams,
        "mZISUaiJxK6EaO2z6"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSnackbarVisible(true); // Show snackbar
        // Reset the form fields
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");

        // Hide the snackbar after 3 seconds
        setTimeout(() => {
          setSnackbarVisible(false);
        }, 3000);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setSnackbarVisible2(true); // Show snackbar

        // Hide the snackbar after 3 seconds
        setTimeout(() => {
          setSnackbarVisible(false);
        }, 3000);
        alert("Failed to send your message, please try again later.");
      });
  };

  return (
    <Section ref={ref}>
      <ContentWrapper>
        <TextContent>
          <h2>{translations[language].contactHeading}</h2>
          <p>{translations[language].contactSubheading}</p>
          <p>{translations[language].contactDescription}</p>
          <SocialLinks>
            <a
              href="https://github.com/oussama3422"
              target="_blank"
              rel="noreferrer"
            >
              {translations[language].githubLink}
            </a>
            <a
              href="https://wa.me/+212659158079"
              target="_blank"
              rel="noreferrer"
            >
              {translations[language].whatsappLink}
            </a>
            <a
              href="https://www.linkedin.com/in/oussama-ghayghay-608907207/"
              target="_blank"
              rel="noreferrer"
            >
              {translations[language].linkedinLink}
            </a>
          </SocialLinks>
        </TextContent>

        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder={translations[language].placeholderName}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder={translations[language].placeholderEmail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder={translations[language].placeholderSubject}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <Textarea
            placeholder={translations[language].placeholderMessage}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button type="submit">
            {translations[language].buttonSendMessage}
          </Button>
          <Snackbar
            message="Email has been sent successfully!"
            visible={snackbarVisible}
          />
          <Snackbar
            message="Email has been not send , try other time."
            visible={snackbarVisible2}
          />
        </Form>
        {/* Snackbar for success message */}
      </ContentWrapper>
    </Section>
  );
});

// Styled Components
const Section = styled.section`
  background: transparent;
  color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  max-width: 800px;
  margin: auto;
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const TextContent = styled.div`
  flex: 1;
  margin-right: 20px;
  text-align: start;

  h2 {
    font-size: 2em;
    margin-bottom: 10px;
    color: #5c5b56;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }

  p:nth-of-type(1) {
    font-size: 4em;
    color: #ffffff;
    margin: 10px 0;
  }

  p:nth-of-type(2) {
    font-size: 1.1em;
    line-height: 1.5;
    margin: 10px 0;
  }
`;

const SocialLinks = styled.div`
  margin: 20px 0;

  a {
    font-size: 1em;
    color: #908f8d;
    text-decoration: none;
    transition: color 0.3s ease;
    margin: 0 10px;

    &:hover {
      color: #ffffff;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Input = styled.input`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-radius: 5px;
  border: 1px solid white;
  color:white;
  background-color: transparent;
`;

const Textarea = styled.textarea`
  width: 100%;
  margin: 10px 0;
  height: 150px;
  padding: 10px;
  border: none;
  border: 1px solid white;
  border-radius: 5px;
  background-color: transparent;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #8aa51d;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7b9413;
  }
`;

const SnackbarContainer = styled.div`
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  min-width: 250px;
  margin-left: auto;
  margin-right: auto;
  background-color: #4caf50; /* Green */
  color: white;
  text-align: center;
  border-radius: 5px;
  padding: 16px;
  position: fixed;
  z-index: 1000;
  right: 30px;
  bottom: 30px;
  transition: opacity 0.5s ease, visibility 0.5s ease;
  opacity: ${(props) => (props.visible ? 1 : 0)};

  &.fade-out {
    opacity: 0;
    transition: opacity 0.5s ease-in;
  }
`;

const Snackbar = ({ message, visible }) => {
  return <SnackbarContainer visible={visible}>{message}</SnackbarContainer>;
};

export default Contact;
