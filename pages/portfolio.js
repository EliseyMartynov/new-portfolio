import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Select from "react-select";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { customSelect, customTheme } from "../components/customSelectProps";
import { portfolio as portfolioInitial } from "../components/Portoflio/data";
import LeftSide from "../components/Portoflio/LeftSide";
import SimpleBar from "simplebar-react";

export default function Portfolio() {
  const [portfolio, setPortfolio] = useState(portfolioInitial);
  const [current, setCurrent] = useState(portfolio[0]);
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedType, setSelectedType] = useState("all");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [animationDirection, setAnimationDirection] = useState("down");

  const projectType = [
    { value: "all", label: "All" },
    { value: "commercial", label: "Commercial" },
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
    const currentIndex = portfolioInitial.indexOf(
      portfolioInitial.find((item, i) => item.id === current.id)
    );
    setAnimationDirection(currentIndex > index ? "up" : "down");
    setCurrent(portfolio[index]);
    setImageIndex(0);
  };

  const filtersHandler = ({ value, options }) => {
    const valueScope = value ? value : selectedType;
    const optionsValues = options
      ? options.map((opt) => opt.value)
      : selectedSkills.map((opt) => opt.value);

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

  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);
  const [isChromeMobile, setIsChromeMobile] = useState(false);

  useEffect(() => {
    if (router.query.id) {
      setCurrent(
        portfolioInitial.find((item) => item.id === parseInt(router.query.id))
      );
    }
    if (parseFloat(window.getComputedStyle(document.body).width) < 700) {
      setIsMobile(true);
    }
    setIsChromeMobile(navigator.vendor === "Google Inc.");
  }, []);

  const [isListOpen, setIsListOpen] = useState(false);

  const openListHandler = () => {
    setIsListOpen((state) => !state);
  };

  return (
    <>
      <Head>
        <title>Elisey Martynov: Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="section">
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={current.id}
            timeout={isMobile ? 800 : 300}
            classNames="switching"
          >
            <LeftSide
              data={{
                current,
                imageIndex,
                setImageIndex,
                isChromeMobile,
              }}
            />
          </CSSTransition>
        </SwitchTransition>
        <aside className="navigation">
          <div onClick={() => openListHandler()} className="mobile-opener">
            {isListOpen ? "Close" : "Open app list"}
          </div>
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
            <SimpleBar
              style={{
                height: "100%",
              }}
              autoHide={false}
            >
              {portfolio.map((item, i) => (
                <div
                  onClick={() => {
                    selectProject(i);
                    setIsListOpen(false);
                  }}
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
            </SimpleBar>
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

        .mobile-opener {
          display: none;
        }

        .selectors {
          margin-bottom: 1rem;
          padding: 1rem;
          border-bottom: 2px solid var(--second-color);
        }

        .list {
          padding: 0 6px 1rem 1rem;
          overflow: hidden;
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

        .list-item {
          margin-bottom: 1rem;
        }

        .list-item {
          display: flex;
          align-items: center;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 7px;
          margin-right: 12px;
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

        :global(.simplebar-content) {
          display: flex;
          flex-direction: column;
          margin: auto 0 !important;
        }

        /* ANIMATION */

        :global(.switching-enter) {
          transform: translateY(
            ${animationDirection === "down" ? "-2000px" : "2000px"}
          );
        }

        :global(.switching-enter-active) {
          transform: translateY(0);
        }

        :global(.switching-exit) {
          transform: translateY(0);
        }
        :global(.switching-exit-active) {
          transform: translateY(
            ${animationDirection === "down" ? "2000px" : "-2000px"}
          );
        }

        :global(.switching-enter-active) {
          transition: transform 0.3s ease-in;
        }

        :global(.switching-exit-active) {
          transition: transform 0.5s ease-out;
        }

        @media (max-width: 650px) {
          :global(main) {
            max-width: 100vw;
            overflow: hidden;
          }

          .navigation {
            position: absolute;
            background: var(--second-rgba-hard);
            width: 90%;
            height: 90%;
            margin: 0;
            transform: translateX(${isListOpen ? "0" : "102%"});
            transition: 0.4s;
          }

          .mobile-opener {
            display: flex;
            justify-content: ${isListOpen ? "flex-end" : "center"};
            outline: none;
            border: none;
            font-family: "Share Tech", monospace;
            position: absolute;
            width: 100px;
            padding: 0.5rem 1rem;
            border-radius: 7px;
            background: var(--main-color);
            transform: translateX(${isListOpen ? -50 : -90}px);
            color: var(--text-contrast);
            font-size: 1.5rem;
            transition: transform 0.5s;
          }

          .list-item {
            padding: 1rem;
          }

          .list-item-active {
            background: var(--main-color) !important;
            color: var(--text-contrast);
          }

          .skill {
            color: var(--text);
            background: var(--text-contrast);
          }

          :global(.switching-exit-active) {
            transition-delay: 0.3s;
          }
        }
      `}</style>
    </>
  );
}
