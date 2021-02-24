import Head from "next/head";
import { useState } from "react";
import { data } from "../components/Skills/data";
import SkillsShowBox from "../components/SkillsShowBox";

export default function Skills() {
  const [active, setActive] = useState(data[0]);
  const [translate, setTranslate] = useState(-50);

  const indexActive = data.indexOf(
    data.find((item) => item.name === active.name)
  );

  return (
    <>
      <Head>
        <title>Elisey Martynov: Skills</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="section">
        <span className="header" style={{ marginBottom: "2rem" }}>
          Skills
        </span>
        <div className="skills-box">
          <div className="nav">
            {data.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  setActive(item);
                  setTranslate(i > indexActive ? -50 : 50);
                }}
                className={`nav-item ${
                  item.name === active.name ? "active" : ""
                }`}
              >
                {item.badge}
                <div className="carousel-item" />
              </div>
            ))}
          </div>
          <SkillsShowBox active={active} />
        </div>
      </section>
      <style jsx>{`
        .section {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: auto;
          width: var(--container);
          height: calc(80vh - 60px);
          z-index: 1;
        }

        .skills-box {
          display: flex;
          flex-direction: column;
          background-color: var(--second-color);
          width: 100%;
          border-radius: 7px;
          box-shadow: 0 0 0 4px var(--main-color);
          overflow-y: auto;
        }

        .nav {
          display: flex;
          width: 100%;
          height: 60px;
          border-bottom: 2px solid var(--main-color);
          background: var(--main-color);
        }

        .nav-item {
          display: flex;
          flex-direction: column;
          cursor: pointer;
          width: 100%;
          fill: var(--text-contrast);
          padding-top: 4px;
        }

        .nav-item:hover {
          fill: var(--second-color);
        }

        .nav-item:first-child {
          border-top-left-radius: 0px;
        }

        .nav-item:last-child {
          border-top-right-radius: 7px;
        }

        .nav-item:not(:last-child) {
          margin-right: 0.5rem;
        }

        .nav-item :global(svg) {
          width: 100%;
          height: 100%;
        }

        .carousel-item {
          width: 100%;
          border: 2px solid var(--text-contrast);
          height: 0.8rem;
          margin-top: 4px;
        }

        .active > .carousel-item {
          background: var(--text-contrast);
          animation: carouselAnimation 0.5s ease-out;
        }

        @keyframes carouselAnimation {
          0% {
            transform: translateX(${translate}px);
          }

          100% {
            transform: translateX(0px);
          }
        }

        .active:hover {
          fill: var(--text-contrast);
        }
      `}</style>
    </>
  );
}
