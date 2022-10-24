import { SetStateAction } from "react";
import { animated, useSpring } from "react-spring";
import { Waypoint } from "react-waypoint";

type SectionProps = {
  title: string;
  children: React.ReactNode;
  link: string;
  appear: boolean;
  setAppear: React.Dispatch<SetStateAction<boolean>>;
};

const Section = ({
  title,
  children,
  link,
  appear,
  setAppear,
}: SectionProps) => {
  const styles = useSpring({
    delay: 600,
    to: {
      opacity: appear ? 1 : 0,
      y: 0,
    },
    from: { opacity: 0, y: 0 },
  });
  return (
    <Waypoint onEnter={() => setAppear(true)}>
      <section
        id={link}
        className="relative flex flex-col gap-12 pt-24 mt-5 min-h-screen justify-center"
      >
        <animated.p
          className="text-light-emerald-100 dark:text-dark-emerald-100 font-jet text-2xl font-bold"
          style={styles}
        >
          {title}
        </animated.p>
        {children}
      </section>
    </Waypoint>
  );
};

export default Section;
