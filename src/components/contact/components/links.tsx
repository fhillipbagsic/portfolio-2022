import Link from "./link";
import LinkInterface from "../link.interface";
import { animated, useSpring } from "react-spring";

type LinksProps = {
  links: LinkInterface[];
  appear: boolean;
};

const Links = ({ links, appear }: LinksProps) => {
  const styles = useSpring({
    to: { opacity: appear ? 1 : 0 },
    from: { opacity: 0 },
    delay: 900,
  });

  return (
    <animated.ul className="flex flex-col gap-5" style={styles}>
      {links.map((link) => (
        <Link
          key={link.social}
          social={link.social}
          username={link.username}
          link={link.link}
        />
      ))}
    </animated.ul>
  );
};

export default Links;
