import Head from "next/head";
import Link from "next/link";
import Button from "../components/Button";
import Me from "../components/Me";

export default function Home() {
  return (
    <>
      <Head>
        <title>Elisey Martynov: Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="section-wrapper">
        <section className="section">
          <Me />
          <div className="side">
            <span className="header">Hello</span>
            <span
              style={{
                marginBottom: "2rem",
              }}
              className="header"
            >
              I'm Elisey Martynov
            </span>
            <span className="text">I'm front-end developer.</span>
            <span
              style={{
                marginBottom: "2rem",
              }}
              className="text"
            >
              Sometimes, I'm learning back-end JS to be prepared to work as
              full-stack.
            </span>
            <span
              style={{
                marginBottom: "2rem",
              }}
              className="header"
            >
              22 Y.O.
            </span>
            <span className="text">
              If your product is going to be really usefull...
            </span>
            <span
              style={{
                textAlign: "end",
                marginBottom: "2rem",
              }}
              className="text"
            >
              ...I will try to make it quality
            </span>
            <Link href="/skills" passHref>
              <a
                style={{
                  zIndex: 1,
                }}
              >
                <Button
                  style={{
                    width: "100%",
                  }}
                >
                  Go to skills
                </Button>
              </a>
            </Link>
          </div>
        </section>
      </div>
      <style jsx>{`
        .section-wrapper {
          margin: auto;
          width: var(--container);
        }

        .section {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 90%;
          margin: 0 auto;
          color: var(--text);
        }

        .section :global(svg) {
          margin-right: 5.5rem;
        }

        .side {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  );
}
