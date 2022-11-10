import { animated, useSpring } from "react-spring";

const Resume = () => {
  const styles = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 800,
  });
  return (
    <animated.a
      style={styles}
      href="https://res.cloudinary.com/desimscj8/image/upload/v1668070887/myresume/Bagsic_-_Resume_tjfgml.pdf"
      target="_blank"
      rel="noreferrer"
      className="text-light-emerald-100 dark:text-dark-emerald-100 font-jet capitalize border-2 py-1 px-3 rounded text-sm"
    >
      resume
    </animated.a>
  );
};

export default Resume;
