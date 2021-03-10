import Button from "../Button";

const SkillsShowBox = ({ active }) => {
  const { points } = active;

  return (
    <section className="show-box">
      <div className="show-works"></div>
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
