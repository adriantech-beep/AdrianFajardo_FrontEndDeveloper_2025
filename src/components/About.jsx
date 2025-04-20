import { forwardRef } from "react";
import { useRevealSection } from "../hooks/useRevealSection";
import { AboutSection } from "./StyledSection";
import styled from "styled-components";

const StyledSection = styled.div`
  max-width: 850px;
  min-height: 240px;
  background-color: #061427;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 4rem;
  text-align: center;

  h1 {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 2.5rem;
  }
`;

const About = forwardRef((props, ref) => {
  const { ref: revealRef, isVisible } = useRevealSection();

  return (
    <AboutSection
      ref={(element) => {
        if (ref) ref.current = element;
        revealRef.current = element;
      }}
      isVisible={isVisible}
    >
      <StyledSection>
        <h1>
          Hi. I'm Adrian, looking for an opportunity to start a career in
          front-end web development.
        </h1>
        <p>
          As a lifelong learner,I've always been fascinated by the intersection
          of technology and creativity.My background as a mobile phone repair
          technician has equipped me with a solid understanding of hardware and
          software.I'm excited to apply this knowledge and my dedication to
          continous learning to embark on a career as a web developer.I'm eager
          to contribute to innovative projects and collaborate with talented
          teams to build exceptional digital experience.
        </p>
      </StyledSection>
    </AboutSection>
  );
});

About.displayName = "About";
export default About;
