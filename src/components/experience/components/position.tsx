import { CgShapeCircle } from "react-icons/cg";
import PositionInterface from "../position.interface";

const Position = ({
  position,
  company,
  duration,
  descriptions,
}: PositionInterface) => {
  return (
    <div className="flex flex-col gap-1 text-light-gray-80 dark:text-dark-slate-80">
      <p className="font-semibold text-xl ">{position}</p>
      <p className="font-medium">{company}</p>
      <p className="font-medium italic text-sm text-light-emerald-100 dark:text-dark-emerald-100">
        {duration}
      </p>
      <ul className="mt-1">
        {descriptions.map((description) => (
          <li key={description} className="flex items-center gap-1 mb-2">
            <CgShapeCircle className="w-5 h-5 text-light-emerald-100 dark:text-dark-emerald-100" />
            {description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Position;
