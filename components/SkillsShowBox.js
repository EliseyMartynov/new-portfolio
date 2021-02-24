import Button from "./Button";

const SkillsShowBox = ({ active }) => {
  const { points } = active;

  return (
    <section className="show-box">
      <div className="show-skill">{active.badge}</div>
      <div className="show-side">
        <span style={{ textAlign: "center" }} className="header">
          {active.name}
        </span>
        <ul className="points text">
          {points.map((point, i) => (
            <li key={i}>
              <span className="marker" />
              {point}
            </li>
          ))}
        </ul>
        <Button className="button">Used in</Button>
      </div>
      <style jsx>{`
        .show-box {
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: calc(100% - 60px);
          padding: 2rem 1rem;
        }

        .show-skill {
          display: flex;
          justify-content: center;
          width: 100%;
          margin-right: 2rem;
        }

        .show-skill :global(svg) {
          fill: var(--main-color);
        }

        .show-skill :global(svg .st1) {
          fill: var(--text-contrast);
        }

        .show-side {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 100%;
        }

        .show-side :global(.button) {
          background-color: var(--main-color);
          color: var(--text-contrast);
          transition: 0.4s;
        }

        .show-side :global(.button):hover {
          box-shadow: none;
          letter-spacing: 1rem;
          transition: 0.4s;
        }

        .points {
          list-style-type: none;
          padding: 1.25rem 0;
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
