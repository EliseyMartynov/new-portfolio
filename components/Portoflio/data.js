const portfolio = [
  {
    id: 1,
    name: "Reactive todo app (full-stack)",
    description:
      "Todo app based on PostgreSQL | EXPRESS | REACT | NODE stack. Big thanks to Traversy Media who shows how to work with full-stack apps.",
    images: ["/images/Todo1.png", "/images/Todo2.png"],
    link: "https://reactive-todo-app.herokuapp.com/",
    repo: "https://github.com/magistrfox/reactive-todo-app",
    tags: ["pet"],
    technologies: [
      "Javascript",
      "React",
      "Redux",
      "NodeJS",
      "Postgresql®",
      "HTML",
      "CSS",
    ],
  },
  {
    id: 2,
    name: "React mobile imitation app",
    description: `WARNING! API of employer is depricated that's why api calls functionality will not work.
      Anyways that was an imitatin of a mobile app with React and 'Google map react' package.
      No desktop version. I think you can only be interested in mobile layout here that I've created from provided XD design.`,
    images: [
      "/images/SpotTest1.png",
      "/images/SpotTest2.png",
      "/images/SpotTest3.png",
    ],
    link: "http://magistrfox.gitlab.io/spot-test/",
    repo: "https://gitlab.com/magistrfox/spot-test",
    tags: ["test"],
    technologies: ["Javascript", "React", "HTML", "CSS"],
    fit: "scale-down",
  },
  {
    id: 3,
    name: "Node app with AdminBro",
    description: `WARNING! I don't post email and password here to avoid changing data by random people. This can break the chart.
      Anyways that was a test task. You can check the readme in repo to get more details.
      The app is responsive but that's only because of AdminBro made it. Used additional libraries like: AdminBro (Huge main library) dotenv, pg, recharts, sequelize and etc. Express as a framework.`,
    images: ["/images/Admin1.png", "/images/Admin2.png"],
    link: "https://stark-tor-09827.herokuapp.com/admin/",
    repo: "https://github.com/magistrfox/dashboard-test-task",
    tags: ["test"],
    technologies: ["NodeJS", "Postgresql®", "Javascript", "React"],
  },
];

export { portfolio };
