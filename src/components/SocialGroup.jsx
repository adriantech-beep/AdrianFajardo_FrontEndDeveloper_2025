import styled from "styled-components";
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const StyledSocialGroup = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 1rem;

  a {
    cursor: pointer;
  }
`;

function SocialGroup() {
  return (
    <StyledSocialGroup>
      <a
        href="https://www.linkedin.com/in/adrian-fajardo-965429143/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Adrian Fajardo's LinkedIn profile"
      >
        <FaLinkedin style={{ color: "#f3f4f6", fontSize: "2.2rem" }} />
      </a>
      {/* <a
        href="https://web.facebook.com/?_rdc=1&_rdr#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Adrian Fardo's LinkedIn profile"
      >
        <FaFacebook style={{ color: "#f3f4f6", fontSize: "2.2rem" }} />
      </a> */}
      <a
        href="https://github.com/adriantech-beep"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Adrian Fajardo's Github profile"
      >
        <FaGithub style={{ color: "#f3f4f6", fontSize: "2.2rem" }} />
      </a>
      <a
        href="https://discord.com/users/adrian.dev"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Adrian Fajardo's Discord profile"
      >
        <FaDiscord style={{ color: "#f3f4f6", fontSize: "2.2rem" }} />
      </a>
    </StyledSocialGroup>
  );
}

export default SocialGroup;
