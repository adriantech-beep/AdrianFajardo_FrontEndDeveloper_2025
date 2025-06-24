import Mockup1 from "../assets/project-images/repair-management-system.png";
import Mockup2 from "../assets/project-images/shopshere.png";
import Mockup5 from "../assets/project-images/bubble-tea.png";
import Mockup3 from "../assets/project-images/todo-app.png";

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
    name: "Repair Management System",
    image: Mockup1,
    details:
      "🚧 In Progress – A comprehensive repair service platform for tracking, updating, and managing client repair orders efficiently.",
    technologies: [
      "HTML",
      "Styled-Components",
      "React",
      "React Query",
      "Supabase",
    ],
    livesiteURL: "https://repair-management-system.vercel.app/",
    labelURL: "Repair Management System live demo link",
    sourceCode:
      "https://github.com/adriantech-beep/repair-management-system.git",
    labelSource: "View Source on GitHub",
    description:
      "This full-stack project demonstrates my ability to build real-world applications using modern technologies like React Query and Supabase. I collaborated with senior developers to architect and implement key features such as user authentication, role-based access control, and dynamic order tracking. The application is designed with a modular, responsive layout to streamline operations for repair businesses and support scalable functionality.",
  },
  {
    name: "Shopsphere",
    image: Mockup2,
    details:
      "A scalable e-commerce web app with cart functionality, API-driven product listings, and a user-focused interface.",
    technologies: ["HTML", "CSS", "React", "Context API"],
    livesiteURL: "https://adriantech-beep.github.io/shopsphere-ecommerce/",
    labelURL: "Visit Shopsphere Website",
    sourceCode: "https://github.com/adriantech-beep/shopsphere-ecommerce.git",
    labelSource: "View Source on GitHub",
    description:
      "Shopsphere is a modular, component-driven e-commerce platform that I built to practice advanced state management using the Context API. The app includes dynamic product loading from third-party APIs, responsive design, and intuitive UX features like filtering and persistent cart state.",
  },
  {
    name: "Bubble Tea Ordering App",
    image: Mockup5,
    details:
      "An end-to-end ordering system for milk tea products with state and data management integrated via Redux and Supabase.",
    technologies: ["HTML", "Tailwind", "React", "Redux", "Supabase"],
    livesiteURL: "https://bubble-tea-brown.vercel.app/",
    labelURL: "Visit Bubble Tea Ordering App",
    sourceCode: "https://github.com/adriantech-beep/bubble-tea.git",
    labelSource: "View Source on GitHub",
    description:
      "Built with a focus on user flow and modern UI, this app allows users to browse, customize, and order milk tea products. I used Redux for scalable state handling and Supabase for managing product data and order submissions. The app is optimized for responsiveness and clear navigation.",
  },
  {
    name: "Todo App",
    image: Mockup3,
    details:
      "A simple yet powerful task management app built using Object-Oriented Programming principles in JavaScript, featuring persistent data storage and a clean, responsive interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    livesiteURL: "https://adriantech-beep.github.io/todo-app/",
    labelURL: "Visit Todo App Live Site",
    sourceCode: "https://github.com/adriantech-beep/todo-app.git",
    labelSource: "View Source on GitHub",
    description:
      "This Todo App was developed with Object-Oriented Programming (OOP) principles to ensure maintainable and modular code. It enables users to add, edit, complete, and delete tasks efficiently. The app uses local storage for data persistence and features a responsive UI built with  CSS. Though simple in appearance, the core logic emphasizes class-based design patterns, offering a solid foundation for beginner-to-intermediate level projects.",
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
    description:
      "Completed a structured 21-week front-end web development bootcamp focused on JavaScript, React, and Git. Built real-world applications using modern web technologies and collaborated in group projects simulating industry workflows.",
  },
  {
    name: "JavaScript by Jerome B.",
    certificateImages: JavaScriptcertJerome,
    description:
      "Completed 71 hours of JavaScript-focused training including ES6+, asynchronous workflows, API consumption, modular architecture, and test-driven development. Applied learning through structured projects and challenges.",
  },
  {
    name: "Ultimate JavaScript Mastery by Jonas Schmedtmann",
    certificateImages: JavaScriptcertJonas,

    description:
      "Covered foundational to advanced JavaScript topics including DOM manipulation, event handling, asynchronous programming, and object-oriented design patterns. Built multiple projects and challenges to apply each concept.",
  },
  {
    name: "Globe Certificate of Participation",
    certificateImages: Globecert,
    description:
      "Participated in Globe Telecom's tech workshop, gaining insights into cloud infrastructure, industry use cases, and developer best practices in the Philippine tech ecosystem.",
  },
];
