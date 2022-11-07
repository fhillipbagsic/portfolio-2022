import { FiCornerRightDown } from "react-icons/fi";
import { animated, useSpring } from "react-spring";

const Button = () => {
  const styles = useSpring({
    delay: 1400,
    to: {
      y: 0,
      opacity: 1,
    },
    from: {
      y: 0,
      opacity: 0,
    },
  });

  return (
    <animated.div
      className="flex flex-row items-center gap-1 text-light-emerald-100 dark:text-dark-emerald-100"
      style={styles}
    >
      <a href="#aboutme" className="  font-jet">
        More about me
      </a>
      <FiCornerRightDown className=" h-5 w-5" />
    </animated.div>
  );
};

export default Button;
