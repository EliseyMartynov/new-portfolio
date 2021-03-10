import Image from "next/image";
import { useRouter } from "next/router";
import { config, Keyframes } from "react-spring/renderprops.cjs";
import { portfolio as portfolioInitial } from "../Portoflio/data";

const SkillsShowBox = ({ active }) => {
  const { points } = active;

  const projects = portfolioInitial.filter(
    (item) => item.technologies.indexOf(active.name) !== -1
  );

  const Container = ({ index, children }) => {
    const Component = Keyframes.Spring(async (next) => {
      while (true) {
        await next({
          from: { transform: "translate(0px, 0px)" },
          to: {
            transform: `translate(${Math.random() * 5 * index}px, ${
              (index + 1) * -15
            }px)`,
          },
          delay: 0,
          config: { ...config.slow, duration: 2000 },
        });
        await next({
          to: {
            transform: `translate(${Math.random() * 5 * index}px, ${
              (index + 1) * 15
            }px)`,
          },
          from: {
            transform: `translate(0px, 0px)`,
          },
          config: { ...config.gentle, duration: 4000 },
        });
      }
    });

    return <Component>{children}</Component>;
  };

  const router = useRouter();

  const goToProject = (id) => {
    router.push(`/portfolio?id=${id}`);
  };

  return (
    <section className="show-box">
      <div className="show-works">
        {projects.map((project, i) => (
          <Container index={i} key={`${project.name}-${i}`}>
            {(props) => (
              <div
                onClick={() => goToProject(project.id)}
                style={props}
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
            )}
          </Container>
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
        <ul className="points text">
          {points.map((point, i) => (
            <li key={i}>
              <span className="marker" />
              {point}
            </li>
          ))}
        </ul>
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
        }

        .show-works {
          display: flex;
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

        .points {
          list-style-type: none;
          padding: 1.25rem 0;
          margin: auto 0;
        }

        .points :global(li) {
          display: grid;
          grid-template-columns: 2rem 1fr;
        }

        .points :global(.marker) {
          width: 10px;
          height: 10px;
          align-self: center;
          background-color: var(--main-color);
        }

        .points :global(li:not(:last-child)) {
          margin-bottom: 2rem;
        }
      `}</style>
    </section>
  );
};

export default SkillsShowBox;
