import { useContext, useEffect, useState } from "react";
import NavItem from "./components/navitem";
import Logo from "./components/logo";
import ThemeChanger from "./components/themechanger";

import navs from "./nav.data";
import { StateContext } from "../app/StateContext";
import NavDrawer from "./components/navdrawer";
import Resume from "./components/resume";

const Nav = () => {
  const { darkMode, isDrawerOpen } = useContext(StateContext);
  const [currentSection, setCurrentSection] = useState("");
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;
      if (currentY > 33) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const aboutme = document.getElementById("aboutme");
    const projects = document.getElementById("projects");
    const experience = document.getElementById("experience");
    const contact = document.getElementById("contact");

    function handleSectionChange() {
      const windowY = Math.ceil(window.scrollY);
      const aboutmeTop = Math.ceil(aboutme?.getBoundingClientRect().top!);
      const projectsTop = Math.ceil(projects?.getBoundingClientRect().top!);
      const experienceTop = Math.ceil(experience?.getBoundingClientRect().top!);
      const contactTop = Math.ceil(contact?.getBoundingClientRect().top!);

      if (aboutmeTop <= 1) {
        setCurrentSection("About me");
      }
      if (projectsTop <= 1) {
        setCurrentSection("Projects");
      }
      if (experienceTop <= 1) {
        setCurrentSection("Experience");
      }
      if (contactTop <= 1) {
        setCurrentSection("Contact");
      }
      if (windowY === 0) {
        setCurrentSection("");
      }
    }

    window.addEventListener("scroll", handleSectionChange);
    return () => window.removeEventListener("scroll", handleSectionChange);
  }, []);

  const links = navs.map((nav) => (
    <NavItem
      key={nav.label}
      label={nav.label}
      currentSection={currentSection}
      link={nav.link}
    />
  ));

  return (
    <nav
      className={`flex justify-between items-center sticky top-0 py-2 lg:px-10 px-6 bg-light-slate-90 dark:bg-dark-gray-100 z-20 h-20 ${
        showShadow && `${darkMode ? "shadow-xl" : "shadow"}`
      }`}
    >
      <Logo />
      <ul className="md:flex justify-center hidden flex-row gap-16 text-base font-jet">
        {links}
      </ul>
      <div className="flex flex-row gap-3 items-center">
        <NavDrawer />
        <Resume />
        <ThemeChanger />
      </div>
      <div
        className={`md:hidden fixed h-screen w-1/3 min-w-min bg-light-slate-90 dark:bg-dark-gray-100 top-20 right-0 flex flex-col pt-5 items-center gap-10 shadow-lg translate-x-full ${
          isDrawerOpen && "translate-x-0 "
        }`}
      >
        {links}
      </div>
    </nav>
  );
};

export default Nav;
