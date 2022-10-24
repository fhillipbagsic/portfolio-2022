import { useState } from "react";
import Section from "../section";
import Description from "./components/description";
import Image from "./components/image";

const Aboutme = () => {
  const [appear, setAppear] = useState(false);

  return (
    <Section
      title="01. About me"
      link="aboutme"
      appear={appear}
      setAppear={setAppear}
    >
      <div className="flex md:flex-row flex-col md:gap-36 items-center gap-20 text-light-dark-80 dark:text-dark-slate-80 text-lg">
        <Description appear={appear} />
        <Image appear={appear} />
      </div>
    </Section>
  );
};

export default Aboutme;
