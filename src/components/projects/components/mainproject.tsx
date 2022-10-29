import ProjectInterface from "../project.interface";
import { FiGithub } from "react-icons/fi";
import { BsLink45Deg } from "react-icons/bs";

const MainProject = ({
  type,
  name,
  image,
  description,
  sourceCode,
  stack,
  link,
  reverse,
}: ProjectInterface) => {
  return (
    <div
      className={`flex ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } flex-col-reverse md:gap-10 gap-5 items-center hover:-translate-y-3`}
    >
      <div
        className={`flex flex-col 
      ${reverse && "items-end"} 
      md:w-1/2 gap-3`}
      >
        <p className="font-jet font-medium italic text-xs text-light-emerald-100 dark:text-dark-emerald-100">
          {type}
        </p>
        <p className="font-bold text-xl text-light-gray-80 dark:text-dark-slate-80">
          {name}
        </p>
        <div className=" bg-light-slate-100 dark:bg-dark-gray-accent-100 p-5 shadow-lg rounded md:w-[85vh] max-w-2xl z-10">
          <p className=" text-sm text-light-gray-80 dark:text-dark-slate-80">
            {description}
          </p>
        </div>
        <div className={`flex flex-col ${reverse && "items-end"}`}>
          <p className="text-sm text-light-gray-80 dark:text-dark-slate-80">
            Built using
          </p>
          <ul
            className={`flex flex-row ${
              reverse && "justify-end"
            } flex-wrap gap-3 font-jet text-sm text-light-emerald-100 dark:text-dark-emerald-100`}
          >
            {stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row items-center text-light-emerald-100 dark:text-dark-emerald-100 ">
          <a href={sourceCode} target="_blank" rel="noreferrer">
            <FiGithub className="w-5 h-5 mr-1 cursor-pointer" />
          </a>
          <a href={link} target="_blank" rel="noreferrer">
            <BsLink45Deg className="w-7 h-7 cursor-pointer" />
          </a>
        </div>
      </div>
      <div className="relative md:w-1/2 md:h-72 h-52 w-full shadow-lg">
        <a href={link} target="_blank" rel="noreferrer">
          <img
            src={image}
            alt="project"
            className="object-cover bg-no-repeat w-full h-full rounded-md grayscale hover:grayscale-0 cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
};

export default MainProject;
