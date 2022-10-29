import { animated, useSpring } from "react-spring";
import { heroData } from "../hero.data";

const Description = () => {
  const styles = useSpring({
    delay: 1100,
    to: { opacity: 1, y: 0 },
    from: { opacity: 0, y: 0 },
  });

  return (
    <animated.p
      className="max-w-2xl text-lg text-light-gray-80 dark:text-dark-slate-80"
      style={styles}
    >
      {heroData.description}
    </animated.p>
  );
};

export default Description;
