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
      As i am currently seeking for a remote job, please feel free to contact me
      if you are interested. Below are the handles that you can use to send me a
      message.
    </animated.p>
  );
};

export default Description;
