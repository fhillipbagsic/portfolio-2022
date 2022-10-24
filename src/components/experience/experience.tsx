import skills from "./skills.data";
import Position from "./components/position";
import Skills from "./components/skills";
import positions from "./position.data";
import Section from "../section";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

const Experience = () => {
  const [appear, setAppear] = useState(false);
  const styles = useSpring({
    to: { opacity: appear ? 1 : 0 },
    from: { opacity: 0 },
    delay: 800,
  });

  return (
    <Section
      title="03. Experience and relevant skills"
      link="experience"
      appear={appear}
      setAppear={setAppear}
    >
      <animated.div
        className="grid md:grid-cols-2 grid-cols-1 gap-14"
        style={styles}
      >
        {positions.map((position) => (
          <Position
            key={position.position}
            position={position.position}
            company={position.company}
            duration={position.duration}
            descriptions={position.descriptions}
          />
        ))}
      </animated.div>
      <animated.div
        className="flex md:flex-row flex-col md:gap-16 gap-8"
        style={styles}
      >
        {skills.map((skill) => (
          <Skills key={skill.skill} skill={skill.skill} skills={skill.skills} />
        ))}
      </animated.div>
    </Section>
  );
};

export default Experience;
