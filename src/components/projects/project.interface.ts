interface ProjectInterface {
  type: "Freelance Project" | "Personal Project";
  name: string;
  image: string;
  description: string;
  stack: string[];
  sourceCode: string;
  link: string;
  reverse?: boolean;
  twoCols?: boolean;
}

export default ProjectInterface;
