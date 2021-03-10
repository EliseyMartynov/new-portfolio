import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Select from "react-select";
import { customSelect, customTheme } from "../components/customSelectProps";
import { portfolio as portfolioInitial } from "../components/Portoflio/data";
import LeftSide from "../components/Portoflio/LeftSide";

export default function Portfolio() {
  const [portfolio, setPortfolio] = useState(portfolioInitial);
  const [current, setCurrent] = useState(portfolio[0]);
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedType, setSelectedType] = useState("all");
  const [selectedSkills, setSelectedSkills] = useState([]);

  const projectType = [
    { value: "all", label: "All" },
    { value: "pet", label: "Pet projects" },
    { value: "test", label: "Test tasks for jobs" },
  ];

  const technologies = [
    { value: "Javascript", label: "Javascript" },
    { value: "React", label: "React" },
    { value: "Redux", label: "Redux" },
    { value: "NodeJS", label: "NodeJS" },
    { value: "Postgresql®", label: "Postgresql®" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
  ];

  const selectProject = (index) => {
    setCurrent(portfolio[index]);
  };

  const filtersHandler = ({ value, options }) => {
    const valueScope = value ? value : selectedType;
    const optionsValues = options
      ? options.map((opt) => opt.value)
      : selectedSkills.map((opt) => opt.value);
    console.log(valueScope);
    console.log(optionsValues);

    setPortfolio(
      portfolioInitial
        .filter((item) =>
          valueScope === "all" ? item : item.tags.indexOf(valueScope) !== -1
        )
        .filter((item) =>
          optionsValues.length > 0
            ? !optionsValues.some(
                (option) => item.technologies.indexOf(option) === -1
              )
            : item
        )
    );
  };

  return (
    <>
      <Head>
        <title>Elisey Martynov: Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="section">
        <LeftSide
          data={{
            current,
            imageIndex,
            setImageIndex,
          }}
        />
        <aside className="navigation">
          <div className="selectors">
            <span>SORT</span>
            <Select
              options={projectType}
              placeholder="Type of project..."
              isSearchable={false}
              styles={customSelect}
              theme={customTheme}
              onChange={(option) => {
                filtersHandler({ value: option.value });
                setSelectedType(option.value);
              }}
            />
            <Select
              options={technologies}
              onChange={(options) => {
                filtersHandler({ options });
                setSelectedSkills(options);
              }}
              isMulti
              closeMenuOnSelect={false}
              isClearable={false}
              placeholder="Technologies..."
              styles={customSelect}
              theme={customTheme}
              isMulti
            />
          </div>
          <div className="list">
            <span>PROJECTS</span>
            {portfolio.map((item, i) => (
              <div
                onClick={() => selectProject(i)}
                key={`${item}--${i}`}
                className={`
                list-item
                ${current.name === item.name ? "list-item-active" : ""}
                `}
              >
                <div className="list-preview">
                  <img src={item.images[0]} />
                </div>
                <div className="list-right-side">
                  <span>{item.name}</span>
                  <div className="skills">
                    {item.technologies.map((tech) => (
                      <div key={tech} className="skill">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </section>
      <style jsx>{`
        :global(.section) {
          flex-direction: row;
          width: 90%;
        }

        .navigation {
          display: flex;
          flex-direction: column;
          width: 30%;
          height: 100%;
          margin-left: 2rem;
          background: var(--second-rgba);
          z-index: 1;
          border-radius: 7px;
        }

        .selectors {
          margin-bottom: 1rem;
          padding: 1rem;
          border-bottom: 2px solid var(--second-color);
        }

        .list {
          padding: 0 1rem 1rem 1rem;
        }

        .selectors > :global(span),
        .list > :global(span) {
          justify-content: center;
          width: 100%;
          display: flex;
        }

        .selectors > :global(span),
        .list > :global(span),
        .selectors > :global(div:not(:last-child)) {
          margin-bottom: 10px;
        }

        .list-item:not(:last-child) {
          margin-bottom: 1rem;
        }

        .list-item {
          display: flex;
          align-items: center;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 7px;
        }

        .list-item:hover {
          background: var(--text-contrast);
        }

        .list-item-active,
        .list-item-active:hover {
          background: var(--second-color);
        }

        .list-preview {
          display: flex;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          box-shadow: 0 0 5px #333;
          margin-right: 1.5rem;
        }

        .list-preview :global(img) {
          display: flex;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .list-right-side {
          display: flex;
          flex-direction: column;
          width: calc(100% - 60px);
        }

        .list-right-side > :global(span) {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }

        .skills {
          display: flex;
          flex-wrap: wrap;
        }

        .skill {
          border-radius: 7px;
          padding: 5px 10px;
          background: var(--second-color);
          margin-bottom: 5px;
          font-size: 0.8rem;
        }

        .skill:not(:last-child) {
          margin-right: 10px;
        }

        .list-item-active .skill {
          background: var(--text-contrast);
        }
      `}</style>
    </>
  );
}
