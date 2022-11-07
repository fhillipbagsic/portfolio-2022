import { animated, useSpring } from "react-spring";
import { heroData } from "../hero.data";

const SecondHeading = () => {
  const styles = useSpring({
    delay: 1200,
    to: { opacity: 1, y: 0 },
    from: { opacity: 0, y: 0 },
  });

  return (
    <animated.p
      className=" font-bold text-4xl text-light-gray-50 dark:text-dark-slate-50"
      style={styles}
    >
      {heroData.secondHeading}
    </animated.p>
  );
};

export default SecondHeading;
