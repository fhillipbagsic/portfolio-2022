import { useContext } from "react";
import { BsDot } from "react-icons/bs";
import { animated, useSpring } from "react-spring";
import { StateContext } from "../../app/StateContext";

type NavItemProps = {
  label: string;
  currentSection: string;
  link: string;
};

const NavItem = ({ label, currentSection, link }: NavItemProps) => {
  const { darkMode } = useContext(StateContext);
  const styles = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 400,
  });

  return (
    <animated.li
      className={`md:my-auto flex flex-col items-center text-light-gray-50 ${
        currentSection === label && "text-light-gray-100"
      } dark:text-dark-slate-50 ${
        currentSection === label && "dark:text-dark-slate-100"
      } ${currentSection === label && "font-bold"}`}
      style={styles}
    >
      <a href={link}>{label}</a>
      {currentSection === label && (
        <BsDot
          className={`absolute bottom-2 ${
            darkMode ? "text-dark-emerald-100" : "text-light-emerald-100"
          } w-5 h-5`}
        />
      )}
    </animated.li>
  );
};

export default NavItem;
