import styled from "styled-components";
import { ImageContainer } from "./RevealGrid";
import { TiArrowForward } from "react-icons/ti";
import { BsArrowUpRightCircle } from "react-icons/bs";

const StyledProjectImages = styled.li`
  width: 100%;
  max-width: 670px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  background-color: #10233d;
  padding: 1em;
  border-radius: 5px;

  @media (max-width: 579px) {
    padding: 0.8em;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  div {
    display: flex;
    align-items: center;
    gap: 1em;
    margin: 0.2em;
    flex-wrap: wrap;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 100%;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.2em;
    padding: 0.4em 0.5em;
    margin: 5px 0;
    font-size: 0.9rem;
    text-decoration: none;
    font-family: Arial, sans-serif;
    font-weight: 500;
    color: white;
    background-color: #182a3d;
    border: 1px solid white;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    cursor: pointer;
    text-align: center;
    white-space: nowrap;
  }

  a:hover {
    background-color: #5000ca;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out;
  }

  @media (max-width: 579px) {
    a {
      font-weight: 400;
      padding: 0.2em 0.4em;
      font-size: 14px;
    }

    h3 {
      font-size: 1rem;
    }
  }
`;

const DescriptionWrapper = styled.div`
  width: 100%;
  min-height: 210px;
  display: flex;
  flex-direction: column;

  @media (max-width: 579px) {
    min-height: auto;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

const StyledTech = styled.span`
  background-color: #f3f4f6;
  border-radius: 10px;
  padding: 0.3em 0.4em;
  font-family: "Courier Prime", monospace;
  color: rgb(39, 40, 34);
  font-size: 0.9rem;
  text-align: center;

  @media (max-width: 579px) {
    padding: 0.2em 0.3em;
    font-size: 0.75rem;
  }
`;

function Project({ project }) {
  const {
    name,
    image,
    details,
    technologies,
    livesiteURL,
    labelURL,
    sourceCode,
    labelSource,
    description,
  } = project;

  return (
    <StyledProjectImages>
      <ImageContainer>
        <img src={image} alt={`${name} project image`} />
      </ImageContainer>
      <Details>
        <div>
          <h2>{name}</h2>
          <a
            href={livesiteURL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={labelURL}
          >
            Live Demo
            <span>
              <BsArrowUpRightCircle />
            </span>
          </a>
          <a
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={labelSource}
          >
            Source Code
            <span>
              <BsArrowUpRightCircle />
            </span>
          </a>
        </div>
        <DescriptionWrapper>
          <h3>{details}</h3>
          <p>{description}</p>
        </DescriptionWrapper>

        <div>
          <p>Tech stack:</p>
          {technologies.map((tech) => (
            <StyledTech key={tech}>{tech}</StyledTech>
          ))}
        </div>
      </Details>
    </StyledProjectImages>
  );
}

export default Project;
