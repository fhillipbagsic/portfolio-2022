import { FiGithub } from "react-icons/fi";
import { BsLink45Deg } from "react-icons/bs";
import ProjectInterface from "../project.interface";

const SideProject = ({
  type,
  name,
  image,
  description,
  stack,
  sourceCode,
  link,
  twoCols,
}: ProjectInterface) => {
  console.log(stack);
  return (
    <div
      className={`${
        twoCols && `md:col-span-2`
      } flex flex-col gap-2 bg-light-slate-100 dark:bg-dark-gray-accent-100 rounded-md shadow-lg p-4 hover:-translate-y-3`}
    >
      <p className="font-jet font-medium italic text-xs mb-1 text-light-emerald-100 dark:text-dark-emerald-100">
        {type}
      </p>
      <p className="font-bold text-xl text-light-gray-80 dark:text-dark-slate-80">
        {name}
      </p>
      <div className=" w-full h-40">
        <a href={link} target="_blank" rel="noreferrer">
          <img
            src={image}
            alt="side project"
            className=" w-full h-full object-cover rounded-sm duration-300 grayscale hover:grayscale-0 cursor-pointer"
          />
        </a>
      </div>
      <p className="flex-1 text-sm text-light-gray-80 dark:text-dark-slate-80">
        {description}
      </p>
      <div className="flex flex-row items-center text-light-emerald-100 dark:text-dark-emerald-100">
        <ul className="flex flex-row flex-wrap flex-1 gap-3 font-jet text-sm ">
          {stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a href={sourceCode} target="_blank" rel="noreferrer">
          <FiGithub className="w-5 h-5 mr-1 cursor-pointer" />
        </a>
        <a href={link} target="_blank" rel="noreferrer">
          <BsLink45Deg className="w-7 h-7 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default SideProject;
