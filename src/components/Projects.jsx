import { RevealGrid } from "./RevealGrid";
import { projects } from "../data/projects";
import ProjectImages from "./ProjectImages";
import styled from "styled-components";
import { useScroll } from "../contexts/ScrollContext";

const ProjectsContainer = styled.section`
  padding: 2rem;
  width: 100%;

  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1em;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
`;

function Projects() {
  const { projectRef } = useScroll();
  return (
    <ProjectsContainer ref={projectRef}>
      <SectionTitle>My Projects</SectionTitle>
      <RevealGrid columns={2}>
        {projects.map((project) => (
          <ProjectImages project={project} key={project.name} />
        ))}
      </RevealGrid>
    </ProjectsContainer>
  );
}

export default Projects;
