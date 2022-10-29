import PositionInterface from "./position.interface";

const positions: PositionInterface[] = [
  {
    position: "Freelance Developer",
    company:
      "National University College of Computing and Information Technology",
    duration: "July 2022 - September 2022",
    descriptions: [
      "Developed an information system application along with a team for a local government agency using MERN stack",
      "Built a backend server for a mood tracker and daily journal application using Express.",
    ],
  },
  {
    position: "Application Software Developer Intern",
    company: "Orient Overseas Container Lines",
    duration: "March 2022 - May 2022",
    descriptions: [
      "Identified and examined code errors in the existing system that caused production issues.",
      "Developed an internal training monitoring application with the team that monitors the training status of the trainee.",
    ],
  },
  {
    position: "Technical Support Intern",
    company: "Orient Overseas Container Lines",
    duration: "December 2021 - February 2022",
    descriptions: [
      "Investigated and solved trouble tickets that are mission-critical to the company’s daily operation.",
      "Collaborated with product owners and business analysts to perform logic investigation of existing applications to resolve business processes issues.",
    ],
  },
];

export default positions;
