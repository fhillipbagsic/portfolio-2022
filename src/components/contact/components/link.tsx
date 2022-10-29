import LinkInterface from "../link.interface";
import { MdAlternateEmail } from "react-icons/md";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import React from "react";

const icons = {
  email: <MdAlternateEmail className="w-6 h-6" />,
  linkedin: <FiLinkedin className="w-6 h-6" />,
  github: <FiGithub className="w-6 h-6" />,
};

const Link = ({ social, username, link }: LinkInterface) => {
  return (
    <li className=" text-light-emerald-100 dark:text-dark-emerald-100 flex flex-row items-center gap-2 text-sm font-medium">
      {social === "email" && icons["email"]}
      {social === "linkedin" && icons["linkedin"]}
      {social === "github" && icons["github"]}
      <a href={link} target="_blank" rel="noreferrer">
        {username}
      </a>
    </li>
  );
};

export default Link;
