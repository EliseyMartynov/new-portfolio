import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../Button";

export default function LeftSide({ data }) {
  const { current, imageIndex, setImageIndex, isChromeMobile } = data;

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
            <div className="image-wrap">
              {current.images.map((image, i) => (
                <div
                  className="image-single"
                  key={i}
                  style={{
                    transform: `translateX(${i * 100 + imageIndex * -200}%)`,
                  }}
                >
                  <Image
                    key={image}
                    className="image"
                    src={image}
                    alt="current-work-preview"
                    width={700}
                    height={300}
                    objectFit={current.fit ? current.fit : "fill"}
                  />
                </div>
              ))}
            </div>
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
          <span>{current.description}</span>
          <div className="buttons">
            {current.repo && (
              <a
                href={current.repo}
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                target="_blank"
                style={{
                  cursor: "pointer",
                }}
                className="link"
              >
                <Button>Code repo</Button>
              </a>
            )}
            <a
              href={current.link}
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              target="_blank"
              style={{
                cursor: "pointer",
              }}
              className="link"
            >
              <Button className="second-btn">Link to project</Button>
            </a>
          </div>
          <div className="tags">
            {current.tags.map((tag, i) =>
              tag === "commercial" ? (
                <div key={`${tag}-${i}`} className="tag commercial">
                  <i className="material-icons">grade</i>
                  commercial
                </div>
              ) : tag === "pet" ? (
                <div key={`${tag}-${i}`} className="tag pet">
                  <i className="material-icons">pets</i>
                  pet-project
                </div>
              ) : (
                tag === "test" && (
                  <div key={`${tag}-${i}`} className="tag test">
                    <i className="material-icons">school</i>
                    test-task
                  </div>
                )
              )
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .current-work {
          display: flex;
          width: 70%;
          flex-direction: column;
          height: 100%;
        }

        .image-box {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 2rem;
        }

        .image-wrap {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          height: 300px;
          z-index: 2;
          overflow: hidden;
        }

        .image-single {
          transition: transform 0.4s;
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
          color: inherit;
        }

        .arrow:disabled {
          background: var(--second-disabled) !important;
          cursor: not-allowed;
          color: gray;
        }

        .arrow > :global(i) {
          font-size: 3.5rem;
        }

        .description {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          background: var(--second-rgba);
          padding: 3rem 2rem 1.5rem;
          height: 100%;
          z-index: 1;
          text-align: center;
          position: relative;
          font-size: 1rem;
          width: 100%;
        }

        .description > :global(span) {
          display: flex;
          align-items: center;
          height: 100%;
        }

        .description .buttons {
          display: flex;
          justify-content: center;
          width: 100%;
          margin-top: 10px;
        }

        .link:first-child {
          margin-right: 10px;
        }

        .link {
          width: 50%;
        }

        .link :global(button) {
          width: 100%;
        }

        .link :global(button:hover) {
          border-color: transparent;
          background: var(--text-contrast);
        }

        .link > :global(.second-btn) {
          border-color: var(--main-color);
          background-color: transparent;
        }

        .link > :global(.second-btn:hover) {
          background-color: var(--main-color);
          color: var(--text-contrast);
        }

        .tags {
          position: absolute;
          top: 5px;
          right: 5px;
        }

        @media (max-width: 1600px) {
          :global(.section) {
            height: calc(95vh - 60px);
          }

          .image-box {
            height: 50%;
          }

          .image-single,
          .image-single > :global(div),
          .image-wrap,
          a {
            height: 100%;
          }
        }

        @media (max-width: 650px) {
          :global(.section) {
            height: calc(80vh - 60px);
          }

          .current-work {
            width: 100%;
          }

          .image-box {
            height: 40%;
          }

          .image-single,
          .image-single > :global(div),
          .image-wrap,
          a {
            height: 100%;
            height: 100%;
          }

          a {
            width: 70%;
          }

          :global(.link button) {
            height: 100%;
            font-size: 1rem;
          }

          .arrow:hover {
            background: transparent;
          }
        }

        @media (max-width: 400px) {
          .image-box {
            height: ${isChromeMobile ? "50%" : "30%"};
          }
        }
      `}</style>
    </>
  );
}
