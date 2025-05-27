import { useScroll } from "../contexts/ScrollContext";
import { BsDownload } from "react-icons/bs";
import styled from "styled-components";
import ProfileImage from "../assets/adrianF.png";
import SocialGroup from "../components/SocialGroup";
import MobileNavigation from "./MobileNavigation";
import BackgroundImage from "../assets/image/bg-dark.jpg";

const StyledMain = styled.main`
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  height: 100vh;
  position: relative;

  li {
    list-style: none;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    color: #f3f4f6;
  }
  p {
    font-weight: 600;
    font-size: 1.8rem;
    color: #f3f4f6;
  }

  @media (max-width: 768px) {
    padding: 1rem;

    h1 {
      font-size: 2.8rem;
    }
    p {
      font-weight: 600;
      font-size: 1.6rem;
    }
  }
`;
const ProfileImageBox = styled.div`
  width: 180px;
  margin-top: 8rem;

  img {
    width: 100%;
    border-radius: 50%;
  }
`;

const StyledCvLink = styled.a`
  padding: 0.5em 0.7em;
  margin: 5px;
  text-decoration: none;
  font-family: Arial, sans-serif;
  font-weight: 500;
  color: white;
  /* background-color: #5802da; */
  border: 1px solid white;
  margin-top: 0.5em;

  border-radius: 5px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  text-align: center;

  &:hover {
    background-color: #5000ca;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out;
  }
`;
function Main() {
  const { homeRef, show } = useScroll();
  return (
    <StyledMain ref={homeRef}>
      <StyledProfile>
        <ProfileImageBox>
          <img src={ProfileImage} />
        </ProfileImageBox>
        <h1>Adrian Fajardo</h1>
        <p>Front-End Developer</p>

        <SocialGroup />

        <StyledCvLink
          href="https://drive.google.com/file/d/1EOYEsUfkyIdyKbtGKJhmD1vQCcwYDeHB/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Adrian Fajardo's Resume"
        >
          Download CV
          <span>
            <BsDownload />
          </span>
        </StyledCvLink>
        {show && <MobileNavigation />}
      </StyledProfile>
    </StyledMain>
  );
}

export default Main;
