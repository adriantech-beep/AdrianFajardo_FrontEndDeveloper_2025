import { icons } from "../data/projects";
import styled from "styled-components";
import Icons from "./Icons";
import { forwardRef } from "react";
import { useRevealSection } from "../hooks/useRevealSection";
import { SkillsSection } from "./StyledSection";

const Techologies = styled.div`
  width: 100%;
  max-width: 1028px;
  display: flex;

  gap: 0.5rem;
  padding: 1em;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 650px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.5em;
  }

  @media (max-width: 448px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const H1 = styled.h1`
  font-size: 2rem;
`;

const Skills = forwardRef((props, ref) => {
  const { ref: revealRef, isVisible } = useRevealSection();

  return (
    <SkillsSection
      ref={(element) => {
        if (ref) ref.current = element;
        revealRef.current = element;
      }}
      isVisible={isVisible}
    >
      <H1>Skills</H1>
      <Techologies>
        {icons.map((icon) => (
          <Icons icon={icon} key={icon.name} />
        ))}
      </Techologies>
    </SkillsSection>
  );
});
Skills.displayName = "Skills";
export default Skills;
