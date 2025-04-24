import styled from "styled-components";
import { useScroll } from "../contexts/ScrollContext";
import StyledNavLink from "./StyledNavlink";

const StyledMobileNavigation = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 2;

  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);

  transform: translateX(0);
  background: rgba(16, 35, 61, 0.7);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
  padding: 2rem 4rem;

  animation: slideIn 0.5s forwards;

  @keyframes slideIn {
    0% {
      left: -100%;
    }
    100% {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

function MobileNavigation() {
  const { scrollToProject, scrollToHome, scrollToAbout } = useScroll();
  return (
    <StyledMobileNavigation>
      <li onClick={scrollToHome}>Home</li>
      <li onClick={scrollToProject}>Projects</li>
      <li>
        <StyledNavLink to="/certificates">Certificates</StyledNavLink>
      </li>
      <li onClick={scrollToAbout}>About</li>
    </StyledMobileNavigation>
  );
}

export default MobileNavigation;
