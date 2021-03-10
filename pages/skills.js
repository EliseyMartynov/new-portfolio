import Head from "next/head";
import { useState } from "react";
import { skills } from "../components/Skills/data";
import SkillsShowBox from "../components/Skills/SkillsShowBox";

export default function Skills() {
  const [active, setActive] = useState(skills[0]);
  const [translate, setTranslate] = useState(-50);

  const indexActive = skills.indexOf(
    skills.find((item) => item.name === active.name)
  );

  return (
    <>
      <Head>
        <title>Elisey Martynov: Skills</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="section">
        <div className="skills-box">
          <div className="nav">
            {skills.map((item, i) => (
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
                <span
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: "100",
                  }}
                >
                  {item.badge}
                </span>
                <div className="carousel-item" />
              </div>
            ))}
          </div>
          <SkillsShowBox active={active} />
        </div>
      </section>
      <style jsx>{`
        .skills-box {
          display: flex;
          flex-direction: column;
          background: var(--second-rgba);
          width: 100%;
          height: 100%;
          border-radius: 7px;
          border: 4px solid var(--main-color);
          overflow-y: auto;
          z-index: 1;
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
          justify-content: space-between;
          cursor: pointer;
          width: 100%;
          color: var(--text-contrast);
          padding-top: 4px;
          font-size: 1.25rem;
        }

        .nav-item > :global(span) {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .nav-item:hover {
          color: var(--second-color);
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
          color: var(--text-contrast);
        }
      `}</style>
    </>
  );
}
