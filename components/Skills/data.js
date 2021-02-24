import Css from "./Css";
import Figma from "./Figma";
import Html from "./Html";
import Javascript from "./Javascript";
import Node from "./Node";
import Postgresql from "./Postgresql";
import React from "./React";
import Redux from "./Redux";

const data = [
  {
    name: "Javascript",
    badge: <Javascript />,
    points: [
      "ES6+",
      "Used in every project",
      "Understanding of asynchronous principles of language",
      "Event loop",
      "Etc.",
    ],
  },
  {
    name: "React",
    badge: <React />,
    points: [
      "My choise because of rich libraries pool for any task",
      "I've worked with UI libraries like Recharts, React-data-grid, React-beautiful-dnd and many others",
      "Class components & hooks",
      "Currently using it on my work",
      "Also I know Vue and I've used it's ecosystem (Vuex, Router) - it was my first framework. But I decided to not define it separately just in case they're very similar",
    ],
  },
  {
    name: "Redux",
    badge: <Redux />,
    points: ["Using this mainly with Redux Toolkit"],
  },
  {
    name: "NodeJS",
    badge: <Node />,
    points: [
      "Sometimes I'm doing full-stack pet-development using Node",
      "Mainly used with Express",
      "Building simple API",
      "Completed development test-task using Node",
    ],
  },
  {
    name: "Postgresql®",
    badge: <Postgresql />,
    points: [
      "I know SQL a bit and used it within Posgresql in my pet-projects",
      "Used with node-postgres",
      "Building simple API",
      "Also completed development test-task using it (with Sequelize)",
    ],
  },
  {
    name: "HTML",
    badge: <Html />,
    points: [
      "This is always hard to stop using divs everywhere but I'm trying...",
    ],
  },
  {
    name: "CSS",
    badge: <Css />,
    points: ["Everyone says CSS is more difficult than you could thought of"],
  },
  {
    name: "Figma",
    badge: <Figma />,
    points: [
      "I did prototypes of that portfolio in Figma and that increased my skills of it",
    ],
  },
];

export { data };
