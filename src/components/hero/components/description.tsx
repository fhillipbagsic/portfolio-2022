import { animated, useSpring } from "react-spring";

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
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. Exercitation veniam
      consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est
      sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
      mollit. Exercitation veniam consequat sunt nostrud amet.
    </animated.p>
  );
};

export default Description;
