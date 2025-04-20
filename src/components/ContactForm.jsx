import React, { useRef } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import styled from "styled-components";
import { BsEnvelopeArrowUp } from "react-icons/bs";

const StyledFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1em;
  height: 100vh;

  form {
    width: 100%;
    max-width: 565px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5em;
    margin-top: 0.5em;
  }
  input {
    height: 55px;
    outline: none;
    padding: 0.5em;
    font-family: "Lato", sans-serif;
    border-radius: 5px;
    border-style: none;
  }
  textarea {
    outline: none;
    padding: 0.5em;
    font-family: "Lato", sans-serif;
    border-radius: 5px;
    border-style: none;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.2rem;
    font-family: "DomaineDispNar-Medium", sans-serif;
  }

  @media (max-width: 356px) {
    p {
      font-size: 0.925rem;
    }
  }
`;

const StyledButton = styled.button`
  padding: 0.5em 0.7em;
  margin: 5px;
  text-decoration: none;
  font-family: Arial, sans-serif;
  font-weight: 500;
  color: white;
  background-color: #182a3d;
  border: 1px solid white;

  border-radius: 5px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  text-align: center;

  &:hover {
    background-color: #5000ca;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out;
  }
`;

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n4orona",
        "template_qsgw97h",
        form.current,
        "KQk17CbURwclX4vd7"
      )
      .then(
        (result) => {
          console.log("Message sent successfully!", result.text);
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending message:", error.text);
          toast.error("Failed to send the message. Please try again later.");
        }
      );

    e.target.reset();
  };

  return (
    <StyledFormContainer>
      <form ref={form} onSubmit={sendEmail}>
        <StyledHeader>
          <h1>Contact Me</h1>
          <p>
            I am seeking for an opportunity as a Jr. Front-end Web Developer to
            apply my skills to real world projects and learn more technologies.
            If you are interested, feel free to send me an email. My inbox is
            always open.
          </p>
        </StyledHeader>
        <div>
          <label htmlFor="name"></label>
          <input type="text" name="name" required placeholder="Your name *" />
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email/Phone *"
          />

          <label htmlFor="message"></label>
          <textarea
            name="message"
            rows="10"
            cols="55"
            required
            placeholder="Message *"
          ></textarea>
          <StyledButton type="submit">
            Send Message
            <span>
              <BsEnvelopeArrowUp />
            </span>
          </StyledButton>
        </div>
      </form>
    </StyledFormContainer>
  );
};

export default ContactForm;
