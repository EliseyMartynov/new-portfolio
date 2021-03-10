import Image from "next/image";

export default function LeftSide({ data }) {
  const { current, imageIndex, setImageIndex } = data;

  return (
    <>
      <div className="current-work">
        <span
          className="header"
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            letterSpacing: "5px",
            fontSize: "2.5rem",
            fontFamily: "Roboto, sans-serif",
            fontWeight: "100",
          }}
        >
          {current.name.toUpperCase()}
        </span>
        <div className="image-box">
          <button
            className="arrow"
            onClick={() => setImageIndex((state) => state - 1)}
            style={{
              marginRight: "1rem",
            }}
            disabled={imageIndex === 0}
          >
            <i className="material-icons">keyboard_arrow_left</i>
          </button>
          <a
            href={current.link}
            referrerPolicy="no-referrer"
            rel="noopener noreferrer"
            target="_blank"
            style={{
              cursor: "pointer",
            }}
          >
            <Image
              className="image"
              src={current.images[imageIndex]}
              alt="current-work-preview"
              width={700}
              height={300}
              loading="lazy"
            />
          </a>
          <button
            className="arrow"
            onClick={() => setImageIndex((state) => state + 1)}
            style={{
              marginLeft: "1rem",
            }}
            disabled={imageIndex === current.images.length - 1}
          >
            <i className="material-icons">keyboard_arrow_right</i>
          </button>
        </div>
        <div className="description text">
          {current.description}
          <div className="tags">
            {current.tags.map((tag, i) => {
              if (tag === "pet") {
                return (
                  <div key={`${tag}-${i}`} className="tag pet">
                    <i className="material-icons">pets</i>
                    pet-project
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <style jsx>{`
        .current-work {
          display: flex;
          width: 70%;
          flex-direction: column;
          height: 100%;
          animation: intro 1s ease-out;
        }

        @keyframes intro {
          0% {
            transform: translateX(-1000px);
          }

          100% {
            transform: translateX(0px);
          }
        }

        .image-box {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 2rem;
        }

        :global(.image) {
          border-radius: 7px;
        }

        .arrow {
          background: none;
          outline: none;
          border: none;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 50px;
          cursor: pointer;
          border-radius: 7px;
          z-index: 1;
        }

        .arrow:hover {
          background: var(--second-rgba);
        }

        .arrow:disabled {
          background: var(--second-disabled);
          cursor: not-allowed;
        }

        .arrow > :global(i) {
          font-size: 3.5rem;
        }

        .description {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          background: var(--second-rgba);
          padding: 2rem 2rem;
          height: 100%;
          z-index: 1;
          text-align: center;
          position: relative;
          font-size: 1rem;
          width: 100%;
        }

        .tags {
          position: absolute;
          top: 5px;
          right: 5px;
        }
      `}</style>
    </>
  );
}
