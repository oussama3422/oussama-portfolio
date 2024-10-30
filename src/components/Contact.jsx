import { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com"; // Import EmailJS

const ContactSection = styled.section`
  max-width: 600px; /* Set a maximum width */
  margin: 2rem auto; /* Center the section */
  padding: 1rem;
  background-color: rgba(44, 44, 44, 0.7); /* Transparent background */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: white;

  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 2rem; /* Center the section */
  }
`;

const InputField = styled.input`
  width: 95%;
  padding: 12px;
  margin-bottom: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #3c3c3c; /* Input background color */
  color: white;

  &:focus {
    outline: none;
    background-color: #4c4c4c; /* Darker color on focus */
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }

  &::placeholder {
    color: #b0b0b0; /* Placeholder color */
  }
`;

const TextArea = styled.textarea`
  width: 95%;
  padding: 12px;
  margin-bottom: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #3c3c3c; /* Textarea background color */
  color: white;
  resize: none; /* Disable resizing */
  min-height: 100px; /* Minimum height */

  &:focus {
    outline: none;
    background-color: #4c4c4c; /* Darker color on focus */
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }

  &::placeholder {
    color: #b0b0b0; /* Placeholder color */
  }
`;

const SubmitButton = styled.button`
  position: relative; /* Allow positioning of the pseudo-element */
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: transparent; /* Transparent background */
  color: white;
  font-size: 16px;
  cursor: pointer;
  overflow: hidden; /* Hide overflow for pseudo-element */

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%; /* Start off-screen */
    width: 100%;
    height: 100%;
    transition: left 0.3s ease; /* Animate the movement */
  }
  &:hover {
    left: 0; /* Move into view */
    color: white;
    background-color: #60615bff; /* Green color */
  }

  &:active {
    transform: scale(0.95); /* Scale down on click */
  }
`;

// Your existing styled components go here...

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_3bmhk7k",
        "template_8kyfqb6",
        templateParams,
        "FyedPO93ROAPn1m2Q"
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          setStatus("Message sent successfully!");
        },
        (error) => {
          console.error("Failed to send email:", error);
          setStatus("Failed to send message.");
        }
      );
  };

  return (
    <ContactSection>
      <h2>GET IN TOUCH</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="Your Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputField
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextArea
          placeholder="Your Message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></TextArea>
        <SubmitButton type="submit">SEND A MESSAGE</SubmitButton>
      </form>
      {status && <p>{status}</p>}
    </ContactSection>
  );
};

export default Contact;
