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

export const SkillsSection = styled.section.withConfig({
  shouldForwardProp: (prop) => prop !== "isVisible",
})`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "40px")});
  transition: all 0.6s ease-out;
  width: 100%;
  min-height: 420px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  background-color: #061427;
  margin-top: 2rem;
`;

export const AboutSection = styled.section.withConfig({
  shouldForwardProp: (prop) => prop !== "isVisible",
})`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "40px")});
  transition: all 0.6s ease-out;
  text-align: center;
  padding: 2rem;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactFormSection = styled.section.withConfig({
  shouldForwardProp: (prop) => prop !== "isVisible",
})`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "40px")});
  transition: all 0.6s ease-out;
  padding: 2rem;
  text-align: center;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1em;
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
