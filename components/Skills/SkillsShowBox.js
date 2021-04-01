import Image from "next/image";
import { useRouter } from "next/router";
import SimpleBar from "simplebar-react";
import { portfolio as portfolioInitial } from "../Portoflio/data";

const SkillsShowBox = ({ active }) => {
  const { points } = active;

  const projects = portfolioInitial.filter(
    (item) => item.technologies.indexOf(active.name) !== -1
  );

  const router = useRouter();

  const goToProject = (id) => {
    router.push(`/portfolio?id=${id}`);
  };

  return (
    <section className="show-box">
      <div className="show-works">
        {projects.map((project, i) => (
          <div
            key={`${project}-${i}`}
            onClick={() => goToProject(project.id)}
            className="project-item"
          >
            <Image
              src={project.images[0]}
              alt={project.name}
              width={100}
              height={100}
              unoptimized
            />
          </div>
        ))}
      </div>
      <div className="show-side">
        <span
          style={{
            textAlign: "center",
            fontFamily: "Roboto, sans-serif",
            fontWeight: "300",
          }}
          className="header"
        >
          <strong>{active.name}</strong>
        </span>
        <SimpleBar autoHide={false} className="points text">
          {points.map((point, i) => (
            <li key={i}>
              <span className="marker" />
              {point}
            </li>
          ))}
        </SimpleBar>
      </div>
      <style jsx>{`
        .project-item {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          box-shadow: 2px 10px 25px #444;
          margin: 10px;
          cursor: pointer;
          transition: 0.05s;
        }

        .project-item {
          animation: motion 3s infinite ease-in-out;
        }

        @keyframes motion {
          0% {
            transform: translate(0px, 0px);
          }

          50% {
            transform: translate(0, -10px);
          }

          100% {
            transform: translate(0px, 0px);
          }
        }

        .project-item:hover {
          transform: scale(1.5);
          transition: 0.1s;
          box-shadow: 2px 5px 10px 1px #555;
        }

        .project-item :global(img) {
          object-fit: cover;
          border-radius: 50%;
        }

        .show-box {
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: calc(100% - 60px);
          padding: 2rem 1rem;
          overflow-y: hidden;
        }

        .show-works {
          display: flex;
          height: fit-content;
          align-self: center;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          width: 100%;
          margin-right: 2rem;
        }

        .show-side {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        :global(.points) {
          list-style-type: none;
          height: 100%;
          display: flex;
        }

        :global(.points) :global(li) {
          display: grid;
          grid-template-columns: 2rem 1fr;
          padding: 0 10px 0 0;
        }

        :global(.points) :global(.marker) {
          width: 10px;
          height: 10px;
          align-self: center;
          background-color: var(--main-color);
        }

        :global(.points) :global(li:not(:last-child)) {
          margin-bottom: 2rem;
        }

        :global(.points) :global(li:last-child) {
          margin-bottom: 0.5rem;
        }

        :global(.simplebar-content-wrapper) {
          display: flex;
        }

        :global(.simplebar-content) {
          padding: 1rem 0 !important;
          margin: auto 0 !important;
        }

        :global(.simplebar-vertical) {
          margin-bottom: 5px;
        }

        @media (max-width: 1600px) {
          .project-item {
            width: 60px;
            height: 60px;
          }

          .show-works,
          .show-side {
            width: 48%;
          }
        }

        @media (max-width: 650px) {
          .show-box {
            flex-direction: column;
          }

          .show-works,
          .show-side {
            width: 100%;
            height: 50%;
          }

          .project-item {
            width: 50px;
            height: 50px;
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsShowBox;
