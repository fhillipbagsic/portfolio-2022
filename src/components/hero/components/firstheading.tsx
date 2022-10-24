import { animated, useSpring } from "react-spring";

const FirstHeading = () => {
  const styles = useSpring({
    delay: 900,
    to: { opacity: 1, y: 0 },
    from: { opacity: 0, y: 0 },
  });

  return (
    <animated.p
      className=" font-bold text-5xl text-light-gray-80 dark:text-dark-slate-80"
      style={styles}
    >
      Lorem ipsum it dolor
    </animated.p>
  );
};

export default FirstHeading;
