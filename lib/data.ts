import ToDoListImg from "@/public/todolist.png";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { BsFiletypeHtml } from "react-icons/bs";
import { LuGraduationCap } from "react-icons/lu";
import ThreadAppImg from "@/public/threadapp.png";
import DailyJournalImg from "@/public/dailyjournal.png";
import TaskNest from "@/public/tasknestapp.png";
import React from "react";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Developer",
    location: "Remote",
    description:
      "I worked as a Frontend Developer Intern at Pixel Stitch, where I ensured a seamless user experience using modern web technologies. I handled UI-related bugs and errors, and continuously updated the user interface to enhance performance and usability",
    icon: React.createElement(FaReact),
    date: "Feb 2024 - May 2024",
  },
  {
    title: "Frontend Developer",
    location: "Howrah, West Bengal",
    description:
      "I worked as a Frontend Developer Intern at Cv Dragion India, where I developed their website from scratch. I focused on building a responsive and scalable platform, ensuring a seamless user experience with modern web technologies.",
    icon: React.createElement(FaReact),
    date: "Dec 2024 - May 2025",
  },

  {
    title: "HTML Developer",
    location: "Freelancer",
    description:
      "I worked as an HTML Developer at Zorcha, where I built website templates from scratch by exactly replicating designs provided in Canva. I focused on creating responsive and scalable layouts to ensure a seamless user experience using modern web technologies.",
    icon: React.createElement(BsFiletypeHtml),
    date: "Jun 2025 - July 2025",
  },
] as const;

export const projectsData = [
  {
    title: "Url Shortner",
    description:
      "A sleek and responsive URL shortener that simplifies link management with real-time generation, custom aliases, and click tracking. Designed for efficiency and a clean user experience.",
    tags: ["Node", "Mongodb", "Express", "Postman", "Convex"],
    // imageUrl: TaskNest,
    // link: "https://task-nest-willium.vercel.app/",
  },
  {
    title: "To-Do List",
    description:
      "Boost productivity with a sleek MERN-powered to-do list app featuring real-time task management, intuitive UI, and persistent storage. Designed for speed, clarity, and ease of use.",
    tags: ["Node.js", "Express.js", "MongoDB"],
    // imageUrl: DailyJournalImg,
    link: "https://todo-list-czip.vercel.app/",
  },
  {
    title: "WeatherApp",
    description:
      "Real-time, location-based weather app with accurate forecasts, sleek UI, and smooth user experience.",
    tags: ["React.js", "CSS", "Tailwind CSS", "Weather API", "Client-side"],
    imageUrl: ThreadAppImg,
    link: "https://weatherapp-bice-three.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "Postman",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Bootstrap",
  "APIs",
  "DSA",
  "Convex",
  "Client",
] as const;
