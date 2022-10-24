import { useSpring, animated } from "react-spring";

type DescriptionProps = {
  appear: boolean;
};
const Description = ({ appear }: DescriptionProps) => {
  const styles = useSpring({
    delay: 900,
    to: { opacity: appear ? 1 : 0, y: 0 },
    from: { opacity: 0, y: 0 },
  });

  return (
    <animated.p style={styles}>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. Exercitation veniam
      consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est
      sit aliqua dolor do amet sint.
      <br />
      <br /> Velit officia consequat duis enim velit mollit. Exercitation veniam
      consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit
      aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
      <br /> <br />
      Velit officia consequat duis enim velit mollit. Exercitation veniam
      consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit
      aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. Exercitation veniam
      consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est
      sit aliqua dolor do amet sint.
    </animated.p>
  );
};

export default Description;
