import ProjectInterface from "./project.interface";

import mp1 from "../../assets/dgra-test.herokuapp.com_.png";
import resumakerScreenshot from "../../assets/fcbresumaker.netlify.app_.png";
import onlineStoreScreenshot from "../../assets/online-store.png";
import sp1 from "../../assets/www.emovault.com_Login.png";
import dictionaryAppScreenshot from "../../assets/elated-jackson-aa9949.netlify.app_.png";
import movieWebsiteScreenshot from "../../assets/zen-swanson-9feee7.netlify.app_.png";
import trelloScreenshot from "../../assets/naughty-agnesi-37bd1d.netlify.app_.png";
import landingPageScreenshot from "../../assets/tender-lovelace-dce741.netlify.app_.png";

const mainProjects: ProjectInterface[] = [
  {
    type: "Freelance Project",
    name: "Disaster Get Ready Application",
    image: mp1,
    description:
      "A barangay software solution for local government agencies that offer an extensive and informative delivery of the most recent announcement about incoming calamities with the goal that local government can get ready for it.",
    stack: ["React", "Redux", "Bootstrap", "Express", "Node.js"],
    sourceCode: "a",
    link: "https://disaster-get-ready-application.herokuapp.com/",
  },
  {
    type: "Freelance Project",
    name: "Emovault",
    image: sp1,
    description:
      "A mood tracker and daily journal application for patients that are monitored by their respective clinicians.",
    sourceCode: "https://github.com/fhillipbagsic/depression-app-backend",
    stack: ["Express", "Node.js", "JWT"],
    link: "https://www.emovault.com",
    reverse: true,
  },
  {
    type: "Personal Project",
    name: "Resumaker",
    image: resumakerScreenshot,
    description:
      "An application that creates a resume based on pre-made templates. Users can simply fill-in their information and can get a live preview of the document. Can also choose from different margins and page size. Currently only have one template to choose from because it is very tedious to manually create a word document using codes.",
    sourceCode: "https://github.com/fhillipbagsic/resumaker",
    stack: ["React", "Tailwind", "Express", "Node.js", "Docx.js", "TypeScript"],
    link: "https://fcbresumaker.netlify.app",
  },
];

const sideProjects: ProjectInterface[] = [
  {
    type: "Personal Project",
    name: "E-Commerce Online Store",
    image: onlineStoreScreenshot,
    description:
      "A front-end online store that uses Fake Store API to display products of several categories. Cart feature is integrated with Stripe API.",
    stack: ["React", "Redux", "Tailwind", "Stripe"],
    sourceCode: "https://github.com/fhillipbagsic/onlinestore_client",
    link: "https://loquacious-cranachan-0f2f74.netlify.app",
    twoCols: true,
  },
  {
    type: "Personal Project",
    name: "Trello Redesigned",
    image: trelloScreenshot,
    description:
      "A static clone of Trello's UI. It is inspired by a redesign I found in Figma. Can drag and drop the cards",
    stack: ["React", "Tailwind"],
    sourceCode: "https://github.com/fhillipbagsic/trello-clone-client",
    link: "https://naughty-agnesi-37bd1d.netlify.app/",
  },
  {
    type: "Personal Project",
    name: "Movie Website",
    image: movieWebsiteScreenshot,
    description:
      "The first project that I have built using Styled Components. Integrated with TMDb API to fetch and display movie data.",
    stack: ["React", "Styled Components"],
    sourceCode: "https://github.com/fhillipbagsic/simple-movie-website",
    link: "https://zen-swanson-9feee7.netlify.app/",
  },
  {
    type: "Personal Project",
    name: "Dictionary App",
    image: dictionaryAppScreenshot,
    description:
      "A simple dictionary application that display definitions and phonetics. The first project I built that uses an API.",
    stack: ["React", "Styled Components"],
    sourceCode: "https://github.com/fhillipbagsic/Dictionary",
    link: "https://elated-jackson-aa9949.netlify.app/",
  },
  {
    type: "Personal Project",
    name: "Landing Page",
    image: landingPageScreenshot,
    description: "Just a simple landing page.",
    stack: ["HTML", "SCSS"],
    sourceCode: "https://github.com/fhillipbagsic/landing-page-01",
    link: "https://tender-lovelace-dce741.netlify.app",
  },
];

export { mainProjects, sideProjects };
