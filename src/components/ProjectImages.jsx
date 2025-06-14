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
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 100%;
  }

  a {
    display: inline-block;
    padding: 0.4em 0.5em;
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
    gap: 0.2em;
    text-align: center;
  }

  a:hover {
    background-color: #5000ca;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out;
  }

  @media (max-width: 579px) {
    div {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.5em;
    }
    a {
      font-weight: 400;
      padding: 0.2em 0.3em;
      font-size: 14px;
    }
    h3 {
      font-size: 1rem;
    }
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
    text-align: center;
    padding: 0.3em 0.4em;
    font-size: 0.8rem;
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
        <h3>{details}</h3>
        <p>{description}</p>
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
