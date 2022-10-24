import { CgShapeCircle } from "react-icons/cg";
import SkillsInterface from "../skill.interface";

const Skills = ({ skill, skills }: SkillsInterface) => {
  return (
    <div className=" flex-1 text-light-gray-80 dark:text-dark-slate-80">
      <p className=" font-semibold text-2xl mb-5">{skill}</p>
      <ul className="font-jet grid md:grid-cols-2 grid-cols-3 gap-3">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center gap-1">
            <CgShapeCircle className=" w-3 h-3 text-light-emerald-100 dark:text-dark-emerald-100" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
