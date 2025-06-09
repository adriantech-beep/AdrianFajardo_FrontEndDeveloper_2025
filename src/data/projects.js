import Mockup1 from "../assets/project-images/repair-management-system.png";
import Mockup2 from "../assets/project-images/shopshere.png";
import Mockup3 from "../assets/project-images/todo-app.png";
import Mockup4 from "../assets/project-images/portfolio.png";
import Mockup5 from "../assets/project-images/bubble-tea.png";
import Mockup6 from "../assets/project-images/quizz-app.png";

import HTMLicon from "../assets/icons/file-type-html.svg";
import CSSicon from "../assets/icons/file-type-css.svg";
import JSicon from "../assets/icons/javascript.svg";
import REACTicon from "../assets/icons/react.svg";
import TAILWINDicon from "../assets/icons/tailwind-css.svg";
import SUPABASEicon from "../assets/icons/supabase.svg";
import STYLEDicon from "../assets/icons/file-type-styled.svg";
import REDUXicon from "../assets/icons/redux.svg";
import REACTROUTERicon from "../assets/icons/react-router.svg";
import GITicon from "../assets/icons/git.svg";

import JavaScriptcertJerome from "../assets/certificates/JavaScriptcert1.png";
import JavaScriptcertJonas from "../assets/certificates/JavaScriptcert2.png";
import UpliftCert from "../assets/certificates/uplift-cert.png";
import Globecert from "../assets/certificates/globe-cert.png";

export const projects = [
  {
    name: "Repair-Management-System",
    image: Mockup1,
    details:
      "A repair management system developed with a solution designed to streamline the process of managing repair services",
    technologies: [
      "HTML",
      "Styled-Components",
      "REACT",
      "React-query",
      "Supabase",
    ],
    livesiteURL:
      "https://drive.google.com/file/d/1AVzSKirngx_qn0Vk22lDUaRz5pEsLuxE/view?usp=drive_link",
    labelURL: "Visit Repair-Management-System video demo on google drive",
    sourceCode:
      "https://github.com/adriantech-beep/repair-management-system.git",
    labelSource: "Visit PMMS repository source code on www.Github.com",
    description:
      "This project was inspired by The Ultimate React course on Udemy by Jonas Schmedtmann, where I learned key concepts related on design using Styled-Components, data flow using React-Query and handling logic and back-end services using Supabase. While I drew inspiration from the original project, I customized it by adding some features and replacing some concepts to suit my needs and showcase my skills.",
  },

  {
    name: "Shopsphere",
    image: Mockup2,
    details:
      "An innovative e-commerce platform designed to provide users with a seamless shopping experience. Built using React, Context API, free APIs,  the project emphasizes modularity, scalability, and user-friendly design",
    technologies: ["HTML", "CSS", "REACT", "Context-Api"],
    livesiteURL: "https://adriantech-beep.github.io/shopsphere-ecommerce/",
    labelURL: "Visit Shopsphere Website",

    sourceCode: "https://github.com/adriantech-beep/shopsphere-ecommerce.git",
    labelSource: "Visit Shopsphere repository source code on www.Github.com",
    description:
      "This project is a requirement for the Uplift Code Camp bootcamp. It showcases my skills and understanding of how React works, state management using the Context API, and styling with module.css.",
  },
  {
    name: "Todo app",
    image: Mockup3,
    details:
      "This project is a solution to a coding challenge from the Frontend Mentor website, showcasing my understanding in JavaScript and Object-Oriented Programming (OOP) principles",
    technologies: ["HTML", "CSS", "JavaScript"],
    livesiteURL: "https://adriantech-beep.github.io/todo-app/",
    labelURL: "Visit Todo App Website",

    sourceCode: "https://github.com/adriantech-beep/todo-app.git",
    labelSource: "Visit Todo app repository source code on www.Github.com",
  },
  {
    name: "Portfolio website",
    image: Mockup4,
    details:
      "I created this portfolio website as part of the project requirements for the Uplift Code Camp bootcamp. It showcases my foundational skills in HTML, CSS, and JavaScript, applied to build an engaging and functional design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    livesiteURL: "https://adriantech-beep.github.io/adrian-portfolio/",
    labelURL: "Visit Portfolio Website",
    sourceCode: "https://github.com/adriantech-beep/adrian-portfolio.git",
    labelSource:
      "Visit Adrian Fajardo's Portfolio website repository source code on www.Github.com",
  },
  {
    name: "Bubble Tea",
    image: Mockup5,
    details:
      "This is a straightforward website designed for ordering milk tea products. It was built using React and Tailwind CSS, incorporating essential state management functionality with Redux, and utilizing Supabase for back-end services.",
    technologies: ["HTML", "Tailwind", "REACT", "Redux", "Supabase"],
    livesiteURL: "https://adriantech-beep.github.io/bubble-tea/",
    labelURL: "Visit Bubble tea Website",
    sourceCode: "https://github.com/adriantech-beep/bubble-tea.git",
    labelSource: "Visit Bubble tea repository source code on www.Github.com",
  },
  {
    name: "Quizz app",
    image: Mockup6,
    details:
      "This project was developed as part of the bootcamp requirements for Uplift Code Camp. It demonstrates my grasp of Asynchronous JavaScript, showcasing practical applications of its principles in building dynamic functionality.",
    technologies: ["HTML", "CSS", "JavaScript"],
    livesiteURL: "https://adriantech-beep.github.io/quizz-app-api/",
    labelURL: "Visit Quizz app Website",

    sourceCode: "https://github.com/adriantech-beep/quizz-app-api.git",
    labelSource: "Visit Quizz app repository source code on www.Github.com",
  },
];

export const icons = [
  {
    name: "HTML",
    image: HTMLicon,
  },
  {
    name: "CSS",
    image: CSSicon,
  },
  {
    name: "JS",
    image: JSicon,
  },
  {
    name: "TAILWIND",
    image: TAILWINDicon,
  },
  {
    name: "Styled-Components",
    image: STYLEDicon,
  },
  {
    name: "REACT",
    image: REACTicon,
  },
  {
    name: "REDUX",
    image: REDUXicon,
  },
  {
    name: "React-Router",
    image: REACTROUTERicon,
  },
  {
    name: "Supabase",
    image: SUPABASEicon,
  },
  {
    name: "Git",
    image: GITicon,
  },
];

export const certificates = [
  {
    name: "Uplift Code Camp",
    certificateImages: UpliftCert,
  },
  {
    name: "JavaScript Course Jerome",
    certificateImages: JavaScriptcertJerome,
  },

  {
    name: "JavaScript Course Jonas",
    certificateImages: JavaScriptcertJonas,
  },
  {
    name: "Globe Certifate of participation",
    certificateImages: Globecert,
  },
];
