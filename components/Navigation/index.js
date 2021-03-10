import Link from "next/link";
import { useRouter } from "next/router";
import HomeBadge from "./HomeBadge";
import PortfolioBadge from "./PortfolioBadge";
import SkillsBadge from "./SkillsBadge";
import ThanksBadge from "./ThanksBadge";

const Navigation = () => {
  const { route } = useRouter();

  return (
    <>
      <nav className="nav-box">
        <div className="z-index-box">
          <div className="nav">
            <div className="left-side">
              <Link href="/" passHref>
                <a
                  className={`home badge ${route === "/" ? "active-home" : ""}`}
                >
                  <HomeBadge />
                </a>
              </Link>
            </div>
            <div className="right-side">
              <Link href="/skills" passHref>
                <a className={`badge ${route === "/skills" ? "active" : ""}`}>
                  <SkillsBadge />
                  <span>Skills</span>
                </a>
              </Link>
              <Link href="/portfolio" passHref>
                <a
                  className={`badge ${route === "/portfolio" ? "active" : ""}`}
                >
                  <PortfolioBadge />
                  <span>Portfolio</span>
                </a>
              </Link>
              <Link href="/thanks" passHref>
                <a className={`badge ${route === "/thanks" ? "active" : ""}`}>
                  <ThanksBadge />
                  <span>Thanks to</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <style jsx>{`
        .nav-box {
          display: flex;
          height: 60px;
          fill: var(--text-contrast);
        }

        .z-index-box {
          display: flex;
          background-color: var(--navbar-color);
          width: 100%;
          z-index: 5;
        }

        .nav {
          display: flex;
          justify-content: space-between;
          width: 85%;
          margin: 0 auto;
        }

        .left-side,
        .right-side {
          display: flex;
          width: 100%;
        }

        .left-side {
          padding: 0.5rem 0;
        }

        .home {
          width: 42px;
          height: 42px;
          background: transparent;
          border-radius: 50%;
          padding: 0.5rem;
          cursor: pointer;
          fill: var(--text-contrast);
          border: 2px solid transparent;
        }

        .home:hover {
          border: 2px solid var(--text-contrast);
        }

        .active-home {
          background: var(--text-contrast);
          border-radius: 50%;
        }

        .active-home :global(svg g) {
          fill: var(--main-color);
        }

        .active-home:hover {
          border: 2px solid transparent;
        }

        .right-side .badge {
          display: flex;
          flex-direction: column;
          width: 100%;
          color: var(--text-contrast);
          text-align: center;
          padding: 0.5rem 0;
          cursor: pointer;
          border-radius: 7px;
        }

        .right-side .badge:not(:last-child) {
          margin-right: 5px;
        }

        .right-side .badge:hover {
          background: var(--text-contrast);
          color: var(--navbar-color);
          fill: var(--navbar-color);
        }

        .right-side .active,
        .right-side .active:hover {
          background: var(--second-color);
          color: var(--navbar-color);
          fill: var(--navbar-color);
        }
      `}</style>
      <style global jsx>{`
        :root {
          --main-color: #495464;
          --navbar-color: #495464;
          --background: #bbbfca;
          --text-contrast: #f4f4f2;
          --second-color: #e8e8e8;
          --second-rgba: #e8e8e888;
          --second-disabled: #e8e8e833;
          --text: #333;
          --container: 85%;
        }

        html {
          font-family: "Share Tech", sans-serif;
        }
      `}</style>
    </>
  );
};

export default Navigation;
