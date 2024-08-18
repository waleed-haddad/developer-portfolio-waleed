import project1 from "../assets/projects/project-1-planit.png";
import project2 from "../assets/projects/project-2-squadup.png";
import project3 from "../assets/projects/project-3-pluto.png";
import project4 from "../assets/projects/project-4-checkup.png";

export const PROFILE_CONTENT = `I am a passionate full stack developer with an interest in robust and scalable web and mobile applications. With numerous projects and an internship under my belt, I aim to further hone my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, Docker, and MongoDB. My goal is to leverage my past experiences and my strong communication skills to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "May 2024 - Present",
    role: "Software Developer Intern",
    company: "Crypto4A Technologies",
    description: `Involved in designing, writing and testing software for Crypto4A's 'QxEDGE' security platform, by using Python and Bash scripts to setup logging services. Utilized Jenkins to automate testing for new software as well as troubleshoot and provide bugfixes. Setup and ran dockerized containers for services linked to 'QxEDGE' platform.`,
    technologies: ["Python", "Jenkins", "Docker", "Bash"],
  },
  {
    year: "May 2023 - Aug 2023",
    role: "GIS Technician Intern",
    company: "University Of Toronto",
    description: `Collaborated with Department of Physical & Environmental Sciences to perform GIS data analysis using ArcGIS and RStudio. Assisted in the production of maps and databases with ArcGIS, and summary reports with Excel. Developed Python scripts for ArcGIS projects to increase automation, efficiency, and precision of resulting data.`,
    technologies: ["Python", "ArcGIS", "RStudio", "Excel"],
  },
];

export const PROJECTS = [
  {
    title: "PlanIt - Web Application",
    image: project1,
    description:
      "A full stack web-application which allows users to plan group trips interactively. Core features include voting on travel ideas, interactive planning board, budget tracking, Google Maps integration and user authentication.",
    technologies: ["React", "MaterialUI", "ExpressJS", "MongoDB"],
  },
  {
    title: "SquadUp - Mobile App",
    image: project2,
    description:
      "A full stack mobile application for both Iphone and Android which uses community to foster physical health. Users can make groups, track progress for fitness and sports, add squad events which sync between members, and connect to university databases to display drop-in sports schedules.",
    technologies: ["React Native", "Python", "Firebase", "Figma"], 
  },
  {
    title: "Pluto Financial - eLearning Platform",
    image: project3,
    description:
      "Worked as the project manager for an elearning platform known as Pluto Financial, setting up weekly meetings and project milestones. The platform teaches users about financial literacy through interactive modules with videos and quizzes, progress tracking, and bank sponsorships.",
    technologies: ["Vite", "NodeJs", "Jira", "Figma"],
  },
  {
    title: "CheckUp - Mobile App",
    image: project4,
    description:
      "A simple, easy-to-use mobile app which reminds users to check up on friends in a set interval. This project served as the basis for me teaching myself React Native and Firebase authentication.",
    technologies: ["React Native", "ExpoGO", "Firebase"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
