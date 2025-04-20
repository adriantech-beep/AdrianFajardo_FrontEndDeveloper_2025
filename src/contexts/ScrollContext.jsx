import { createContext, useContext, useRef, useState } from "react";

const ScrollContext = createContext();

function ScrollProvider({ children }) {
  const [show, setShow] = useState(false);
  const projectRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <ScrollContext.Provider
      value={{
        projectRef,
        scrollToProject,
        homeRef,
        scrollToHome,
        aboutRef,
        scrollToAbout,
        show,
        setShow,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

function useScroll() {
  const context = useContext(ScrollContext);

  if (context === undefined)
    throw new Error(
      "ScrollContext context was used outside the ScrollContext Provider"
    );
  return context;
}

export { ScrollProvider, useScroll };
