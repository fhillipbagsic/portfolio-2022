import { useState } from "react";
import { useSpring, animated } from "react-spring";
import Section from "../section";
import MainProject from "./components/mainproject";
import { mainProjects, sideProjects } from "./projects.data";
import SideProject from "./components/sideproject";

const Projects = () => {
  const [appear, setAppear] = useState(false);
  const styles = useSpring({
    to: { opacity: appear ? 1 : 0 },
    from: { opacity: 0 },
    delay: 800,
  });

  return (
    <Section
      title="02. Projects"
      link="projects"
      appear={appear}
      setAppear={setAppear}
    >
      <animated.div className="flex flex-col gap-12" style={styles}>
        {mainProjects.map((project) => (
          <MainProject
            key={project.name}
            type={project.type}
            name={project.name}
            image={project.image}
            description={project.description}
            stack={project.stack}
            sourceCode={project.sourceCode}
            link={project.link}
            reverse={project.reverse}
          />
        ))}
        <div className=" grid gap-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {sideProjects.map((project) => (
            <SideProject
              key={project.name}
              type={project.type}
              name={project.name}
              image={project.image}
              description={project.description}
              stack={project.stack}
              sourceCode={project.sourceCode}
              link={project.link}
              twoCols={project.twoCols}
            />
          ))}
        </div>
      </animated.div>
    </Section>
  );
};

export default Projects;
