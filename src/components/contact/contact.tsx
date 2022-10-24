import { useState } from "react";
import Footer from "../footer";
import Section from "../section";
import Description from "./components/description";
import Links from "./components/links";
import links from "./links.data";

const Contact = () => {
  const [appear, setAppear] = useState(false);

  return (
    <Section
      title="04. Contacts"
      link="contact"
      appear={appear}
      setAppear={setAppear}
    >
      <Description appear={appear} />
      <Links links={links} appear={appear} />
      <Footer appear={appear} />
    </Section>
  );
};

export default Contact;
