import { forwardRef, useCallback, useReducer } from "react";
import emailjs from "emailjs-com";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../util/validator";
import Input from "./Input";
import styled from "styled-components";
import { useRevealSection } from "../hooks/useRevealSection";
import { ContactFormSection } from "./StyledSection";
import toast from "react-hot-toast";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  width: 100%;
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

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE": {
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: {
            value: action.value,
            isValid: action.isValid,
          },
        },
        isValid: formIsValid,
      };
    }
    case "RESET_FORM": {
      return {
        inputs: {
          name: {
            value: "",
            isValid: false,
          },
          email: {
            value: "",
            isValid: false,
          },
          message: {
            value: "",
            isValid: false,
          },
        },
      };
    }
    default:
      return state;
  }
};

const Form = forwardRef((props, ref) => {
  const { ref: revealRef, isVisible } = useRevealSection();
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      message: {
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n4orona",
        "template_qsgw97h",
        e.target,
        "KQk17CbURwclX4vd7"
      )
      .then(
        (result) => {
          console.log("Message sent successfully!", result.text);
          toast.success("Message sent successfully! Thank You 😊");

          dispatch({ type: "RESET_FORM" });
        },
        (error) => {
          console.error("Error sending message:", error.text);
          toast.error("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <ContactFormSection
      ref={(element) => {
        if (ref) ref.current = element;
        revealRef.current = element;
      }}
      isVisible={isVisible}
    >
      <StyledForm onSubmit={sendEmail}>
        <StyledHeader>
          <h1>Contact Me</h1>
          <p>
            I am seeking an opportunity as a Jr. Front-end Web Developer to
            apply my skills to real-world projects and learn more technologies.
            If you’re interested, feel free to send me an email. My inbox is
            always open.
          </p>
        </StyledHeader>
        <Input
          id="name"
          element="input"
          label="Your Name"
          placeholder="Your Name *"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter your name"
          onInput={inputHandler}
        />

        <Input
          id="email"
          element="input"
          label="Your Email Address"
          placeholder="Your Email Address *"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please Enter A Valid Email Address"
          onInput={inputHandler}
        />

        <Input
          id="message"
          element="textarea"
          label="Your Email Address"
          placeholder="Your Message Here *"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please Enter Your Message"
          onInput={inputHandler}
        />

        <StyledButton type="submit" disabled={!formState.isValid}>
          Submit
        </StyledButton>
      </StyledForm>
    </ContactFormSection>
  );
});
Form.displayName = "Form";
export default Form;
