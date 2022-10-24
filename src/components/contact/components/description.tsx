import { animated, useSpring } from "react-spring";

type DescriptionProps = {
  appear: boolean;
};

const Description = ({ appear }: DescriptionProps) => {
  const styles = useSpring({
    to: { opacity: appear ? 1 : 0 },
    from: { opacity: 0 },
    delay: 700,
  });

  return (
    <animated.p
      className=" text-light-gray-80 dark:text-dark-slate-80 max-w-lg"
      style={styles}
    >
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. Exercitation veniam
      consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est
      sit aliqua dolor do amet sint.{" "}
    </animated.p>
  );
};

export default Description;
