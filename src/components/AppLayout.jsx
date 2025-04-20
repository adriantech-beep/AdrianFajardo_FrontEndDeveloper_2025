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
function AppLayout() {
  const { aboutRef } = useScroll();
  return (
    <StyledAppLayout>
      <Navigation />
      <Main />
      <About ref={aboutRef} />
      <Projects />
      <Skills />
      <ContactForm />
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
