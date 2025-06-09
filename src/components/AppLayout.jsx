import { useScroll } from "../contexts/ScrollContext";

import styled from "styled-components";
import About from "./About";
import Footer from "./Footer";
import Main from "./Main";
import Navigation from "./Navigation";
import Projects from "./Projects";
import Skills from "./Skills";
import ContactForm from "./ContactForm";

const StyledAppLayout = styled.div`
  background-color: #061427;
  overflow: hidden;
`;
const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  width: 100%;
`;
function AppLayout() {
  const { aboutRef } = useScroll();
  return (
    <StyledAppLayout>
      <Navigation />
      <MainContainer>
        <Main />
        <About ref={aboutRef} />
        <Projects />
        <Skills />
        <ContactForm />
      </MainContainer>
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
