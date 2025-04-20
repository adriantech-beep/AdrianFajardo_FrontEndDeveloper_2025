import { NavLink } from "react-router-dom";
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

function Navigation() {
  const { scrollToProject, scrollToHome, scrollToAbout, setShow, show } =
    useScroll();
  return (
    <StyledNav>
      <h1 onClick={scrollToHome}>Adrian</h1>

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
