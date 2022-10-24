import { animated, useSpring } from "react-spring";

type FooterProps = {
  appear: boolean;
};
const Footer = ({ appear }: FooterProps) => {
  const styles = useSpring({
    to: { opacity: appear ? 1 : 0 },
    from: { opacity: 0 },
    delay: 900,
  });

  const year = new Date().getFullYear();

  return (
    <animated.footer
      className="flex justify-center mb-5 absolute bottom-1 left-0 right-0"
      style={styles}
    >
      <p className=" font-black text-light-emerald-100 dark:text-dark-emerald-100 uppercase">
        made with ❤️ {year}
      </p>
    </animated.footer>
  );
};

export default Footer;
