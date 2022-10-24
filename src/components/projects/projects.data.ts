import ProjectInterface from "./project.interface";

import mp1 from "../../assets/tender-lovelace-dce741.netlify.app_.png";
import mp2 from "../../assets/online-store.png";
import sp1 from "../../assets/www.emovault.com_Login.png";
import sp4 from "../../assets/naughty-agnesi-37bd1d.netlify.app_.png";
import sp5 from "../../assets/tender-lovelace-dce741.netlify.app_.png";

const mainProjects: ProjectInterface[] = [
  {
    type: "Freelance Project",
    name: "Disaster Get Ready Application",
    image: mp1,
    description:
      "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.",
    stack: ["React", "Redux", "Bootstrap", "Express", "Node.js"],
    sourceCode: "a",
    link: "a",
  },
  {
    type: "Personal Project",
    name: "E-Commerce Online Store",
    image: mp2,
    description: "A front-end online store that uses Fake Store API",
    stack: ["React", "Redux", "Tailwind", "TypeScript", "Stripe"],
    sourceCode: "a",
    link: "a",
    reverse: true,
  },
];

const sideProjects: ProjectInterface[] = [
  {
    type: "Freelance Project",
    name: "Emovault",
    image: sp1,
    description:
      "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.",
    sourceCode: "a",
    stack: ["Express", "Node.js", "JWT"],
    link: "a",
    twoCols: true,
  },
  {
    type: "Freelance Project",
    name: "Trello Redesigned",
    image: sp4,
    description:
      "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.",
    stack: ["React", "Tailwind"],
    sourceCode: "a",
    link: "a",
  },
  {
    type: "Freelance Project",
    name: "Project 5",
    image: sp4,
    description:
      "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.",
    stack: ["React"],
    sourceCode: "a",
    link: "a",
  },
  {
    type: "Freelance Project",
    name: "Project 6",
    image: sp4,
    description:
      "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.",
    stack: ["React"],
    sourceCode: "a",
    link: "a",
  },
  {
    type: "Personal Project",
    name: "Landing Page",
    image: sp5,
    description:
      "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.",
    stack: ["HTML", "CSS"],
    sourceCode: "a",
    link: "a",
  },
];
export { mainProjects, sideProjects };
