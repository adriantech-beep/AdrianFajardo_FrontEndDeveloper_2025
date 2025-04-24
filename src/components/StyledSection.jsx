import styled from "styled-components";

// Create a styled section component that uses the isVisible prop
export const RevealSection = styled.section`
  transition: transform 1s, opacity 1s;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(8rem)"};
`;

// You can create variations for different sections if needed
export const MainSection = styled(RevealSection)`
  padding: 4rem 0;
`;

export const ProjectsSection = styled(RevealSection)`
  padding: 4rem 0;
`;

export const SkillsSection = styled(RevealSection)`
  width: 100%;
  min-height: 420px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  background-color: #061427;
  margin-top: 2rem;
`;

export const AboutSection = styled(RevealSection)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
  background-color: #061427;
`;

export const ContactFormSection = styled(RevealSection)`
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

// Container for section content
export const SectionContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`;

// Section heading
export const SectionHeading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;
