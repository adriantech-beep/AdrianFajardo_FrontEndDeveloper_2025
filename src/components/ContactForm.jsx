import { forwardRef, useRef } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import styled from "styled-components";
import { BsEnvelopeArrowUp } from "react-icons/bs";
import { useRevealSection } from "../hooks/useRevealSection";
import { ContactFormSection } from "./StyledSection";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    font-family: "DomaineDispNar-Medium", sans-serif;
    line-height: 1.5;
  }

  @media (max-width: 356px) {
    p {
      font-size: 0.925rem;
    }
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  width: 100%;
`;

const StyledInput = styled.input`
  padding: 0.8em;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const StyledTextarea = styled.textarea`
  padding: 0.8em;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
`;

const StyledButton = styled.button`
  padding: 0.8em 1.2rem;
  font-weight: 500;
  color: white;
  background-color: #182a3d;
  border: 1px solid white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5000ca;
  }
`;

const ContactForm = forwardRef((props, ref) => {
  const { ref: revealRef, isVisible } = useRevealSection();
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
          toast.success("Message sent successfully! Thank You 😊");
        },
        (error) => {
          console.error("Error sending message:", error.text);
          toast.error("Failed to send the message. Please try again later.");
        }
      );

    e.target.reset();
  };

  return (
    <ContactFormSection
      ref={(element) => {
        if (ref) ref.current = element;
        revealRef.current = element;
      }}
      isVisible={isVisible}
    >
      <StyledForm ref={form} onSubmit={sendEmail}>
        <StyledHeader>
          <h1>Contact Me</h1>
          <p>
            I am seeking an opportunity as a Jr. Front-end Web Developer to
            apply my skills to real-world projects and learn more technologies.
            If you’re interested, feel free to send me an email. My inbox is
            always open.
          </p>
        </StyledHeader>

        <label htmlFor="name" hidden>
          Name
        </label>
        <label htmlFor="name" hidden>
          Name
        </label>
        <StyledInput
          type="text"
          name="name"
          id="name"
          required
          placeholder="Your name *"
          autoComplete="name"
        />

        <label htmlFor="email" hidden>
          Email
        </label>
        <StyledInput
          type="email"
          name="email"
          id="email"
          required
          placeholder="Your Email/Phone *"
          autoComplete="email"
        />

        <label htmlFor="message" hidden>
          Message
        </label>
        <StyledTextarea
          name="message"
          id="message"
          rows="10"
          required
          placeholder="Message *"
          autoComplete="off" // or "message" if you use a custom schema
        ></StyledTextarea>

        <StyledButton type="submit">
          Send Message <BsEnvelopeArrowUp />
        </StyledButton>
      </StyledForm>
    </ContactFormSection>
  );
});

ContactForm.displayName = "ContactForm";
export default ContactForm;
