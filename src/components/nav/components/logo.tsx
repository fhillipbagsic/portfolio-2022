import { animated, useSpring } from "react-spring";

const Logo = () => {
  const styles = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 300,
  });

  return (
    <animated.a
      href=""
      className="font-bold text-3xl text-light-emerald-100 dark:text-dark-emerald-100 cursor-pointer"
      style={styles}
    >
      FC
    </animated.a>
  );
};

export default Logo;
