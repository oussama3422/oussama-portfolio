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

// eslint-disable-next-line react/display-name
const Contact = forwardRef((_props, ref) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Section ref={ref}>
      <ContentWrapper>
        <TextContent>
          <h2>Get In Touch</h2>
          <p>Let us make your brand brilliant!</p>
          <p>
            If you would like to work with me or just want to get in touch, we’d
            love to hear from you!
          </p>

          <SocialLinks>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </SocialLinks>
        </TextContent>

        <Form onClick={() => {}}>
          <Input type="text" placeholder="Name" value={name} required />
          <Input type="email" placeholder="Email" value={email} required />
          <Input type="text" placeholder="Subject" value={subject} required />
          <Textarea placeholder="Message" required value={message} />
          <Button type="submit">Send A Message</Button>
        </Form>
      </ContentWrapper>
    </Section>
  );
});

// Styled Components
const Section = styled.section`
  background: transparent; /* Fully transparent background */
  color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  max-width: 800px;
  margin: auto;
  text-align: center; /* Centering text initially */
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Default to column layout */
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row; /* Row layout on larger screens */
    justify-content: space-between;
  }
`;

const TextContent = styled.div`
  flex: 1;
  margin-right: 20px; /* Space between text and form */

  /* Enhanced text styles */
  h2 {
    font-size: 2em;
    margin-bottom: 10px;
    color: #5c5b56; /* Golden color for the heading */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Subtle text shadow */
  }

  p {
    font-size: 1.1em;
    line-height: 1.5;
    margin: 10px 0;
  }

  a {
    font-size: 1em;
    color: #908f8d; /* Golden color for links */
    text-decoration: none;
    transition: color 0.3s ease;
    margin:0px 10px;
    &:hover {
      color: #ffffff; /* Change color on hover */
    }
  }
`;

const SocialLinks = styled.div`
  margin: 20px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1; /* Allow form to fill available space */
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: rgba(
    255,
    255,
    255,
    0.8
  ); /* Slightly opaque background for inputs */
`;

const Textarea = styled.textarea`
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: rgba(
    255,
    255,
    255,
    0.8
  ); /* Slightly opaque background for textarea */
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
    background-color: #7b9413; /* Slightly darker on hover */
  }
`;

export default Contact;
