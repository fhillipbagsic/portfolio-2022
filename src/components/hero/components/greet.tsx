import { animated, useSpring } from "react-spring";
import { heroData } from "../hero.data";

const Greet = () => {
  const styles = useSpring({
    delay: 800,
    to: {
      opacity: 1,
      y: 0,
    },
    from: { opacity: 0, y: 0 },
  });

  return (
    <animated.p
      className="font-jet font-bold  text-light-emerald-100 dark:text-dark-emerald-100"
      style={styles}
    >
      {heroData.greeting}
    </animated.p>
  );
};

export default Greet;
