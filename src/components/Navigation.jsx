import styled from "styled-components";
import { useScroll } from "../contexts/ScrollContext";
import { FaBars } from "react-icons/fa";
import StyledFaTimes from "./StyledFaTimes";
import StyledNavLink from "./StyledNavlink";

const StyledNav = styled.nav`
  width: 100%;
  height: 66px;
  position: sticky;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  padding: 1.5em;
  background-color: #061427;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(4, 4, 4, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  h1 {
    font-size: 34px;
    font-weight: bold;
    color: transparent;
    cursor: pointer;

    background: linear-gradient(90deg, #00a6ff, #ee0979);
    background-clip: text;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3),
      -2px -2px 4px rgba(255, 255, 255, 0.5);
  }

  ul {
    display: flex;
  }
  li {
    width: 130px;
    color: white;
    font-family: "Lato", sans-serif;
    list-style-type: none;
    cursor: pointer;

    &:hover {
      color: #833ab4;
    }
  }

  div {
    display: none;
  }

  @media (max-width: 768px) {
    display: flex;
    height: auto;
    justify-content: space-between;
    padding: 1em;

    h1 {
      font-size: 28px;
    }

    ul {
      display: none;
    }

    div {
      display: block;
      font-size: 1.5em;
      color: white;
    }
  }
`;
const Span = styled.span`
  .loader {
    transform: rotateZ(45deg);
    perspective: 1000px;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    color: #fff;
  }
  .loader:before,
  .loader:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    transform: rotateX(70deg);
    animation: 1s spin linear infinite;
  }
  .loader:after {
    color: #ff3d00;
    transform: rotateY(70deg);
    animation-delay: 0.4s;
  }

  @keyframes rotate {
    0% {
      transform: translate(-50%, -50%) rotateZ(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotateZ(360deg);
    }
  }

  @keyframes rotateccw {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }

  @keyframes spin {
    0%,
    100% {
      box-shadow: 0.2em 0px 0 0px currentcolor;
    }
    12% {
      box-shadow: 0.2em 0.2em 0 0 currentcolor;
    }
    25% {
      box-shadow: 0 0.2em 0 0px currentcolor;
    }
    37% {
      box-shadow: -0.2em 0.2em 0 0 currentcolor;
    }
    50% {
      box-shadow: -0.2em 0 0 0 currentcolor;
    }
    62% {
      box-shadow: -0.2em -0.2em 0 0 currentcolor;
    }
    75% {
      box-shadow: 0px -0.2em 0 0 currentcolor;
    }
    87% {
      box-shadow: 0.2em -0.2em 0 0 currentcolor;
    }
  }
`;

function Navigation() {
  const { scrollToProject, scrollToHome, scrollToAbout, setShow, show } =
    useScroll();
  return (
    <StyledNav>
      <h1 onClick={scrollToHome}>
        Adrian <Span></Span>
      </h1>

      <ul>
        <li onClick={scrollToHome}>Home</li>
        <li onClick={scrollToProject}>Projects</li>
        <li>
          <StyledNavLink to="/certificates">Certificates</StyledNavLink>
        </li>
        <li onClick={scrollToAbout}>About</li>
      </ul>

      <div>
        {show ? (
          <StyledFaTimes onClick={() => setShow((show) => !show)} />
        ) : (
          <FaBars onClick={() => setShow((show) => !show)} />
        )}
      </div>
    </StyledNav>
  );
}

export default Navigation;
