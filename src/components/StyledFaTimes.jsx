import styled, { keyframes } from "styled-components";
import { FaTimes } from "react-icons/fa";

const spinAndScale = keyframes`
  0% {
    transform: scale(0) rotate(0deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.2) rotate(180deg); 
    opacity: 1;
  }
  100% {
    transform: scale(1) rotate(360deg); 
  }
`;

const StyledFaTimes = styled(FaTimes)`
  animation: ${spinAndScale} 0.8s ease-in-out;
  color: crimson;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease;
  }
`;

export default StyledFaTimes;
